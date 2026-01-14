import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Treatments } from '../components/Treatments';
import { Accommodation } from '../components/Accommodation';
import { Footer } from '../components/Footer';
export function Home() {
  return <div className="w-full min-h-screen bg-cream">
      <Navigation />
      <Hero />
      {/* Quick auth actions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex items-center justify-center space-x-4">
          <Link to="/login" className="bg-transparent border border-saffron-600 text-saffron-600 hover:bg-saffron-50 px-4 py-2 rounded">Login</Link>
          <Link to="/register" className="bg-saffron-600 text-white hover:bg-saffron-700 px-4 py-2 rounded">Register</Link>
        </div>
      </div>
      <About />
      <Treatments />
      <Accommodation />
      <Footer />
    </div>;
}