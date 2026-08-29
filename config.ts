export const siteConfig = {
  name: "P. Allauddin",
  role: "AI/ML Engineer",
  tagline: "B.Tech student building machine learning pipelines and AI-assisted prototypes.",
  url: "https://example.com",
  email: "adbuthstar426@gmail.com",
  phone: "+91 93906 08473",
  location: "Rajkot, Gujarat, India",
  social: {
    github: "https://github.com/Allauddin-2006",
    linkedin: "https://linkedin.com/in/allauddinp-708360321",
    leetcode: "https://leetcode.com/u/P_ALLAUDDIN",
  },
};

export type Project = {
  slug: string;
  title: string;
  stack: string[];
  summary: string;
  description: string;
  link: string;
  linkLabel: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "g2b-isro-singularity",
    title: "G2B: ISRO — Singularity",
    stack: ["Google AI Studio", "TypeScript"],
    summary: "A 10-level physics-based space simulation game with orbital dynamics and live telemetry.",
    description:
      "A 10-level physics-based space simulation game featuring orbital dynamics, fuel management, and live telemetry — developed entirely through AI-assisted prompting with no traditional hand-coding. Deployed on Netlify with source hosted on GitHub, and presented publicly via a LinkedIn showcase post. Built during the \u201cIdea to Prototype Development using Google AI Studio and Cloud Run\u201d workshop by Google Developer Groups, AI ki Pathshala, and Marwadi University.",
    link: "https://github.com/Allauddin-2006",
    linkLabel: "Source on GitHub",
    featured: true,
  },
  {
    slug: "ml-prediction-suite",
    title: "ML Prediction Suite",
    stack: ["Python", "Jupyter", "scikit-learn"],
    summary: "Three end-to-end pipelines predicting churn, heart-disease risk, and credit score category.",
    description:
      "Three end-to-end machine learning pipelines: customer churn prediction, heart-disease risk detection using the UCI 14-attribute clinical dataset, and credit-score categorization from financial and demographic data.",
    link: "https://github.com/Allauddin-2006",
    linkLabel: "Source on GitHub",
    featured: true,
  },
  {
    slug: "pytorch-fundamentals",
    title: "PyTorch Fundamentals",
    stack: ["Python", "PyTorch"],
    summary: "Hands-on practice with tensors, autograd, and neural network construction.",
    description:
      "Hands-on practice covering tensors, autograd, neural network construction, and dataset handling — the foundation for deeper deep-learning work.",
    link: "https://github.com/Allauddin-2006",
    linkLabel: "Source on GitHub",
  },
  {
    slug: "cipher-logic-gate-simulator",
    title: "Cipher Tool & Logic Gate Simulator",
    stack: ["React"],
    summary: "An interactive encryption tool paired with a Boolean logic-gate simulator.",
    description:
      "An interactive encryption/decryption tool and a logic-gate and Boolean-expression simulator, built as course projects for Discrete Mathematics.",
    link: "https://github.com/Allauddin-2006",
    linkLabel: "Source on GitHub",
  },
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["C++", "Python", "Java", "SQL", "MATLAB"],
  },
  {
    label: "ML & Data",
    items: [
      "scikit-learn",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Linear/Logistic Regression",
      "Decision Trees",
      "Random Forest",
      "Neural Networks",
      "SVM",
      "KNN",
      "K-Means",
      "Naive Bayes",
      "PCA",
    ],
  },
  {
    label: "Web & Tools",
    items: ["React", "HTML", "CSS", "Git", "GitHub", "Google AI Studio", "Jupyter Notebook"],
  },
  {
    label: "Coursework",
    items: ["Operating Systems & Virtualization", "Computer Networks", "Discrete Mathematics", "Machine Learning"],
  },
];

export const experience = [
  {
    role: "Machine Learning Intern",
    org: "SaiKet Systems",
    meta: "Remote · Jan 2026 – Feb 2026",
    bullets: [
      "Completed a one-month remote machine-learning internship, gaining practical experience in ML model development using Python.",
      "Explored core machine-learning concepts and collaborated within a professional remote team environment.",
    ],
  },
];

export const education = [
  {
    school: "Marwadi University",
    program: "B.Tech, Artificial Intelligence & Machine Learning",
    meta: "Rajkot, Gujarat",
    period: "June 2024 – May 2028 · Currently 5th semester",
  },
];

export const certifications = [
  "Linux Essentials — Cisco Networking Academy (via NDG)",
  "Introduction to Programming Using Python",
  "Database Programming with SQL",
  "MATLAB — Advance Your Career with MATLAB Programming",
  "ChatGPT for Everyone",
  "Data Science Bootcamp — GeeksforGeeks",
];

export const achievements = {
  headline: "100+",
  label: "LeetCode problems solved (C++, Python)",
  detail: "Spanning Dynamic Programming, Backtracking, Arrays, and Two Pointers.",
  badge: "50 Days Badge · 2026",
};
