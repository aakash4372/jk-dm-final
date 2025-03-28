import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { motion, useInView } from "framer-motion";
import './css/HeroSection.css';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { triggerOnce: true, margin: "-10px" });

  const scrollToOurStory = () => {
    const ourStorySection = document.getElementById('our-story');
    if (ourStorySection) {
      ourStorySection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Generate 60 bubbles with randomized properties
  const bubbles = Array.from({ length: 60 }).map((_, i) => {
    const size = Math.random() * 20 + 10;
    const delay = Math.random() * 10;
    const duration = Math.random() * 25 + 15;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.6 + 0.2;
    
    const colors = [
      'rgba(154, 74, 156, OPACITY)',
      'rgba(192, 68, 153, OPACITY)',
      'rgba(62, 73, 91, OPACITY)',
      'rgba(255, 107, 107, OPACITY)',
      'rgba(75, 192, 192, OPACITY)',
      'rgba(255, 206, 86, OPACITY)',
      'rgba(54, 162, 235, OPACITY)',
      'rgba(153, 102, 255, OPACITY)'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)].replace('OPACITY', opacity);
    
    const xMovement = Math.random() > 0.5 ? 
      Math.random() * 100 + 50 : 
      Math.random() * -100 - 50;
    
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
      <div className="bubbles-background">
        {bubbles}
      </div>
      
      <div className="container py-4">
        <div className="row align-items-center">
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
                maxWidth: '700px',
                height: 'auto',
                zIndex: 2,
                position: 'relative'
              }}
            />
          </motion.div>

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
              Let your brand's journey begin.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9, duration: 0.7 }}
              style={{ position: 'relative', zIndex: 2 }}
            >
              <Button 
              as={Link} to="/services"
                className="custom-btn mb-3"
                onClick={scrollToOurStory}
              >
                <span className="btn-text">know more</span>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;