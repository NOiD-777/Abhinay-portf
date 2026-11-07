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
    chapter: "CHAPTER 01 // THE ENTERPRISE FORGE",
    accentColor: "#ef4444",
    roles: [
      {
        title: "Data Engineer",
        type: "Full-Time",
        period: "May 2026 – Present",
        mission:
          "Architecting high-throughput data platforms that convert high-volume financial transaction streams into unified Delta Lake intelligence.",
        milestones: [
          "Optimized query throughput by 30% and guaranteed 99.9% batch ETL reliability for global financial clients using Databricks & PySpark.",
          "Constructed resilient REST API ingestion services connecting Microsoft Azure and AWS Lambda into Delta Lake with zero data drop.",
          "Spearheaded GenAI automation POCs using LangChain & Python for tabular schema validation, cutting manual triage turnaround by 40%.",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        period: "Feb 2026 – Apr 2026",
        mission:
          "Completed an intensive five-track software rotation across Data Science & AI, Full-Stack Web Development, and Cloud Platform Engineering.",
        milestones: [
          "Engineered and shipped production-ready API endpoints and React/TypeScript UI modules for internal analytics tools.",
          "Automated tabular data quality validation checks across enterprise reporting layers.",
        ],
      },
    ],
  },
  {
    company: "AI AXISS INC",
    location: "Hyderabad, India",
    chapter: "CHAPTER 02 // REACTIVE INTERFACES",
    accentColor: "#a855f7",
    roles: [
      {
        title: "Angular Developer Intern",
        type: "Internship",
        period: "Oct 2025 – Jan 2026",
        mission:
          "Engineered reactive client telemetry interfaces where real-time accuracy dictates operational decisions.",
        milestones: [
          "Developed responsive, component-driven web applications using modern Angular, TypeScript, HTML5, and CSS3.",
          "Integrated RESTful APIs for real-time telemetry, data visualization, and seamless client-server state synchronization.",
        ],
      },
    ],
  },
  {
    company: "Brihaspathi Technologies Limited",
    location: "Hyderabad, India",
    chapter: "CHAPTER 03 // EDGE SILICON",
    accentColor: "#ec4899",
    roles: [
      {
        title: "Software Developer Intern — AI & ML",
        type: "Internship",
        period: "Aug 2025 – Sep 2025",
        mission:
          "Optimized computer vision models to execute real-time biometric verification directly on low-resource edge hardware.",
        milestones: [
          "Engineered and deployed asynchronous Python backend microservices with FastAPI and OpenCV, achieving ~92% detection accuracy on edge chips.",
          "Reduced CPU utilization by 35% and cut inference latency via asynchronous request batching and custom skip-frame processing.",
        ],
      },
    ],
  },
];
