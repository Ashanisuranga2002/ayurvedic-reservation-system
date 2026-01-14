import React from 'react';
import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
interface RoomCardProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  imagePosition: 'left' | 'right';
}
function RoomCard({
  title,
  description,
  features,
  imageUrl,
  imagePosition
}: RoomCardProps) {
  return <div className={`flex flex-col ${imagePosition === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center mb-20`}>
      {/* Image */}
      <div className="w-full md:w-1/2">
        <div className="relative overflow-hidden rounded-lg shadow-xl">
          <img src={imageUrl} alt={title} className="w-full h-80 object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="w-full md:w-1/2">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-maroon-800 mb-4">
          {title}
        </h3>
        <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-maroon-700 mb-3 tracking-wide">
            MODERN AMENITIES AND FEATURES
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => <li key={index} className="flex items-start">
                <span className="text-saffron-600 mr-2">•</span>
                <span className="text-gray-700">{feature}</span>
              </li>)}
          </ul>
        </div>

        <div className="flex gap-4">
          <button className="text-maroon-700 font-medium hover:text-maroon-900 transition-colors border-b-2 border-transparent hover:border-maroon-700">
            LEARN MORE
          </button>
          <Link to="/booking" className="bg-saffron-600 hover:bg-saffron-700 text-white px-6 py-2 rounded-md transition-colors font-medium">
            BOOK NOW
          </Link>
        </div>
      </div>
    </div>;
}
export function Accommodation() {
  const rooms = [{
    title: 'PREMIER ROOM',
    description: "Our Premier Rooms is the largest of our room categories. Measuring 450 sq ft, and fitted with a king size bed and private balcony, there's plenty of private space to relax after your treatments.",
    features: ['450 sq ft', '24-hours room service', 'Private balcony', 'Bathtub'],
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    imagePosition: 'left' as const
  }, {
    title: 'DELUXE ROOM',
    description: 'Offering more space, our Deluxe Rooms are the perfect place for you to rest and recover after a day of treatments. Equipped with a king size bed, which can be converted into a twin bed should you choose, soothe your mind, body and soul.',
    features: ['350 sq ft', '24-hours room service', 'Suites and herbal tea', 'Other services, on requests'],
    imageUrl: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80',
    imagePosition: 'right' as const
  }, {
    title: 'STANDARD ROOM',
    description: 'Located on the second floor, our Standard Rooms are 275 sq ft and are fitted with a comfortable double bed. The rooms include all the creature comforts to ensure you have a tranquil stay.',
    features: ['275 sq ft', 'Free Wi-Fi', '24-hours room service', 'Suites and herbal tea'],
    imageUrl: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    imagePosition: 'left' as const
  }];
  return <section id="accommodation" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <HomeIcon className="w-12 h-12 text-maroon-700" />
          </div>
          <p className="text-sm text-gray-600 tracking-widest mb-2">
            EXPERIENCE MINDFUL LUXURY AT ITS FINEST
          </p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-maroon-800">
            ACCOMMODATION
          </h2>
          <div className="w-24 h-1 bg-saffron-500 mx-auto mt-4"></div>
        </div>

        {/* Room Cards */}
        {rooms.map((room, index) => <RoomCard key={index} {...room} />)}
      </div>
    </section>;
}