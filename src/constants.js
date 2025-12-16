// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import problemSolverIcon from "../assets/problem-solver.png";
import quickLearnerIcon from "../assets/quick-learner.jfif";
import leadershipIcon from "../assets/leadership.jpg";
import teamIcon from "../assets/team.png";
import automationIcon from "../assets/automation.jfif";

// Experience Section Logo's

import ADCHLogo from "./assets/company_logo/Doc1.png";
import DigipodiumLogo from "./assets/company_logo/Digipod.png";

// Education Section Logo's
import glaLogo from "./assets/education_logo/rmlau.png";
import ssicLogo from "./assets/education_logo/SSIC.jpeg";
import avcicLogo from "./assets/education_logo/AVCIC.jpeg";

// Project Section Logo's

import ACDHLogo from "./assets/work_logo/Live.png";
import MajorLogo from "./assets/work_logo/Major.png";
import MinorLogo from "./assets/work_logo/Minor.png";
import GYMLogo from "./assets/work_logo/Gym.png";

export const SkillsInfo = [
  {
    title: "DevOps Tools",
    skills: [
      {
        name: "Docker",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Kubernetes",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      },
      {
        name: "Jenkins",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      },
      { name: "GitHub Actions", logo: githubLogo },
      {
        name: "Terraform",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      },
      {
        name: "Ansible",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      },
    ],
  },
  {
    title: "Cloud & Monitoring",
    skills: [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
      },
      {
        name: "Linux",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      },
      {
        name: "Bash",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      },
      {
        name: "Prometheus",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg",
      },
      {
        name: "Grafana",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg",
      },
      {
        name: "Nginx",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: "GSAP", logo: gsapLogo },
      // { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "Postman", logo: postmanLogo },
    ],
  },
  {
    title: "Languages & Tools",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Vercel", logo: vercelLogo },
      // { name: "C", logo: cLogo },
      // { name: "C++", logo: cppLogo },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem Solving", logo: problemSolverIcon },
      { name: "Quick Learner", logo: quickLearnerIcon },
      { name: "Leadership", logo: leadershipIcon },
      { name: "Teamwork", logo: teamIcon },
      { name: "Automation", logo: automationIcon },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ADCHLogo,
    role: "Web Developer",
    company: "Aadityaa Digital Hub",
    date: "Jan 2025 - July 2025",
    desc: "Developed dynamic and scalable web applications using the MERN Stack, handling both frontend and backend development. Collaborated with teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "ExpressJS",
      "REST APIs",
      "Tailwind CSS",
      "MongoDb",
      "Next Js",
    ],
  },

  {
    id: 2,
    img: DigipodiumLogo,
    role: "MERN Stack Trainee",
    company: "Digipodium",
    date: " March 2024 - October 2024",
    desc: "Worked as a FullStack Developer Trainee, designing and implementing scalable UI components and responsive websites using MERN Stack.My experience includes training at Digipodium where I collaborated with teams to create intuitive user experience and optimized server performance ",
    skills: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJs",
      "NodeJS",
      "Express",
      "MongoDb",
      "Next Js",
      "TailwindCSS",
      "REST APIs",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: glaLogo,
    school: "RMLAU University, Uttar Pradesh",
    date: "Sept 2022 - July 2024",
    grade: "8.11 CGPA",
    desc: "I have completed my Bachelor's degree (BCA) in Computer Applications from RMLAU University, Uttar Pradesh. During my time at college, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering.",
    degree: "Bachelor of Computer Applications - BCA",
  },

  {
    id: 1,
    img: ssicLogo,
    school: "Sri Sai Inter College, Barabanki, Uttar Pradesh",
    date: "Apr 2020 - March 2021",
    grade: "78%",
    desc: "I completed my class 12 education from Sri Sai Inter College, Barabanki, under the UP board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.My experience at my school has been instrumental in shaping my technical abilities and professional growth.",
    degree: "UPMSP (XII) - PCM with Science",
  },
  {
    id: 2,
    img: avcicLogo,
    school: "Anand Vihar Convent Inter College, Barabanki, Uttar Pradesh",
    date: "Apr 2018 - March 2019",
    grade: "83%",
    desc: "I completed my class 10 education from Anand Vihar Convent Inter College, Barabanki, under the UP board, where I studied Science with Computer.I actively participated in various workshops and events, which enhanced my skills, confidence and knowledge.",
    degree: "UPMSP (X),",
  },
];

