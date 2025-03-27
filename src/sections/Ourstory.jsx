import React from "react";
import './css/Ourstory.css';

const OurStory = () => {
  // Generate floating bubbles
  const bubbles = Array.from({ length: 40 }).map((_, i) => {
    const size = Math.random() * 20 + 10; // 10-30px size
    const delay = Math.random() * 10;
    const duration = Math.random() * 25 + 15; // 15-40s duration
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.4 + 0.2; // 0.2-0.6 opacity
    
    // Color palette
    const colors = [
      'rgba(154, 74, 156, OPACITY)', // Purple
      'rgba(192, 68, 153, OPACITY)', // Pink
      'rgba(62, 73, 91, OPACITY)', // Navy
      'rgba(255, 107, 107, OPACITY)', // Coral
      'rgba(75, 192, 192, OPACITY)', // Teal
    ];
    const color = colors[Math.floor(Math.random() * colors.length)].replace('OPACITY', opacity);

    return (
      <div 
        key={i}
        className="bubble"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          background: color,
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          filter: `blur(${size/15}px)`,
          borderRadius: '50%',
          zIndex: 1
        }}
      />
    );
  });

  return (
    <div className="section our-story-section">
      {/* Bubbles Background */}
      <div className="bubbles-background">
        {bubbles}
      </div>

      <div className="container py-4">
        <div className="row align-items-center">
          {/* Left Side: Floating Image */}
          <div className="col-12 col-md-6 d-flex justify-content-center">
            <img 
              src='img/idea1.png' 
              alt="Our Story" 
              className="img-fluid rounded story-image"
            />
          </div>

          {/* Right Side: Text Content */}
          <div className="col-12 col-md-6">
            <div className="story-content">
              <h2 className="fw-bold">Our Story</h2>
              <p>
                Digitokmedia's vision is to Brand your brand as your digital partner.
                Our dedicated team has years of experience in the digital industry
                and uses strategic brainstorming and creative solutions to effectively
                enhance your brand's visibility. Through innovative marketing techniques,
                we aim to amplify your brand's presence and promote lasting engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
