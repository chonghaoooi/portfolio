// Portfolio content is backed by the résumé, public project records and contribution history.

export type Link = {
  label: string;
  href: string;
  /** Set to false to keep a link off the public page. */
  enabled: boolean;
};

export const projectCategories = ["Full stack", "AI", "Data", "Security"] as const;

export type Project = {
  title: string;
  category: (typeof projectCategories)[number];
  context: string;
  date?: string;
  summary: string;
  points: string[];
  stack: string[];
  links: Link[];
  image?: { src: string; alt: string; width: number; height: number };
};

type Hackathon = {
  title: string;
  date: string;
  summary: string;
  links: Link[];
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
    date: "Jan to Feb 2026",
    summary:
      "A website that combines wellness tracking with a points-based detective game. The game has multiple narrative outcomes.",
    points: [
      "I implemented 25 REST API endpoints for CRUD operations in MySQL.",
      "The back end uses JWT authentication, bcrypt hashing and parameterised SQL.",
    ],
    stack: ["Node.js", "Express", "MySQL"],
    links: [
      { label: "Live demo", href: "https://bed-ca2-sxz6.onrender.com", enabled: true },
      { label: "Code", href: "https://github.com/chonghaoooi/BED-CA2", enabled: true },
    ],
    image: {
      src: "/wellness.png",
      alt: "Home page of the wellness app, titled Detective Noir, with four steps that explain the game",
      width: 1280,
      height: 640,
    },
  },
  {
    title: "MemWorker",
    category: "AI",
    context: "Dell InnovateDash 2026 finalist",
    date: "Jun 2026",
    summary:
      "A casework prototype for the Singapore Children's Society challenge. It turns notes and recordings into case summaries, follow-ups and shared caseload context.",
    points: [
      "I helped shape the daily casework interface and added automatic follow-ups from reminders in transcripts.",
      "I prepared the Railway API deployment bundle. The team used Redis-backed workers to keep longer AI tasks out of the request path.",
    ],
    stack: ["React Native", "Expo", "Node.js", "Supabase", "Redis", "RAG"],
    links: [
      { label: "Code", href: "https://github.com/NachikethReddyY/MemWorker", enabled: true },
      { label: "Follow-up commit", href: "https://github.com/NachikethReddyY/MemWorker/commit/5047065e442b051af7b74fa41cdecae36649a2b8", enabled: true },
      { label: "Deployment PR", href: "https://github.com/NachikethReddyY/MemWorker/pull/17", enabled: true },
    ],
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
    date: "Apr to Jun 2026",
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
    stack: ["TypeScript", "Bun", "React", "SwiftUI"],
    links: [
      { label: "Code", href: "https://github.com/AgniAnt/AgniBot", enabled: true },
      { label: "Merged PRs", href: "https://github.com/AgniAnt/AgniBot/pulls?q=is%3Apr+is%3Amerged+author%3Achonghaoooi", enabled: true },
    ],
  },
  {
    title: "AgniReview",
    category: "AI",
    context: "AgniAnt team project, in progress",
    summary: "An in-house tool for AI-assisted code review.",
    points: [],
    stack: [],
    links: [{ label: "Code", href: "https://github.com/AgniAnt/aReview", enabled: true }],
  },
  {
    title: "SnapSell Security Review",
    category: "Security",
    context: "Secure Coding coursework, pair project",
    date: "Jul to Aug 2026",
    summary: "A security assessment of a Node.js marketplace against the 2025 OWASP Top 10.",
    points: [
      "We documented 10 findings across five categories and proposed fixes, including parameterised queries for database access.",
    ],
    stack: ["Node.js", "MySQL", "Burp Suite", "Postman"],
    links: [],
  },
  {
    title: "RoadRunners",
    category: "AI",
    context: "TheFirst Spark 2026: Youth Symposium",
    date: "Jun 2026",
    summary: "An AI-guided learning app with branching career roadmaps and interactive coding lessons.",
    points: ["I made the generated roadmap steps persist after onboarding so the journey could be reopened."],
    stack: ["Next.js", "TypeScript", "Supabase", "Monaco", "ElevenLabs"],
    links: [
      { label: "Devpost", href: "https://devpost.com/software/roadrunners-zojclf", enabled: true },
      { label: "Roadmap PR", href: "https://github.com/NachikethReddyY/roadrunners/pull/1", enabled: true },
    ],
  },
  {
    title: "ReDDone",
    category: "AI",
    context: "Team project, GitHub contributor",
    summary: "An approval-based workflow that uses market evidence to generate and deploy a Next.js app.",
    points: ["I added selectable AI models for workflows and prepared the backend for Railway deployment."],
    stack: ["Next.js", "Node.js", "PostgreSQL", "Railway"],
    links: [
      { label: "Model selection PR", href: "https://github.com/NachikethReddyY/reddone/pull/17", enabled: true },
      { label: "Railway PR", href: "https://github.com/NachikethReddyY/reddone/pull/3", enabled: true },
    ],
  },
  {
    title: "Lumina",
    category: "AI",
    context: "Ralphthon @SG",
    date: "May 2026",
    summary: "A team prototype that turns raw bug reports into structured GitHub issues and routes them based on developer workload and availability.",
    points: [],
    stack: [],
    links: [
      { label: "Team recap", href: "https://www.linkedin.com/posts/cj-tee_today-i-and-friends-yeddula-nachiketh-reddy-activity-7461801348322234368-y_d7", enabled: true },
    ],
  },
  {
    title: "kaki",
    category: "Full stack",
    context: "MAJU Hackathon 2026",
    date: "Sep 2026",
    summary: "A mobile-first community app for students in Singapore to find campus activities, study together and connect through clubs and peer mentorship.",
    points: ["The prototype includes activity discovery, join flows and privacy controls for peer support."],
    stack: ["React", "TypeScript", "Node.js", "SQLite"],
    links: [
      { label: "Code", href: "https://github.com/chonghaoooi/kaki", enabled: true },
      { label: "Live demo", href: "https://kaki-orcin.vercel.app/", enabled: true },
    ],
  },
  {
    title: "TrustLadder",
    category: "AI",
    context: "OCBC Ignite Challenge 2026",
    date: "Oct 2026",
    summary: "A prototype for bank staff to review AI-generated draft responses, inspect the supporting evidence and record an approval decision.",
    points: [],
    stack: ["JavaScript", "HTML", "Vercel"],
    links: [
      { label: "Code", href: "https://github.com/chonghaoooi/OCBC-Trust-Ladder", enabled: true },
      { label: "Live demo", href: "https://ocbc-trust-ladder.vercel.app/", enabled: true },
    ],
  },
  {
    title: "+1lean Wellness Tracker",
    category: "Full stack",
    context: "Personal project",
    summary: "A community fitness tracker with meal photos, workout posts, leaderboards and optional step sync from a phone.",
    points: [],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Capacitor"],
    links: [{ label: "Code", href: "https://github.com/chonghaoooi/roblox-wellness-site", enabled: true }],
  },
  {
    title: "CCAbot",
    category: "AI",
    context: "Personal project",
    summary: "A Discord bot for club event announcements and reminders. It can extract event details from pasted text, public forms and screenshots.",
    points: [],
    stack: ["Python", "discord.py", "Ollama", "Tesseract"],
    links: [{ label: "Code", href: "https://github.com/chonghaoooi/ccabot", enabled: true }],
  },
  {
    title: "Local Form Autofill",
    category: "Full stack",
    context: "Browser extension",
    summary: "A browser extension that fills recurring Google and Microsoft Forms from a profile stored on the device.",
    points: [],
    stack: ["TypeScript", "Browser extensions"],
    links: [{ label: "Code", href: "https://github.com/chonghaoooi/auto-fill-forms", enabled: true }],
  },
  {
    title: "Cashbux Market Sim",
    category: "Full stack",
    context: "Team project",
    summary: "A stock-market simulator with real-time team and organiser dashboards for school investing events on a local network.",
    points: [],
    stack: ["React", "TypeScript", "Socket.IO", "SQLite"],
    links: [{ label: "Code", href: "https://github.com/chonghaoooi/smuhackathon", enabled: true }],
  },
];

