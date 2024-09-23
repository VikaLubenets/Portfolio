export const skills = [
  {
      imageUrl: '/assets/icons/css.svg',
      name: "CSS",
      type: "Frontend",
  },
  {
      imageUrl: '/assets/icons/git.svg',
      name: "Git",
      type: "Version Control",
  },
  {
      imageUrl: '/assets/icons/github.svg',
      name: "GitHub",
      type: "Version Control",
  },
  {
      imageUrl: '/assets/icons/html.svg',
      name: "HTML",
      type: "Frontend",
  },
  {
      imageUrl: '/assets/icons/javascript.svg',
      name: "JavaScript",
      type: "Frontend",
  },
  {
      imageUrl: '/assets/icons/nextjs.svg',
      name: "Next.js",
      type: "Frontend",
  },
  {
      imageUrl: '/assets/icons/react.svg',
      name: "React",
      type: "Frontend",
  },
  {
      imageUrl: '/assets/icons/redux.svg',
      name: "Redux",
      type: "State Management",
  },
  {
      imageUrl: '/assets/icons/sass.svg',
      name: "Sass",
      type: "Frontend",
  },
  {
      imageUrl: '/assets/icons/tailwindcss.svg',
      name: "Tailwind CSS",
      type: "Frontend",
  },
  {
      imageUrl:'/assets/icons/typescript.svg',
      name: "TypeScript",
      type: "Frontend",
  },
  {
    imageUrl:'/assets/icons/mongodb.svg',
    name: "MongoDB",
    type: "Frontend",
  },
  {
    imageUrl:'/assets/icons/reactnative.svg',
    name: "React Native",
    type: "Frontend",
  }
  ,
  {
    imageUrl:'/assets/icons/firebase.svg',
    name: "Firebase",
    type: "Frontend",
  }
];

export const experiences = [
    {
        title: "Frontend Developer (remote pjoject-based role)",
        company_name: "IQManager, Moscow, Russia",
        icon: "/assets/images/logo.svg",
        iconBg: "#accbe1",
        date: "August 2024 - Present",
        points: [
            "Collaborated with a development team to redesign and rebuild a web marketplace platform using React, Next.js, Tailwind CSS, and TypeScript.",
            "Developed a comprehensive content management system (CMS) to manage contracts, users, and performers.",
            "Optimized components for maximum performance across a wide array of web-capable devices and browsers.",
            "Worked in an Agile environment, contributing to sprint planning, daily stand-ups, and code reviews."
        ]
    },
    {
        title: "Junior Frontend Developer (remote role)",
        company_name: "Children Development Center 'Svetvorchestva', Tver, Russia",
        icon: '/assets/images/logo.svg',
        iconBg: "#accbe1",
        date: "April 2024 - August 2024",
        points: [
            "Developed the client-side of a new application for the center's clients using Next.js, React, Tailwind CSS, and TypeScript.",
            "Implemented a scheduling feature for teachers in the admin panel calendar, with automatic display in the users' timetable.",
            "Participated in the code review process, providing feedback and suggestions for code improvement.",
        ],
    },
    {
        title: "Frontend Developer Intern (hybrid role)",
        company_name: "Payler App Startup, Tbilisi, Georgia",
        icon: '/assets/images/logo.svg',
        iconBg: "#accbe1",
        date: "January 2024 - April 2024",
        points: [
            "Developed and maintained React components for a personal finance management web application.",
            "Collaborated with cross-functional teams, including designers, product managers, and backend developers, to deliver a high-quality product.",
            "Enhanced responsive and adaptive design of the web application using CSS and SASS.",
            "Actively participated in code reviews, ensuring code quality and adherence to best practices.",
        ],
    },
    {
        title: "React Developer Bootcamp",
        company_name: "RS School – React Course",
        icon: '/assets/images/logo.svg',
        iconBg: "#accbe1",
        date: "October 2023 - January 2024",
        points: [
            "Developed React components and hooks as part of a 3-person team under mentor's control.",
            "Managed state using Redux Toolkit, RTK Query, and Context API.",
            "Set up React Routing and wrote tests using React Testing Library.",
        ],
    },
    {
        title: "Frontend Developer Bootcamp",
        company_name: "RS School - JavaScript/Frontend",
        icon: '/assets/images/logo.svg',
        iconBg: "#accbe1",
        date: "January 2023 - September 2023",
        points: [
            "Built SPA websites and worked on a group e-commerce project using the Commercetools API under mentor's control with team of 3.",
            "Created layouts and implemented adaptive, responsive design.",
            "Handled form validation, user authorization, and code testing.",
            "Used version control systems like Git and participated in code reviews.",
            "Set up tooling including Webpack, ESLint, Prettier, Husky, Jest, and TypeScript.",
        ],
    },
  ];
  

