import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      register: 'Register',
      login: 'Login',
      email: 'Email',
      password: 'Password',
      username: 'Username',
      // Add more translations
    },
  },
  hi: {
    translation: {
      register: 'पंजीकरण',
      login: 'लॉग इन',
      email: 'ईमेल',
      password: 'पासवर्ड',
      username: 'उपयोगकर्ता नाम',
    },
  },
  mr: {
    translation: {
      register: 'नोंदणी',
      login: 'प्रवेश',
      email: 'ईमेल',
      password: 'पासवर्ड',
      username: 'वापरकर्तानाव',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;