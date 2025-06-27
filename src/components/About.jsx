import React from 'react';

const About = () => {
  return (
    <section style={{ background: "#0b0f1a", color: "#fff", padding: "4rem 1rem" }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 1rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2.5rem', fontWeight: 'bold' }}>
          About Me
        </h2>

        <p style={{ lineHeight: '1.8', fontSize: '1.15rem', color: '#ccc', textAlign: 'justify' }}>
          I’m a passionate Software Engineer with over 3 years of experience building scalable backend systems, intuitive frontends,
          and cloud-native applications across fintech, enterprise, and AI-driven domains. I bring deep expertise in Java, Node.js,
          React, and Python, with hands-on experience designing microservice architectures, optimizing distributed systems, and
          deploying production-grade applications on AWS.
        </p>

        <p style={{ lineHeight: '1.8', fontSize: '1.15rem', color: '#ccc', marginTop: '1.5rem', textAlign: 'justify' }}>
          My journey spans leading organizations like Oracle and Samsung, where I delivered high-throughput payment platforms,
          resilient infrastructure, and AI-enhanced microservices. I'm currently pursuing my Master's in Computer Science at Arizona
          State University (CGPA: 4.0), thriving at the intersection of systems engineering and innovation. I love tackling complex
          real-world problems through clean, efficient code and thoughtful design.
        </p>
      </div>
    </section>
  );
};

export default About;