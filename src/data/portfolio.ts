export const personalInfo = {
    name: "Sudenur Tilla",
    title: "Frontend Developer",
    subtitle: "Angular · React · React Native · TypeScript",
    tagline: "Building production-grade interfaces — shipped at Amadeus, Dill (NYC), Trampax & Omreon.",
    email: "sudenur.tilla2020@gmail.com",
    phone: "+90 553 156 2004",
    github: "https://github.com/Sudexq",
    linkedin: "https://www.linkedin.com/in/sudenurtilla",
    location: "Istanbul, Turkey",
    available: true,
};

export const about = {
    bio: [
        "I'm a Computer Engineering student at Istanbul Kültür University (Class of 2026) with hands-on experience building production frontend systems at 4 companies — including Amadeus Istanbul, a New York-based startup, and an Erasmus+ exchange at the University of Pardubice, Czech Republic.",
        "I've shipped real features used by real users: refactored 50% of a mobile app in production, built 10+ reusable Angular components at Amadeus, and developed AI agents with Microsoft Copilot Studio. I work confidently in Agile teams across Angular, React, React Native, and Vue.js ecosystems.",
        "Outside of code: I've traveled to 25 countries, play violin, and shoot photography. I bring the same attention to detail to design as I do to engineering.",
    ],
    skills: [
        {
            category: "Frontend",
            items: ["Angular", "React", "React Native", "Vue.js", "TypeScript", "JavaScript", "Tailwind CSS", "SCSS", "HTML/CSS"],
        },
        {
            category: "State & Data",
            items: ["TanStack Query", "Vuex", "Context API", "Firebase", "REST APIs"],
        },
        {
            category: "AI & Tools",
            items: ["Microsoft Copilot Studio", "AI Agents", "NLP", "Python", "Pandas", "Git", "Figma"],
        },
        {
            category: "Computer Science",
            items: ["Data Structures", "Algorithms", "Design Patterns", "OOP", "C", "C++"],
        },
    ],
};

export const projects = [
    {
        id: "01",
        title: "AI Image Processing Mobile App",
        description:
            "AI-powered mobile application built with image processing for autonomous detection. Developed as part of IKU Asimov Technology Student Club. Ranked Top 14 out of 4,250 teams at TEKNOFEST — Turkey's largest technology competition.",
        tags: ["React Native", "Python", "Image Processing", "AI", "TypeScript"],
        highlight: "Teknofest Top 14 / 4250 Teams",
        status: "Competition",
        gradient: "from-accent-blue/20 to-accent-violet/10",
        accentColor: "#5B8DEF",
        link: "https://www.linkedin.com/posts/sudenurtilla_teknofest-teknoloji-yazaftlaftm-activity-7243948927656353792-riro?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD4tFvoBoGPVPsb6KLgO4B4ldVizHAzjj6U",
    },
    {
        id: "02",
        title: "AI Agent Automation Tool",
        description:
            "Built AI agents using Microsoft Copilot Studio during my internship. Automated enterprise workflows with natural language interfaces, integrated with Angular frontend and REST APIs in a production environment.",
        tags: ["Microsoft Copilot Studio", "Angular", "TypeScript", "REST APIs", "AI Agents"],
        highlight: "Shipped at internship",
        status: "Production",
        gradient: "from-accent-violet/20 to-accent-cyan/10",
        accentColor: "#A78BFA",
        link: "https://github.com/Sudexq/Film-Recommendation-Agent",
    },
    {
        id: "03",
        title: "Restaurant Analytics Mobile App",
        description:
            "Worked on mobile applications for a New York-based restaurant automation and analytics platform with an international remote team. Refactored 50% of production mobile features, integrated Firebase for real-time sync, and built frontend services for backend integration.",
        tags: ["React Native", "TypeScript", "Firebase", "TanStack Query"],
        highlight: "50% Codebase Refactored",
        status: "Production",
        gradient: "from-accent-cyan/20 to-accent-blue/10",
        accentColor: "#22D3EE",
        link: "https://appdill.com/",
    },
    {
        id: "04",
        title: "Travel Tech Web & Mobile Platform",
        description:
            "Improved web and mobile applications for a travel technology startup (Trampax). Updated and maintained production company website used by real users, developed mobile frontend features with React Native, Vue.js and Firebase.",
        tags: ["React Native", "Vue.js", "TypeScript", "Tailwind CSS", "Firebase", "Vuex"],
        highlight: null,
        status: "Production",
        gradient: "from-accent-blue/15 to-accent-violet/15",
        accentColor: "#5B8DEF",
        link: "https://www.trampax.com/",
    },
    {
        id: "05",
        title: "Equality in STEM — Data Analysis & Machine Learning",
        description:
            "Comprehensive data analysis and machine learning project exploring gender equality in STEM fields. Performed data cleaning, exploratory analysis, and built models to identify trends and insights from real-world datasets.",
        tags: ["Python", "Pandas", "Machine Learning", "Data Analysis", "Visualization"],
        highlight: "Data Science Project",
        status: "Completed",
        gradient: "from-accent-violet/20 to-accent-blue/10",
        accentColor: "#A78BFA",
        link: "https://github.com/Sudexq/Equality-in-STEM-A-Data-Analysis-and-Machine-Learning-Project",
    },
    {
        id: "06",
        title: "Tea Shop Web Application",
        description:
            "Modern web application for a tea shop with user-friendly interface and responsive design. Built to showcase frontend development skills with clean UI, component-based architecture, and interactive user experience.",
        tags: ["React", "TypeScript", "Frontend", "UI/UX", "Web Development"],
        highlight: "Frontend Project",
        status: "Completed",
        gradient: "from-accent-cyan/20 to-accent-blue/10",
        accentColor: "#22D3EE",
        link: "https://github.com/Sudexq/Tea-Shop",
    }
];

