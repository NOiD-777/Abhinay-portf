export interface StoryBeat {
  act: string;
  codename: string;
  title: string;
  location: string;
  narrative: string;
  milestone: string;
  accent: "cyan" | "crimson" | "purple";
  image?: string;
  imageCaption?: string;
}

export const personal = {
  name: "Abhinay Musku",
  firstName: "Abhinay",
  lastName: "Musku",
  title: "Earth-1610 Spider-Engineer",
  roles: [
    "Full-Stack & AI Engineer",
    "Data Slinger @ JMAN Group",
    "GenAI Agent Orchestrator",
    "Earth-1610 Multiverse Glitch Hunter",
  ],
  tagline:
    "By day, wrestling multi-terabyte data lakehouses at JMAN Group. By night, slinging autonomous GenAI agents across the multiverse. Untied Jordan 1s? Yeah, it's a choice.",
  storyMotto:
    "anyone can wear the mask — but not everyone can tame a PySpark cluster at 3am with zero data drop.",
  location: "Hyderabad / Chennai, India",
  email: "abhinay.musku.reddy@gmail.com",
  phone: "+91 9398707418",
  linkedin: "https://linkedin.com/in/abhinay-musku",
  github: "https://github.com/NOiD-777",
  resumeUrl: "/resume.pdf",
  bio: [
    "Look, nobody told me getting bitten by the distributed systems bug would mean juggling Delta Lake pipelines with one hand while training agentic LLMs with the other. But here we are, and honestly? We ball.",
    "From turning campus auditoriums upside down as GDGC Lead to shipping enterprise-grade financial data engines at JMAN Group, I treat production like my personal web-swing through Brooklyn and Hyderabad. High aura, zero data drop, maximum impact.",
  ],
  storyBeats: [
    {
      act: "ACT I",
      codename: "THE SPARK",
      title: "Bitten by the Builder Bug",
      location: "Hyderabad // MLRIT Campus",
      narrative:
        "Started out tinkering with code in dorm rooms, trying to figure out why systems tick. Next thing I know, I'm on stage leading GDGC MLRIT, turning 500-seat auditoriums into high-voltage hack rooms. Felt like putting on the mask for the first time: terrifying, electrifying, totally locked in.",
      milestone: "Technical Lead · GDGC MLRIT (The Suit Fits)",
      accent: "cyan",
      image: "/images/narrative-technical-lead.webp",
      imageCaption: "Abhinay Musku on stage presenting as Core Team Technical Lead at MLRIT auditorium",
    },
    {
      act: "ACT II",
      codename: "THE CRUCIBLE",
      title: "What's Up Danger // Enterprise Chaos",
      location: "Chennai // JMAN Group",
      narrative:
        "Leaped straight from the sandbox into the enterprise deep end at JMAN Group. Multi-cloud financial pipelines? Big data chaos? Hand me the web-shooters. Tamed Databricks, PySpark, and Delta Lake into a zero-data-drop beast. When production spikes hit at 3am, my spider-sense starts tingling — and we don't drop a single byte.",
      milestone: "Data Engineer @ JMAN Group · In the Forge",
      accent: "crimson",
      image: "/images/jman-abhinay.webp",
      imageCaption: "Abhinay on-site at JMAN Group — 'Most overnight successes took a long time' (Steve Jobs)",
    },
    {
      act: "ACT III",
      codename: "THE LEAP",
      title: "Leap of Faith // GenAI State Champions",
      location: "Swecha Telangana // BuildAI4India",
      narrative:
        "Took a literal leap of faith into Generative AI. Built ArtYatra in 24 hours of caffeine and pure adrenaline — hooked Gemini Vision and LangChain to autonomously save 8 endangered Indian art traditions. Walked out with 1st Place at Swecha BuildAI4India. No cap, that moment proved anyone can build something that changes the game.",
      milestone: "1st Place Champions · Swecha BuildAI4India (W)",
      accent: "purple",
      image: "/images/hackathon-swecha-team.webp",
      imageCaption: "Team ArtYatra celebrating 1st Place victory at Swecha Telangana BuildAI4India Hackathon",
    },
  ] as StoryBeat[],
  stats: [
    { label: "Production Missions", value: "6+" },
    { label: "Arsenal Tooling", value: "30+" },
    { label: "State Hackathons Won", value: "#1" },
    { label: "Data Pipeline Uptime", value: "99.9%" },
  ],
};
