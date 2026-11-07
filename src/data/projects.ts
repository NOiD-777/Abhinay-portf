export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  storyDirective: string;
  description: string;
  longDescription: string;
  image: string;
  tech: string[];
  category: "ai-ml" | "web" | "data";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string[];
}

export const projects: Project[] = [
  {
    slug: "artyatra",
    title: "ArtYatra",
    subtitle: "State Hackathon Champion // Generative Art Savior",
    storyDirective: "What if AI didn't just generate memes, but actually saved ancient endangered cultures?",
    description:
      "Won 1st place at Swecha BuildAI4India with this bad boy. Hooked Gemini Vision & LangChain to autonomously identify and preserve 8 endangered Indian art styles before they vanish into the multiverse.",
    longDescription:
      "ArtYatra is an award-winning full-stack application built to preserve and explore India's artistic heritage. It leverages Google Gemini API with structured prompt orchestration to analyze user-uploaded artwork images and accurately classify traditional art forms including Warli, Madhubani, Thanjavur, and Kalamkari. Features contextual history retrieval, confidence scoring, and interactive geographical mapping.",
    image: "/projects/artyatra.png",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "PostgreSQL",
      "Gemini API",
      "LangChain",
    ],
    category: "ai-ml",
    githubUrl: "https://github.com/NOiD-777/ArtYatra",
    featured: true,
    metrics: ["🏆 1st Place State Champions", "8 Art Traditions Saved", "Sub-Second Inferences"],
  },
  {
    slug: "autonomous-career-agent",
    title: "Autonomous Career Agent",
    subtitle: "Agentic Multiverse Intelligence Swarm",
    storyDirective: "Why apply to opportunities manually like an NPC when an autonomous agent swarm can do it with 100x aura?",
    description:
      "A squad of autonomous Python agents running tool-calling, Pydantic schemas, and multi-step prompt chains with persistent memory. Basically automated hustle on steroids.",
    longDescription:
      "Architected an autonomous multi-agent workflow engine in Python using FastAPI and LangChain. Discovers, parses, and evaluates enterprise opportunities against multi-variable constraints (compensation, experience, domain MX verification). Integrates LLM-driven prompt chains with Google Workspace APIs and python-docx to dynamically generate calibrated deliverables and execute verified email dispatches with Docker containerization.",
    image: "/projects/resumeradar.png",
    tech: ["Python", "FastAPI", "LangChain", "LLM APIs", "Multi-Tool Calling", "Docker", "Pydantic"],
    category: "ai-ml",
    githubUrl: "https://github.com/NOiD-777/ResumeRadar",
    featured: true,
    metrics: ["Agent Swarm Orchestrated", "Pydantic Schemas Locked", "Zero Human Friction"],
  },
  {
    slug: "twitter-sentiment-analysis",
    title: "Twitter Sentiment Analysis",
    subtitle: "Spider-Radar // Tracking What The City Thinks About Me",
    storyDirective: "Is the city vibing with Spider-Man or is J. Jonah Jameson running slander campaigns? Tapped into 1.6M tweets to understand what people actually think about me.",
    description:
      "Trained NLP statistical classifiers on 1.6M unfiltered tweets to understand what people think about me in real-time. Whether the city is hyping up my latest save or cooking me in the comments, I know the exact public sentiment with +25% higher accuracy and zero cap.",
    longDescription:
      "Engineered an end-to-end NLP sentiment pipeline for massive social streams to measure public perception, sentiment shifts, and city discourse in real-time. Applied hyperparameter tuning, refined tokenization and stemming via NLTK, and benchmarked Logistic Regression against Naive Bayes models to minimize false positive predictions by 20%. Includes interactive Google Colab notebook.",
    image: "/projects/twitter-sentiment.png",
    tech: ["Python", "Pandas", "NLTK", "Scikit-learn", "Tweepy", "Google Colab"],
    category: "ai-ml",
    liveUrl: "https://colab.research.google.com/drive/1cUcBBJK-P4jtTDYgBuTLT7btmbxKqGs9?usp=sharing",
    githubUrl: "https://github.com/NOiD-777/Twitter-Sentiment-Analysis",
    featured: true,
    metrics: ["1.6M Tweets Decoded", "City Perception Decoded", "+25% Accuracy W"],
  },
  {
    slug: "expense-tracker-angular",
    title: "Expense Tracker (ExWise)",
    subtitle: "Zero-Lag Offline-First Mobile Vault",
    storyDirective: "Where did all my money go? (Spoiler: sneakers, iced coffee, and cloud credits).",
    description:
      "Lightning-fast personal finance tracker running 100% offline with zero cloud tracking. Clean Angular UI so you can face your spending habits without lag.",
    longDescription:
      "ExWise is tailored specifically for smartphone screens, delivering lightning-fast expense tracking without cloud latency. Features monthly budget alerts, category-wise breakdowns, interactive calendar history, and dark mode UI built with Angular and Tailwind CSS.",
    image: "/projects/expense-tracker.png",
    tech: ["Angular", "TypeScript", "Tailwind CSS", "LocalStorage", "Vercel"],
    category: "web",
    liveUrl: "https://exwise.vercel.app/",
    githubUrl: "https://github.com/NOiD-777/Expense-tracker-angular",
    featured: true,
    metrics: ["📱 Zero-Lag Mobile UI", "100% Offline Vault", "Live on Vercel"],
  },
  {
    slug: "legalmind-ai",
    title: "LegalMind",
    subtitle: "Multi-Model Contract Risk Scanner",
    storyDirective: "Reading 50-page legal terms of service so nobody gets trapped in a canon event.",
    description:
      "Asynchronous audit engine cross-examining risky contract clauses in parallel across Claude, Gemini, and Groq. If there's a shady clause, the spider-sense sounds the alarm.",
    longDescription:
      "LegalMind automates lengthy contract reviews by ingesting legal PDFs/DOCX agreements, extracting liability and indemnification clauses, and running parallel multi-model risk evaluations to highlight red flags with high confidence.",
    image: "/projects/legalmind.png",
    tech: ["Next.js", "FastAPI", "Python", "TypeScript", "Claude API", "Gemini API", "Groq"],
    category: "ai-ml",
    githubUrl: "https://github.com/NOiD-777/Legal_Mind",
    featured: false,
    metrics: ["Multi-LLM Consensus", "FastAPI Async Engine", "Instant Risk Flags"],
  },
  {
    slug: "face-recognition-edge",
    title: "Edge CCTV Criminal Detection",
    subtitle: "Spider-Vision // Scanning The Streets To Identify Criminals",
    storyDirective: "Gotta keep the streets safe — tapping into live CCTV camera feeds to scan the perimeter and identify criminals before they do damage.",
    description:
      "Spider-vision for the city. Built lightweight computer vision models deployed on CCTV cameras and edge silicon to identify criminals and flagged targets in real-time with ~92% accuracy while chopping CPU overhead by 35%.",
    longDescription:
      "Engineered during internship at Brihaspathi Technologies. Tapped into live camera and CCTV video feeds to perform real-time biometric detection and threat identification for security surveillance, helping pinpoint criminals on constrained edge hardware. Optimized using OpenCV frame-skipping algorithms and asynchronous FastAPI microservices.",
    image: "/projects/face-recognition.png",
    tech: ["Python", "FastAPI", "OpenCV", "NumPy", "Edge Compute", "CCTV Surveillance"],
    category: "ai-ml",
    featured: false,
    metrics: ["92% Criminal Detection", "-35% CPU Overhead", "Real-Time CCTV Stream"],
  },
];

export const projectCategories = [
  { id: "all", label: "All Missions" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "web", label: "Web & Full-Stack" },
  { id: "data", label: "Data & Systems" },
];
