// All site content lives here. Facts come from the resume; do not add claims it does not make.

export type Link = {
  label: string;
  href: string;
  /** Set to false to keep a link off the public page. */
  enabled: boolean;
};

export type Project = {
  title: string;
  category: "Full stack" | "AI" | "Data";
  context: string;
  date?: string;
  summary: string;
  points: string[];
  stack: string[];
  links: Link[];
  image?: { src: string; alt: string; width: number; height: number };
};

export const profile = {
  name: "Ooi Chong Hao",
  // Two sentences.
  intro:
    "I am a second-year IT student at Singapore Polytechnic, specialising in AI and Analytics. I am looking for a 22-week AI and full-stack internship in Vietnam from March 2027.",
  photo: { src: "/profile.jpg", alt: "Ooi Chong Hao" },
  description:
    "Portfolio of Ooi Chong Hao, an Information Technology student at Singapore Polytechnic who builds full-stack web apps and machine learning models.",
};

// No phone number on the public page.
export const contact: Link[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/chong-hao-ooi/", enabled: true },
  { label: "GitHub", href: "https://github.com/chonghaoooi", enabled: true },
  { label: "ooich12345@gmail.com", href: "mailto:ooich12345@gmail.com", enabled: true },
];

export const about = [
  "I write web apps in JavaScript and TypeScript with Node.js, Express, PostgreSQL and Prisma. My work covers REST APIs, authentication, transaction-safe database logic and automated tests in Jest, Supertest and Playwright.",
  "I set up CI/CD with GitHub Actions and Vercel for a team project. I have trained and evaluated machine learning models in Python with pandas and scikit-learn. I also co-built a self-hosted AI agent app with three friends.",
];

export const education = {
  school: "Singapore Polytechnic",
  award: "Diploma in Information Technology, specialising in AI and Analytics",
  dates: "Apr 2025 to Apr 2028 (expected)",
  gpa: "3.70 / 4.00",
  modules: [
    "AI & Machine Learning",
    "Full Stack Web Development",
    "Databases",
    "Secure Coding",
    "CI/CD",
  ],
};

export const projects: Project[] = [
  {
    title: "Full-Stack Gamified Wellness Web App",
    category: "Full stack",
    context: "Academic project, Back-End Development",
    summary:
      "A website that combines wellness tracking with a points-based detective game. The game has multiple narrative outcomes.",
    points: [
      "I implemented 25 REST API endpoints for CRUD operations in MySQL.",
      "The back end uses JWT authentication, bcrypt hashing and parameterised SQL.",
    ],
    stack: ["Node.js", "Express", "MySQL"],
    links: [
      { label: "Live demo", href: "https://bed-ca2-sxz6.onrender.com", enabled: true },
    ],
    image: {
      src: "/wellness.png",
      alt: "Home page of the wellness app, titled Detective Noir, with four steps that explain the game",
      width: 1280,
      height: 640,
    },
  },
  {
    title: "EventNest",
    category: "Full stack",
    context: "Team school project",
    date: "Nov 2026 to present",
    summary: "An event marketplace for attendees and organizers.",
    points: [
      "I set up the team's GitHub Actions workflows for CI, PR checks and PR-size labels, and the Vercel deployment.",
      "I built sign-up, login and sessions, attendee and organizer roles with protected routes, and RSVP capacity enforcement and cancellation.",
      "As of 23 November 2026, I had written 74 of the team's 110 commits and 37 of its 71 test commits across Jest, Supertest and Playwright.",
    ],
    stack: [
      "JavaScript",
      "Express 5",
      "PostgreSQL",
      "Jest",
      "Supertest",
      "Playwright",
      "GitHub Actions",
      "Vercel",
    ],
    links: [
      // The deployed home page is the team's "Proposed Screens" page, so it is not called a live demo.
      { label: "Proposed screens", href: "https://ay2627s2-class05-group01.vercel.app", enabled: true },
    ],
  },
  {
    title: "AI-Assisted Reporting & Email Automation",
    category: "AI",
    context: "Three-person team project",
    date: "Jul 2026 to Aug 2026",
    summary:
      "I led the 14-stage UiPath workflow. It downloads official labour-market data and runs and checks the team's Python analysis of four datasets.",
    points: [
      "The workflow builds a Word report and prepares an Outlook email. It sends the email only after human approval.",
      "I integrated two GPT-5.1 steps that classify 34 ambiguous degree titles and draft the summary email.",
      "The workflow validates each classification for ID, category and confidence. It flags those below 0.80 for human review.",
    ],
    stack: ["UiPath", "Python", "pandas", "GPT-5.1"],
    links: [
      { label: "Code", href: "https://github.com/chonghaoooi/PDAS-CA2", enabled: true },
    ],
  },
  {
    title: "Restaurant Ordering System",
    category: "Full stack",
    context: "Individual school project",
    date: "Jun 2026 to Aug 2026",
    summary: "An ordering system with its checkout and review rules in the database.",
    points: [
      "I built transaction-safe checkout and purchase-verified review rules in PostgreSQL stored procedures.",
      "I evaluated indexes with query plans.",
    ],
    stack: ["Node.js", "Express", "PostgreSQL", "Prisma"],
    links: [],
  },
  {
    title: "Machine Fault & Property Price Prediction",
    category: "Data",
    context: "AI & ML coursework",
    date: "Nov 2026",
    summary: "Two supervised learning tasks: a fault classifier and a price regression.",
    points: [
      "I compared four classifiers and tuned a Random Forest to predict rare machine faults, which are 5.8% of records. On the held-out test set, PR-AUC was 0.267 against a 0.058 baseline. The model caught 66% of faults at 24% precision.",
      "I compared five regression models for property prices. The final linear regression cut test MAE by 53% against the best baseline, with an R² of 0.74.",
    ],
    stack: ["Python", "pandas", "scikit-learn"],
    links: [],
  },
  {
    title: "LinkedIn Job Postings Salary Analysis",
    category: "Data",
    context: "Academic project, Programming for Data Analytics",
    summary: "A comparison of pay by experience level and remote status.",
    points: [
      "I cleaned and merged course-provided data on 123,849 job postings. Converting mixed pay periods into annual salaries left 27,556 usable rows.",
      "Median salary rose from USD 48,880 for internships to USD 191,270 for executives.",
    ],
    stack: ["Python", "pandas", "Matplotlib"],
    links: [{ label: "Code", href: "https://github.com/chonghaoooi/PDAS-CA1", enabled: true }],
  },
  {
    title: "AgniBot",
    category: "AI",
    context: "Personal project with three friends",
    date: "Oct 2026 to present",
    summary: "A self-hosted AI agent app.",
    points: [
      "I built a ChatGPT subscription provider with OAuth sign-in (PKCE), token renewal and onboarding. Users do not need an API key.",
      "I built a bot debugger that shows each turn's model calls, tool calls and failures.",
      "I fixed memory search so that it covers every saved fact.",
    ],
    stack: ["TypeScript", "Bun", "React"],
    links: [{ label: "Code", href: "https://github.com/AgniAnt/AgniBot", enabled: true }],
  },
];

