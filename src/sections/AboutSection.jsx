import React from 'react';

const AboutSection = () => {
  return (
    <div className="section bg-red-500">
      <div className="container mx-auto px-4 h-full flex items-center justify-center">
        <div className="max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Us</h2>
          <div className="space-y-6">
            <p className="text-lg">
              We specialize in creating smooth full page scroll experiences.
            </p>
            <p className="text-lg">
              Our team combines design and technology to deliver exceptional results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;