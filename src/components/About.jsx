import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', color: '#2c3e50' }}>
        About Me
      </h2>

      <p style={{ lineHeight: '1.7', fontSize: '1.1rem', color: '#444' }}>
        I’m a passionate Software Engineer with 3+ years of experience building scalable, data-driven web applications and backend systems. I specialize in full-stack development using modern technologies like Python, FastAPI, React, Node.js, and Spring Boot. My work has spanned across fintech, cloud-native platforms, and performance-critical systems, with a proven ability to design RESTful APIs, implement service-oriented architectures, and optimize end-to-end performance.
      </p>

      <p style={{ lineHeight: '1.7', fontSize: '1.1rem', color: '#444', marginTop: '1rem' }}>
        At Growealth, I engineered real-time dashboards and dispute-resolution APIs that surfaced $3.2M+ in savings and reduced latency by 40%. Prior to that, I contributed to high-availability microservices at Oracle and developed 5G simulation tools during my internship at Samsung. I enjoy writing clean, testable code and thrive in collaborative environments that challenge me to learn, iterate, and build systems that scale.
      </p>
    </div>
  );
};

export default About;
