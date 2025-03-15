import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `I have a strong passion for building modern, interactive, and high-performance web applications. I specialize in React and Next.js, leveraging Tailwind CSS and Framer Motion to create sleek, responsive designs with smooth animations.

On the backend, I work with Node.js and Spring Boot, ensuring efficient application logic and performance. My strong foundation in Java development allows me to solve complex problems using Data Structures and Algorithms, enhancing optimization and efficiency.

With a growing interest in DevOps, I use Docker to streamline deployments and improve scalability.`;

export const ABOUT_TEXT = `Hey there! I’m a third-year Computer Science student with a passion for development and creative tech. I love exploring the latest frameworks, crafting sleek user interfaces, and bringing ideas to life with clean, interactive designs. As part of SARK (Tech Club) in my college, I’ve organized multiple tech events, connecting enthusiasts and innovators.

Beyond tech, I’m a visual storyteller. Being part of Adlib Arts (Photography & Videography Club), I dive into video editing, transforming raw clips into cinematic pieces.

When I’m not designing, editing, or geeking out over new tech, you’ll find me chasing sunsets, planning my next trip, or binging horror and thriller movies. And my music? A perfect mix of Taylor Swift’s poetic brilliance and The Weeknd’s dark, moody vibes.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },
];

export const PROJECTS = [
  {
    title: "Blockchain based- CrowdSproud",
    image: project1,
    description:
      "A blockchain-based charity platform. The admin verifies campaign owners, enhancing credibility and minimizing fraud. ",
    technologies: ["React", "Node.js", " Tailwind CSS ","Solidity", "IPFS"],
  },
  {
    title: "AI-Powered Interview",
    image: project2,
    description:
      "An AI-powered interviewing platform that helps to conduct unbiased interviews. It performs real time video interviews. It converts speech-to-text and on the basis of it, it analyses the interviewer as well as the interviewee and check for any bias as well.",
    technologies: ["Gemini-API", "React", "MongoDB", " Express.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "AI-LinkedIn Post Generator Tool",
    image: project4,
    description:
      "A powerful AI-driven tool built using LangChain, Streamlit, and Groq Cloud to generate engaging LinkedIn posts effortlessly. It leverages LangChain for structuring LLM interactions, Streamlit for an intuitive UI, and Groq Cloud for ultra-fast AI responses.",
    technologies: ["LLM", "Langchain", "Streamlit", "Groq cloud", "Python"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
