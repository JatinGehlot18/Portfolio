// GitHub Pages serves this site from a subpath (e.g. /Portfolio). NEXT_PUBLIC_BASE_PATH
// is set at build time for that target only — see next.config.ts and the Pages workflow.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const withBasePath = (path: string) => `${basePath}${path}`;

export const profile = {
  name: "Jatin Gehlot",
  role: "Full-Stack Developer",
  tagline: "Building AI products. Building with AI.",
  bio: "Full-stack developer with 3+ years of experience shipping production systems across logistics, ad-tech, and consumer messaging — from real-time reporting dashboards to LLM-powered bots. I build AI-native: shipping real features with Claude Code day to day, and building the LLM/RAG systems themselves — Langchain, VectorDB, OpenAI. IIT Ropar graduate, comfortable owning a feature from backend data model to shipped UI.",
  location: "India",
  email: "jatin.gehlot18@gmail.com",
  github: "https://github.com/JatinGehlot18",
  linkedin: "https://www.linkedin.com/in/jatin-gehlot/",
  resumeUrl: withBasePath("/Jatin_Gehlot_Resume.pdf"),
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  points: string[];
  tags: string[];
};

export const experience: Experience[] = [
  {
    company: "StackBox",
    role: "Software Developer",
    location: "Bangalore, Karnataka",
    start: "Sep 2025",
    end: "Nov 2025",
    points: [
      "Enhanced outbound logistics workflows by extending existing internal system capabilities.",
      "Designed and implemented improvements in inventory management logic for better tracking and accuracy.",
      "Optimized picking and delivery strategies for targeted SKUs and bundled products, improving operational efficiency.",
    ],
    tags: ["Node.js", "PostgreSQL", "GraphQL", "Git"],
  },
  {
    company: "Justbaat",
    role: "Software Developer",
    location: "Gurgaon, Haryana",
    start: "Jul 2023",
    end: "Jul 2025",
    points: [
      "Delivered a reporting dashboard for ADX MCM partners with real-time revenue and performance metrics, backed by S3-based caching for low latency at scale.",
      "Built applications for managing Ad Player Units and wrapper scripts, letting users edit Ad Player properties directly from the UI.",
      "Developed a WhatsApp bot that delivers government bills via personalized avatar-narrated videos.",
    ],
    tags: [
      "Python",
      "Node.js",
      "React",
      "Redux",
      "Flask",
      "Langchain",
      "LLM",
      "OpenAI",
      "VectorDB",
      "GCP",
      "AWS S3",
      "Firebase",
      "Docker",
    ],
  },
  {
    company: "Singularity Dynamics",
    role: "Full Stack Developer",
    location: "Bangalore, Karnataka",
    start: "Jun 2022",
    end: "Jun 2023",
    points: [
      "Built a graph-based visualizer for automatic bug detection in integrated-circuit software, in JavaScript and QML.",
      "Applied 2D coordinate geometry, multi-threading, smart pointers, and BFS/DFS to core detection logic.",
      "Built the backend with Qt and C++ on SQL, and a desktop app from scratch with QML and C++.",
      "Optimized node rendering performance in the viewport by 4x.",
    ],
    tags: ["C++", "QML", "SQL", "Multi-threading", "Smart Pointers", "JavaScript"],
  },
];

export type Project = {
  name: string;
  description: string;
  points: string[];
  tags: string[];
  href?: string;
  linkLabel?: string;
  /** Paths under /public to real screenshots. Leave unset/empty to hide the media area entirely. */
  images?: string[];
  /** Shows a "Built with Claude Code" badge on the card. */
  builtWithClaudeCode?: boolean;
};

