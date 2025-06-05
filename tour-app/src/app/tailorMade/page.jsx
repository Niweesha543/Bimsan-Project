"use client";
import React, { useState } from 'react';
import { Calendar, MapPin, Users, Heart, Camera, Mountain, Utensils, Waves, TreePine, Star, Send, User, Mail, Phone, DollarSign } from 'lucide-react';
import Navbar from '../components/navBar';
import Footer from '../components/footer';

const TravelBookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: 'Afghanistan',
    budget: '',
    departureDate: '',
    arrivalDate: '',
    nights: '',
    flexibility: false,
    adults: { age13_17: 0, age18_64: 0, age65Plus: 0 },
    children: { age0_2: 0, age3_5: 0, age6_11: 0 },
    interests: [],
    specialRequests: ''
  });

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Argentina', 'Australia', 'Austria',
    'Bangladesh', 'Belgium', 'Brazil', 'Canada', 'China', 'Denmark',
    'Egypt', 'Finland', 'France', 'Germany', 'Greece', 'India',
    'Indonesia', 'Italy', 'Japan', 'Kenya', 'Malaysia', 'Mexico',
    'Netherlands', 'New Zealand', 'Norway', 'Pakistan', 'Philippines',
    'Singapore', 'South Africa', 'Spain', 'Sweden', 'Switzerland',
    'Thailand', 'Turkey', 'United Kingdom', 'United States', 'Vietnam'
  ];

  const interests = [
    { id: 'adventure', label: 'Adventure', icon: Mountain },
    { id: 'cultural', label: 'Cultural', icon: Star },
    { id: 'beaches', label: 'Exotic Beaches', icon: Waves },
    { id: 'honeymoon', label: 'Honeymoon', icon: Heart },
    { id: 'meditation', label: 'Meditation', icon: TreePine },
    { id: 'nature', label: 'Nature', icon: TreePine },
    { id: 'photography', label: 'Photography', icon: Camera },
    { id: 'pilgrimage', label: 'Pilgrimage', icon: Star },
    { id: 'relaxation', label: 'Relaxation', icon: Waves },
    { id: 'shopping', label: 'Shopping', icon: Star },
    { id: 'spas', label: 'Spas', icon: Waves },
    { id: 'sports', label: 'Sports', icon: Mountain },
    { id: 'tea', label: 'Escape to the Tea', icon: TreePine },
    { id: 'weddings', label: 'Weddings', icon: Heart },
    { id: 'wildlife', label: 'Wildlife', icon: TreePine }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleInterestToggle = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleCountChange = (category, ageGroup, increment) => {
    setFormData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [ageGroup]: Math.max(0, prev[category][ageGroup] + increment)
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div 
      className="min-h-screen relative py-8 px-4"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url('https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-1376930-2662116.jpg&fm=jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/10 via-transparent to-blue-950/10 animate-pulse"></div>
      
      <Navbar/>
      
      {/* Main Container with Two Columns */}
      <div className="max-w-7xl mx-auto mt-16 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8">
          
          {/* Left Side - About Bimsantours */}
       {/*  <div className="lg:col-span-1">
            <div className="  p-8  fixed top-8 mt-80 left-4 w-2/5 z-20 ">
             <div className="bg-white/15 backdrop-blur-lg rounded-2xl shadow-2xl p-8 border border-white/20  top-8 left-8 w-80 z-20"></div>
              <div className="space-y-6">
                <div className="text-center mb-8">
                  <h1 className="text-4xl text-white mb-4 drop-shadow-lg font-serif  ">
                   "Your journey begins with a single step, and we're here to make every one of them unforgettable. With our expert guidance and passion for travel, we’ll lead you to destinations beyond your imagination ~ where every moment becomes a cherished memory."
                  </h1>
                   <div className="w-20 h-1 bg-gradient-to-r from-blue-950 to-blue-950 mx-auto rounded-full"></div> 
                </div>
               
              <div className="space-y-4 text-white/90 leading-relaxed">
                   <p className="text-lg">
                    Welcome to <span className="text-blue-950 font-semibold">Bimsantours</span>, your gateway to extraordinary travel experiences. 
                    We are passionate travel specialists dedicated to crafting unforgettable journeys that go beyond ordinary tourism.
                  </p>
                  
                  <p>
                    With years of travel expertise, we craft personalized itineraries by truly understanding your unique dreams and preferences.

                  </p>
                  
                  <p>
                   Whether you seek adventure, relaxation, culture, or romance, we have the expertise to bring your ideal getaway to life.

                  </p>
                   
                 
                  
                 <p className="text-center text-blue-950 font-medium">
                    "Your journey begins with a single step. Let us guide you to places beyond your imagination."
                  </p> 
                </div> 
              </div>
            </div>
          </div> */}

          {/* Right Side - Application Form */}
          <div className="lg:col-span-5">
          <div className="flex items-center justify-center mb-72 mt-48">
  <h1 className="text-5xl text-white drop-shadow-lg font-serif text-center px-4">
    "Let us take you beyond imagination."
  </h1>
</div>


            <div className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-white/20  ">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-950/50 to-blue-900/50 backdrop-blur-lg px-8 py-6 relative border-b border-white/20">
                <div className="relative z-10">
                  <h1 className="text-3xl  text-white mb-2 drop-shadow-lg font-sans">Plan Your Dream Journey</h1>
                  <p className="text-blue-950 drop-shadow font-sans text-base">Tell us about your perfect getaway and we'll create a tailor-made experience</p>
                </div>
              </div>

              <div className="p-8 space-y-8">
                {/* Personal Information */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-sans text-white flex items-center gap-2">
                    <User className="w-6 h-6 text-blue-950" />
                    Personal Information
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans ">Full Name *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Email Address *</label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Phone Number *</label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                          placeholder="+1 (555) 123-4567"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Country of Residence *</label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
                        <select
                          value={formData.country}
                          onChange={(e) => handleInputChange('country', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all appearance-none bg-white/10 backdrop-blur-sm text-white"
                          required
                        >
                          {countries.map(country => (
                            <option key={country} value={country} className="bg-gray-800 text-white">{country}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Travel Details */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-sans text-white flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-blue-950" />
                    Travel Details
                  </h2>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Budget per Person (USD)</label>
                      <div className="relative">
                        <DollarSign className="absolute left-3 top-3.5 w-5 h-5 text-white/60" />
                        <input
                          type="number"
                          value={formData.budget}
                          onChange={(e) => handleInputChange('budget', e.target.value)}
                          className="w-full pl-10 pr-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                          placeholder="2000"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Number of Nights</label>
                      <input
                        type="number"
                        value={formData.nights}
                        onChange={(e) => handleInputChange('nights', e.target.value)}
                        className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                        placeholder="7"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Departure Date *</label>
                      <input
                        type="date"
                        value={formData.departureDate}
                        onChange={(e) => handleInputChange('departureDate', e.target.value)}
                        className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="block text-sm  text-white font-sans">Return Date *</label>
                      <input
                        type="date"
                        value={formData.arrivalDate}
                        onChange={(e) => handleInputChange('arrivalDate', e.target.value)}
                        className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all bg-white/10 backdrop-blur-sm text-white"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="flexibility"
                      checked={formData.flexibility}
                      onChange={(e) => handleInputChange('flexibility', e.target.checked)}
                      className="w-5 h-5 text-blue-950 rounded focus:ring-2 focus:ring-blue-950 bg-white/10 border-white/30"
                    />
                    <label htmlFor="flexibility" className="block text-sm  text-white font-sans">
                      I'm flexible with my travel dates
                    </label>
                  </div>
                </div>

                {/* Travelers */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-sans text-white flex items-center gap-2">
                    <Users className="w-6 h-6 text-blue-950" />
                    Number of Travelers
                  </h2>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-sans text-white">Adults</h3>
                      {[
                        { key: 'age13_17', label: '13-17 (Age Group)' },
                        { key: 'age18_64', label: '18-64 (Age Group)' },
                        { key: 'age65Plus', label: '65 OR ABOVE (Age Group)' }
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                          <span className="text-sm font-medium text-white">{label}</span>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => handleCountChange('adults', key, -1)}
                              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 text-white"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-semibold text-white">{formData.adults[key]}</span>
                            <button
                              type="button"
                              onClick={() => handleCountChange('adults', key, 1)}
                              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 text-white"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-sans text-white">Children</h3>
                      {[
                        { key: 'age0_2', label: '0-2 (Age Group)' },
                        { key: 'age3_5', label: '3-5 (Age Group)' },
                        { key: 'age6_11', label: '6-11 (Age Group)' }
                      ].map(({ key, label }) => (
                        <div key={key} className="flex items-center justify-between bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                          <span className="text-sm font-medium text-white">{label}</span>
                          <div className="flex items-center gap-3">
                            <button
                              type="button"
                              onClick={() => handleCountChange('children', key, -1)}
                              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 text-white"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-semibold text-white">{formData.children[key]}</span>
                            <button
                              type="button"
                              onClick={() => handleCountChange('children', key, 1)}
                              className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 hover:scale-110 transition-all duration-200 text-white"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-6">
                  <h2 className="text-2xl font-sans text-white flex items-center gap-2">
                    <Heart className="w-6 h-6 text-blue-950" />
                    Your Special Interests
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {interests.map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        type="button"
                        onClick={() => handleInterestToggle(id)}
                        className={`p-4 rounded-lg border-2 transition-all text-center space-y-2 hover:scale-105 backdrop-blur-sm ${
                          formData.interests.includes(id)
                            ? 'border-blue-950 bg-blue-950/30 text-white shadow-lg'
                            : 'border-white/30 bg-white/10 text-white/80 hover:border-blue-300/50 hover:bg-white/20'
                        }`}
                      >
                        <Icon className={`w-6 h-6 mx-auto ${formData.interests.includes(id) ? 'text-blue-950' : 'text-white/70'}`} />
                        <span className="text-sm font-medium">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Special Requests */}
                <div className="space-y-4">
                  <h2 className="text-2xl font-sans text-white">Special Requests & Requirements</h2>
                  <textarea
                    value={formData.specialRequests}
                    onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                    className="w-full px-4 py-3 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-950 focus:border-blue-950 transition-all resize-none bg-white/10 backdrop-blur-sm text-white placeholder-white/60"
                    rows="4"
                    placeholder="Tell us about any special requirements, dietary restrictions, accessibility needs, or specific experiences you'd like to include in your journey..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-950/80 to-blue-950/80 backdrop-blur-sm text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-orange-500/90 hover:to-orange-600/90 transform hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2 shadow-2xl hover:shadow-orange-500/25 border border-white/20 font-sans tracking-widest uppercase"
                  >
                    <Send className="w-5 h-5" />
                    Create My Dream Journey
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual enhancement */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-white/5 rounded-full blur-xl animate-bounce"></div>
      <div className="fixed bottom-20 right-10 w-16 h-16 bg-blue-300/10 rounded-full blur-lg animate-pulse"></div>
      <div className="fixed top-1/2 right-20 w-12 h-12 bg-purple-300/10 rounded-full blur-md animate-ping"></div>
     
    </div>
  );
};

export default TravelBookingForm;