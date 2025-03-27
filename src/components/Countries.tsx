import React from 'react';

const Countries = () => {
  const countries = [
    {
      name: 'USA',
      image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      name: 'UK',
      image: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      name: 'Canada',
      image: 'https://images.unsplash.com/photo-1517935706615-2717063c2225?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
    {
      name: 'Australia',
      image: 'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    },
  ];

  return (
    <div className="py-16 bg-ivory">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-mocha mb-4">Study Destinations</h2>
          <p className="text-mocha-light max-w-2xl mx-auto">
            Explore educational opportunities in top destinations around the world.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {countries.map((country) => (
            <div key={country.name} className="relative group overflow-hidden rounded-lg">
              <img
                src={country.image}
                alt={country.name}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mocha to-transparent opacity-75"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-ivory">{country.name}</h3>
                <p className="text-ivory opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore universities →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;