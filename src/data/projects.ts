export interface Project {
  slug: string;
  title: string;
  subtitle: string;
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
    description:
      "Full-stack AI cultural platform that analyzes and classifies 8 traditional Indian art styles using Gemini API, LangChain, interactive maps, and confidence scoring.",
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
    metrics: ["🏆 BuildAI4India Winner", "8 Art Styles Classified", "Sub-second Query Latency"],
  },
  {
    slug: "twitter-sentiment-analysis",
    title: "Twitter Sentiment Analysis",
    subtitle: "Large-Scale NLP Pipeline",
    description:
      "Machine learning sentiment classification pipeline trained over 1.6M tweets from the Sentiment140 dataset with 25% accuracy improvement.",
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
    description:
      "Production-grade mobile-first expense manager featuring interactive analytics dashboards, calendar tracking, and local storage state persistence.",
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
    slug: "resumeradar",
    title: "ResumeRadar",
    subtitle: "AI Candidate Evaluation Engine",
    description:
      "Recruiter intelligence application integrating Gemini 2.5 Flash API, automated n8n workflows, PDF parsing, and candidate scoring in MongoDB Atlas.",
    longDescription:
      "Developed to streamline tech recruiting, ResumeRadar parses complex resume PDFs, scores skills against job descriptions with Gemini 2.5 Flash, and orchestrates candidate evaluation pipelines through n8n automation webhooks and MongoDB Atlas storage.",
    image: "/projects/resumeradar.png",
    tech: ["React", "TypeScript", "Node.js", "Gemini API", "MongoDB Atlas", "n8n"],
    category: "ai-ml",
    githubUrl: "https://github.com/NOiD-777/ResumeRadar",
    featured: false,
    metrics: ["Automated n8n Workflows", "Gemini 2.5 Flash Scoring", "PDF Extraction"],
  },
  {
    slug: "legalmind-ai",
    title: "LegalMind",
    subtitle: "Multi-Model Contract Risk Assessment",
    description:
      "Legal document risk evaluation platform with FastAPI and Next.js, comparing clause risks across Anthropic Claude, Gemini, and Groq.",
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
    description:
      "Lightweight edge face detection & verification system achieving 92% accuracy with 35% CPU usage reduction through skip-frame pipelines.",
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
  { id: "all", label: "All Projects" },
  { id: "ai-ml", label: "AI & Machine Learning" },
  { id: "web", label: "Web & Full-Stack" },
  { id: "data", label: "Data & Systems" },
];

