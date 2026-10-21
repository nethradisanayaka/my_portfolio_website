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
  | "route"
  | "timer"
  | "list-checks"
  | "printer"
  | "pen-line"
  | "sparkles"
  | "graduation-cap";

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
  servicesLabel?: string;
  services: { name: string; port?: string; caption?: string }[];
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
  {
    id: "learning-management-system",
    title: "Learning Management System",
    description:
      "Role-based PHP & MySQL exam platform with timed papers, automatic grading, and published results.",
    category: "Full-Stack / PHP & MySQL",
    role: "Solo Developer / Full-Stack Development",
    technologies: ["PHP 8", "MySQL", "JavaScript", "HTML5", "CSS3", "Apache / XAMPP"],
    skills: [
      "Role-based authentication & sessions",
      "Relational schema design with foreign keys",
      "AJAX heartbeat time syncing",
      "Auto-grading and manual grading workflows",
      "Dynamic question builder",
      "Print-optimised reporting",
    ],
    outcome:
      "Manual exam administration replaced by a self-service platform where teachers schedule and grade papers while students attempt them against a server-synced timer.",
    status: "Completed",
    githubUrl: "https://github.com/nethradisanayaka/Learning-Management-System",
    demoUrl: "LMS_YOUTUBE_VIDEO_URL",
    detail: {
      subtitle: "Advanced Online Exam Management Platform",
      overview: [
        "A role-based learning management system built for online assessments, covering the complete exam lifecycle — authoring and scheduling, sitting a timed paper, automatic and manual grading, and publishing results.",
        "Teachers compose exams with a dynamic question builder, set a duration and an availability window, and either publish immediately or schedule the release. Students only see the exams published to them, attempt the paper against a server-synced countdown, and can open their results only once the teacher releases the marks.",
        "The interface was written from scratch in custom CSS with a dark glassmorphism treatment, and every database call goes through a prepared statement against a normalised MySQL schema built on cascading foreign keys.",
      ],
      stats: [
        { value: "26", label: "PHP Pages & Endpoints" },
        { value: "8", label: "Relational Tables" },
        { value: "4", label: "Question Types" },
        { value: "2", label: "User Roles" },
      ],
      demo: {
        url: "LMS_YOUTUBE_VIDEO_URL",
        title: "Learning Management System — project demo",
      },
      features: [
        {
          title: "Role-Based Access Control",
          icon: "shield",
          points: [
            "Student self-registration with duplicate email validation",
            "Teacher selection at sign-up creates the student–teacher link",
            "Separate student login and staff login entry points",
            "Session-based routing to the correct dashboard",
            "Profile update with optional password change",
            "Every protected page re-checks the session role",
          ],
        },
        {
          title: "Exam Authoring & Publishing",
          icon: "workflow",
          points: [
            "Dynamic question builder for four question types",
            "MCQ, True/False, Short Answer, and Essay questions",
            "Four-option MCQ authoring with the correct option selected",
            "Per-question mark allocation",
            "Publish now or schedule the release for a future date",
            "Draft, published, and scheduled states with preview",
            "Edit and delete exams with cascading cleanup",
          ],
        },
        {
          title: "Timed Exam Engine",
          icon: "timer",
          points: [
            "Countdown derived from the exam duration",
            "Heartbeat sync to the server every two seconds",
            "Elapsed time accumulated server-side per attempt",
            "Timer resynchronised when the tab is hidden or returned to",
            "Automatic submission when the countdown reaches zero",
            "Resubmission allowed with carried-over time",
          ],
        },
        {
          title: "Automatic & Manual Grading",
          icon: "list-checks",
          points: [
            "MCQ and True/False auto-graded on submission",
            "Case-insensitive comparison against the correct answer",
            "Short Answer and Essay left for teacher review",
            "Auto-graded marks shown read-only to the teacher",
            "Scores written to the attempt once grading completes",
            "Marks released to students only when published",
          ],
        },
        {
          title: "Results & Printed Reports",
          icon: "printer",
          points: [
            "Class results table with status badges and grades",
            "Print-optimised exam report for the teacher",
            "Student result sheet with awarded and maximum marks",
            "Percentage and submission time per student",
            "Results hidden until the teacher publishes the marks",
          ],
        },
        {
          title: "Role Dashboards",
          icon: "chart",
          points: [
            "Teacher dashboard for exams, students, marks, and results",
            "Student dashboard listing available exams",
            "Live remaining-time display refreshed over AJAX",
            "Exam states for not started, expired, ongoing, and completed",
          ],
        },
        {
          title: "Relational Database Design",
          icon: "layers",
          points: [
            "Eight InnoDB tables in the Exam_database schema",
            "Users, teacher_student, exams, questions, and options",
            "exam_attempts and student_answers for submissions",
            "Foreign keys with ON DELETE CASCADE throughout",
            "Setup script and seed data for demo accounts",
          ],
        },
      ],
      highlights: [
        {
          title: "Server-Synced Countdown",
          description:
            "Elapsed time is reported to the server every two seconds, so leaving the exam tab does not grant extra time.",
          icon: "timer",
        },
        {
          title: "Scheduled Publishing",
          description:
            "Exams can be released immediately or scheduled for a future date, and students only ever see released papers.",
          icon: "workflow",
        },
        {
          title: "Hybrid Grading",
          description:
            "Objective questions are auto-graded on submission while written answers are graded manually by the teacher.",
          icon: "list-checks",
        },
        {
          title: "Teacher–Student Linking",
          description:
            "A many-to-many junction table keeps each student's exam list restricted to their assigned teachers.",
          icon: "users",
        },
        {
          title: "Cascading Schema",
          description:
            "Deleting an exam removes its questions, options, attempts, and answers through cascading foreign keys.",
          icon: "layers",
        },
        {
          title: "Print-Ready Results",
          description:
            "Teacher reports and student result sheets are styled for print, ready to be filed as hard copies.",
          icon: "printer",
        },
      ],
      architecture: {
        summary:
          "A server-rendered PHP application. Role-specific pages drive the workflows, while dedicated action endpoints process the forms and serve the AJAX calls made by the exam timer.",
        layers: [
          { label: "Browser", caption: "Custom glassmorphism interface", icon: "scan" },
          { label: "PHP Presentation Layer", caption: "Server-rendered pages per role", icon: "file-text" },
          { label: "Action Endpoints", caption: "Form handling and JSON responses", icon: "route" },
        ],
        servicesLabel: "Application Modules",
        services: [
          { name: "Teacher Module", caption: "8 pages" },
          { name: "Student Module", caption: "4 pages" },
          { name: "Action Endpoints", caption: "7 handlers" },
        ],
        database: { label: "MySQL / MariaDB", caption: "8 InnoDB tables with cascading foreign keys" },
        notes: [
          "All queries use mysqli prepared statements, and every relationship is enforced with ON DELETE CASCADE.",
          "Sessions carry the signed-in user and role, and each protected page re-checks the role before rendering.",
          "The countdown timer reports elapsed time to the server on a two-second heartbeat and again on submit.",
          "The schema is normalised around users, exams, questions, attempts, and answers.",
        ],
      },
      stack: [
        {
          group: "Frontend",
          items: ["HTML5", "Custom CSS3", "CSS custom properties", "Glassmorphism UI", "Vanilla JavaScript", "Fetch / AJAX", "Print stylesheets"],
        },
        {
          group: "Backend",
          items: ["PHP 8", "Session-based auth", "mysqli prepared statements", "Modular action handlers", "Role guards", "Flash messages"],
        },
        {
          group: "Database",
          items: ["MySQL / MariaDB", "InnoDB", "utf8mb4", "8 relational tables", "ON DELETE CASCADE", "Seed script"],
        },
        {
          group: "DevOps / Tools",
          items: ["Apache (XAMPP)", "phpMyAdmin", "Local setup script", "Git", "GitHub"],
        },
      ],
      journey: [
        {
          step: "01",
          title: "Requirement & Data Modelling",
          description:
            "Mapped the exam lifecycle for teachers and students and designed the eight-table schema linking users, exams, questions, attempts, and answers.",
        },
        {
          step: "02",
          title: "Interface & Authentication",
          description:
            "Built the role-aware login, student registration with teacher linking, and the custom dark glassmorphism design system used across every page.",
        },
        {
          step: "03",
          title: "Exam Engine",
          description:
            "Implemented the question builder, scheduled publishing, the server-synced countdown, and the submission flow with automatic grading for objective questions.",
        },
        {
          step: "04",
          title: "Grading & Reporting",
          description:
            "Added the teacher grading screens, the marks publishing gate, the results table, and the print-optimised report and result sheet.",
        },
      ],
      team: {
        summary:
          "This was developed as an individual project, covering the full stack from the relational schema and the PHP backend through to the custom front-end.",
        role: "My Role: Solo Developer / Full-Stack Development",
        contributors: ["YMND Disanayaka (solo developer)"],
        note: "I designed the database schema, built the PHP backend, and wrote the front-end interface for this project.",
      },
      links: [
        { label: "GitHub Repository", url: "https://github.com/nethradisanayaka/Learning-Management-System", kind: "github" },
        { label: "YouTube Demo", url: "LMS_YOUTUBE_VIDEO_URL", kind: "youtube" },
      ],
    },
  },
];

export const projectsNote =
  "Projects are listed with the role I held, the technologies used, and verified links. Each card opens a detailed view with the architecture, features, and development journey.";
