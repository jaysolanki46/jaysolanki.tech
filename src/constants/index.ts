import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  fis,
  humm,
  skyzer,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "introduction",
    title: "Introduction",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "API Development",
    icon: mobile,
  },
  {
    title: "Backend Development",
    icon: backend,
  },
  {
    title: "Cloud Engineering (AWS)",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Software Developer",
    companyName: "Freightways Information Services",
    icon: fis,
    iconBg: "#ffff",
    date: "Apr 2024 - Present",
    points: [
      "Design, develop, and maintain backend APIs using C# and .NET across multiple projects in an enterprise environment.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implement and monitor AWS cloud infrastructure, focusing on scalability, performance, and cost optimization.",
      "Integrate and fine-tune application monitoring through New Relic and CloudWatch, reducing alert noise and improving system visibility."
    ],
  },
  {
    title: "Software Developer",
    companyName: "Humm group",
    icon: humm,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Apr 2024",
    points: [
      "Developed and maintained microservices in C# (.NET) and Java (Java EE, Spring MVC, Hibernate) for payment and financial services.",
      "Designed and integrated RESTful APIs with third-party payment providers and internal systems for seamless transactions.",
      "Built Single Page Applications (SPA) with React.js, creating dynamic interfaces for payment workflows.",
      "Deployed applications to AWS environments via DevOps CI/CD pipelines, collaborating with Product Owners and QA on requirements, testing, and delivery."
    ],
  },
  {
    title: "Software Developer",
    companyName: "Skyzer NZ",
    icon: skyzer,
    iconBg: "#ffff",
    date: "Dec 2019 - Feb 2022",
    points: [
      "Developed, tested, and implemented new software solutions, including a booking service for customer support teams to efficiently record calls.",
      "Maintained and enhanced the terminal management system, handling security, maintenance, support, and ongoing fixes for EFTPOS operations.",
      "Integrated third-party APIs with EFTPOS terminals to improve payment processing and system interoperability.",
      "Designed and implemented test automation scripts using a Selenium automation framework to ensure software quality.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
