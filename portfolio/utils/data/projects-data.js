import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Telehealth Platform",
    description:
      "Developed and maintained core backend modules for a largescale, HIPAA-compliant telehealth application. Integrated Agora for real-time video/chat, multiple payment gateways, Claim.MD for medical claims processing, and built an AI Health Assistant to enable intelligent, context-aware patient-doctor interactions.",
    tools: [
      "Python",
      "SQL Server",
      "Agora",
      "OpenAI",
      ".NET Core",
      "Stripe",
      "Firebase'",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Backend & AI Engineer",
  },
  {
    id: 2,
    name: "Safety & Compliance Training",
    description:
      "Built a Conversational AI Assistant with Knowledge Base RAG system for accurate HAZWOPER and OSHA compliance responses, Tool Calling via MCP for dynamic backend and database interaction, guardrails for safe on-topic responses, and cost optimization to reduce token usage at scale.",
    tools: [
      "FastAPI",
      "n8n",
      "OpenAI",
      "MCP Server",
      "Tool Calling",
      "RAG",
      "WebSocket",
    ],
    role: "AI Engineer",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 3,
    name: "Construction Project Management",
    description:
      "Designed and implemented a Reactive AI Assistant into the BuildNest platform, enabling stakeholders to instantly query project status, track timelines, and manage workflows, making construction project management faster and more intuitive.",
    tools: ["Typescript", "tRPC", "OpenAI", "MCP Server", "Tool Calling"],
    role: "AI Engineer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 4,
    name: "Fleet Management",
    description:
      "Built a modern fleet management platform enabling companies to track vehicles in real time, monitor driver behavior, and manage safety compliance from a centralized dashboard.",
    tools: [
      "TypeScript",
      "NextJs",
      "Tailwind CSS",
      ".NET Core",
      "SQL Server",
      "Google Maps",
      "Leaflet Map'",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Full-Stack Engineer",
  },
  {
    id: 5,
    name: "Ticket Management System",
    description:
      "Developed an end-to-end ticket and queue management system, handling real-time queue processing, status tracking, and workflow automation across service desks.",
    tools: ["FastAPI", "ReactJs", "PostgreSQL", "React Query'"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full-Stack Engineer",
  },
  {
    id: 6,
    name: "Gym & Fitness Management",
    description:
      "Built the backend for FitnFi, a gym management platform centralizing member registrations, renewals, attendance, payments, credits, meal plans, and workout programs.",
    tools: ["FastAPI", "PostgreSQL", "SQLAlchemy", "Redis'"],
    code: "",
    demo: "",
    image: ayla,
    role: "Backend Engineer",
  },
  {
    id: 7,
    name: "CRM/ERP",
    description:
      "Developed an end-to-end CRM/ERP solution, delivering enhanced operational efficiency, improved data accuracy, and automated processes.",
    tools: [
      "NextJs",
      "Shadcn UI",
      ".NET Core",
      "SQL Server",
      "JWT",
      "SendGrid'",
    ],
    code: "",
    role: "Full-Stack Engineer",
    demo: "",
    image: realEstate,
  },
  {
    id: 8,
    name: "Amazon SaaS Portal",
    description:
      "Built an Amazon SaaS Portal for sellers to manage products, track sales, and automate reporting with real-time analytics and API integrations.",
    tools: [
      "ReactJs",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Mailgun'",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "Full-Stack Engineer",
  },
  {
    id: 9,
    name: "Energy Inspection System",
    description:
      "Developed an oil & gas inspection system to streamline inspections, manage reports with images/PDFs, and automate the approval process from QAQC to final audit.",
    tools: ["NextJs", ".NET Core", "SQL Server", "Highcharts", "Leaflet Map'"],
    code: "",
    demo: "",
    image: ayla,
    role: "Full-Stack Engineer",
  },
];
