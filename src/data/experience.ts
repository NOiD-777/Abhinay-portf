export interface Role {
  title: string;
  type: "Full-Time" | "Internship";
  period: string;
  bullets: string[];
}

export interface Experience {
  company: string;
  location: string;
  roles: Role[];
  accentColor: string;
}

export const experiences: Experience[] = [
  {
    company: "JMAN Group",
    location: "Chennai, India",
    accentColor: "#ef4444",
    roles: [
      {
        title: "Data Engineer",
        type: "Full-Time",
        period: "May 2026 – Present",
        bullets: [
          "Architecting and optimizing enterprise data pipelines using Databricks, PySpark, SQL, and PostgreSQL for financial services clients.",
          "Maximizing high-volume query throughput, data validation, and batch ETL reliability.",
          "Constructed resilient API ingestion pipelines connecting Microsoft Azure services and AWS (EC2, ECS, Lambda) to transform raw financial streams directly into Delta Lake.",
        ],
      },
      {
        title: "Software Engineer Intern",
        type: "Internship",
        period: "Feb 2026 – Apr 2026",
        bullets: [
          "Completed multi-disciplinary engineering rotation spanning Full-Stack Development, Data Science & AI, Power BI, Data Engineering, and Platform Engineering.",
          "Developed proof-of-concept components and accelerated deployment velocity across core services.",
        ],
      },
    ],
  },
  {
    company: "AI AXISS INC",
    location: "Hyderabad, India",
    accentColor: "#a855f7",
    roles: [
      {
        title: "Angular Developer Intern",
        type: "Internship",
        period: "Oct 2025 – Jan 2026",
        bullets: [
          "Developed responsive, component-driven web applications using modern Angular, TypeScript, HTML5, and CSS3.",
          "Integrated RESTful APIs for real-time telemetry, data visualization, and seamless client-server state synchronization.",
        ],
      },
    ],
  },
  {
    company: "Brihaspathi Technologies Limited",
    location: "Hyderabad, India",
    accentColor: "#ec4899",
    roles: [
      {
        title: "Software Developer Intern — AI & ML",
        type: "Internship",
        period: "Aug 2025 – Sep 2025",
        bullets: [
          "Engineered and deployed a lightweight Face Recognition solution using FastAPI, Python, and OpenCV, achieving ~92% detection accuracy on low-resource edge hardware.",
          "Reduced CPU consumption by 35% through custom skip-frame processing and optimized image downscaling pipelines.",
        ],
      },
    ],
  },
];

