import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  es: {
    translation: {
      header: {
        title: 'Portafolios Gabriel Leal',
        photoAlt: 'Foto de Gabriel Leal',
      },
      language: {
        toggle: 'English',
        toggleAriaLabel: 'Cambiar idioma a inglés',
      },
      tabs: {
        projects: 'Proyectos',
        contact: 'Contacto',
        about: 'Sobre Mi',
      },
      projects: {
        title: 'Proyectos',
        nutrapiel: 'Clinica Estética NutraPiel',
        energyStations: 'Estaciones de Energia',
      },
      contact: {
        title: 'Contacto',
        cv: 'Curriculum Vitae',
      },
      about: {
        title: 'Sobre Mi',
        p1: '¡Hola! Soy Gabriel Leal, Desarrollador Full Stack e Integrador de IA con más de 4 años de experiencia construyendo soluciones digitales escalables.',
        p2: 'Mi enfoque va más allá del código: me especializo en transformar necesidades de negocio en plataformas robustas utilizando el ecosistema JavaScript (React, Next.js, Node.js) y automatización avanzada con IA (n8n). He liderado el desarrollo de CRMs personalizados y aplicaciones SaaS para clientes en EE. UU. y Latinoamérica, optimizando flujos de trabajo mediante agentes de IA y arquitecturas modernas en Supabase y PostgreSQL.',
        p3: 'Combino mi formación en Ingeniería de Sistemas con una mentalidad autodidacta y proactiva para resolver desafíos técnicos complejos, siempre con el foco puesto en el rendimiento y la experiencia del usuario.',
        technologies: 'Tecnologías que uso',
      },
    },
  },
  en: {
    translation: {
      header: {
        title: "Gabriel Leal's Portfolio",
        photoAlt: 'Photo of Gabriel Leal',
      },
      language: {
        toggle: 'Español',
        toggleAriaLabel: 'Switch language to Spanish',
      },
      tabs: {
        projects: 'Projects',
        contact: 'Contact',
        about: 'About Me',
      },
      projects: {
        title: 'Projects',
        nutrapiel: 'NutraPiel Aesthetic Clinic',
        energyStations: 'Energy Stations',
      },
      contact: {
        title: 'Contact',
        cv: 'Resume',
      },
      about: {
        title: 'About Me',
        p1: "Hi! I'm Gabriel Leal, a Full Stack Developer and AI Integrator with over 4 years of experience building scalable digital solutions.",
        p2: 'My approach goes beyond code: I specialize in turning business needs into robust platforms using the JavaScript ecosystem (React, Next.js, Node.js) and advanced AI automation (n8n). I have led the development of custom CRMs and SaaS applications for clients in the US and Latin America, optimizing workflows through AI agents and modern architectures on Supabase and PostgreSQL.',
        p3: 'I combine my Systems Engineering background with a self-taught, proactive mindset to solve complex technical challenges, always focused on performance and user experience.',
        technologies: 'Technologies I use',
      },
    },
  },
};

const STORAGE_KEY = 'idioma';

const savedLanguage = localStorage.getItem(STORAGE_KEY);
const browserLanguage = navigator.language?.startsWith('en') ? 'en' : 'es';

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage || browserLanguage,
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false, // React ya escapa por su cuenta
  },
});

// Mantiene <html lang> y la preferencia guardada en sincronía con el idioma activo
const syncLanguage = (language) => {
  document.documentElement.lang = language;
  localStorage.setItem(STORAGE_KEY, language);
};

syncLanguage(i18n.language);
i18n.on('languageChanged', syncLanguage);

export default i18n;