const rawProjects: Project[] = [
  {
    name: "Homelab",
    description:
      "GitOps configuration and documentation for a 2-node k3s cluster, run as infrastructure-as-code end to end.",
    points: [
      "k3s with Cilium CNI and Traefik ingress across an i5 control-plane/GPU node and a Celeron storage node.",
      "GPU workload scheduling via the NVIDIA runtime, plus SOPS-encrypted secrets — nothing reaches a node that isn't committed first.",
      "Per-host /etc tracked and pushed with rsync, cluster state applied via kustomize, CI renders/lints/secret-scans every push.",
    ],
    tags: ["Kubernetes", "k3s", "Cilium", "Traefik", "GitOps", "SOPS"],
    images: [
      "/projects/homelab/dashboard-homepage.png",
      "/projects/homelab/grafana-node-exporter.png",
    ],
    builtWithClaudeCode: true,
  },
  {
    name: "Splitkaro",
    description:
      "A Splitwise-style expense splitter — a React Native client backed by a real Spring Boot + PostgreSQL server exposing both REST and GraphQL.",
    points: [
      "Spring Boot + PostgreSQL (Flyway-migrated) backend with Spring Security: JWT access/refresh tokens plus Google OAuth2 login.",
      "Postgres-backed refresh-token store with a scheduled cleanup job; GraphQL layer serves balances, expenses, and settle-up suggestions from a debt-simplifier algorithm.",
      "React Native client: groups, uneven/equal splits, a custom ~90-line JS navigator, and full light/dark theming.",
    ],
    tags: ["React Native", "TypeScript", "Spring Boot", "PostgreSQL", "GraphQL"],
    href: "https://github.com/JatinGehlot18/Splitkaro-frontend",
    linkLabel: "View on GitHub",
    images: [
      "/projects/splitkaro/groups-dark.png",
      "/projects/splitkaro/group-balances-dark.png",
    ],
    builtWithClaudeCode: true,
  },
  {
    name: "Ad Player Wrapper Config",
    description:
      "An interface for managing native Ad Player Units and their wrapper scripts, so player behavior could be tuned without hand-editing code.",
    points: [
      "Replaced manual wrapper-script edits with a UI for managing Ad Player Units directly.",
      "Exposed per-property controls — autoplay, skip timing, mute-on-load, click tracking — for tuning player behavior per placement.",
      "Cut ad-ops turnaround time for player configuration changes across native placements.",
    ],
    tags: ["React", "Redux", "Node.js", "Ad Tech"],
    images: ["/projects/native-ads/ad-player-config.svg"],
  },
  {
    name: "ADX Partner Reporting Dashboard",
    description:
      "Real-time revenue and performance dashboard for ad-exchange MCM partners, built to stay fast under large data volumes.",
    points: [
      "S3-backed data caching layer to keep query latency low.",
      "Filterable metrics views over large datasets with complex backend aggregation.",
    ],
    tags: ["Python", "Flask", "AWS S3", "React", "Redux"],
    images: ["/projects/adx-dashboard/adx-dashboard.svg"],
  },
  {
    name: "URL Shortener Service",
    description:
      "A scalable URL shortener with a custom hash-based encoding algorithm and collision-safe short codes.",
    points: [
      "Unique short code generation via URL hashing and Base62 encoding.",
      "RESTful APIs for creation, redirection, analytics, and link management with validation and error handling.",
      "Relational data model in PostgreSQL with indexed short codes for fast lookup.",
    ],
    tags: ["Java", "Spring Boot", "PostgreSQL", "JPA", "Docker"],
    href: "https://github.com/JatinGehlot18/Url-Shortner",
    linkLabel: "View on GitHub",
    images: ["/projects/url-shortener/url-shortener.svg"],
    builtWithClaudeCode: true,
  },
  {
    name: "WhatsApp Bill Delivery Bot",
    description:
      "A WhatsApp bot that delivers government bills to users as personalized, avatar-narrated videos.",
    points: [
      "Conversational flows for bill lookup and delivery over WhatsApp.",
      "Personalized video generation pipeline narrating bill details per user.",
    ],
    tags: ["Node.js", "Langchain", "LLM", "OpenAI", "Firebase"],
    images: ["/projects/whatsapp-bot/whatsapp-bot.svg"],
  },
];

export const projects: Project[] = rawProjects.map((project) => ({
  ...project,
  images: project.images?.map(withBasePath),
}));

export const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "C/C++", "Python", "Java"],
  },
  {
    category: "Web & AI",
    items: [
      "Node.js",
      "React",
      "Redux",
      "Next.js",
      "Tailwind CSS",
      "Langchain",
      "LLMs",
      "VectorDB",
    ],
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "AWS", "Google Cloud", "Azure", "GitHub Actions"],
  },
  {
    category: "Data",
    items: ["SQL", "PostgreSQL", "MongoDB", "GraphQL", "Firebase"],
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    institute: "Indian Institute of Technology, Ropar",
    detail: "CGPA 7.2",
    year: "2018 – 2022",
  },
  {
    degree: "Senior Secondary",
    institute: "Rajasthan Board of Secondary Education",
    detail: "90%",
    year: "2017",
  },
];