export const experience = [
    {
        role: "Frontend Developer Intern",
        company: "Amadeus",
        location: "Istanbul, Turkey",
        period: "Sep 2025 – Mar 2026",
        duration: "6 months",
        description:
            "Built AI agents using Microsoft Copilot Studio. Developed 10+ reusable Angular components in TypeScript. Collaborated with engineers in an enterprise-level Agile environment and integrated frontend features with REST APIs.",
        tags: ["Angular", "TypeScript", "Copilot Studio", "REST APIs", "Git"],
        type: "work",
        highlight: true,
    },
    {
        role: "Frontend Developer Intern",
        company: "Trampax",
        location: "Istanbul, Turkey",
        period: "Jun 2025 – Sep 2025",
        duration: "3 months",
        description:
            "Worked on web and mobile applications at a travel technology startup. Maintained production company website used by real users, developed mobile frontend features and built responsive UI components.",
        tags: ["React Native", "Vue.js", "TypeScript", "Tailwind CSS", "Firebase", "Vuex"],
        type: "work",
        highlight: false,
        link: "https://drive.google.com/file/d/1Ry-RuchtEpR2nKTjzTIX6iZdsYcPTFb5/view?usp=sharing",
    },
    {
        role: "Core Team Member, Social Media Team Lead",
        company: "Huawei Student Developers (HSD)",
        location: "Istanbul, Turkey",
        period: "2025 – Present",
        duration: "Ongoing",
        description:
            "Leading social media strategy and managing digital presence of the HSD community. Creating content, increasing engagement, and strengthening developer community visibility.",
        tags: ["Leadership", "Social Media", "Community", "Strategy"],
        type: "community",
        highlight: true,
    },
    {
        role: "Aspire Leaders Program Alumni",
        company: "Aspire Institute — Harvard Business School",
        location: "Remote",
        period: "2025",
        duration: "Program",
        description:
            "Selected for global leadership development program. Completed courses and seminars led by Harvard faculty.",
        tags: ["Leadership", "Harvard", "Global Program"],
        type: "education",
        highlight: false,
        link: "https://www.linkedin.com/in/sudenurtilla/overlay/VolunteerExperience/1128183793/treasury/?profileId=ACoAAD4tFvoBoGPVPsb6KLgO4B4ldVizHAzjj6U",
    },
    {
        role: "Data Science Bootcamp Participant",
        company: "W-Code",
        location: "Remote",
        period: "2025",
        duration: "Bootcamp",
        description:
            "Completed hands-on training in data analysis and machine learning. Worked with Python, Pandas, and real-world datasets. Earned verified certificate.",
        tags: ["Python", "Pandas", "Machine Learning", "Data Analysis"],
        type: "education",
        highlight: false,
        link: "https://verified.sertifier.com/tr/verify/31721763198979/",
    },
    {
        role: "Frontend Developer Intern (Remote)",
        company: "Dill",
        location: "New York, USA",
        period: "Oct 2024 – Jul 2025",
        duration: "9 months",
        description:
            "Worked remotely with an international team on a NYC-based restaurant automation platform. Refactored 50% of mobile app features in production, built Firebase real-time sync integrations, and contributed frontend services for backend data handling.",
        tags: ["React Native", "TypeScript", "Firebase", "TanStack Query", "Git"],
        type: "work",
        highlight: true,
    },
    {
        role: "Erasmus+ Exchange Program",
        company: "University of Pardubice",
        location: "Pardubice, Czech Republic",
        period: "2024 – 2025",
        duration: "6 months",
        description:
            "International exchange as part of BSc Computer Engineering. Gained cross-cultural engineering experience.",
        tags: ["Erasmus+", "Computer Engineering", "Czech Republic"],
        type: "education",
        highlight: false,
    },
    {
        role: "Frontend Developer Intern",
        company: "Omreon Information Technologies",
        location: "Istanbul, Turkey",
        period: "Dec 2023 – Jun 2024",
        duration: "6 months",
        description:
            "Developed frontend components for Turkcell-related projects. Built responsive UIs with BEM methodology and Ant Design. Contributed to production web applications using React, JavaScript, and SCSS.",
        tags: ["React", "JavaScript", "SCSS", "Ant Design", "HTML/CSS"],
        type: "work",
        highlight: false,
    },
    {
        role: "Software Team Member",
        company: "IKU Asimov Technology Student Club",
        location: "Istanbul, Turkey",
        period: "2022 – 2024",
        duration: "2 years",
        description:
            "Developed AI-powered mobile application using image processing. Ranked Top 14 among 4,250 teams in TEKNOFEST Competition. Contributed to development of club website.",
        tags: ["React Native", "Python", "AI", "Image Processing"],
        type: "competition",
        highlight: true,
    },
    {
        role: "B.Sc. Computer Engineering",
        company: "Istanbul Kültür University",
        location: "Istanbul, Turkey",
        period: "2022 – 2026",
        duration: "GPA: 3.10",
        description:
            "Studying Computer Engineering with focus on algorithms, data structures, OOP, and frontend development. Active in Asimov Technology Club and Huawei Student Developers.",
        tags: ["Algorithms", "OOP", "Data Structures", "Design Patterns"],
        type: "education",
        highlight: false,
    },
];

export const stats = [
    { value: "4", label: "Companies Interned", suffix: "" },
    { value: "14", label: "Teknofest Rank", suffix: "/4250" },
    { value: "26", label: "Countries Visited", suffix: "" },
    { value: "3", label: "known languages", suffix: "" },
];