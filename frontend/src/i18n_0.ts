import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      import i18n from 'i18next';
      import { initReactI18next } from 'react-i18next';

      const resources = {
        en: {
          translation: {
            nav: {
              home: 'HOME',
              about: 'ABOUT US',
              doctors: 'DOCTORS',
              treatments: 'OUR TREATMENTS',
              accommodation: 'ACCOMMODATION',
              contact: 'CONTACT US',
              book_now: 'BOOK NOW'
            },
            hero: {
              title: 'OUR AYURVEDA HEALTH CENTRE',
              subtitle: 'IN ANURADHAPURA'
            },
            about: {
              small: 'KNOW ABOUT OUR JOURNEY',
              title: 'ABOUT US',
              p1: 'Begin your transformative and restorative journey at Adhitya Ayurveda. We are dedicated to accessibility with a completely personalized and immersive healing experience.',
              p2: 'By combining the ancient science of Ayurveda with traditional Sri Lankan wisdom, we offer a truly unique and effective treatment programme that will rejuvenate your body and spirit.',
              p3: 'Our holistic approach addresses not just physical ailments but also mental and emotional well-being.'
            },
            treatments: {
              small: 'TRADITIONAL HEALING THERAPIES',
              title: 'OUR TREATMENTS',
              description: 'We provide authentic Ayurvedic treatments using tried clinical methods and wellness programs.',
              items: {
                abhyanga: {
                  title: 'ABHYANGA',
                  desc: 'A rejuvenating full-body oil massage using warm medicated and herbal oils to improve circulation and eliminate toxins.'
                },
                payu: {
                  title: 'PAYU',
                  desc: 'A warm herbal poultice applied to reduce inflammation, improve circulation, and relieve muscle tension.'
                },
                shirodhara: {
                  title: 'SHIRODHARA',
                  desc: 'Warm herbal oil is poured in a continuous stream over the forehead to induce deep relaxation and clarity.'
                },
                nasya: {
                  title: 'NASYA',
                  desc: 'Medicated oils or herbal preparations are administered through the nasal passages to support respiratory health.'
                }
              }
            },
            doctors: {
              small: 'HEALING THROUGH EXPERIENCE AND EXPERTISE',
              title: 'OUR DOCTORS',
              subtitle: 'Meet our experienced Ayurvedic physicians',
              p1: 'Our team combines traditional and modern approaches to provide personalized care during your stay.',
              p2: 'Through herbal medicine and lifestyle guidance our doctors help restore balance across body, mind and spirit.',
              areas: 'AREAS OF EXPERTISE',
              learn_more: 'LEARN MORE'
            },
            accommodation: {
              small: 'EXPERIENCE MINDFUL LUXURY AT ITS FINEST',
              title: 'ACCOMMODATION',
              rooms: {
                premier: {
                  title: 'PREMIER ROOM',
                  desc: "Our Premier Rooms are spacious and fitted with a king size bed and private balcony.",
                  features: ['450 sq ft', '24-hours room service', 'Private balcony', 'Bathtub']
                },
                deluxe: {
                  title: 'DELUXE ROOM',
                  desc: 'More space for rest and recovery after treatments, with flexible bedding options.',
                  features: ['350 sq ft', '24-hours room service', 'Suites and herbal tea', 'Other services on request']
                },
                standard: {
                  title: 'STANDARD ROOM',
                  desc: 'Comfortable rooms with essential amenities for a tranquil stay.',
                  features: ['275 sq ft', 'Free Wi-Fi', '24-hours room service', 'Suites and herbal tea']
                }
              },
              learn_more: 'LEARN MORE',
              book_now: 'BOOK NOW'
            },
            footer: {
              contact_details: 'CONTACT DETAILS',
              address: 'ADDRESS',
              general_number: 'GENERAL NUMBER',
              email_address: 'EMAIL ADDRESS',
              menu: 'ADHITYA MENU',
              certified: 'Certified by Sri Lanka Tourism',
              copyright: '© 2025 Adhitya Ayurveda. All rights reserved.'
            },
            contact: {
              hero_title: 'Get In Touch',
              hero_paragraph: "We're here to answer your questions and guide your journey",
              visit_title: 'Visit Our Centre',
              send_message: 'Send Message',
              thank_you_alert: 'Thank you for contacting us! We will respond to your inquiry shortly.',
              form: {
                name: 'Your Name *',
                name_placeholder: 'Enter your full name',
                email: 'Email Address *',
                email_placeholder: 'your.email@example.com',
                phone: 'Phone Number',
                phone_placeholder: '+94 XX XXX XXXX',
                subject: 'Subject *',
                subject_select: 'Select a subject',
                booking: 'Booking Inquiry',
                treatment: 'Treatment Information',
                general: 'General Question',
                feedback: 'Feedback',
                message: 'Your Message *',
                message_placeholder: 'Tell us how we can help you...'
              },
              address_title: 'Address',
              phone_title: 'Phone',
              email_title: 'Email',
              opening_hours: 'Opening Hours'
            },
            booking: {
              confirmed_title: 'Booking Confirmed!',
              hero_title: 'Book Your Healing Journey',
              hero_subtitle: 'Begin your path to wellness and rejuvenation',
              thank_you: 'Thank you for choosing Adhitya Ayurveda',
              steps: {
                details: 'Details',
                review: 'Review',
                payment: 'Payment'
              },
              reservation_details: 'Reservation Details',
              personal_information: 'Personal Information',
              review_title: 'Review Your Booking',
              back_to_details: 'Back to Details',
              proceed_to_payment: 'Proceed to Payment',
              continue_to_review: 'Continue to Review',
              stay_details: 'Stay Details',
              consultation: 'Consultation First - $50',
              select_room: 'Select room type',
              select_treatment: 'Select a treatment (optional)',
              treatment_preferences: 'Treatment Preferences',
              form: {
                firstName: 'First Name *',
                lastName: 'Last Name *',
                email: 'Email Address *',
                phone: 'Phone Number *',
                checkIn: 'Check-in Date *',
                checkOut: 'Check-out Date *',
                roomType: 'Room Type *',
                guests: 'Number of Guests *',
                treatment: 'Preferred Treatment',
                specialRequests: 'Special Requests or Health Concerns',
                message_placeholder: 'Please let us know about any dietary restrictions, health conditions, or special requirements...'
              },
              labels: {
                name: 'Name',
                email: 'Email',
                phone: 'Phone',
                checkin: 'Check-in',
                checkout: 'Check-out',
                room_type: 'Room Type',
                guests: 'Guests',
                nights: 'Number of Nights',
                treatment: 'Treatment',
                special_requests: 'Special Requests',
                reference: 'Booking Reference',
                guest_name: 'Guest Name',
                room: 'Room',
                total_paid: 'Total Paid'
              },
              payment_details: 'Payment Details',
              secure_payment: 'Secure Payment',
              payment_method: 'Payment Method',
              payment: {
                card: 'Credit/Debit Card',
                paypal: 'PayPal',
                cardNumber: 'Card Number *',
                cardName: 'Cardholder Name *',
                expiry: 'Expiry Date *',
                cvv: 'CVV *'
              },
              pay_button: 'Pay ${{amount}}',
              payment_secure: 'Your payment is secure',
              payment_encryption: 'We use industry-standard encryption to protect your payment information.',
              back_to_review: 'Back to Review',
              confirmed_message: 'Thank you for your booking. A confirmation email has been sent to {{email}}',
              summary_title: 'Booking Summary',
              print: 'Print Confirmation',
              return_home: 'Return to Home'
            }
          }
        },
        de: {
          translation: {
            nav: {
              home: 'STARTSEITE',
              about: 'ÜBER UNS',
              doctors: 'ÄRZTE',
              treatments: 'UNSERE BEHANDLUNGEN',
              accommodation: 'UNTERKUNFT',
              contact: 'KONTAKT',
              book_now: 'JETZT BUCHEN'
            },
            hero: {
              title: 'UNSER AYURVEDA-GESUNDHEITSZENTRUM',
              subtitle: 'IN ANURADHAPURA'
            },
            about: {
              small: 'ERFAHREN SIE MEHR ÜBER UNSERE REISE',
              title: 'ÜBER UNS',
              p1: 'Beginnen Sie Ihre transformative und restaurative Reise bei Adhitya Ayurveda. Wir bieten ein personalisiertes und intensives Heilungserlebnis.',
              p2: 'Durch die Kombination der alten Wissenschaft des Ayurveda mit traditioneller singhalesischer Weisheit bieten wir ein einzigartiges Behandlungsprogramm.',
              p3: 'Unser ganzheitlicher Ansatz behandelt körperliches sowie geistiges und emotionales Wohlbefinden.'
            },
            treatments: {
              small: 'TRADITIONELLE HEILTHERAPIEN',
              title: 'UNSERE BEHANDLUNGEN',
              items: {
                abhyanga: { title: 'ABHYANGA', desc: 'Eine verjüngende Ganzkörperölmassage mit warmen medizinischen Ölen.' },
                payu: { title: 'PAYU', desc: 'Ein warmer Kräuterumschlag zur Linderung von Entzündungen und Verspannungen.' },
                shirodhara: { title: 'SHIRODHARA', desc: 'Warmes Kräuteröl wird kontinuierlich über die Stirn gegossen, um tiefe Entspannung zu fördern.' },
                nasya: { title: 'NASYA', desc: 'Medizinische Öle werden über die Nasengänge verabreicht, um die Atemwege zu unterstützen.' }
              }
            },
            doctors: {
              small: 'HEILUNG DURCH ERFAHRUNG UND EXPERTISE',
              title: 'UNSERE ÄRZTE',
              subtitle: 'Lernen Sie unsere erfahrenen ayurvedischen Ärzte kennen',
              p1: 'Unser Team kombiniert traditionelle und moderne Heilansätze für persönliche Betreuung.',
              p2: 'Unsere Ärzte helfen, Gleichgewicht von Körper, Geist und Seele wiederherzustellen.',
              areas: 'FACHGEBIETE',
              learn_more: 'MEHR ERFAHREN'
            },
            contact: {
              thank_you_alert: 'Vielen Dank für Ihre Anfrage! Wir werden uns in Kürze bei Ihnen melden.',
              form: {
                name_placeholder: 'Geben Sie Ihren vollständigen Namen ein',
                email_placeholder: 'ihre.email@beispiel.de',
                phone_placeholder: '+94 XX XXX XXXX'
              }
            }
          }
        },
        fr: {
          translation: {
            nav: { home: 'ACCUEIL', about: 'À PROPOS', doctors: 'MEDECINS', treatments: 'NOS TRAITEMENTS', accommodation: 'HÉBERGEMENT', contact: 'CONTACT', book_now: 'RÉSERVER' },
            hero: { title: 'NOTRE CENTRE DE SANTÉ AYURVÉDIQUE', subtitle: 'À ANURADHAPURA' },
            about: { small: 'DÉCOUVREZ NOTRE PARCOURS', title: 'À PROPOS DE NOUS', p1: 'Commencez votre voyage transformateur chez Adhitya Ayurveda.', p2: 'Nous combinons l’Ayurveda et la sagesse sri-lankaise pour des traitements efficaces.', p3: 'Notre approche holistique améliore le bien-être physique, mental et émotionnel.' },
            contact: {
              thank_you_alert: 'Merci de nous avoir contactés ! Nous répondrons bientôt à votre demande.',
              form: { name_placeholder: 'Entrez votre nom complet', email_placeholder: 'votre.email@exemple.com', phone_placeholder: '+94 XX XXX XXXX' }
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
                title: 'UNSER AYURVEDA-GESUNDHEITSZENTRUM',
