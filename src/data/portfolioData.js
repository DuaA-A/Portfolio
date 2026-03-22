/**
 * PORTFOLIO DATA TEMPLATE
 * -----------------------
 * This file contains all the content for your portfolio.
 * 
 * - Personal Info: Your core branding and contact details.
 * - Education/Skills/Projects/Testimonials: Arrays of objects.
 * - Hiding Sections: To hide a section (e.g., Testimonials), simply leave the array empty: [].
 */
export const portfolioData = {
  personalInfo: {
    name: "Duaa Abd-Elati Abd-Elazeem",
    firstName: "Duaa Abd-Elati", // First line of Hero Name
    lastName: "Abd-Elazeem",    // Second line of Hero Name (italicized)
    title: "Full-Stack Software Engineer | Backend Architect & Frontend Specialist",
    email: "duaa.ati.45@gmail.com",
    phone: "+201065728303",
    location: "Giza, Egypt",
    github: "github.com/Duaa-A",
    linkedin: "linkedin.com/in/duaa-abdelati-abdelazeem",
    summary: "Full-stack developer with expertise in React.js and Java Spring Boot. I specialize in bridging architectural backend logic with premium, user-centric frontend aesthetics. Passionate about creating clean, responsive, and professional web applications.",
    tagline: "Software Engineer merging robust backend systems with premium frontend aesthetics.",
    usp: "Software Engineer | Full-Stack Developer | UX Enthusiast.",
    cvUrl: "https://drive.google.com/file/d/1YVSWDaOXUcNubIkk25U5KPkZkzhLWD8g/view?usp=drive_link",
    heroImage: "/hero-image.jpg", // Local path in /public or generic URL
    aboutImage: "/hero2.jpg"  // Local path in /public or generic URL
  },
  sectionTitles: {
    about: "A Brief Introduction",
    education: "Academic Journey",
    skills: "Professional Skillset",
    projects: "Featured Projects",
    testimonials: "Client Feedback",
    contact: "Get In Touch"
  },
  education: [
    {
      institution: "Cairo University",
      degree: "B.Sc. in Information Systems",
      faculty: "Faculty of Computers and Artificial Intelligence",
      period: "2023 - Present (Expected 2026)",
      details: "Algorithms, OOP (C++), Data Structures, DBMS, Advanced SQL, Data Warehouse, Web Development, Software Engineering (SOLID, Design Patterns)."
    }
  ],
  skills: [
    { name: "React.js", level: 75, category: "Frontend" },
    { name: "JavaScript/TypeScript", level: 90, category: "Frontend" },
    { name: "HTML5/CSS3", level: 95, category: "Frontend" },
    { name: "Framer Motion", level: 80, category: "Frontend" },
    { name: "Spring Boot", level: 95, category: "Backend" },
    { name: "Java", level: 92, category: "Backend" },
    { name: "MySQL/MS SQL", level: 94, category: "Backend" },
    { name: "RESTful APIs", level: 90, category: "Backend" },
    { name: "SOLID/Design Patterns", level: 85, category: "Engineering" },
    { name: "Data Warehouse/ETL", level: 80, category: "Engineering" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
    { name: "Jira/Agile", level: 85, category: "Tools" }
  ],
  projects: [
    {
      id: "ro-glowguide",
      title: "RO GlowGuide",
      type: "Cosmetics Website",
      description: "A centralized resource for users to understand their skin and hair types and find appropriate treatment paths. It includes a curated product catalogue with detailed ingredient analysis and medical safety information.",
      tools: ["React", "Framer Motion", "Vanilla CSS", "UI/UX Design"],
      role: "Lead Developer (Freelance)",
      link: "ro-glowguide.vercel.app",
      github: "https://github.com/DuaA-A/RO-GlowGuide",
      imageType: "website",
      images: [
        "/RO/{8E59A760-F87A-421E-B1B3-580F20677B15}.png",
      ]
    },
    {
      id: "xtatheme",
      title: "Xtatheme (Modern Bedroom)",
      type: "Interior Design Website",
      description: "A minimalist interior design and furniture store website focusing on high-end aesthetics and responsiveness. Features a dynamic catalog and smooth transitions.",
      tools: ["React", "JavaScript", "CSS3", "Framer Motion"],
      role: "Frontend Developer",
      link: "#",
      github: "https://github.com/Duaa-A",
      imageType: "website",
      images: [
      ]
    },
    {
      id: "dwh",
      title: "Data Warehouse Engineering",
      type: "Data Engineering System",
      description: "Designed and implemented a full Data Warehouse using Star Schema, SSIS, and ETL processes from an OLTP source. Focused on optimization and data integrity.",
      tools: ["SQL Server", "SSIS", "ETL", "Star Schema"],
      role: "Team Lead & Data Engineer",
      link: "#",
      github: "https://github.com/Duaa-A",
      imageType: "backend",
      images: [
      ]
    },
    {
      id: "lms",
      title: "Learning Management System",
      type: "Full Stack Platform",
      description: "Web-based LMS using Spring Boot, REST APIs, and role-based access control with Spring Security. Features course management and student tracking.",
      tools: ["Spring Boot", "Java", "MySQL", "Spring Security"],
      role: "Backend Developer",
      link: "#",
      github: "https://github.com/Duaa-A",
      imageType: "backend",
      images: [
      ]
    },
    {
      id: "smart-learning",
      title: "Smart Learning System",
      type: "API Backend",
      description: "Scalable backend with 15+ RESTful APIs using Spring Boot, MySQL, and Spring Security. Architected for modern educational requirements.",
      tools: ["Spring Boot", "MySQL", "REST API", "Spring Security"],
      role: "Backend Developer",
      link: "#",
      github: "https://github.com/Duaa-A",
      imageType: "backend",
      images: [
        "/smart-Enroll/Screenshot 2025-05-16 010813.png"
      ]
    },
    {
      id: "restaurant-tracker",
      title: "Restaurant Tracker",
      type: "Mobile App",
      description: "Modern mobile app interface for restaurant management featuring order tracking and digital menus. High-intensity visual feedback and real-time updates.",
      tools: ["Flutter", "UI/UX Design", "Full Backend Inegeration"],
      role: "Designer & Developer",
      link: "#",
      github: "https://github.com/Duaa-A",
      imageType: "mobile",
      images: [
      ]
    }
  ],
  testimonials: [
    {
      name: "Omima Saeid",
      text: "Honestly, you’re incredibly talented, mashallah. Your work, your attitude everything is amazing. And the most important thing (and I truly mean this, not just a compliment) is that you treat everything like it’s your own project. You put in real effort, always trying to make it the best and more creative than anything else. And of course, mashallah, you always finish your work so quickly, seriously, you’re amazing. Keep going! As for the website, I was personally so impressed. it was honestly super wow 💕",
      role: "Team Leader, RO-GlowGuide",
      avatar: "/omima_saeid.png"
    },
    {
      name: "Youssif Ali Okasha",
      text: "Amazing work! Professional, creative, and very easy to deal with. Highly recommended.",
      role: "Team Member, RO-GlowGuide",
      avatar: "/yousef_Ali.png"
    },
  ],
  achievements: [
    {
      title: "Big Data Analysis",
      issuer: "NTI / ITIDA",
      grade: "91%",
      year: "2025"
    },
    {
      title: "Best Front-End Member",
      issuer: "Minders '25",
      type: "Award",
      year: "2025"
    },
    {
      title: "Huawei HCIA-AI",
      issuer: "Huawei",
      year: "2024"
    },
    {
      title: "Microsoft Foundational C#",
      issuer: "Microsoft",
      year: "2024"
    },
    {
      title: "ITI Angular & HTML/CSS",
      issuer: "ITI",
      year: "2024"
    }
  ]
};
