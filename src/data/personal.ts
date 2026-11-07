export interface StoryBeat {
  act: string;
  codename: string;
  title: string;
  location: string;
  narrative: string;
  milestone: string;
  accent: "cyan" | "crimson" | "purple";
}

export const personal = {
  name: "Abhinay Musku",
  firstName: "Abhinay",
  lastName: "Musku",
  title: "Full-Stack & AI Engineer",
  roles: [
    "Full-Stack & AI Engineer",
    "Data Engineer @ JMAN Group",
    "GenAI & Agent Systems Developer",
    "Cloud & Distributed Systems Specialist",
  ],
  tagline:
    "Architecting scalable enterprise data pipelines and production Generative AI applications.",
  storyMotto:
    "Turning raw data into intelligence, and human intent into living autonomous systems.",
  location: "Hyderabad / Chennai, India",
  email: "abhinay.musku.reddy@gmail.com",
  phone: "+91 9398707418",
  linkedin: "https://linkedin.com/in/abhinay-musku",
  github: "https://github.com/NOiD-777",
  resumeUrl: "/resume.pdf",
  bio: [
    "From campus hackathons to enterprise data lakehouses, every breakthrough begins with one question: how far can we push the system?",
    "At JMAN Group, I engineer high-throughput Databricks & PySpark pipelines. At GDGC MLRIT, I mobilize builders. In hackathons, I prove that autonomous AI can bridge cultural legacy with tomorrow's web.",
  ],
  storyBeats: [
    {
      act: "ACT I",
      codename: "THE SPARK",
      title: "From Curiosity to Community Catalyst",
      location: "Hyderabad // MLRIT Campus",
      narrative:
        "Started with a drive to understand systems from the metal up. Stepped up to lead Google Developer Groups on Campus (GDGC) MLRIT, turning classrooms into hackrooms and rallying hundreds of student builders.",
      milestone: "Technical Lead · Google Developer Groups on Campus (GDGC)",
      accent: "cyan",
    },
    {
      act: "ACT II",
      codename: "THE CRUCIBLE",
      title: "Taming Enterprise Data Chaos",
      location: "Chennai // JMAN Group",
      narrative:
        "Left the sandbox behind to architect mission-critical financial pipelines. Harnessing Databricks and PySpark, transforming multi-cloud ingestion streams into high-throughput Delta Lake intelligence with zero data drop.",
      milestone: "Data Engineer · Enterprise Scale",
      accent: "crimson",
    },
    {
      act: "ACT III",
      codename: "THE LEAP",
      title: "Autonomous Frontiers & Cultural Legacy",
      location: "Swecha Telangana // BuildAI4India",
      narrative:
        "Crossed dimensions into Generative AI. Built ArtYatra with Google Gemini API & LangChain to autonomously classify and preserve 8 endangered Indian art styles — taking 1st place at Swecha Telangana's BuildAI4India Hackathon.",
      milestone: "1st Place Winner · Swecha BuildAI4India",
      accent: "purple",
    },
  ] as StoryBeat[],
  stats: [
    { label: "Production Projects", value: "6+" },
    { label: "Technologies Mastered", value: "30+" },
    { label: "Hackathons Won", value: "1" },
    { label: "Enterprise Pipelines", value: "100%" },
  ],
};
