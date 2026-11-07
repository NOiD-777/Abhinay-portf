export interface Skill {
  name: string;
  icon: string;
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
    description: "Autonomous agent workflows, prompt engineering, RAG, and production LLM orchestration.",
    iconName: "Brain",
    skills: [
      { name: "Gemini API", icon: "SiGoogle" },
      { name: "OpenAI", icon: "SiOpenai" },
      { name: "LangChain & LangGraph", icon: "SiLangchain" },
      { name: "Agentic Tool Calling", icon: "SiOpenai" },
      { name: "RAG & Vector Search", icon: "SiOpenai" },
      { name: "Pydantic Schemas", icon: "SiPython" },
    ],
  },
  {
    title: "Full-Stack & Web",
    description: "High-performance responsive applications, interactive UIs, and robust architectures.",
    iconName: "Globe",
    skills: [
      { name: "React.js", icon: "SiReact" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Angular", icon: "SiAngular" },
      { name: "Tailwind CSS", icon: "SiTailwindcss" },
      { name: "Node.js", icon: "SiNodedotjs" },
      { name: "Express.js", icon: "SiExpress" },
    ],
  },
  {
    title: "Data Engineering & Cloud",
    description: "Enterprise data pipelines, lakehouse architectures, and cloud services.",
    iconName: "Cloud",
    skills: [
      { name: "Databricks", icon: "SiDatabricks" },
      { name: "PySpark", icon: "SiApachespark" },
      { name: "Delta Lake", icon: "SiDatabricks" },
      { name: "Microsoft Azure", icon: "SiMicrosoftazure" },
      { name: "AWS (EC2, ECS, Lambda)", icon: "SiAmazonwebservices" },
      { name: "GCP", icon: "SiGooglecloud" },
    ],
  },
  {
    title: "Languages & Backend",
    description: "Scalable microservices, distributed computing, and RESTful APIs.",
    iconName: "Code",
    skills: [
      { name: "Python", icon: "SiPython" },
      { name: "SQL", icon: "SiPostgresql" },
      { name: "FastAPI", icon: "SiFastapi" },
      { name: "Java", icon: "SiOpenjdk" },
      { name: "C#", icon: "SiCsharp" },
      { name: "C", icon: "SiC" },
      { name: "RESTful APIs", icon: "SiSwagger" },
    ],
  },
  {
    title: "Machine Learning & Vision",
    description: "Edge computer vision, predictive modeling, and deep learning pipelines.",
    iconName: "Eye",
    skills: [
      { name: "Scikit-learn", icon: "SiScikitlearn" },
      { name: "OpenCV", icon: "SiOpencv" },
      { name: "TensorFlow", icon: "SiTensorflow" },
      { name: "Keras", icon: "SiKeras" },
      { name: "Pandas", icon: "SiPandas" },
      { name: "NumPy", icon: "SiNumpy" },
    ],
  },
  {
    title: "Databases & Dev Tools",
    description: "Reliable database systems, version control, and containerization.",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "MongoDB Atlas", icon: "SiMongodb" },
      { name: "Git", icon: "SiGit" },
      { name: "GitHub", icon: "SiGithub" },
      { name: "Postman", icon: "SiPostman" },
      { name: "Vite", icon: "SiVite" },
    ],
  },
];

