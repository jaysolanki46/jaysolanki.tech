type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    },
    personalDetails?: {
      phone: string;
      address: string;
      email: string;
    };
  } & TSection;
  sections: {
    introduction: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Jaykumar Solanki | Software Developer & AWS Cloud Engineer",
    fullName: "Jay Solanki",
    email: "jaysolanki46@gmail.com",
  },
  hero: {
    name: "Jaykumar Solanki",
    p: ["Software Developer specializing in scalable applications, cloud solutions, and modern software architecture"],
  },
  contact: {
    p: "Get in touch",
    h2: "Contact.",
    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },
      email: { span: "Your Email", placeholder: "What's your email?" },
      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
    personalDetails: {
      phone: "+64-22-623-1640",
      address: "Auckland, New Zealand",
      email: "jaysolanki46@gmail.com"
    }
  },
  sections: {
    introduction: {
      p: "Introduction",
      h2: "Overview.",
      content: `I’m Jaykumar Solanki, a Software Developer and AWS Cloud Engineer based in New Zealand. I specialize in building Web applications, scalable APIs, backend systems, and cloud solutions using modern technologies. Passionate about clean code, automation, and continuous learning, I enjoy turning complex problems into reliable software solutions.`,
    },
    experience: {
      p: "What I have done so far",
      h2: "Work Experience.",
    },
    feedbacks: {
      p: "What others say",
      h2: "Testimonials.",
    },
    works: {
      p: "My work",
      h2: "Projects.",
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