export const skills = [
  { group: "Languages", items: ["TypeScript", "JavaScript", "Python", "SQL", "Swift"] },
  { group: "Frontend and mobile", items: ["React", "React Native", "Expo", "SwiftUI"] },
  {
    group: "Backend and data",
    items: ["Node.js", "Express", "Bun", "REST APIs", "PostgreSQL", "MySQL", "Prisma", "Supabase", "JWT", "bcrypt", "Session auth"],
  },
  {
    group: "AI and ML",
    items: ["LLM APIs (OpenAI/ChatGPT)", "RAG with vector embeddings", "scikit-learn", "pandas", "Matplotlib"],
  },
  {
    group: "Testing, DevOps and automation",
    items: ["Jest", "Supertest", "Playwright", "GitHub Actions", "Docker", "Vercel", "Railway", "Git/GitHub", "UiPath"],
  },
  {
    group: "Currently learning",
    items: ["AI agent frameworks", "CI/CD pipelines", "Agile and Scrum", "Web development", "Machine learning"],
  },
];

export const experience = [
  {
    role: "Sub-Committee Member",
    org: "Apple Developer Society, Singapore Polytechnic",
    date: "Jun 2026 to present",
    points: [
      "I mentored a team through a five-day Swift bootcamp and taught Swift and SwiftUI. The team's iOS app was shown at Apple Developer Academy Singapore.",
      "I helped plan and deliver a local AI agents workshop on MLX and Core ML, and mentored participants during the hands-on activities.",
    ],
  },
  {
    role: "Freshmen Orientation Group Leader",
    org: "Singapore Polytechnic",
    date: "13 to 17 Apr 2026",
    points: [
      "I mentored incoming Year 1 students, ran team activities and supported their transition into campus life.",
    ],
  },
  {
    role: "Student Volunteer",
    org: "Cyber Security Agency of Singapore",
    date: "14 Mar 2026",
    points: [
      "I explained AI-generated images, deepfakes, scams and cyber hygiene to seniors through demonstrations and one-to-one guidance.",
    ],
  },
];

export const certifications = [
  {
    group: "Anthropic Academy",
    items: [
      "Building with the Claude API",
      "Introduction to Model Context Protocol",
      "Claude Code in Action",
      "Agent Skills",
      "Subagents",
    ],
  },
  {
    group: "DataCamp",
    items: ["Introduction & Intermediate Python", "Supervised Learning with scikit-learn"],
  },
  {
    group: "Awards and other",
    items: ["Dell InnovateDash 2026 Finalist", "UiPath automation certification", "AI4I Literacy in AI"],
  },
];
