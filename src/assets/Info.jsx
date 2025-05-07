import React from "react";

const Links = [
  { id: 1, link: "Home" },
  { id: 2, link: "Company" },
  { id: 3, link: "Marketplace" },
  { id: 4, link: "Features" },
  { id: 5, link: "Team" },
  { id: 6, link: "Contact" },
];

const HERO = {
  Title1: "Building digital products & brands.",
  Description1:
    "This free and open-source landing page template was built using the utility classes from Tailwind CSS and based on the components from the Flowbite Library and the Blocks System.",
  Btn_git: " View on GitHub",
  Btn_figma: "Get Figma file",
};

const Section1 = {
  SubSection1: {
    Title: "Work with tools you already use",
    Description1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    Description2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. ",
    Bulletpoint: [
      { text: "Continuous integration and deployment" },
      { text: "Development workflow" },
      { text: "Knowledge management" },
    ],
  },
  SubSection2: {
    Title: "We invest in the world’s potential",
    Description1:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. Accelerate critical development work, eliminate toil, and deploy changes with ease.",
    Description2:
      "Deliver great service experiences fast - without the complexity of traditional ITSM solutions. ",

    Bulletpoint: [
      { text: "Dynamic reports and dashboards" },
      { text: "Templates for everyone" },
      { text: "Development workflow" },
      { text: "Limitless business automation" },
      { text: "Knowledge management" },
    ],
  },
};

const Section2 = {
  Information_Part: {
    Title: "Trusted by over 600 million users and 10,000 teams",
    Description:
      "Our rigorous security and compliance standards are at the heart of all we do. We work tirelessly to protect you and your customers.",
    Bulletpoint: {
      one: "Trusted Worldwide",
      two: "Explore Legality Guide",
      three: "Visit the Trust Center",
    },
  },
  Card: [
    {
      Title: "99.99% uptime",
      Description: "For Landwind, with zero maintenance downtime",
    },
    {
      Title: "600M+ Users",
      Description: "Trusted by over 600 milion users around the world",
    },
    {
      Title: "100+ countries",
      Description: "Have used Landwind to create functional websites",
    },
    { Title: "5+ Million", Description: "Transactions per day" },
  ],
};

const TestimonialInfo = {
  Title:
    "Landwind is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.",
  Name: "Micheal Gough",
  Designation: "CEO at Google",
};

const PricingInfo = {
  Title: "Designed for business teams like yours",
  Description:
    "Here at Landwind we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
  Card: [
    {
      id: 1,
      Title: "Starter",
      Description: "Best option for personal use & for your next project.",
      Price: "29",
      Bulletpoint: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 1 developer",
        "Premium support: 6 months",
        "Free updates: 6 months",
      ],
      ButtonText: "Get Started",
    },
    {
      id: 2,
      Title: "Company",
      Description: "Relevant for multiple users, extended & premium support.",
      Price: "99",
      Bulletpoint: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 10 developer",
        "Premium support: 24 months",
        "Free updates: 24 months",
      ],
      ButtonText: "Get Started",
    },
    {
      id: 3,
      Title: "Enterprise",
      Description:
        "Best for large scale uses and extended redistribution rights.",
      Price: "499",
      Bulletpoint: [
        "Individual configuration",
        "No setup, or hidden fees",
        "Team size: 100+ developer",
        "Premium support: 36 months",
        "Free updates: 36 months",
      ],
      ButtonText: "Get Started",
    },
  ],
};

const FAQInfo = {
  Title: "Frequently asked questions",
  faqs: [
    {
      question: "Can I use Landwind in open-source projects?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is an open-source library of interactive components built
            on top of Tailwind CSS including buttons, dropdowns, modals,
            navbars, and more.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out this guide to learn how to{" "}
            <a
              href="#"
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              get started
            </a>{" "}
            and start developing websites even faster with components on top of
            Tailwind CSS.
          </p>
        </>
      ),
    },
    {
      question: "Is there a Figma file available?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind is first conceptualized and designed using the Figma
            software so everything you see in the library has a design
            equivalent in our Figma file.
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="#"
              className="text-purple-600 dark:text-purple-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Landwind.
          </p>
        </>
      ),
    },
    {
      question: "What are the differences between Landwind and Tailwind UI?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            The main difference is that the core components from Landwind are
            open source under the MIT license, whereas Tailwind UI is a paid
            product.
          </p>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Landwind relies on smaller and standalone components, whereas
            Tailwind UI offers sections of pages.
          </p>
          <ul className="pl-5 text-gray-500 list-disc dark:text-gray-400">
            <li>
              <a
                href="#"
                className="text-purple-600 dark:text-purple-500 hover:underline"
              >
                Landwind Pro
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-purple-600 dark:text-purple-500 hover:underline"
              >
                Tailwind UI
              </a>
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What about browser support?",
      answer: (
        <>
          <p className="mb-2 text-gray-500 dark:text-gray-400">
            Modern browsers are supported, including Chrome, Firefox, Safari,
            and Edge. Internet Explorer is not supported.
          </p>
        </>
      ),
    },
  ],
};

const TrialInfo = {
  Title: "Start your free trial today",
  Description: "Try Landwind Platform for 30 days. No credit card required.",
  ButtonText: "Free trial for 30 days",
};

const FooterInfo = [
  {
    id: 1,
    Title: "Company",
    Link: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    id: 2,
    Title: "Help center",
    Link: ["Discord Server", "Twitter", "Facebook", "Contact Us"],
  },
  {
    id: 3,
    Title: "Legal",
    Link: ["Privacy Policy", "Licensing", "Terms"],
  },
  {
    id: 4,
    Title: "Company",
    Link: ["About", "Careers", "Brand Center", "Blog"],
  },
  {
    id: 5,
    Title: "Download",
    Link: ["iOS", "Android", "Windows", "MacOS"],
  },
];

export {
  FAQInfo,
  FooterInfo,
  HERO,
  Links,
  PricingInfo,
  Section1,
  Section2,
  TestimonialInfo,
  TrialInfo,
};
