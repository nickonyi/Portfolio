export const projects = [
  {
    title: "Service Desk Reporting System",
    subtitle: "IT Operations & Service Management",
    flagship: true,
    description:
      "A centralized service desk application built to improve visibility into IT support operations, replacing manual Excel-based tracking with a structured system for managing tickets, monitoring recurring issues, and reporting on support activities across multiple locations.",
    highlights: [
      "Centralized IT ticket tracking across multiple locations",
      "Ticket categorization by issue type, support tier, and business location",
      "Ticket lifecycle management with statuses for tracking progress and resolution",
      "Structured reporting to identify recurring issues and improve operational visibility",
    ],
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Cloudinary",
    ],
    links: {
      github: "",
      live: "https://service-desk-and-reporting-system.vercel.app/",
    },
  },
  {
    title: "SecurePass",
    subtitle: "Visitor Management System",
    description:
      "A web-based visitor management system designed to support estate access management by connecting residents, security personnel, and estate administrators through a centralized application.",
    highlights: [
      "Role-based access for residents, guards, estate managers, and system administrators",
      "Backend API development using Express and Prisma",
      "Session-based authentication using Passport.js",
      "PostgreSQL database design and integration",
      "Application deployment and configuration on a Linux VPS using Nginx",
    ],
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Passport.js",
      "Linux",
      "Nginx",
    ],
    links: {
      github: "",
      live: "https://securepass.ascribe.africa",
    },
  },
  {
    title: "File Uploader",
    subtitle: "Full-Stack File Management Application",
    description:
      "A full-stack web application for uploading and organizing files, built with a React frontend and an Express backend. The application uses PostgreSQL for persistent data storage and session-based authentication.",
    highlights: [
      "REST API development for authentication, file, and folder management",
      "Session-based authentication using Passport.js",
      "Relational database management using PostgreSQL and Prisma ORM",
      "Frontend and backend organization within a monorepo",
      "Application deployment using Vercel, Render, and Neon",
    ],
    tech: [
      "JavaScript",
      "React",
      "Vite",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Passport.js",
    ],
    links: {
      github: "https://github.com/nickonyi/file-uploader",
      live: "https://file-uploader-4yun.vercel.app",
    },
  },
];
