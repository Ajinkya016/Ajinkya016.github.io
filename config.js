// ============================================
//   AJINKYA KAMBLE — PERSONAL WEBSITE CONFIG
//   Edit this file to update your details!
// ============================================

const CONFIG = {

  // --- BASIC INFO ---
  name: {
    first: "Ajinkya",
    last: "Kamble",
    full: "Ajinkya Kamble",
    nickname: "AK", // used in logo
  },

  tagline: "17-year-old developer & creator from India",

  bio: `I'm a passionate teenager from India who loves building things on the web.
Currently exploring full-stack development, open source, and everything in between.
Always learning, always shipping.`,

  location: "Maharashtra, India",
  age: 17,

  // --- CONTACT & SOCIAL ---
  contact: {
    email: "ajinkya@example.com",         // ← your email
    phone: "+91 00000 00000",              // ← your phone
    instagram: "@ajinkya.kamble",          // ← your Instagram handle
    github: "ajinkya-kamble",             // ← your GitHub username
    linkedin: "ajinkya-kamble",           // ← your LinkedIn username
    twitter: "@ajinkya_dev",              // ← your Twitter/X handle
    leetcode: "ajinkya_kamble",           // ← your LeetCode username
  },

  // --- SKILLS ---
  skills: [
    { name: "HTML / CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "Python", level: 70 },
    { name: "React", level: 60 },
    { name: "Node.js", level: 55 },
    { name: "Git & GitHub", level: 80 },
  ],

  // --- PROJECTS ---
  projects: [
    {
      title: "Project One",
      description: "A cool project I built to solve a real problem. Uses HTML, CSS and JavaScript.",
      tags: ["HTML", "CSS", "JS"],
      link: "https://github.com/ajinkya-kamble/project-one",
      demo: "", // optional live demo link
    },
    {
      title: "Project Two",
      description: "Another interesting project exploring backend concepts and APIs.",
      tags: ["Node.js", "Express", "API"],
      link: "https://github.com/ajinkya-kamble/project-two",
      demo: "",
    },
    {
      title: "Project Three",
      description: "A Python automation script that made my life easier and taught me a lot.",
      tags: ["Python", "Automation"],
      link: "https://github.com/ajinkya-kamble/project-three",
      demo: "",
    },
  ],

  // --- ACHIEVEMENTS (optional) ---
  achievements: [
    "Solved 100+ problems on LeetCode",
    "Built and deployed 3 personal projects",
    "Contributed to open source on GitHub",
    "Currently preparing for JEE / competitive exams",
  ],

  // --- THEME COLORS (CSS variables) ---
  // You can tweak these to change the site palette
  theme: {
    accent: "#f97316",      // orange accent
    accentDark: "#ea580c",
    bg: "#0a0a0a",
    surface: "#111111",
    surfaceHover: "#1a1a1a",
    textPrimary: "#f5f5f5",
    textMuted: "#888888",
  },
};
