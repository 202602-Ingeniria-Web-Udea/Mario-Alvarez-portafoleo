// ES/EN UI dictionary. Default language is Spanish.
// Array items (knowledge, education, projects) align by index with the
// language-neutral arrays in `@/data/profile`.

export type Lang = "es" | "en";

export const defaultLang: Lang = "es";

export const langStorageKey = "portfolio-lang";

interface KnowledgeText {
  title: string;
  description: string;
}

interface EducationText {
  role: string;
  certificate: string;
  description: string;
}

interface ProjectText {
  title: string;
  tag: string;
  description: string;
  details: string;
}

export interface Dictionary {
  role: string;
  heroGreeting: string;
  bio: string;
  hireMe: string;
  downloadCV: string;
  learnMore: string;
  close: string;
  viewCode: string;
  follow: string;
  available: string;
  contactLabels: Record<string, string>;
  languageNames: Record<string, string>;
  extraSkillNames: Record<string, string>;
  sidebarSections: {
    languages: string;
    skills: string;
    extraSkills: string;
  };
  knowledge: {
    title: string;
    subtitle: string;
    items: KnowledgeText[];
  };
  education: {
    title: string;
    subtitle: string;
    items: EducationText[];
  };
  portfolio: {
    title: string;
    subtitle: string;
    scrollLeft: string;
    scrollRight: string;
    details: string;
    closeDialog: string;
  };
  projects: ProjectText[];
  profileDialog: {
    title: string;
    closeDialog: string;
    emailLabel: string;
    topSkills: string;
  };
}

const es: Dictionary = {
  role: "Estudiante de Ingeniería de Sistemas",
  heroGreeting: "Hola, soy",
  bio: "Estudiante de Ingeniería de Sistemas en la Universidad de Antioquia (Medellín). Construyo interfaces web rápidas y accesibles con HTML, CSS, JavaScript y Python, con enfoque en código limpio y trabajo en equipo.",
  hireMe: "Contrátame",
  downloadCV: "Descargar CV",
  learnMore: "Ver más →",
  close: "Cerrar",
  viewCode: "Ver código",
  follow: "Sígueme",
  available: "Disponible",
  contactLabels: {
    city: "Ciudad",
    phone: "Teléfono",
    email: "Correo",
    freelance: "Freelance",
  },
  languageNames: {
    spanish: "Español",
    english: "Inglés (B1)",
  },
  extraSkillNames: {
    teamwork: "Trabajo en equipo",
    communication: "Comunicación efectiva",
    git: "Git y GitHub",
    agile: "Metodologías ágiles",
    problemSolving: "Resolución de problemas",
  },
  sidebarSections: {
    languages: "Idiomas",
    skills: "Habilidades",
    extraSkills: "Habilidades Extra",
  },
  knowledge: {
    title: "Mis Conocimientos",
    subtitle:
      "Lo que aporto como estudiante de Ingeniería de Sistemas: interfaces, código y datos.",
    items: [
      {
        title: "Desarrollo Web",
        description:
          "Sitios responsivos y accesibles con HTML, CSS y JavaScript.",
      },
      {
        title: "Programación",
        description:
          "Código limpio y legible en Python y JavaScript, con Git.",
      },
      {
        title: "Diseño de Interfaces",
        description: "Prototipos claros y sistemas de diseño simples.",
      },
      {
        title: "Bases de Datos",
        description: "Modelado básico y consultas SQL para apps pequeñas.",
      },
      {
        title: "Contenido Multimedia",
        description:
          "Imágenes y recursos visuales optimizados para la web.",
      },
      {
        title: "Lógica y Algoritmia",
        description:
          "Ejercicios y minijuegos en JavaScript para pensar mejor.",
      },
    ],
  },
  education: {
    title: "Educación",
    subtitle: "Mi camino de formación en sistemas y desarrollo web.",
    items: [
      {
        role: "Estudiante",
        certificate: "Ingeniería de Sistemas (en curso)",
        description:
          "Formación en fundamentos de programación, estructuras de datos y desarrollo de software en la Universidad de Antioquia.",
      },
      {
        role: "Estudiante",
        certificate: "Bachiller Académico",
        description:
          "Educación secundaria con énfasis en matemáticas e informática.",
      },
      {
        role: "Estudiante",
        certificate: "Diplomado en Desarrollo Web",
        description:
          "Curso práctico de HTML, CSS, JavaScript y control de versiones con Git y GitHub.",
      },
    ],
  },
  portfolio: {
    title: "Portafolio",
    subtitle: "Proyectos académicos y personales. Desliza para explorar.",
    scrollLeft: "Desplazar portafolio a la izquierda",
    scrollRight: "Desplazar portafolio a la derecha",
    details: "detalles",
    closeDialog: "Cerrar diálogo del proyecto",
  },
  projects: [
    {
      title: "Sistema de Inventarios",
      tag: "Sistema",
      description: "Control de stock con entradas, salidas y reportes básicos.",
      details:
        "Aplicación web para registrar productos, controlar entradas y salidas de stock y generar reportes simples. Incluye autenticación básica y tablas con filtros.",
    },
    {
      title: "Página Web para Curso",
      tag: "Plantilla",
      description: "Landing page responsiva con secciones reutilizables.",
      details:
        "Landing page construida con Next.js y Tailwind CSS: hero, grilla de contenidos y sección de contacto, con diálogos accesibles.",
    },
    {
      title: "App de Tareas",
      tag: "Aplicación",
      description: "Lista de tareas con filtros, prioridades y guardado local.",
      details:
        "Aplicación de tareas en React con filtros por estado, niveles de prioridad y persistencia en el navegador. Enfoque en componentes simples y código limpio.",
    },
  ],
  profileDialog: {
    title: "Perfil de contacto",
    closeDialog: "Cerrar diálogo de contacto",
    emailLabel: "Correo",
    topSkills: "Habilidades principales",
  },
};

