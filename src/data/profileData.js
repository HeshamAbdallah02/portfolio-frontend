// src/data/profileData.js
// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// your portfolio — no backend or database required.
// ─────────────────────────────────────────────────────────────

const profileData = {
  name: "Hesham Abdallah",
  title: "Web Developer & UI/UX Enthusiast",
  introduction:
    "Passionate about creating elegant web solutions that combine beautiful design with powerful functionality. Fresh graduate ready to make an impact in the digital world.",
  ctaText: "See My Work",

  // ── Theme ────────────────────────────────────────────────────
  theme: {
    primaryColor: "#2563EB",
  },

  // ── Hero Section ─────────────────────────────────────────────
  hero: {
    greeting: "Hi, I'm",
  },

  // ── About Section ────────────────────────────────────────────
  about: {
    title: "About Me",
    mainText:
      "As a fresh graduate in Computer Science, I've discovered my passion for web development during my academic journey. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    secondaryText:
      "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts.",
    // Place your profile image in public/images/ and update the path below
    imageUrl: "/images/profile.jpg",
  },

  // ── Social Links ─────────────────────────────────────────────
  socialLinks: {
    github: "https://github.com/HeshamAbdallah02",
    linkedin: "https://www.linkedin.com/in/hesham-abdalla-6531841ba",
    whatsapp: "https://wa.me/+201091655373",
  },

  // ── Contact ──────────────────────────────────────────────────
  contact: {
    email: "hesham@example.com", // ← update with your real email
  },

  // ── Projects Section ─────────────────────────────────────────
  // The first item is the "Featured" project shown in the spotlight.
  // All remaining items appear in the grid below it.
  // Each project can have: role, challenge, outcome, emoji for the story block.
  projects: {
    title: "Featured Projects",
    items: [
      {
        title: "Personal Portfolio",
        description:
          "A modern portfolio website built with MERN stack and fully customizable through a dashboard.",
        // Place project images in public/images/ and update paths below
        image: "/images/portfolio-project1.jpeg",
        technologies: ["React", "Node.js", "MongoDB", "Express"],
        liveLink: "https://yourportfolio.com",
        githubLink: "https://github.com/HeshamAbdallah02/portfolio-frontend",
        // Story metadata (shown in the featured spotlight & card)
        role: "Full-Stack Developer",
        challenge:
          "Build a fully customizable portfolio with an admin dashboard — no templates, no compromises.",
        outcome:
          "A dynamic MERN stack portfolio with real-time content management and premium animations.",
        emoji: "🎨",
      },
      {
        title: "E7GEZLY Web Dashboard",
        description:
          "A web based dashboard for PlayStations management that is synchronized with E7GEZLY mobile app.",
        image: "/images/project2.jpeg",
        technologies: ["Node.js", "Firestore", "Firebase"],
        liveLink: "https://football-2b5b9.firebaseapp.com/register-login.html",
        githubLink: "",
        role: "Frontend & Backend Developer",
        challenge:
          "Create a real-time dashboard synced with a mobile app for PlayStation booking management.",
        outcome:
          "A live web dashboard with real-time Firestore synchronization and booking analytics.",
        emoji: "🎮",
      },
      {
        title: "E7GEZLY App Backend",
        description:
          "Backend server for E7GEZLY app using Node.js based on Firebase backend services and Firestore non-relational database.",
        image: "/images/project3.webp",
        technologies: ["Node.js", "Firestore", "Firebase"],
        liveLink:
          "https://play.google.com/store/apps/details?id=com.app.e7gezly",
        githubLink: "",
        role: "Backend Developer",
        challenge:
          "Design a scalable backend for a mobile app with real-time data and cloud functions.",
        outcome:
          "A production-ready Node.js server powering a published Google Play Store application.",
        emoji: "⚙️",
      },
      // ── Add more projects below this line ─────────────────────
    ],
  },

  // ── Skills Section ───────────────────────────────────────────
  skills: {
    title: "My Skills",
    categories: [
      {
        name: "Frontend",
        items: [
          { name: "HTML5",      icon: "fab fa-html5" },
          { name: "CSS3",       icon: "fab fa-css3-alt" },
          { name: "Bootstrap",  icon: "fa-brands fa-bootstrap" },
          { name: "JavaScript", icon: "fab fa-js" },
          { name: "React.js",   icon: "fab fa-react" },
        ],
      },
      {
        name: "Backend",
        items: [
          { name: "Node.js",    icon: "fab fa-node-js" },
          { name: "Express.js", icon: "fas fa-server" },
          { name: "MongoDB",    icon: "fas fa-database" },
          { name: ".NET Core",  icon: "fab fa-microsoft" },
        ],
      },
      {
        name: "Development Tools",
        items: [
          { name: "Git",           icon: "fab fa-git-alt" },
          { name: "Postman",       icon: "fas fa-paper-plane" },
          { name: "VS Code",       icon: "fas fa-code" },
          { name: "npm",           icon: "fab fa-npm" },
          { name: "MongoDB Atlas", icon: "fas fa-cloud" },
          { name: "Firebase",      icon: "fas fa-fire" },
        ],
      },
      {
        name: "Soft Skills",
        items: [
          { name: "Problem Solving",    icon: "fas fa-puzzle-piece" },
          { name: "Team Collaboration", icon: "fas fa-users" },
          { name: "Communication",      icon: "fas fa-comments" },
          { name: "Quick Learning",     icon: "fas fa-graduation-cap" },
        ],
      },
    ],
  },

  // ── Experience / Timeline Section ────────────────────────────
  experience: {
    title: "Experience",
    items: [
      {
        year: "2024",
        title: "Computer Science Graduate",
        organization: "University",
        description:
          "Graduated with a degree in Computer Science. Focused on web development, software engineering, and database systems.",
        type: "education",
        icon: "fas fa-graduation-cap",
      },
      {
        year: "2024",
        title: "E7GEZLY Mobile App",
        organization: "Team Project",
        description:
          "Built the backend server and web dashboard for E7GEZLY — a PlayStation booking app using Node.js and Firebase.",
        type: "project",
        icon: "fas fa-mobile-alt",
      },
      {
        year: "2025",
        title: "Full-Stack Portfolio",
        organization: "Personal Project",
        description:
          "Designed and developed a fully customizable MERN stack portfolio with admin dashboard, dynamic theming, and cloud deployment.",
        type: "project",
        icon: "fas fa-code",
      },
      {
        year: "2025",
        title: "Open to Opportunities",
        organization: "Next Chapter",
        description:
          "Actively seeking web development roles. Passionate about building beautiful, high-performance applications that solve real problems.",
        type: "milestone",
        icon: "fas fa-rocket",
      },
    ],
  },

  // ── Footer ───────────────────────────────────────────────────
  footer: {
    copyrightText: "© {year} {name}. All rights reserved.",
    socialIcons: ["whatsapp", "linkedin"],
  },
};

export default profileData;
