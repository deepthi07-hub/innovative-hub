import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="heading-primary hero-title">
            Innovate. Transform. <br />
            Lead the Future.
          </h1>
          <p className="text-large hero-description">
            We're a cutting-edge innovation company that helps businesses transform 
            their ideas into groundbreaking solutions. From AI-powered applications 
            to next-generation digital experiences.
          </p>
          <div className="hero-buttons">
            <a href="#contact" className="btn btn-primary btn-large">
              Get Started
              <ArrowRight size={20} />
            </a>
            <button className="btn btn-hero-secondary btn-large">
              <Play size={20} />
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;