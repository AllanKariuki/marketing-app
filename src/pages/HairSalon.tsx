import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Star, Instagram, Facebook, Phone, Mail, MapPin, Scissors, Sparkles, Users } from 'lucide-react';

const HairSalon3D = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Hair Cuts & Styling",
      price: "From $45",
      description: "Professional cuts tailored to your face shape and lifestyle",
      image: "🎨",
      features: ["Consultation", "Wash & Cut", "Blow Dry", "Styling"]
    },
    {
      title: "Hair Coloring",
      price: "From $85",
      description: "Expert color services from subtle highlights to bold transformations",
      image: "🌈",
      features: ["Color Consultation", "Full Color", "Highlights", "Color Correction"]
    },
    {
      title: "Hair Treatments",
      price: "From $65",
      description: "Nourishing treatments to restore and maintain healthy hair",
      image: "✨",
      features: ["Deep Conditioning", "Keratin Treatment", "Scalp Treatment", "Hair Masks"]
    },
    {
      title: "Special Occasions",
      price: "From $120",
      description: "Elegant styling for weddings, proms, and special events",
      image: "👑",
      features: ["Bridal Styling", "Updos", "Formal Styling", "Event Consultation"]
    }
  ];

  const portfolioItems = [
    { type: "Before/After", style: "Bob Cut", color: "from-pink-400 to-purple-600" },
    { type: "Color Work", style: "Balayage", color: "from-amber-400 to-orange-600" },
    { type: "Special Event", style: "Bridal Updo", color: "from-rose-400 to-pink-600" },
    { type: "Transformation", style: "Pixie Cut", color: "from-blue-400 to-indigo-600" },
    { type: "Color Work", style: "Rainbow Hair", color: "from-green-400 to-teal-600" },
    { type: "Styling", style: "Beach Waves", color: "from-cyan-400 to-blue-600" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section with 3D Effects */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/20 to-blue-900/20"
            style={{
              transform: `translateY(${scrollY * 0.5}px) rotateX(${scrollY * 0.05}deg)`
            }}
          />
          {/* Floating Elements */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`,
                transform: `translateZ(${Math.random() * 100}px)`
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div 
            className="transform transition-all duration-1000"
            style={{
              transform: `translateY(${scrollY * -0.2}px) rotateX(${scrollY * 0.02}deg)`
            }}
          >
            <div className="mb-8">
              <Scissors className="w-16 h-16 mx-auto mb-4 text-pink-400 animate-pulse" />
              <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">
                LUXE SALON
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                Where Art Meets Hair
              </p>
            </div>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <span className="relative z-10 flex items-center">
                Book Your Transformation
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-pink-400 rounded-full p-1">
            <div className="w-1 h-3 bg-pink-400 rounded-full mx-auto animate-bounce" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Services
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the perfect blend of artistry and expertise with our comprehensive hair services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative p-6 rounded-2xl backdrop-blur-sm border border-gray-800 transition-all duration-500 hover:scale-105 cursor-pointer ${
                  activeService === index 
                    ? 'bg-gradient-to-br from-pink-900/30 to-purple-900/30 border-pink-400' 
                    : 'bg-gray-900/30 hover:bg-gray-800/50'
                }`}
                onClick={() => setActiveService(index)}
                style={{
                  transform: `perspective(1000px) rotateY(${activeService === index ? '5deg' : '0deg'})`
                }}
              >
                <div className="text-4xl mb-4">{service.image}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-pink-400 font-semibold mb-3">{service.price}</p>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-400">
                      <Star className="w-3 h-3 mr-2 text-pink-400" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* 3D Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-gradient-to-b from-transparent to-gray-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Our Work
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the transformations that speak to our passion and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${Math.sin(index) * 2}deg) rotateY(${Math.cos(index) * 2}deg)`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-80`} />
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  <div>
                    <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium backdrop-blur-sm">
                      {item.type}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.style}</h3>
                    <div className="flex items-center">
                      <Sparkles className="w-4 h-4 mr-1" />
                      <span className="text-sm">View Details</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="w-full py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white font-medium">
                    View Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { icon: Users, number: "500+", label: "Happy Clients" },
              { icon: Star, number: "4.9", label: "Average Rating" },
              { icon: Scissors, number: "8", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <stat.icon className="w-12 h-12 mx-auto mb-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 bg-gradient-to-t from-gray-900/50 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Ready for Your Transformation?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: Phone, text: "+1 (555) 123-4567" },
              { icon: Mail, text: "hello@luxesalon.com" },
              { icon: MapPin, text: "123 Beauty Ave, Style City" }
            ].map((contact, index) => (
              <div key={index} className="flex items-center justify-center space-x-3 text-gray-300 hover:text-pink-400 transition-colors">
                <contact.icon className="w-5 h-5" />
                <span>{contact.text}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center space-x-6 mb-8">
            {[Instagram, Facebook].map((Icon, index) => (
              <button key={index} className="p-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
              </button>
            ))}
          </div>

          <button className="px-12 py-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full text-lg font-semibold transform transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            Book Your Appointment
          </button>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
      `}</style>
    </div>
  );
};

export default HairSalon3D;