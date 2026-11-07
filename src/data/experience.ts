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
          "Engineered Databricks & PySpark batch ETL pipelines cutting processing latency across multi-cloud infrastructure.",
          "Built resilient ingestion bridges connecting Microsoft Azure and AWS (Lambda, ECS, S3) with zero data loss SLAs.",
          "Optimized PostgreSQL schema partitioning and query throughput for mission-critical client analytics.",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        period: "Feb 2026 – Apr 2026",
        mission:
          "Completed an intensive five-track engineering crucible across Full-Stack, AI & ML, Power BI, and Platform Engineering.",
        milestones: [
          "Developed core proof-of-concept services that accelerated team deployment cadence.",
          "Implemented automated data quality validation scripts for enterprise reporting layers.",
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
          "Delivered component-driven Angular & TypeScript dashboards with seamless WebSocket state synchronization.",
          "Built modular charting components visualizing multi-parameter system health with sub-50ms render loops.",
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
          "Achieved ~92% face recognition accuracy on constrained edge processors using FastAPI and OpenCV.",
          "Slashed CPU consumption by 35% via custom frame-skipping algorithms and memory-mapped inference pipelines.",
        ],
      },
    ],
  },
];
