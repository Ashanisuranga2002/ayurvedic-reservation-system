import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { StethoscopeIcon } from 'lucide-react';
interface DoctorProfileProps {
  name: string;
  title: string;
  credentials: string;
  bio: string;
  specialization: string[];
  imageUrl: string;
  imagePosition: 'left' | 'right';
}
function DoctorProfile({
  name,
  title,
  credentials,
  bio,
  specialization,
  imageUrl,
  imagePosition
}: DoctorProfileProps) {
  return <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center mb-20`}>
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img src={imageUrl} alt={name} className="w-full h-96 object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <div className="inline-block p-3 bg-saffron-100 rounded-lg mb-4">
            <StethoscopeIcon className="w-8 h-8 text-saffron-700" />
          </div>
        </div>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-maroon-800 mb-2">
          {name}
        </h3>
        <p className="text-saffron-700 font-medium mb-1">{title}</p>
        <p className="text-gray-600 text-sm mb-6">{credentials}</p>

        <p className="text-gray-700 mb-6 leading-relaxed">{bio}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-maroon-700 mb-3 tracking-wide">
            AREAS OF EXPERTISE
          </h4>
          <ul className="space-y-2">
            {specialization.map((item, index) => <li key={index} className="flex items-start">
                <span className="text-saffron-600 mr-2">•</span>
                <span className="text-gray-700">{item}</span>
              </li>)}
          </ul>
        </div>

        <button className="text-maroon-700 font-medium hover:text-maroon-900 transition-colors border-b-2 border-transparent hover:border-maroon-700">
          LEARN MORE
        </button>
      </div>
    </div>;
}
export function DoctorsPage() {
  const doctors = [{
    name: 'DR. S. S. GUNAWARDHANA',
    title: 'Senior Ayurvedic Physician',
    credentials: 'BAMS, MD (Ayurveda), 20+ years experience',
    bio: 'Dr. Sarath Senanayake Gunawardhana is a world-renowned Ayurvedic physician in Sri Lanka. Having over 20 years of experience in the field, Dr. S.S Gunawardhana offers a holistic approach to healing, combining ancient Ayurvedic wisdom with modern medical understanding. His expertise spans across various Ayurvedic treatments for chronic conditions, detoxification, and neurological diseases.',
    specialization: ['Panchakarma Detoxification Therapies', 'Chronic Disease Management', 'Neurological Disorders', 'Stress and Lifestyle Management', 'Personalized Wellness Programs'],
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    imagePosition: 'left' as const
  }, {
    name: 'DR. KASUN GUNAWARDHANA',
    title: 'Ayurvedic Physician',
    credentials: 'BAMS, Specialized in Traditional Treatments',
    bio: 'Dr. Kasun Gunawardhana is a dedicated Ayurvedic physician who brings a fresh perspective to traditional healing. Having the healing benefits of Ayurveda with the world, Being a reputed Ayurvedic physician in Sri Lanka, Ayurveda Medical Board, Dr. Kasun Gunawardhana specializes in Panchakarma treatments, therapeutic massage techniques, and dietary counseling for optimal health.',
    specialization: ['Traditional Panchakarma Treatments', 'Therapeutic Massage Therapies', 'Dietary and Nutritional Counseling', 'Sports Injury Rehabilitation', 'Preventive Healthcare Programs'],
    imageUrl: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
    imagePosition: 'right' as const
  }];
  return <div className="w-full min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen w-full mt-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80" alt="Our Medical Team" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/80 via-maroon-800/70 to-maroon-900/80"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 tracking-wide">
              DOCTORS
            </h1>
            <p className="text-xl text-cream font-light">
              Meet our experienced Ayurvedic physicians
            </p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-maroon-100 rounded-full">
                <StethoscopeIcon className="w-12 h-12 text-maroon-700" />
              </div>
            </div>
            <p className="text-sm text-gray-600 tracking-widest mb-2">
              HEALING THROUGH EXPERIENCE AND EXPERTISE
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800">
              OUR DOCTORS
            </h2>
            <div className="w-24 h-1 bg-saffron-500 mx-auto mt-4"></div>
            <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Our team of highly specialized doctors with all of the cream of
              your stay with us. Ayurveda, which roughly translates to 'the
              Science of Life', is a holistic medical practice that aims to
              bring a sense of balance to your life.
            </p>
            <p className="mt-4 text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Through the use of traditional Nadi Vhaidyakaya plant-based
              medicine and changes to aspects of your daily life, such as diet
              and exercise, our doctors will help you navigate the three pillars
              of body, mind and soul.
            </p>
          </div>

          {/* Doctor Profiles */}
          {doctors.map((doctor, index) => <DoctorProfile key={index} {...doctor} />)}

          {/* Additional Images Section */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=400&q=80" alt="Ayurvedic Treatment" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=400&q=80" alt="Consultation" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=400&q=80" alt="Treatment Session" className="w-full h-full object-cover" />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-lg h-64">
              <img src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=400&q=80" alt="Herbal Medicine" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}