const linkedInProfile = contact[0].href;

export const hackathons: Hackathon[] = [
  {
    title: "OCBC Ignite Challenge",
    date: "2026",
    summary: "Built TrustLadder, a banking-agent review prototype with human approvals.",
    links: [{ label: "Project", href: "https://github.com/chonghaoooi/OCBC-Trust-Ladder", enabled: true }],
  },
  {
    title: "MAJU Hackathon",
    date: "Sep 2026",
    summary: "Built kaki, a community app for helping students find activities and make connections.",
    links: [
      { label: "Project", href: "https://github.com/chonghaoooi/kaki", enabled: true },
      { label: "Event", href: "https://luma.com/1g4iwyst", enabled: true },
    ],
  },
  {
    title: "TheFirst Spark: Youth Symposium",
    date: "Jun 2026",
    summary: "Co-built RoadRunners, a learning app with branching roadmaps and interactive coding lessons.",
    links: [{ label: "Submission", href: "https://devpost.com/software/roadrunners-zojclf", enabled: true }],
  },
  {
    title: "Dell InnovateDash",
    date: "Jun 2026",
    summary: "Finalist with MemWorker, a casework prototype for the Singapore Children's Society challenge.",
    links: [{ label: "Project", href: "https://github.com/NachikethReddyY/MemWorker", enabled: true }],
  },
  {
    title: "Ralphthon @SG",
    date: "May 2026",
    summary: "Co-built Lumina, a prototype for triaging and assigning GitHub issues.",
    links: [
      { label: "Team recap", href: "https://www.linkedin.com/posts/cj-tee_today-i-and-friends-yeddula-nachiketh-reddy-activity-7461801348322234368-y_d7", enabled: true },
    ],
  },
  {
    title: "Autodesk Singapore AI Hackathon",
    date: "Mar to Apr 2026",
    summary: "Prototyped an AI-assisted solution with Autodesk engineers and Singapore Polytechnic students.",
    links: [{ label: "LinkedIn", href: linkedInProfile, enabled: true }],
  },
  {
    title: "PolyFinTech100 API Hackathon",
    date: "2025",
    summary: "Participated in the API hackathon for polytechnic students.",
    links: [
      { label: "LinkedIn", href: linkedInProfile, enabled: true },
      { label: "Event", href: "https://polyfintech100hackathon.sg/home-2025/", enabled: true },
    ],
  },
  {
    title: "BuildingBloCS March Conference",
    date: "Mar 2025",
    summary: "Took part in a Python and data science conference that concluded with a biodiversity hackathon.",
    links: [{ label: "LinkedIn", href: linkedInProfile, enabled: true }],
  },
  {
    title: "Singapore Informatics League",
    date: "2025",
    summary: "Competed in the programming contest with Singapore Polytechnic team J.A.C.",
    links: [{ label: "Scoreboard", href: "https://sginfoleague.org/archives/2025/scoreboard.pdf", enabled: true }],
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
