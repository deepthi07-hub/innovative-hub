// src/components/About/About.jsx

import '../styles/App.css'; 
import './About.css'; // Ensure this path is correct

const About = () => {
  return (
    <div className="page">
      <h1>About Us</h1>
      <p>
        At Narasaraopeta Engineering College, we are dedicated to fostering innovation, creativity, and practical learning through a variety of engaging events and transformative projects. Our mission is to equip students with the skills and mindset necessary to excel in a dynamic technological landscape.
      </p>

      <h2>Our Commitment to Innovation: The Andhra Technology Business Incubator (ATBI)</h2>
      <p>
        A cornerstone of our commitment to entrepreneurship is the Andhra Technology Business Incubator (ATBI), operating under the umbrella of "Startup NEC". The ATBI serves as a vital hub for nurturing budding enterprises and technological advancements within our institution.
      </p>

      {/* NEW GRID CONTAINER STARTS HERE */}
      <div className="about-features-grid"> 
        {/* Each of these will be a grid item */}
        <div> {/* Wrapper for Recognition & Support */}
          <h3>Recognition and Support</h3>
          <ul>
            <li>The ATBI has received official recognition as a business incubator by the Ministry of Micro, Small, & Medium Enterprises (Ministry of MSME), Government of India.</li>
            <li>This prestigious recognition is poised to bring a multi-million-dollar grant to the incubation center. This significant funding will substantially enhance our capacity to support and incubate a greater number of innovative businesses.</li>
          </ul>
        </div>

        <div> {/* Wrapper for Our Incubation Process */}
          <h3>Our Incubation Process</h3>
          <p>
            The ATBI follows a standardized procedure designed to guide startups through their critical early stages:
          </p>
          <ul>
            <li>We assist entrepreneurs in developing their ventures from the initial business idea or prototype stage.</li>
            <li>Our comprehensive support continues until they are ready for the crucial elevator-pitch stage.</li>
            <li>Crucially, the ATBI connects students with an expansive network of seasoned professionals, successful entrepreneurs, and potential investors, providing invaluable mentorship and opportunities for growth.</li>
            </ul>
        </div>
      </div>
      {/* NEW GRID CONTAINER ENDS HERE */}

    </div>
  );
};

export default About;