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
    subtitle: "AI Cultural Heritage Platform",
    storyDirective: "Can generative models rescue endangered cultural heritage before it's lost?",
    description:
      "Autonomous vision platform classifying 8 traditional Indian art styles with Google Gemini API, LangChain reasoning, and geospatial provenance mapping.",
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
    metrics: ["🏆 Swecha BuildAI4India Winner", "8 Art Styles Classified", "Sub-second Query Latency"],
  },
  {
    slug: "autonomous-career-agent",
    title: "Autonomous Career Agent",
    subtitle: "Multi-Agent Intelligence System",
    storyDirective: "Can autonomous agentic workflows eliminate manual friction across enterprise intelligence?",
    description:
      "Autonomous multi-agent workflow engine in Python orchestrating tool-calling, Pydantic schemas, and LLM chains with persistent state tracking.",
    longDescription:
      "Architected an autonomous multi-agent workflow engine in Python using FastAPI and LangChain. Discovers, parses, and evaluates enterprise opportunities against multi-variable constraints (compensation, experience, domain MX verification). Integrates LLM-driven prompt chains with Google Workspace APIs and python-docx to dynamically generate calibrated deliverables and execute verified email dispatches with Docker containerization.",
    image: "/projects/resumeradar.png",
    tech: ["Python", "FastAPI", "LangChain", "LLM APIs", "Multi-Tool Calling", "Docker", "Pydantic"],
    category: "ai-ml",
    githubUrl: "https://github.com/NOiD-777/ResumeRadar",
    featured: true,
    metrics: ["Multi-Agent Orchestration", "Pydantic Structured Output", "Tool/Function Calling"],
  },
  {
    slug: "twitter-sentiment-analysis",
    title: "Twitter Sentiment Analysis",
    subtitle: "Large-Scale NLP Pipeline",
    storyDirective: "Extracting actionable signal from 1.6M noisy real-time social streams.",
    description:
      "High-throughput NLP pipeline benchmarking statistical classifiers against 1.6M unstructured tweets, achieving +25% accuracy and -20% false positives.",
    longDescription:
      "Engineered an end-to-end NLP sentiment pipeline for massive social streams. Applied hyperparameter tuning, refined tokenization and stemming via NLTK, and benchmarked Logistic Regression against Naive Bayes models to minimize false positive predictions by 20%. Includes interactive Google Colab notebook.",
    image: "/projects/twitter-sentiment.png",
    tech: ["Python", "Pandas", "NLTK", "Scikit-learn", "Tweepy", "Google Colab"],
    category: "ai-ml",
    liveUrl: "https://colab.research.google.com/drive/1cUcBBJK-P4jtTDYgBuTLT7btmbxKqGs9?usp=sharing",
    githubUrl: "https://github.com/NOiD-777/Twitter-Sentiment-Analysis",
    featured: true,
    metrics: ["1.6M Tweets Processed", "+25% Accuracy Gain", "-20% False Positives"],
  },
  {
    slug: "expense-tracker-angular",
    title: "Expense Tracker (ExWise)",
    subtitle: "Mobile-First Personal Finance App",
    storyDirective: "Financial sovereignty with zero cloud latency and total local privacy.",
    description:
      "Lightning-fast personal finance manager engineered for mobile screens with local-first persistence, reactive budget alerts, and zero tracking.",
    longDescription:
      "ExWise is tailored specifically for smartphone screens, delivering lightning-fast expense tracking without cloud latency. Features monthly budget alerts, category-wise breakdowns, interactive calendar history, and dark mode UI built with Angular and Tailwind CSS.",
    image: "/projects/expense-tracker.png",
    tech: ["Angular", "TypeScript", "Tailwind CSS", "LocalStorage", "Vercel"],
    category: "web",
    liveUrl: "https://exwise.vercel.app/",
    githubUrl: "https://github.com/NOiD-777/Expense-tracker-angular",
    featured: true,
    metrics: ["📱 Mobile-First UI", "100% Offline Capability", "Live on Vercel"],
  },
  {
    slug: "legalmind-ai",
    title: "LegalMind",
    subtitle: "Multi-Model Contract Risk Assessment",
    storyDirective: "Uncovering hidden contractual liabilities through multi-model consensus.",
    description:
      "Asynchronous legal audit engine comparing clause indemnity risks in parallel across Claude, Gemini, and Groq with FastAPI and Next.js.",
    longDescription:
      "LegalMind automates lengthy contract reviews by ingesting legal PDFs/DOCX agreements, extracting liability and indemnification clauses, and running parallel multi-model risk evaluations to highlight red flags with high confidence.",
    image: "/projects/legalmind.png",
    tech: ["Next.js", "FastAPI", "Python", "TypeScript", "Claude API", "Gemini API", "Groq"],
    category: "ai-ml",
    githubUrl: "https://github.com/NOiD-777/Legal_Mind",
    featured: false,
    metrics: ["Multi-LLM Consensus", "FastAPI Async Engine", "Risk Red Flagging"],
  },
  {
    slug: "face-recognition-edge",
    title: "Edge Face Recognition",
    subtitle: "Optimized Computer Vision Deployment",
    storyDirective: "Pushing computer vision to real-world edge hardware with tight thermal budgets.",
    description:
      "Lightweight biometric verification engine achieving ~92% accuracy with 35% reduced CPU overhead on constrained edge hardware via skip-frame algorithms.",
    longDescription:
      "Engineered during internship at Brihaspathi Technologies. Deployed on constrained edge devices using OpenCV and FastAPI. Implemented custom frame-skipping and resolution downscaling algorithms to ensure reliable real-time face verification with minimal compute overhead.",
    image: "/projects/face-recognition.png",
    tech: ["Python", "FastAPI", "OpenCV", "NumPy", "Edge Compute"],
    category: "ai-ml",
    featured: false,
    metrics: ["92% Detection Accuracy", "35% CPU Overhead Reduction", "Edge Verified"],
  },
];

export const projectCategories = [
  { id: "all", label: "All Missions" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "web", label: "Web & Full-Stack" },
  { id: "data", label: "Data & Systems" },
];
