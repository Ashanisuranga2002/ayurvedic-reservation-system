import React from 'react';
import { SparklesIcon } from 'lucide-react';
interface TreatmentCardProps {
  title: string;
  description: string;
  imageUrl: string;
}
function TreatmentCard({
  title,
  description,
  imageUrl
}: TreatmentCardProps) {
  return <div className="group">
      <div className="relative overflow-hidden rounded-lg shadow-lg mb-4">
        <img src={imageUrl} alt={title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-maroon-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <h3 className="text-xl font-serif font-bold text-maroon-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>;
}
export function Treatments() {
  const treatments = [{
    title: 'ABHYANGA ABHYANGA',
    description: 'This rejuvenating full-body oil massage utilizes a combination of warm medicated oils, herbal oils and aromatic oils. Performed by two therapists, this treatment helps to improve circulation and eliminate toxins.',
    imageUrl: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80'
  }, {
    title: 'PAYU',
    description: 'A warm poultice made from herbs, leaves, and oils is applied to the body to reduce inflammation, improve circulation, and relieve muscle tension. This treatment is particularly effective for joint pain.',
    imageUrl: 'https://images.unsplash.com/photo-1600334129128-685c5582fd35?w=600&q=80'
  }, {
    title: 'SHIRODHARA',
    description: 'This is a unique relaxation treatment that aims to reduce the stress level and work hard. Warm herbal oil is poured in a continuous stream over the forehead, inducing deep relaxation and mental clarity.',
    imageUrl: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&q=80'
  }, {
    title: 'NASYA KARMA',
    description: 'A therapeutic treatment in which medicated oils or herbal preparations are administered through the nasal passages. This treatment is particularly effective for respiratory conditions and sinusitis.',
    imageUrl: 'https://images.unsplash.com/photo-1519823551278-64ac92734fb1?w=600&q=80'
  }];
  return <section id="treatments" className="py-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <SparklesIcon className="w-12 h-12 text-maroon-700" />
          </div>
          <p className="text-sm text-gray-600 tracking-widest mb-2">
            TRADITIONAL HEALING THERAPIES
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800">
            OUR TREATMENTS
          </h2>
          <div className="w-24 h-1 bg-saffron-500 mx-auto mt-4"></div>
          <p className="mt-6 text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We provide authentic Ayurvedic treatments using ancient, approved,
            tried, consistent clinical treatments with wellness programs. Our
            centers flawlessly follow the healing principles of ancient
            Ayurveda.
          </p>
        </div>

        {/* Treatment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {treatments.map((treatment, index) => <TreatmentCard key={index} {...treatment} />)}
        </div>
      </div>
    </section>;
}