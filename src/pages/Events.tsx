// src/components/Events/Events.tsx

import React from 'react';
import '../styles/App.css'; 
import './Events..css';
// Import Events-specific styles
// Import global styles

interface Event {
  id: number;
  title: string;
  date: string;
  description: string;
  // Add more relevant properties like image, location, etc.
}

const eventsData: Event[] = [
  {
    id: 1,
    title: 'Innovation Workshop - Ideation and Prototyping',
    date: 'October 26, 2023',
    description: 'An intensive workshop focused on generating innovative ideas and developing rapid prototypes. Participants learned design thinking methodologies and got hands-on experience with prototyping tools.',
  },
  {
    id: 2,
    title: 'Startup Funding Seminar - Demystifying Investment',
    date: 'November 15, 2023',
    description: 'A seminar led by experienced investors and entrepreneurs, providing insights into the various stages of startup funding, investor expectations, and how to prepare a compelling pitch deck.',
  },
  {
    id: 3,
    title: 'Technopreneurship Talk - From Idea to Impact',
    date: 'December 5, 2023',
    description: 'A guest lecture by a successful technopreneur who shared their journey, challenges, and key learnings in building a impactful technology-driven business.',
  },
  {
    id: 4,
    title: 'Code-a-thon 2024 - Building Smart Solutions',
    date: 'January 20, 2024',
    description: 'Our annual coding competition challenging students to develop innovative software solutions for real-world problems. Featured tracks in AI, IoT, and Web Development.',
  },
  {
    id: 5,
    title: 'Product Design Sprint',
    date: 'February 10, 2024',
    description: 'A fast-paced, five-day design sprint to solve big challenges and test new ideas. Students worked in teams to concept, prototype, and validate solutions.',
  },
  // Add more events here
];

const Events: React.FC = () => {
  return (
    <div className="page events-page">
      <h1>Our Events</h1>
      <p className="page-intro">Explore our dynamic range of workshops, seminars, and competitive events designed to foster innovation and entrepreneurial spirit.</p>
      
      <h2 className="section-heading">Past Highlights</h2>
      <div className="events-list">
        {eventsData.map((event) => (
          <div key={event.id} className="event-card">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date">Date: {event.date}</p>
            <p className="event-description">{event.description}</p>
            {/* You can add more details or a "Read More" button here */}
          </div>
        ))}
      </div>

      {/* You might add a section for upcoming events as well */}
      {/*
      <h2 className="section-heading upcoming-events-heading">Upcoming Events</h2>
      <p className="page-intro">Stay tuned for our next exciting events!</p>
      <div className="events-list">
        <p className="no-events-message">No upcoming events scheduled at the moment. Please check back soon!</p>
      </div>
      */}
    </div>
  );
};

export default Events;