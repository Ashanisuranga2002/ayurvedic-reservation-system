import React, { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CalendarIcon, UserIcon, PhoneIcon, MailIcon, HomeIcon, SparklesIcon, CreditCardIcon, LockIcon, CheckCircleIcon, ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { useTranslation } from 'react-i18next';
type BookingStep = 'details' | 'review' | 'payment' | 'confirmation';
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  checkIn: string;
  checkOut: string;
  roomType: string;
  guests: string;
  treatment: string;
  specialRequests: string;
}
interface PaymentData {
  cardNumber: string;
  cardName: string;
  expiryDate: string;
  cvv: string;
  paymentMethod: 'card' | 'paypal';
}
const roomPrices: Record<string, number> = {
  premier: 150,
  deluxe: 120,
  standard: 90
};
const treatmentPrices: Record<string, number> = {
  abhyanga: 80,
  payu: 70,
  shirodhara: 90,
  nasya: 75,
  consultation: 50
};
export function BookingPage() {
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState<BookingStep>('details');
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    guests: '1',
    treatment: '',
    specialRequests: ''
  });
  const [paymentData, setPaymentData] = useState<PaymentData>({
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
    paymentMethod: 'card'
  });
  const calculateNights = () => {
    if (!formData.checkIn || !formData.checkOut) return 0;
    const start = new Date(formData.checkIn);
    const end = new Date(formData.checkOut);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };
  const calculateTotal = () => {
    const nights = calculateNights();
    const roomPrice = formData.roomType ? roomPrices[formData.roomType] * nights : 0;
    const treatmentPrice = formData.treatment ? treatmentPrices[formData.treatment] : 0;
    const serviceCharge = (roomPrice + treatmentPrice) * 0.1;
    return {
      roomPrice,
      treatmentPrice,
      serviceCharge,
      total: roomPrice + treatmentPrice + serviceCharge
    };
  };
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    // Format card number with spaces
    if (e.target.name === 'cardNumber') {
      value = value.replace(/\s/g, '').replace(/(\d{4})/g, '$1 ').trim();
    }
    // Format expiry date
    if (e.target.name === 'expiryDate') {
      value = value.replace(/\D/g, '').replace(/(\d{2})(\d)/, '$1/$2').substr(0, 5);
    }
    setPaymentData({
      ...paymentData,
      [e.target.name]: value
    });
  };
  const handleDetailsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentStep('review');
  };
  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setCurrentStep('confirmation');
    }, 1500);
  };
  const pricing = calculateTotal();
  return <div className="w-full min-h-screen bg-cream">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-80 w-full mt-16">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1600&q=80" alt="Book Your Stay" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-maroon-900/70 via-maroon-800/60 to-maroon-900/70"></div>
        </div>
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
              {currentStep === 'confirmation' ? t('booking.confirmed_title') || 'Booking Confirmed!' : t('booking.hero_title') || 'Book Your Healing Journey'}
            </h1>
            <p className="text-xl text-cream font-light">
              {currentStep === 'confirmation' ? t('booking.thank_you') || 'Thank you for choosing Adhitya Ayurveda' : t('booking.hero_subtitle') || 'Begin your path to wellness and rejuvenation'}
            </p>
          </div>
        </div>
      </section>

      {/* Progress Indicator */}
      {currentStep !== 'confirmation' && <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === 'details' ? 'bg-saffron-600 text-white' : 'bg-saffron-600 text-white'}`}>
                {currentStep !== 'details' ? <CheckCircleIcon className="w-6 h-6" /> : '1'}
              </div>
              <div className="flex-1 h-1 mx-2 bg-saffron-600"></div>
            </div>
            <div className="flex items-center flex-1">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === 'review' ? 'bg-saffron-600 text-white' : currentStep === 'payment' ? 'bg-saffron-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
                {currentStep === 'payment' ? <CheckCircleIcon className="w-6 h-6" /> : '2'}
              </div>
              <div className={`flex-1 h-1 mx-2 ${currentStep === 'payment' ? 'bg-saffron-600' : 'bg-gray-300'}`}></div>
            </div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === 'payment' ? 'bg-saffron-600 text-white' : 'bg-gray-300 text-gray-600'}`}>
              3
            </div>
          </div>
          <div className="flex justify-between mt-2 text-sm">
            <span className="text-maroon-800 font-medium">{t('booking.steps.details') || 'Details'}</span>
            <span className={currentStep !== 'details' ? 'text-maroon-800 font-medium' : 'text-gray-500'}>{t('booking.steps.review') || 'Review'}</span>
            <span className={currentStep === 'payment' ? 'text-maroon-800 font-medium' : 'text-gray-500'}>{t('booking.steps.payment') || 'Payment'}</span>
          </div>
        </div>}

      {/* Booking Form Section */}
      <section className="py-12 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Details */}
              {currentStep === 'details' && <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                  <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-8">{t('booking.reservation_details') || 'Reservation Details'}</h2>

                  <form onSubmit={handleDetailsSubmit} className="space-y-8">
                    {/* Personal Information */}
                    <div>
                      <h3 className="text-xl font-serif font-bold text-maroon-700 mb-4 flex items-center">
                        <UserIcon className="w-5 h-5 mr-2" />
                        {t('booking.personal_information') || 'Personal Information'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.firstName') || 'First Name *'}</label>
                          <input type="text" id="firstName" name="firstName" required value={formData.firstName} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="Enter your first name" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.lastName') || 'Last Name *'}</label>
                          <input type="text" id="lastName" name="lastName" required value={formData.lastName} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="Enter your last name" />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.email') || 'Email Address *'}</label>
                          <input type="email" id="email" name="email" required value={formData.email} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="your.email@example.com" />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.phone') || 'Phone Number *'}</label>
                          <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="+94 XX XXX XXXX" />
                        </div>
                      </div>
                    </div>

                    {/* Stay Details */}
                    <div>
                      <h3 className="text-xl font-serif font-bold text-maroon-700 mb-4 flex items-center">
                        <CalendarIcon className="w-5 h-5 mr-2" />
                        {t('booking.stay_details') || 'Stay Details'}
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.checkIn') || 'Check-in Date *'}</label>
                          <input type="date" id="checkIn" name="checkIn" required value={formData.checkIn} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.checkOut') || 'Check-out Date *'}</label>
                          <input type="date" id="checkOut" name="checkOut" required value={formData.checkOut} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" />
                        </div>
                        <div>
                          <label htmlFor="roomType" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.roomType') || 'Room Type *'}</label>
                          <select id="roomType" name="roomType" required value={formData.roomType} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors">
                            <option value="">{t('booking.select_room') || 'Select room type'}</option>
                            <option value="premier">{t('accommodation.rooms.premier.title')} - $150/night</option>
                            <option value="deluxe">{t('accommodation.rooms.deluxe.title')} - $120/night</option>
                            <option value="standard">{t('accommodation.rooms.standard.title')} - $90/night</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.guests') || 'Number of Guests *'}</label>
                          <select id="guests" name="guests" required value={formData.guests} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors">
                            <option value="1">1 Guest</option>
                            <option value="2">2 Guests</option>
                            <option value="3">3 Guests</option>
                            <option value="4">4 Guests</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Treatment Preferences */}
                    <div>
                      <h3 className="text-xl font-serif font-bold text-maroon-700 mb-4 flex items-center">
                        <SparklesIcon className="w-5 h-5 mr-2" />
                        {t('booking.treatment_preferences') || 'Treatment Preferences'}
                      </h3>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.treatment') || 'Preferred Treatment'}</label>
                          <select id="treatment" name="treatment" value={formData.treatment} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors">
                            <option value="">{t('booking.select_treatment') || 'Select a treatment (optional)'}</option>
                            <option value="abhyanga">{t('treatments.items.abhyanga.title')} - $80</option>
                            <option value="payu">{t('treatments.items.payu.title')} - $70</option>
                            <option value="shirodhara">{t('treatments.items.shirodhara.title')} - $90</option>
                            <option value="nasya">{t('treatments.items.nasya.title')} - $75</option>
                            <option value="consultation">{t('booking.consultation') || 'Consultation First - $50'}</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.form.specialRequests') || 'Special Requests or Health Concerns'}</label>
                          <textarea id="specialRequests" name="specialRequests" rows={4} value={formData.specialRequests} onChange={handleFormChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors resize-none" placeholder={t('booking.special_placeholder') || 'Please let us know about any dietary restrictions, health conditions, or special requirements...'}></textarea>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>{t('booking.continue_to_review') || 'Continue to Review'}</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </form>
                </div>}

              {/* Step 2: Review */}
              {currentStep === 'review' && <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                  <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-8">{t('booking.review_title') || 'Review Your Booking'}</h2>

                  <div className="space-y-6">
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-maroon-700 mb-4">{t('booking.personal_information') || 'Personal Information'}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">{t('booking.labels.name') || 'Name'}</p>
                          <p className="font-medium">
                            {formData.firstName} {formData.lastName}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t('booking.labels.email') || 'Email'}</p>
                          <p className="font-medium">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t('booking.labels.phone') || 'Phone'}</p>
                          <p className="font-medium">{formData.phone}</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-semibold text-maroon-700 mb-4">{t('booking.stay_details') || 'Stay Details'}</h3>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">{t('booking.labels.checkin') || 'Check-in'}</p>
                          <p className="font-medium">
                            {new Date(formData.checkIn).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t('booking.labels.checkout') || 'Check-out'}</p>
                          <p className="font-medium">
                            {new Date(formData.checkOut).toLocaleDateString()}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t('booking.labels.room_type') || 'Room Type'}</p>
                          <p className="font-medium capitalize">
                            {formData.roomType} Room
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t('booking.labels.guests') || 'Guests'}</p>
                          <p className="font-medium">
                            {formData.guests} Guest(s)
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">{t('booking.labels.nights') || 'Number of Nights'}</p>
                          <p className="font-medium">
                            {calculateNights()} Night(s)
                          </p>
                        </div>
                      </div>
                    </div>

                    {formData.treatment && <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-maroon-700 mb-4">{t('booking.labels.treatment') || 'Treatment'}</h3>
                        <p className="font-medium capitalize">
                          {formData.treatment.replace('-', ' ')}
                        </p>
                      </div>}

                    {formData.specialRequests && <div className="border-b border-gray-200 pb-6">
                        <h3 className="text-lg font-semibold text-maroon-700 mb-4">{t('booking.labels.special_requests') || 'Special Requests'}</h3>
                        <p className="text-gray-700">
                          {formData.specialRequests}
                        </p>
                      </div>}
                  </div>

                    <div className="flex gap-4 mt-8">
                    <button onClick={() => setCurrentStep('details')} className="flex-1 border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-50 font-semibold py-4 px-8 rounded-md transition-colors flex items-center justify-center space-x-2">
                      <ArrowLeftIcon className="w-5 h-5" />
                      <span>{t('booking.back_to_details') || 'Back to Details'}</span>
                    </button>
                    <button onClick={() => setCurrentStep('payment')} className="flex-1 bg-saffron-600 hover:bg-saffron-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                      <span>{t('booking.proceed_to_payment') || 'Proceed to Payment'}</span>
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>}

              {/* Step 3: Payment */}
              {currentStep === 'payment' && <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-3xl font-serif font-bold text-maroon-800">{t('booking.payment_details') || 'Payment Details'}</h2>
                    <div className="flex items-center text-green-700 text-sm">
                      <LockIcon className="w-4 h-4 mr-1" />
                      <span>{t('booking.secure_payment') || 'Secure Payment'}</span>
                    </div>
                  </div>

                  <form onSubmit={handlePaymentSubmit} className="space-y-6">
                    {/* Payment Method Selection */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">{t('booking.payment_method') || 'Payment Method'}</label>
                      <div className="grid grid-cols-2 gap-4">
                        <button type="button" onClick={() => setPaymentData({
                      ...paymentData,
                      paymentMethod: 'card'
                    })} className={`p-4 border-2 rounded-lg transition-all ${paymentData.paymentMethod === 'card' ? 'border-saffron-600 bg-saffron-50' : 'border-gray-300 hover:border-gray-400'}`}>
                          <CreditCardIcon className="w-6 h-6 mx-auto mb-2" />
                          <p className="text-sm font-medium">{t('booking.payment.card') || 'Credit/Debit Card'}</p>
                        </button>
                        <button type="button" onClick={() => setPaymentData({
                      ...paymentData,
                      paymentMethod: 'paypal'
                    })} className={`p-4 border-2 rounded-lg transition-all ${paymentData.paymentMethod === 'paypal' ? 'border-saffron-600 bg-saffron-50' : 'border-gray-300 hover:border-gray-400'}`}>
                          <div className="w-6 h-6 mx-auto mb-2 bg-blue-600 rounded"></div>
                          <p className="text-sm font-medium">{t('booking.payment.paypal') || 'PayPal'}</p>
                        </button>
                      </div>
                    </div>

                    {paymentData.paymentMethod === 'card' && <>
                        <div>
                          <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.payment.cardNumber') || 'Card Number *'}</label>
                          <input type="text" id="cardNumber" name="cardNumber" required maxLength={19} value={paymentData.cardNumber} onChange={handlePaymentChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="1234 5678 9012 3456" />
                          <div className="flex gap-2 mt-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg" alt="Visa" className="h-6" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-6" />
                            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6" />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.payment.cardName') || 'Cardholder Name *'}</label>
                          <input type="text" id="cardName" name="cardName" required value={paymentData.cardName} onChange={handlePaymentChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="Name as it appears on card" />
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.payment.expiry') || 'Expiry Date *'}</label>
                            <input type="text" id="expiryDate" name="expiryDate" required maxLength={5} value={paymentData.expiryDate} onChange={handlePaymentChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="MM/YY" />
                          </div>
                          <div>
                            <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">{t('booking.payment.cvv') || 'CVV *'}</label>
                            <input type="text" id="cvv" name="cvv" required maxLength={4} value={paymentData.cvv} onChange={handlePaymentChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 transition-colors" placeholder="123" />
                          </div>
                        </div>
                      </>}

                    {paymentData.paymentMethod === 'paypal' && <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                        <p className="text-gray-700 mb-4">
                          You will be redirected to PayPal to complete your
                          payment securely.
                        </p>
                        <div className="w-32 h-32 mx-auto bg-blue-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold text-2xl">
                            PayPal
                          </span>
                        </div>
                      </div>}

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start space-x-3">
                      <LockIcon className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
                      <div className="text-sm text-green-800">
                        <p className="font-medium mb-1">{t('booking.payment_secure') || 'Your payment is secure'}</p>
                        <p>{t('booking.payment_encryption') || 'We use industry-standard encryption to protect your payment information.'}</p>
                      </div>
                    </div>

                    <div className="flex gap-4 mt-8">
                        <button type="button" onClick={() => setCurrentStep('review')} className="flex-1 border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-50 font-semibold py-4 px-8 rounded-md transition-colors flex items-center justify-center space-x-2">
                        <ArrowLeftIcon className="w-5 h-5" />
                        <span>{t('booking.back_to_review') || 'Back to Review'}</span>
                      </button>
                      <button type="submit" className="flex-1 bg-saffron-600 hover:bg-saffron-700 text-white font-semibold py-4 px-8 rounded-md transition-colors shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
                        <LockIcon className="w-5 h-5" />
                        <span>{t('booking.pay_button', { amount: pricing.total.toFixed(2) }) || `Pay $${pricing.total.toFixed(2)}`}</span>
                      </button>
                    </div>
                  </form>
                </div>}

              {/* Step 4: Confirmation */}
              {currentStep === 'confirmation' && <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircleIcon className="w-12 h-12 text-green-600" />
                  </div>
                  <h2 className="text-3xl font-serif font-bold text-maroon-800 mb-4">{t('booking.confirmed_title') || 'Booking Confirmed!'}</h2>
                  <p className="text-gray-700 mb-8">{t('booking.confirmed_message', { email: formData.email }) || <>Thank you for your booking. A confirmation email has been sent to <strong>{formData.email}</strong></>}</p>

                  <div className="bg-cream rounded-lg p-6 mb-8 text-left">
                    <h3 className="font-semibold text-maroon-800 mb-4">{t('booking.summary_title') || 'Booking Summary'}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('booking.labels.reference') || 'Booking Reference'}</span>
                        <span className="font-medium">
                          ADH-
                          {Math.random().toString(36).substr(2, 9).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('booking.labels.guest_name') || 'Guest Name'}</span>
                        <span className="font-medium">
                          {formData.firstName} {formData.lastName}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('booking.labels.checkin') || 'Check-in'}</span>
                        <span className="font-medium">
                          {new Date(formData.checkIn).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('booking.labels.checkout') || 'Check-out'}</span>
                        <span className="font-medium">
                          {new Date(formData.checkOut).toLocaleDateString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">{t('booking.labels.room') || 'Room'}</span>
                        <span className="font-medium capitalize">
                          {formData.roomType} Room
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-300">
                        <span className="text-gray-600 font-semibold">{t('booking.labels.total_paid') || 'Total Paid'}</span>
                        <span className="font-bold text-saffron-700">
                          ${pricing.total.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button onClick={() => window.print()} className="w-full border-2 border-maroon-700 text-maroon-700 hover:bg-maroon-50 font-semibold py-3 px-6 rounded-md transition-colors">{t('booking.print') || 'Print Confirmation'}</button>
                    <button onClick={() => window.location.href = '/'} className="w-full bg-saffron-600 hover:bg-saffron-700 text-white font-semibold py-3 px-6 rounded-md transition-colors">{t('booking.return_home') || 'Return to Home'}</button>
                  </div>
                </div>}
            </div>

            {/* Order Summary Sidebar */}
            {currentStep !== 'confirmation' && <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-xl p-6 sticky top-24">
                  <h3 className="text-xl font-serif font-bold text-maroon-800 mb-6">
                    Booking Summary
                  </h3>

                  <div className="space-y-4 mb-6">
                    {formData.roomType && <div className="flex justify-between text-sm">
                        <span className="text-gray-600">
                          {formData.roomType.charAt(0).toUpperCase() + formData.roomType.slice(1)}{' '}
                          Room x {calculateNights()} night(s)
                        </span>
                        <span className="font-medium">
                          ${pricing.roomPrice.toFixed(2)}
                        </span>
                      </div>}

                    {formData.treatment && <div className="flex justify-between text-sm">
                        <span className="text-gray-600 capitalize">
                          {formData.treatment.replace('-', ' ')}
                        </span>
                        <span className="font-medium">
                          ${pricing.treatmentPrice.toFixed(2)}
                        </span>
                      </div>}

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">
                        Service Charge (10%)
                      </span>
                      <span className="font-medium">
                        ${pricing.serviceCharge.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-4 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-maroon-800">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-saffron-700">
                        ${pricing.total.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="bg-saffron-50 rounded-lg p-4 text-sm text-gray-700">
                    <p className="font-medium mb-2">What's Included:</p>
                    <ul className="space-y-1 text-xs">
                      <li>• Daily Ayurvedic breakfast</li>
                      <li>• Complimentary herbal tea</li>
                      <li>• Wellness consultation</li>
                      <li>• Yoga sessions</li>
                      <li>• Free Wi-Fi</li>
                    </ul>
                  </div>
                </div>
              </div>}
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}