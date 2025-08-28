import React from 'react';

const OurServices = () => {
  const services = [
    {
      title: "Haircuts",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-red-700",
      textColor: "text-white"
    },
    {
      title: "Hairstyles",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-gray-200",
      textColor: "text-gray-800"
    },
    {
      title: "Coloring",
      image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=400&h=400&fit=crop&crop=face",
      bgColor: "bg-gray-300",
      textColor: "text-gray-800"
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-8">
      <div className="max-w-8xl mx-auto flex flex-col md:flex-row gap-4">
        {/* Header Section */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-md">
            Beyond haircuts, discover a comprehensive range of services, from coloring to extensions.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 relative overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}
              style={{
                minHeight: '280px',
                backgroundImage: `url(${service.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                // Optionally add a gradient overlay for readability
                // backgroundBlendMode: 'multiply',
              }}
            >
              {/* Overlay for readability */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none"></div> */}

              {/* Service Title */}
              <div className={`${service.textColor} mb-6 relative z-10`}>
                <span className="inline-block px-4 py-2 bg-white bg-opacity-90 rounded-full text-sm font-medium text-gray-800">
                  {service.title}
                </span>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-white bg-opacity-20 rounded-full z-10"></div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-white bg-opacity-10 rounded-full z-10"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        {/* <div className="text-center mt-12">
          <button className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
            Book an Appointment
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default OurServices;