import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import './css/HeroSection.css';

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { triggerOnce: true, margin: "-10px" });

  // Generate 60 bubbles with randomized properties
  const bubbles = Array.from({ length: 60 }).map((_, i) => {
    const size = Math.random() * 20 + 10; // 10-30px size
    const delay = Math.random() * 10;
    const duration = Math.random() * 25 + 15; // 15-40s duration
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.6 + 0.2; // 0.2-0.8 opacity
    
    // Vibrant color palette
    const colors = [
      'rgba(154, 74, 156, OPACITY)', // Purple
      'rgba(192, 68, 153, OPACITY)', // Pink
      'rgba(62, 73, 91, OPACITY)', // Navy
      'rgba(255, 107, 107, OPACITY)', // Coral
      'rgba(75, 192, 192, OPACITY)', // Teal
      'rgba(255, 206, 86, OPACITY)', // Yellow
      'rgba(54, 162, 235, OPACITY)', // Blue
      'rgba(153, 102, 255, OPACITY)' // Lavender
    ];
    const color = colors[Math.floor(Math.random() * colors.length)].replace('OPACITY', opacity);
    
    // Random movement direction (left/right)
    const xMovement = Math.random() > 0.5 ? 
      Math.random() * 100 + 50 : 
      Math.random() * -100 - 50;
    
    // Random animation style
    const animationType = Math.random() > 0.7 ? 'float2' : 'float';
    
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
          animationName: animationType,
          filter: `blur(${size/15}px)`,
          borderRadius: '50%',
          zIndex: 1
        }}
        data-x-movement={xMovement}
      />
    );
  });

  return (
    <div className="section hero-section" ref={heroRef}>
      {/* Bubbles background */}
      <div className="bubbles-background">
        {bubbles}
      </div>
      
      <div className="container py-4">
        <div className="row align-items-center">
          {/* Image Section */}
          <motion.div
            className="col-12 col-md-6 order-md-2 d-flex justify-content-center align-items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="img/homelogo.png" 
              alt="Digital Partner" 
              className="img-fluid hero-image"
              style={{ 
                width: '100%',
                maxWidth: '800px',
                height: 'auto',
                zIndex: 2,
                position: 'relative'
              }}
            />
          </motion.div>

          {/* Text and Button Section */}
          <div className="col-12 col-md-6 order-md-1 text-center text-md-start mt-4 mt-md-0">
            <motion.h4
              className="fw-bold display-3 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              Your
            </motion.h4>

            <motion.h4
              className="fw-bold display-4 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.7 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              Digital Partner
            </motion.h4>

            <motion.p
              className="lead mb-4 animated-text"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.7 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
             Let your brand’s journey begins.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <Button className="custom-btn mb-3">
                <span className="btn-text">Get Started</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;