export const projects = [
  {
    id: 0,
    title: "Automated MERN Deployment (CI/CD)",
    description:
      "Containerized a full-stack MERN application using Docker, ensuring consistency across environments. Designed an automated Jenkins pipeline integrated with GitHub Actions for seamless Build & Deploy. Deployed the application on AWS EC2, configuring Nginx as a reverse proxy for security.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    tags: ["Docker", "Jenkins", "AWS EC2", "Nginx", "GitHub Actions", "CI/CD"],
    github: "https://github.com/WebXWizard",
    webapp: "https://github.com/WebXWizard",
  },
  {
    id: 1,
    title: "Infrastructure as Code using Terraform",
    description:
      "Provisioned a complete, reproducible AWS infrastructure (VPC, Subnets, Security Groups) using Terraform. Implemented remote state management using S3 bucket and DynamoDB for state locking.",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
    tags: ["Terraform", "AWS VPC", "S3", "DynamoDB", "IaC"],
    github: "https://github.com/WebXWizard",
    webapp: "https://github.com/WebXWizard",
  },
  {
    id: 2,
    title: "Kubernetes Cluster with Monitoring",
    description:
      "Orchestrated a local Kubernetes cluster using Minikube and deployed a Node.js microservice. Integrated Prometheus and Grafana for real-time cluster monitoring (CPU, Memory).",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    tags: ["Kubernetes", "Minikube", "Prometheus", "Grafana", "Node.js"],
    github: "https://github.com/WebXWizard",
    webapp: "https://github.com/WebXWizard",
  },
  {
    id: 3,
    title: "Tech & Skill Center Website",
    description:
      "Build a Full Stack Webapp Using MERN Stack at Aadityaa Computer's & Digital Hub. Assisting in the development of web-based projects as part of the job. Collaborated with teams to create intuitive user experiences and optimize server performance. Improved debugging and problem-solving skills by troubleshooting website issues.",
    image: ACDHLogo,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJs",
      "NodeJS",
      "Express",
      "MongoDb",
      "Next Js",
      "TailwindCSS",
      "REST APIs",
    ],
    github: "https://github.com/WebXWizard/AADITYA-HUB",
    webapp: "https://www.aadityaacomputer.com/",
  },
  {
    id: 4,
    title: "DIY Innovators",
    description:
      "A dynamic, data-driven and E-Commerce platform designed to empower users and Children through DIY project resources and tutorials. The website features a clean, responsive UI and supports robust user interactions via secure authentication and a payment gateway.",
    image: MajorLogo,
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "ReactJs",
      "NodeJS",
      "Express",
      "MongoDb",
      "Next Js",
      "TailwindCSS",
      "REST APIs",
    ],
    github: "https://github.com/WebXWizard/MAJOR-DIY_Innovators",
    webapp: "https://github.com/WebXWizard/MAJOR-DIY_Innovators",
  },
  {
    id: 5,
    title: "React Library Directory",
    description:
      "A web-based library directory that enables users to browse, search, and manage library resources with ease. The application features a responsive interface and dynamic content updates for efficient data handling.",
    image: MinorLogo,
    tags: [
      "React JS",
      "API",
      "HTML",
      "CSS",
      "JavaScript",
      "NextJS",
      "REST APIs",
    ],
    github: "https://github.com/codingmastr/Movie-Recommendation-App",
    webapp: "https://movie-recommendation-app-jet.vercel.app/",
  },
  {
    id: 6,
    title: "ZoneFlex(Gym) Landing Page",
    description:
      "Welcome to PowerFit Gym(ZoneFlex), where strength meets style! Our sleek, modern landing page is designed to inspire and convert visitors into members. Built with HTML, CSS, JavaScript, and Tailwind CSS, this fully responsive site showcases high-energy visuals, interactive elements, and seamless navigation.",
    image: GYMLogo,
    tags: ["HTML", "CSS", "JS", "TailwindCSS"],
    github: "https://github.com/WebXWizard/FITHUB-LANDING-PAGE/tree/main",
    webapp:
      "https://drive.google.com/file/d/1nV_qeMwNc4qKLGpqFpAP2kZqARd3wRZR/view?usp=sharing",
  },
];
