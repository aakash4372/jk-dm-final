import React from "react";
import Graphic from "./serviceimage/digitalmarketing.jpg";
import './css/service.css';

const GraphicDesignSection = () => {
  return (
    <div className="service-section">
        <div className="graphic-design-container">
      {/* Section Title */}
      <h1 className="section-title">
        GRAPHIC DESIGN
      </h1>

      {/* Full-width Rectangular Image */}
      <div className="full-width-image">
        <img 
          src={Graphic} 
          alt="Graphic Design Services" 
        />
      </div>
      
      {/* Content */}
      <div className="content-card">
        {/* Description */}
        <p className="description-text">
          Graphic design is the art of visual communication that combines typography, images, colors, and layouts for branding and marketing. We provide logo design, social media graphics, brochures, and flyers to strengthen brand identity. Our services include magazine layouts, packaging design, infographics, and promotional materials like thumbnails and posters, helping businesses establish a strong visual presence.
        </p>
        
        {/* Tagline */}
        <p className="tagline">
          "Your brand's voice, made visible"
        </p>

        {/* Services List */}
        <ul className="services-list">
          {[
            "Logo Design",
            "Brand Identity & Style Guide",
            "Business Card Design",
            "Letterhead & Stationery Design",
            "Flyer & Brochure Design",
            "Poster & Banner Design",
            "Advertisement Design",
            "Magazine Layouts"
          ].map((service, index) => (
            <li key={index} className="service-item">
              <span className="bullet-point"></span>
              <span className="service-text">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </div>
  );
};

export default GraphicDesignSection;