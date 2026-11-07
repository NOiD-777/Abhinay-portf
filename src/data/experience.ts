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
        title: "Data & AI Engineer",
        type: "Full-Time",
        period: "May 2026 – Present",
        mission:
          "Basically the guardian of high-throughput financial data. Taking massive torrents of chaotic transactions and whipping them into disciplined Delta Lake pipelines with zero dropped records. We locked in.",
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
          "Enterprise rotation: speedran Data Engineering, AI model prototyping, and Cloud Platforms without losing my head.",
        milestones: [
          "Shipped production-ready inference APIs and interactive analytics modules for internal intelligence squads.",
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
    chapter: "CHAPTER 03 // CCTV SURVEILLANCE & EDGE CRIMINAL DETECTION",
    accentColor: "#ec4899",
    roles: [
      {
        title: "Software Developer Intern — AI & ML",
        type: "Internship",
        period: "Aug 2025 – Sep 2025",
        mission:
          "Turning standard CCTV cameras into high-precision visual radar: building real-time biometric and computer vision pipelines on edge hardware to identify criminals and keep the streets safe.",
        milestones: [
          "Shipped async FastAPI & OpenCV surveillance microservices pulling ~92% accuracy directly on constrained edge chips to identify criminals in real-time.",
          "Chopped CPU load by 35% using custom skip-frame batching tricks — maximum detection speed, zero hardware melting.",
        ],
      },
    ],
  },
];
