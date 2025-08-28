import React from 'react';

const BeautySalonLanding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-amber-50">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 mx-10">
        <div className="flex items-center space-x-8">
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Home</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Services</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Our Team</a>
          <a href="#" className="text-gray-800 hover:text-gray-600 transition-colors">Contacts</a>
        </div>
        
        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <h1 className="text-4xl font-light text-gray-800 tracking-wider">
            señora
          </h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="text-gray-800 hover:text-gray-600 transition-colors">
            Login
          </button>
          <button className="bg-white px-6 py-2 rounded-full text-gray-800 hover:bg-gray-50 transition-colors shadow-sm">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="flex items-center justify-between px-8 mt-16 mx-30">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          <div className="mb-6 flex gap-4 items-center">
            <div className="w-24 text-center h-px bg-gray-800"></div>
            <p className="text-sm text-gray-600 font-light">Berlin, Germany</p>
          </div>
          
          <h2 className="text-7xl font-semibold text-gray-800 leading-tight mb-12 scale-x-120 origin-left">
            All for the<br />
            sake of your<br />
            <span className="text-white font-semibold">beauty</span>
          </h2>
          
          <div className="flex items-center space-x-8">
            <button className="bg-black w-60 text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors">
              Booking Now
            </button>
            
          </div>
        </div>

        {/* Right Content - Model Image */}
        <div className="flex-1 flex justify-end">
          <div className="relative">
            {/* Circular background */}
            <div className="w-96 h-96 rounded-full bg-gradient-to-br from-pink-200 to-rose-300 opacity-60"></div>
            
            {/* Model placeholder - in a real implementation, you'd use an actual image */}
            <div className="absolute inset-0 w-96 h-96 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-amber-100 to-pink-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-200 to-pink-300"></div>
                  <p className="text-sm font-light">Professional Model Image</p>
                  <p className="text-xs opacity-60">Replace with actual photo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-pink-300 opacity-40"></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-rose-400 opacity-60"></div>
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-amber-200 opacity-30"></div>
    </div>
  );
};

export default BeautySalonLanding;