export const socialLinks = [
  {
      name: 'Contact',
      iconUrl: '/assets/icons/contact.svg',
      link: '/contact',
  },
  {
      name: 'GitHub',
      iconUrl: '/assets/icons/github.svg',
      link: 'https://github.com/VikaLubenets',
  },
  {
      name: 'LinkedIn',
      iconUrl: '/assets/icons/linkedin.svg',
      link: 'https://www.linkedin.com/in/viktoriya-lubenets/',
  }
];

export const projects = [
  {
      iconUrl: '/assets/icons/pricewise.svg',
      theme: 'btn-back-red',
      name: 'Full-Stack Spanish learning app',
      description: 'Developed a web application that allows to learn Spanish using a study map with various od tasks, gamified lesson mechanics, pro subscription and display of top-10 learners',
      link: 'https://github.com/VikaLubenets/LanguageApp',
      deployLink: 'https://language-app-vert.vercel.app/',
      technologies: [
        'Next.js',
        'React',
        'Typescript',
        'NeonDatabase Serverless',
        'React Admin',
        'Tailwind',
        'Clerk Authentication'
    ],
  },
  {
  iconUrl: '/assets/icons/summiz.svg',
  theme: 'btn-back-yellow',
  name: 'Film Library',
  description: `Developed a responsive web application for browsing and searching movies and TV series, featuring detailed film pages, 
  user authentication, and a random film suggestion feature.
  
  For sign in use these details:
  login - 'admin'
  password - 'password'
  `,
  link: 'https://github.com/VikaLubenets/avito_internship',
  deployLink: 'https://filmotecafilms.netlify.app',
  technologies: [
      'React',
      'Webpack',
      'Node.js',
      'Typescript',
      'Redux',
      'RTK Query',
      'ESLint',
      'Husky',
      'Prettier',
      'SCSS',
      'React Bootstrap',
      'Jest',
      'React Testing Library'
  ],
},
  {
      iconUrl: '/assets/icons/threads.svg',
      theme: 'btn-back-green',
      name: 'CSS Selectors Game',
      description: "Created a CSS selectors trainer. This trainer comprises multiple gaming levels, each with a layout example and HTML code corresponding to that level. Some layout elements are highlighted using animations. The user's task is to write CSS selectors that target all the highlighted layout elements.",
      link: 'https://github.com/VikaLubenets/frontend-projects/tree/RSS-CSS-Selectors',
      deployLink: 'https://vikalubenets.github.io/frontend-projects/RSS-CSS-Selectors/',
      technologies: [
        'Typescript',
        'Modules',
        'Webpack',
        'Jest',
        'Eslint'
    ]
  },
  {
    iconUrl: '/assets/icons/threads.svg',
    theme: 'btn-back-blue',
    name: 'Minesweeper',
    description: "This is my implementation of the classic game Minesweeper. In this game, players explore a grid of cells, some of which may contain hidden mines. The objective is to reveal all cells that do not contain mines while avoiding clicking on any mined cell.",
    link: 'https://github.com/VikaLubenets/frontend-projects/tree/minesweeper',
    deployLink: 'https://vikalubenets.github.io/frontend-projects/minesweeper/src/index.html',
    technologies: [
        'JavaScript',
        'HTML5',
        'CSS3',
        'Responsive Design'
    ]
},
{
    iconUrl: '/assets/icons/threads.svg',
    theme: 'btn-back-pink',
    name: 'Shelter',
    description: "'Shelter' is a responsive and interactive website project, consisting of a main page and a pets page, designed for an animal shelter.",
    link: 'https://github.com/VikaLubenets/frontend-projects/tree/shelter-part3',
    deployLink: 'https://vikalubenets.github.io/frontend-projects/shelter/pages/main/index.html#!',
    technologies: [
        'HTML5',
        'CSS3',
        'JavaScript',
        'Responsive Design',
        'Figma'
    ]
},
];