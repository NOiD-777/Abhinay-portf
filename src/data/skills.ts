export interface Skill {
  name: string;
  icon?: string;
  level?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Generative AI & LLMs",
    description: "Production LLM orchestration, multi-agent reasoning, RAG pipelines, and prompt engineering.",
    iconName: "Brain",
    skills: [
      { name: "Gemini API" },
      { name: "OpenAI" },
      { name: "LangChain" },
      { name: "Hugging Face" },
      { name: "RAG Architectures" },
      { name: "AI Agents" },
      { name: "Prompt Engineering" },
    ],
  },
  {
    title: "Cloud & Big Data",
    description: "Enterprise Databricks lakehouse pipelines, PySpark clusters, and multi-cloud streaming.",
    iconName: "Cloud",
    skills: [
      { name: "Databricks" },
      { name: "PySpark" },
      { name: "Delta Lake" },
      { name: "Microsoft Azure" },
      { name: "AWS (EC2, ECS, Lambda)" },
      { name: "Google Cloud (GCP)" },
    ],
  },
  {
    title: "Full-Stack & Web",
    description: "High-performance reactive web applications, component design systems, and modern APIs.",
    iconName: "Globe",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Angular" },
      { name: "Tailwind CSS" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "HTML5" },
      { name: "CSS3" },
    ],
  },
  {
    title: "Languages & Backend",
    description: "High-concurrency backend services, distributed systems, and scalable RESTful microservices.",
    iconName: "Code",
    skills: [
      { name: "Python" },
      { name: "FastAPI" },
      { name: "SQL" },
      { name: "PostgreSQL" },
      { name: "Java" },
      { name: "C#" },
      { name: "C" },
      { name: "RESTful APIs" },
      { name: "Microservices" },
    ],
  },
  {
    title: "Machine Learning & Vision",
    description: "Edge computer vision, deep learning models, sentiment analysis, and numerical processing.",
    iconName: "Eye",
    skills: [
      { name: "Scikit-learn" },
      { name: "OpenCV" },
      { name: "TensorFlow" },
      { name: "Keras" },
      { name: "Pandas" },
      { name: "NumPy" },
      { name: "Matplotlib" },
    ],
  },
  {
    title: "Databases & Dev Tools",
    description: "Relational & NoSQL persistence, cloud data warehouses, version control, and CI/CD tools.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB Atlas" },
      { name: "Git" },
      { name: "GitHub" },
      { name: "Postman" },
      { name: "Vite" },
      { name: "Google Colab" },
      { name: "Power BI" },
    ],
  },
];
