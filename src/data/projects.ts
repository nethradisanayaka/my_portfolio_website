export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export type ProjectIconName =
  | "network"
  | "file-text"
  | "workflow"
  | "shield"
  | "history"
  | "chart"
  | "container"
  | "barcode"
  | "users"
  | "layers"
  | "scan"
  | "route";

export interface ProjectStat {
  value: string;
  label: string;
}

export interface ProjectFeature {
  title: string;
  icon: ProjectIconName;
  points: string[];
}

export interface ProjectHighlight {
  title: string;
  description: string;
  icon: ProjectIconName;
}

export interface ProjectArchitecture {
  summary: string;
  layers: { label: string; caption: string; icon: ProjectIconName }[];
  services: { name: string; port: string }[];
  database: { label: string; caption: string };
  notes: string[];
}

export interface ProjectStackGroup {
  group: string;
  items: string[];
}

export interface ProjectMilestone {
  step: string;
  title: string;
  description: string;
}

export interface ProjectTeam {
  summary: string;
  role: string;
  contributors: string[];
  note: string;
}

export interface ProjectLink {
  label: string;
  url: string;
  kind: "github" | "youtube";
}

export interface ProjectDetail {
  subtitle: string;
  overview: string[];
  stats: ProjectStat[];
  demo: { url: string; title: string };
  features: ProjectFeature[];
  highlights: ProjectHighlight[];
  architecture: ProjectArchitecture;
  stack: ProjectStackGroup[];
  journey: ProjectMilestone[];
  team: ProjectTeam;
  links: ProjectLink[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  role: string;
  technologies: string[];
  skills: string[];
  outcome: string;
  status: ProjectStatus;
  githubUrl: string;
  demoUrl: string;
  image?: string;
  imageAlt?: string;
  detail?: ProjectDetail;
}

export const projects: Project[] = [
  {
    id: "document-tracking-management-system",
    title: "Document Tracking & Management System",
    description: "Microservices-based enterprise document workflow platform.",
    category: "Full-Stack / Microservices",
    role: "Repository Contributor / Full-Stack Development",
    technologies: ["Spring Boot", "Spring Cloud", "PHP", "MySQL", "Docker"],
    skills: [
      "Microservices & API gateway routing",
      "Role-based access control",
      "Multi-stage workflow automation",
      "Auditing",
      "Docker Compose",
    ],
    outcome:
      "Paper-based document handoffs replaced with a structured, auditable digital workflow across five user roles.",
    status: "Completed",
    githubUrl: "GITHUB_REPOSITORY_URL",
    demoUrl: "https://youtu.be/12oefBeji9k",
    detail: {
      subtitle: "Enterprise Document Workflow Platform",
      overview: [
        "A microservices-based enterprise document tracking and management platform designed to digitize document routing, approval, tracking, and auditing across organizational departments.",
        "The system replaces manual, paper-based document handoffs with a structured and auditable digital workflow. Each document receives a unique tracking number and barcode, follows configurable multi-stage approval workflows, and maintains a detailed audit trail.",
        "The system was developed collaboratively by three developers using a shared GitHub repository.",
      ],
      stats: [
        { value: "4", label: "Microservices / Gateway + Services" },
        { value: "14", label: "Database Tables" },
        { value: "5", label: "User Roles" },
        { value: "100%", label: "Actions Logged to Audit Trail" },
      ],
      demo: {
        url: "https://youtu.be/12oefBeji9k",
        title: "Document Tracking & Management System — project demo",
      },
      features: [
        {
          title: "Microservices Architecture",
          icon: "network",
          points: [
            "Spring Cloud Gateway as the single API entry point",
            "Independent Spring Boot services",
            "Gateway on port 8080",
            "User Authentication Service on port 8081",
            "Document Service on port 8082",
            "Workflow Service on port 8083",
          ],
        },
        {
          title: "Document Management",
          icon: "file-text",
          points: [
            "Document CRUD operations",
            "Unique document tracking numbers",
            "Barcode generation",
            "File attachments",
            "Document tracking",
          ],
        },
        {
          title: "Workflow Automation",
          icon: "workflow",
          points: [
            "Configurable workflow templates",
            "Multi-stage approval chains",
            "Department-based routing",
            "Approval and rejection workflows",
            "Workflow reporting",
          ],
        },
        {
          title: "Role-Based Access Control",
          icon: "shield",
          points: [
            "Super Admin",
            "Document Sender",
            "Department Officer / Head",
            "Registrar",
            "Role-based permissions — users can only perform actions permitted by their role",
          ],
        },
        {
          title: "Audit Trail",
          icon: "history",
          points: [
            "Logs login, document creation, approval, rejection, transfers, and user actions",
            "Records include timestamp, user, IP address, and comments",
          ],
        },
        {
          title: "Dashboard & Analytics",
          icon: "chart",
          points: [
            "Document statistics",
            "Approval statistics",
            "Department workload",
            "Monthly document volume",
            "Processing-time analytics",
            "User/activity information",
          ],
        },
        {
          title: "Containerized Deployment",
          icon: "container",
          points: [
            "Dockerized backend services",
            "Docker Compose orchestration",
            "MySQL container",
            "Reproducible development environment",
          ],
        },
      ],
      highlights: [
        {
          title: "Workflow Automation",
          description:
            "Multi-stage approval chains automatically route documents through departments.",
          icon: "workflow",
        },
        {
          title: "Full Audit Trail",
          description:
            "System actions are recorded with timestamps, users, IP addresses, and comments.",
          icon: "history",
        },
        {
          title: "Barcode Integration",
          description: "Documents receive unique tracking numbers and scannable barcodes.",
          icon: "barcode",
        },
        {
          title: "Role-Based Access",
          description: "Different user roles have enforced permissions.",
          icon: "shield",
        },
        {
          title: "Microservices Separation",
          description: "Backend functionality is separated into independent services.",
          icon: "layers",
        },
        {
          title: "Reporting & Analytics",
          description:
            "Dashboards provide document volume, workload, approval, and processing-time information.",
          icon: "chart",
        },
      ],
      architecture: {
        summary:
          "The Spring Cloud Gateway acts as the single entry point and routes every request to the appropriate microservice.",
        layers: [
          { label: "Browser", caption: "AdminLTE client", icon: "scan" },
          { label: "PHP Frontend / AdminLTE", caption: "Bootstrap 5, jQuery, AJAX", icon: "file-text" },
          { label: "Spring Cloud Gateway", caption: "Single API entry point", icon: "route" },
        ],
        services: [
          { name: "User Authentication Service", port: "8081" },
          { name: "Document Service", port: "8082" },
          { name: "Workflow Service", port: "8083" },
        ],
        database: { label: "MySQL 8", caption: "14 relational tables" },
        notes: [
          "The backend services and MySQL are containerized using Docker Compose.",
          "Requests enter through the gateway and are forwarded to the microservice that owns the capability.",
        ],
      },
      stack: [
        {
          group: "Frontend",
          items: ["PHP 8", "Apache / XAMPP", "Bootstrap 5", "AdminLTE 3.2", "jQuery", "AJAX", "Chart.js", "DataTables", "JsBarcode"],
        },
        {
          group: "Backend",
          items: ["Spring Boot 3.2", "Spring Security", "Spring Data JPA", "Spring Cloud Gateway", "Maven"],
        },
        {
          group: "Database",
          items: ["MySQL 8", "phpMyAdmin", "14 relational tables"],
        },
        {
          group: "DevOps / Tools",
          items: ["Docker", "Docker Compose", "Java 17", "Composer", "Node.js", "Git", "GitHub", "GitHub Actions"],
        },
      ],
      journey: [
        {
          step: "01",
          title: "Requirement Gathering",
          description:
            "Identified problems in manual, paper-based document routing and defined user roles.",
        },
        {
          step: "02",
          title: "Planning & Design",
          description:
            "Designed the microservices architecture, database schema, and multi-stage approval workflow.",
        },
        {
          step: "03",
          title: "Development & Testing",
          description:
            "Developed the gateway, Spring Boot services, PHP/AdminLTE frontend, and tested role-based workflows.",
        },
        {
          step: "04",
          title: "Containerization & Deployment",
          description:
            "Dockerized the backend services and MySQL using Docker Compose and maintained the project through GitHub.",
        },
      ],
      team: {
        summary:
          "This was a collaborative project developed by three contributors working in a shared GitHub repository.",
        role: "My Role: Repository Contributor / Full-Stack Development",
        contributors: ["Nethra Disanayaka", "osandi2003", "hiruni2002"],
        note: "I was one of the repository contributors on this project.",
      },
      links: [
        { label: "GitHub Repository", url: "GITHUB_REPOSITORY_URL", kind: "github" },
        { label: "YouTube Demo", url: "https://youtu.be/12oefBeji9k", kind: "youtube" },
      ],
    },
  },
];

export const projectsNote =
  "Projects are listed with the role I held, the technologies used, and verified links. Each card opens a detailed view with the architecture, features, and development journey.";
