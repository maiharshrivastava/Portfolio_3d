import { meta, shopify, starbucks, tesla } from "../assets/images";
import mapitbhopalLogo from "../assets/images/mapitbhopal_logo.jpg";
import dinifyLogo from "../assets/images/D.jpg";
import tirthLogo from "../assets/images/1695973282682.jpg";
import singlebitLogo from "../assets/images/WhatsApp Image 2024-05-19 at 1.55.56 PM.jpeg";
import frintLogo from "../assets/images/frint_in_logo.jpg";
import kairosoftLogo from "../assets/images/kairosoft logo.jpg";


import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        "title": "Python Developer",
        "company_name": "Kairosoft AI Solutions Limited",
        "icon": kairosoftLogo,
        "iconBg": "#accbe1",
        "date": "January 2025 - Present",
        "points": [
            "Developed and fine-tuned Mistral-7B and LLaMA-12B models using Unsloth, optimizing chatbot performance both online and offline.",
            "Implemented web scraping for real-time data retrieval, enhancing AI model training with fresh data.",
            "Deployed AI solutions on Digital Ocean using a Docker-based pipeline for scalable production environments.",
            "Integrated AI models with Volkai.io for enhanced chatbot automation and personalized user interactions."
        ]
    },
    {
        "title": "Full Stack AI Intern",
        "company_name": "Frint",
        "icon": frintLogo,
        "iconBg": "#accbe1",
        "date": "August 2024 - October 2024",
        "points": [
            "Developed and deployed Applicant Tracking System (ATS) features using FAST API, improving recruitment workflow efficiency.",
            "Worked on integrating OpenAI LLM with FastAPI to enhance application functionality.",
            "Built responsive user interfaces for seamless interaction with AI-powered systems.",
            "Collaborated with cross-functional teams to implement and optimize AI-driven features."
        ]
    },
    {
        "title": "Machine Learning Intern",
        "company_name": "IT State Center, Bhopal",
        "icon": mapitbhopalLogo,
        "iconBg": "#accbe1",
        "date": "May 2024 - July 2024",
        "points": [
            "Optimized machine learning models for real-time performance in facial recognition systems.",
            "Implemented face detection and recognition pipelines using OpenCV and deep learning architectures like MobileNet, GoogleNet, and Inception-ResNet.",
            "Conducted data preprocessing and augmentation to improve model robustness and generalization.",
            "Collaborated with a team to integrate face recognition capabilities into existing applications, enhancing security and user authentication processes."
        ]
    },
    {
        "title": "Software Engineering Intern",
        "company_name": "Dinify",
        "icon": dinifyLogo,
        "iconBg": "#accbe1",
        "date": "November 2023 - January 2024",
        "points": [
            "Designed and developed user interfaces with Figma, ensuring intuitive and engaging user experiences.",
            "Built and maintained frontend applications using React, delivering high-performance web solutions.",
            "Implemented backend systems with the MERN stack, ensuring seamless data flow and integration.",
            "Developed and integrated machine learning models to enhance application functionality and user experience."
        ]
    },
    {
        "title": "Frontend Developer",
        "company_name": "Tirth.co",
        "icon": tirthLogo,
        "iconBg": "#accbe1",
        "date": "November 2023 - December 2023",
        "points": [
            "Developed fast, scalable websites using Next.js features such as Server-Side Rendering (SSR) and Static Site Generation (SSG).",
            "Styled components with CSS, ensuring a responsive and visually appealing design.",
            "Enhanced code reliability and maintainability by utilizing TypeScript.",
            "Deployed applications across various platforms, optimizing performance and ensuring seamless user experiences."
        ]
    },
    {
        "title": "Full-Stack Developer",
        "company_name": "Singlebit",
        "icon": singlebitLogo,
        "iconBg": "#accbe1",
        "date": "June 2023 - March 2024",
        "points": [
            "Developed and maintained web applications using the MERN stack (MongoDB, Express, React, Node.js) to deliver comprehensive solutions for clients.",
            "Utilized Next.js to enhance performance and SEO through Server-Side Rendering (SSR) and Static Site Generation (SSG).",
            "Integrated frontend and backend systems, ensuring smooth data flow and robust functionality.",
            "Collaborated with cross-functional teams to gather requirements, design solutions, and deliver high-quality products on time."
        ]
    }
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/maiharshrivastava',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/maihar-shrivastava-608358248',
    }
];
export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Restaurant Menu',
        description: 'Designed and implemented a dynamic restaurant menu using React, offering users a visually appealing interface to explore dishes categorized with enticing descriptions. Incorporated features such as filtering and searching for enhanced user experience. Employed animations to engage users and ensure a seamless browsing experience. Additionally, enabled easy customization for restaurant owners to dynamically update menu items and prices, empowering them to adapt to changing preferences and requirements effortlessly.',
        link: 'https://github.com/maiharshrivastava/Restuarant.git',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Chat App',
        description: 'Developed a feature-rich chat application with React, allowing users to set their availability status and engage in real-time messaging facilitated by Socket.io/Firebase. Implemented robust user authentication mechanisms to ensure secure access to the platform. Enhanced user profiles with personalized information and pictures for a more engaging experience. Ensured responsive design for seamless usage across various devices, catering to diverse user preferences.',
        link: 'https://github.com/maiharshrivastava/chat_app.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Cover Letter Generator',
        description: 'Streamlined the cover letter creation process by leveraging advanced NLP algorithms to tailor templates for diverse job roles. Created a user-friendly interface for crafting personalized cover letters effortlessly, maximizing success rates in job applications. Revolutionized professional communication by offering users a glimpse into the future of cover letter creation.',
        link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Blog App',
        description: 'Developed a comprehensive MERN-based blog application enabling users to efficiently manage profiles and perform CRUD operations on blog posts. Implemented intuitive UI elements for seamless navigation and interaction. Ensured user authentication for secure access to profiles and data. Employed responsive design principles to optimize accessibility across devices, offering users a seamless blogging experience.',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Movie Recommendation System',
        description: 'Crafted a sophisticated movie recommendation system utilizing machine learning techniques such as cosine similarity to tailor film suggestions to individual user preferences, providing a personalized viewing journey. Seamlessly integrated the system with Flask, ensuring smooth interaction and deployment. Additionally, contributed to the development of a cover letter generator using language modeling techniques, enhancing professional communication capabilities.',
    }
];
