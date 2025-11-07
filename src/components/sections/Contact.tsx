import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  accessToken: import.meta.env.VITE_EMAILJS_ACCESS_TOKEN,
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState<Record<string, string>>(INITIAL_STATE as Record<string, string>);
  const [errors, setErrors] = useState<Record<string, string>>(Object.fromEntries(
    Object.keys(config.contact.form).map((input) => [input, ""])
  ) as Record<string, string>);
  const [loading, setLoading] = useState(false);

  const validateField = (name: string, value: string) => {
    const v = value.trim();
    if (name === "name") {
      if (!v) return "Name is required.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      return "";
    }

    if (name === "email") {
      if (!v) return "Email is required.";
      // simple email regex
      // eslint-disable-next-line no-useless-escape
      const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@\"]+\.)+[^<>()[\]\\.,;:\s@\"]{2,})$/i;
      if (!re.test(v)) return "Enter a valid email address.";
      return "";
    }

    if (name === "message") {
      if (!v) return "Message is required.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      return "";
    }

    return "";
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // run validation for all fields
    const newErrors: Record<string, string> = {};
    Object.keys(form).forEach((key) => {
      newErrors[key] = validateField(key, form[key] ?? "");
    });

    setErrors(newErrors);

    const hasErrors = Object.values(newErrors).some((v) => v !== "");
    if (hasErrors) return;

    setLoading(true);

    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        {
          form_name: (form.name || "").trim(),
          to_name: config.html.fullName,
          from_email: (form.email || "").trim(),
          to_email: config.html.email,
          message: (form.message || "").trim(),
        },
        emailjsConfig.accessToken
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm(INITIAL_STATE as Record<string, string>);
          setErrors(Object.fromEntries(
            Object.keys(config.contact.form).map((input) => [input, ""])
          ) as Record<string, string>);
        },
        (error) => {
          setLoading(false);

          console.log(error);
          alert("Something went wrong.");
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white">{span}</span>
                <>
                  <Component
                    type={input === "email" ? "email" : "text"}
                    name={input}
                    value={form[`${input}`]}
                    onChange={handleChange}
                    placeholder={placeholder}
                    className="bg-tertiary placeholder:text-secondary rounded-lg border-none px-6 py-4 font-medium text-white outline-none"
                    {...(input === "message" && { rows: 7 })}
                  />
                  {errors[input] && (
                    <p className="mt-2 text-sm text-red-400">{errors[input]}</p>
                  )}
                </>
              </label>
            );
          })}
          <button
            type="submit"
            disabled={
              loading ||
              Object.values(errors).some((v) => v !== "") ||
              Object.values(form).some((v) => (v || "").trim() === "")
            }
            className="bg-tertiary shadow-primary w-fit rounded-xl px-8 py-3 font-bold text-white shadow-md outline-none disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
