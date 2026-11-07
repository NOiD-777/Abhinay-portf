export interface Role {
  title: string;
  type: "Full-Time" | "Internship";
  period: string;
  mission: string;
  milestones: string[];
}

export interface Experience {
  company: string;
  location: string;
  chapter: string;
  accentColor: string;
  roles: Role[];
}

export const experiences: Experience[] = [
  {
    company: "JMAN Group",
    location: "Chennai, India",
    chapter: "CHAPTER 01 // ENTERPRISE FORGE: WHAT'S UP DANGER",
    accentColor: "#ef4444",
    roles: [
      {
        title: "Data Engineer",
        type: "Full-Time",
        period: "May 2026 – Present",
        mission:
          "Basically the Spider-Man of high-throughput financial data. Taking massive torrents of chaotic transactions and whipping them into disciplined Delta Lake pipelines with zero dropped records. We locked in.",
        milestones: [
          "Boosted query throughput by +30% and guaranteed 99.9% batch ETL reliability for global financial clients using Databricks & PySpark — zero data drop, no cap.",
          "Constructed battle-tested ingestion highways bridging Microsoft Azure & AWS Lambda straight into Delta Lake with zero dropped bytes under heavy load.",
          "Cooked up GenAI validation POCs with LangChain & Python for tabular schema sanity, slashing manual triage time by 40%.",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        period: "Feb 2026 – Apr 2026",
        mission:
          "Full-on multiverse rotation: speedran Data Science, Full-Stack web engineering, and Cloud Platforms without losing my head.",
        milestones: [
          "Shipped production-ready APIs and slick React/TypeScript UI modules for internal analytics squads.",
          "Automated data quality checks across reporting layers so nobody had to deal with bad numbers on Friday deployments.",
        ],
      },
    ],
  },
  {
    company: "AI AXISS INC",
    location: "Hyderabad, India",
    chapter: "CHAPTER 02 // BUTTERY SMOOTH 60 FPS INTERFACES",
    accentColor: "#a855f7",
    roles: [
      {
        title: "Angular Developer Intern",
        type: "Internship",
        period: "Oct 2025 – Jan 2026",
        mission:
          "Building reactive telemetry interfaces so fast your eyes can't catch the latency. When operational decisions are on the line, every frame matters.",
        milestones: [
          "Developed responsive, component-driven web apps using modern Angular, TypeScript, HTML5, and CSS3 that hit 60 FPS smoothly.",
          "Plugged in RESTful streams for real-time telemetry, visual data maps, and seamless state sync with zero UI jitter.",
        ],
      },
    ],
  },
  {
    company: "Brihaspathi Technologies Limited",
    location: "Hyderabad, India",
    chapter: "CHAPTER 03 // SQUEEZING AI ONTO TINY EDGE CHIPS",
    accentColor: "#ec4899",
    roles: [
      {
        title: "Software Developer Intern — AI & ML",
        type: "Internship",
        period: "Aug 2025 – Sep 2025",
        mission:
          "Fitting heavy-duty computer vision models onto tiny low-resource edge silicon. It's like doing a backflip through a keyhole — pure venom blast efficiency.",
        milestones: [
          "Shipped async FastAPI & OpenCV microservices pulling ~92% biometric detection accuracy directly on constrained edge chips.",
          "Chopped CPU load by 35% using custom skip-frame batching tricks — maximum performance, minimum silicon heat.",
        ],
      },
    ],
  },
];
