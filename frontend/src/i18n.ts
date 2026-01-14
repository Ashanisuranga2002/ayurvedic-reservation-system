// i18n initialization for EN/DE/FR
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: { home: 'HOME', about: 'ABOUT US', doctors: 'DOCTORS', treatments: 'OUR TREATMENTS', accommodation: 'ACCOMMODATION', contact: 'CONTACT US', book_now: 'BOOK NOW' },
      hero: { title: 'OUR AYURVEDA HEALTH CENTRE', subtitle: 'IN ANURADHAPURA' },
      about: {
        small: 'KNOW ABOUT OUR JOURNEY',
        title: 'ABOUT US',
        p1: 'Begin your transformative and restorative journey at Adhitya Ayurveda.',
        p2: 'Founded by practitioners trained in classical Ayurvedic medicine, our centre blends time-tested therapies with compassionate, personalized care. We focus on Panchakarma, therapeutic massages, herbal medicine and lifestyle coaching tailored to each guest.',
        p3: 'Guests receive a comprehensive intake, daily consultations, nutritious Ayurvedic cuisine, and guided yoga and meditation sessions to support long-term wellbeing.'
      },
      treatments: { small: 'TRADITIONAL HEALING THERAPIES', title: 'OUR TREATMENTS' },
      doctors: { small: 'HEALING THROUGH EXPERIENCE AND EXPERTISE', title: 'OUR DOCTORS' },
      accommodation: { small: 'EXPERIENCE MINDFUL LUXURY', title: 'ACCOMMODATION' },
      contact: { hero_title: 'Get In Touch', hero_paragraph: "We're here to answer your questions and guide your journey", send_message: 'Send Message', thank_you_alert: 'Thank you for contacting us! We will respond shortly.', form: { name_placeholder: 'Enter your full name', email_placeholder: 'your.email@example.com', phone_placeholder: '+94 XX XXX XXXX', message_placeholder: 'Tell us how we can help you...' } },
      auth: {
        login_title: 'Login to your account',
        register_title: 'Create an account',
        email: 'Email',
        email_placeholder: 'you@example.com',
        password: 'Password',
        password_placeholder: '••••••••',
        login_button: 'Login',
        create_account: 'Create account',
        first_name: 'First name',
        last_name: 'Last name',
        have_account: 'Already have an account?',
        no_account: "Don't have an account?",
        register: 'Register'
      },
      booking: { confirmed_title: 'Booking Confirmed!', hero_title: 'Book Your Healing Journey', thank_you: 'Thank you for choosing Adhitya Ayurveda' },
      footer: { copyright: '© 2025 Adhitya Ayurveda. All rights reserved.' }
    }
  },
  admin: {
    title: 'Admin',
    overview: 'Overview',
    users: 'Users',
    payments: 'Payments',
    rooms: 'Rooms',
    appointments: 'Appointments',
    total_users: 'Total users',
    total_bookings: 'Bookings',
    pending_payments: 'Pending payments',
    rooms_available: 'Rooms available',
    user_name: 'Name',
    email: 'Email',
    joined: 'Joined',
    payment_id: 'Payment ID',
    amount: 'Amount',
    status: 'Status',
    date: 'Date',
    payment: 'Payment',
    user: 'User',
    available: 'Available',
    unavailable: 'Occupied',
    toggle: 'Toggle'
  },
  de: {
    translation: {
      nav: { home: 'STARTSEITE', about: 'ÜBER UNS', doctors: 'ÄRZTE', treatments: 'UNSERE BEHANDLUNGEN', accommodation: 'UNTERKUNFT', contact: 'KONTAKT', book_now: 'JETZT BUCHEN' },
      hero: { title: 'UNSER AYURVEDA-GESUNDHEITSZENTRUM', subtitle: 'IN ANURADHAPURA' },
      about: {
        small: 'ERFAHREN SIE MEHR ÜBER UNSERE REISE',
        title: 'ÜBER UNS',
        p1: 'Beginnen Sie Ihre transformative Reise bei Adhitya Ayurveda.',
        p2: 'Gegründet von in klassischem Ayurveda ausgebildeten Praktikern verbindet unser Zentrum bewährte Therapien mit persönlicher Betreuung. Wir bieten Panchakarma, therapeutische Massagen, Kräutermedizin und Lebensstilberatung.',
        p3: 'Unsere Gäste erhalten ausführliche Erstgespräche, tägliche Konsultationen, nahrhafte ayurvedische Kost und geführte Yoga- sowie Meditationssitzungen.'
      },
      contact: { thank_you_alert: 'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.', form: { name_placeholder: 'Geben Sie Ihren vollständigen Namen ein', email_placeholder: 'ihre.email@beispiel.de', phone_placeholder: '+94 XX XXX XXXX', message_placeholder: 'Teilen Sie uns mit, wie wir Ihnen helfen können...' } },
      auth: {
        login_title: 'Melden Sie sich an',
        register_title: 'Konto erstellen',
        email: 'E-Mail',
        email_placeholder: 'ihre.email@beispiel.de',
        password: 'Passwort',
        password_placeholder: '••••••••',
        login_button: 'Anmelden',
        create_account: 'Konto erstellen',
        first_name: 'Vorname',
        last_name: 'Nachname',
        have_account: 'Haben Sie bereits ein Konto?',
        no_account: 'Noch kein Konto?',
        register: 'Registrieren'
      }
    }
  },
  fr: {
    translation: {
      nav: { home: 'ACCUEIL', about: 'À PROPOS', doctors: 'MEDECINS', treatments: 'NOS TRAITEMENTS', accommodation: 'HÉBERGEMENT', contact: 'CONTACT', book_now: 'RÉSERVER' },
      hero: { title: 'NOTRE CENTRE DE SANTÉ AYURVÉDIQUE', subtitle: 'À ANURADHAPURA' },
      about: {
        small: 'DÉCOUVREZ NOTRE PARCOURS',
        title: 'À PROPOS DE NOUS',
        p1: 'Commencez votre voyage transformateur chez Adhitya Ayurveda.',
        p2: 'Fondé par des praticiens formés à l’Ayurveda classique, notre centre associe des thérapies éprouvées à un accompagnement personnalisé. Nous proposons Panchakarma, massages thérapeutiques, phytothérapie et coaching de style de vie.',
        p3: 'Les clients bénéficient d’un bilan complet, de consultations quotidiennes, d’une cuisine ayurvédique nutritive et de séances guidées de yoga et de méditation.'
      },
      contact: { thank_you_alert: 'Merci de nous avoir contactés ! Nous répondrons bientôt à votre demande.', form: { name_placeholder: 'Entrez votre nom complet', email_placeholder: 'votre.email@exemple.com', phone_placeholder: '+94 XX XXX XXXX', message_placeholder: 'Dites-nous comment nous pouvons vous aider...' } },
      auth: {
        login_title: 'Connectez-vous',
        register_title: 'Créer un compte',
        email: 'E-mail',
        email_placeholder: 'votre.email@exemple.com',
        password: 'Mot de passe',
        password_placeholder: '••••••••',
        login_button: 'Se connecter',
        create_account: 'Créer un compte',
        first_name: 'Prénom',
        last_name: 'Nom',
        have_account: 'Vous avez déjà un compte?',
        no_account: 'Vous n’avez pas de compte?',
        register: 'S’inscrire'
      }
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: (localStorage.getItem('i18nextLng') as string) || 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
});

export default i18n;
