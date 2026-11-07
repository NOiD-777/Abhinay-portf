export interface Education {
  institution: string;
  degree: string;
  field: string;
  gpa: string;
  period: string;
  location: string;
  honors: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  badgeText: string;
}

export const educationList: Education[] = [
  {
    institution: "MLR Institute of Technology",
    degree: "Bachelor of Engineering",
    field: "Information Technology",
    gpa: "8.18 / 10",
    period: "Nov 2022 – Apr 2026",
    location: "Hyderabad, India",
    honors: [
      "Technical Lead at Google Developers Group (GDG) on Campus MLRIT",
      "Winner (1st Place) — BuildAI4India Hackathon, Swecha Telangana (Aug 2025) for AI-powered cultural art preservation",
    ],
  },
];

export const certifications: Certification[] = [
  {
    name: "Smart Coder DSA Certification (Silver)",
    issuer: "Smart Interviews",
    year: "2025",
    badgeText: "Algorithms & Data Structures",
  },
  {
    name: "Google Cloud Computing Foundations",
    issuer: "NPTEL",
    year: "2024",
    badgeText: "Cloud Architecture",
  },
];