const en: Dictionary = {
  role: "Systems Engineering Student",
  heroGreeting: "Hello, I'm",
  bio: "Systems Engineering student at Universidad de Antioquia (Medellín). I build fast, accessible web interfaces with HTML, CSS, JavaScript, and Python, focused on clean code and teamwork.",
  hireMe: "Hire me",
  downloadCV: "Download CV",
  learnMore: "Learn more →",
  close: "Close",
  viewCode: "View code",
  follow: "Follow",
  available: "Available",
  contactLabels: {
    city: "City",
    phone: "Phone",
    email: "Email",
    freelance: "Freelance",
  },
  languageNames: {
    spanish: "Spanish",
    english: "English (B1)",
  },
  extraSkillNames: {
    teamwork: "Teamwork",
    communication: "Effective communication",
    git: "Git and GitHub",
    agile: "Agile methodologies",
    problemSolving: "Problem solving",
  },
  sidebarSections: {
    languages: "Languages",
    skills: "Skills",
    extraSkills: "Extra Skills",
  },
  knowledge: {
    title: "My Knowledge",
    subtitle:
      "What I bring as a Systems Engineering student: interfaces, code, and data.",
    items: [
      {
        title: "Web Development",
        description:
          "Responsive, accessible sites with HTML, CSS, and JavaScript.",
      },
      {
        title: "Programming",
        description: "Clean, readable Python and JavaScript code, with Git.",
      },
      {
        title: "Interface Design",
        description: "Clear prototypes and simple design systems.",
      },
      {
        title: "Databases",
        description: "Basic modeling and SQL queries for small apps.",
      },
      {
        title: "Multimedia Content",
        description: "Optimized images and visual assets for the web.",
      },
      {
        title: "Logic & Algorithms",
        description: "JavaScript exercises and mini-games for sharper thinking.",
      },
    ],
  },
  education: {
    title: "Education",
    subtitle: "My training path in systems and web development.",
    items: [
      {
        role: "Student",
        certificate: "Systems Engineering (in progress)",
        description:
          "Training in programming fundamentals, data structures, and software development at Universidad de Antioquia.",
      },
      {
        role: "Student",
        certificate: "High School Diploma",
        description:
          "Secondary education with an emphasis on mathematics and computer science.",
      },
      {
        role: "Student",
        certificate: "Web Development Diploma",
        description:
          "Hands-on course in HTML, CSS, JavaScript, and version control with Git and GitHub.",
      },
    ],
  },
  portfolio: {
    title: "Portfolio",
    subtitle: "Academic and personal projects. Scroll sideways to explore.",
    scrollLeft: "Scroll portfolio left",
    scrollRight: "Scroll portfolio right",
    details: "details",
    closeDialog: "Close project dialog",
  },
  projects: [
    {
      title: "Inventory Management System",
      tag: "System",
      description: "Stock control with entries, exits, and basic reports.",
      details:
        "Web app to register products, track stock movements, and generate simple reports. Includes basic authentication and filterable tables.",
    },
    {
      title: "Course Landing Page",
      tag: "Template",
      description: "Responsive landing page with reusable sections.",
      details:
        "Landing page built with Next.js and Tailwind CSS: hero, content grid, and contact section with accessible dialogs.",
    },
    {
      title: "Task Manager App",
      tag: "App",
      description: "To-do list with filters, priorities, and local persistence.",
      details:
        "React task app with status filters, priority levels, and browser persistence. Focused on simple components and clean code.",
    },
  ],
  profileDialog: {
    title: "Contact profile",
    closeDialog: "Close contact dialog",
    emailLabel: "Email",
    topSkills: "Top skills",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { es, en };

export const themeStorageKey = "portfolio-theme";

export const themeToggleText: Record<
  Lang,
  { toDark: string; toLight: string; switchLanguage: string }
> = {
  es: {
    toDark: "Cambiar a modo oscuro",
    toLight: "Cambiar a modo claro",
    switchLanguage: "Cambiar a inglés",
  },
  en: {
    toDark: "Switch to dark mode",
    toLight: "Switch to light mode",
    switchLanguage: "Switch to Spanish",
  },
};
