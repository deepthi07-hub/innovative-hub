// src/pages/Projects.tsx

import React from 'react';
import '../styles/App.css';
import './Projects.css'; // Import the new Projects.css

// Define the structure for a project
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  website?: string;
  email?: string;
  image?: string; // Optional image URL
}

// Project Data extracted from the provided website
const projectsData: Project[] = [
  {
    id: '1',
    title: 'DigiDocTimes',
    category: 'Healthcare',
    description: 'Aims to provide the best healthcare facilities with validated clinical protocols. This startup seeks to change the dynamics of the healthcare sector by integrating the right balance of education, research, and service in its functional procedures.',
    website: 'http://www.digidoctimes.com',
    email: 'info@digidoctimes.com',
    // image: '/path/to/digidoctimes-logo.png', // Add actual image path here if available
  },
  {
    id: '2',
    title: 'HaasPro',
    category: 'Hospitality',
    description: 'Helps users locate the best hostels throughout Andhra Pradesh. Additional features allow users to list their homes for rent as well as sale.',
    website: 'http://www.haaspro.com',
    email: 'urhaaspro@gmail.com',
    // image: '/path/to/haaspro-logo.png', // Add actual image path here if available
  },
  {
    id: '3',
    title: 'Book Buddy Shop',
    category: 'Education',
    description: 'An initiative born from the high pricing of academic books. This platform involves purchasing old books from passed-out graduates and selling them to current students at more affordable prices.',
    email: 'bookbuddystore@gmail.com',
    // image: '/path/to/bookbuddyshop-logo.png', // Add actual image path here if available
  },
];

// Project Card Component
const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="project-card">
      {project.image && <img src={project.image} alt={project.title} className="project-image" />}
      <h3 className="project-title">{project.title} <span className="project-category">({project.category})</span></h3>
      <p className="project-description">{project.description}</p>
      <div className="project-links">
        {project.website && (
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="project-link">
            Visit Website
          </a>
        )}
        {project.email && (
          <a href={`mailto:${project.email}`} className="project-link">
            Contact
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="page projects-page">
      <h1>Our Innovative Projects</h1>
      <p className="page-intro">
        Explore the groundbreaking projects incubated by Startup NEC, transforming innovative ideas into successful ventures across various sectors. These initiatives showcase the entrepreneurial spirit and technical prowess of our students.
      </p>

      <h2 className="section-heading">Featured Startups</h2>
      <div className="projects-list">
        {projectsData.length > 0 ? (
          projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        ) : (
          <p className="no-projects-message">No projects available at the moment. Check back soon!</p>
        )}
      </div>

      <h2 className="section-heading">About Our Incubation Center</h2>
      <p className="page-intro">
        Narasaraopeta Engineering College's native incubation center, **Andhra Technology Business Incubator (ATBI)** under Startup NEC, has been recognized by the Ministry of MSME, Government of India. It provides a robust platform for students to take their business ideas from prototype stage to market-ready ventures, connecting them with a network of professionals and investors.
      </p>
    </div>
  );
};

export default Projects;