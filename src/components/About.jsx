import React from 'react';

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '2rem', color: '#2c3e50' }}>
        About Me
      </h2>

      <p style={{ lineHeight: '1.7', fontSize: '1.1rem', color: '#444' }}>
        I’m a passionate Software Engineer with 3+ years of experience building scalable backend systems, intuitive frontends, and cloud-native applications across fintech, enterprise, and AI-driven domains. I bring deep expertise in Java, Node.js, React, and Python, with hands-on experience in designing microservices architectures, optimizing distributed systems, and deploying production-grade applications on AWS. My journey spans across leading firms like Oracle and Samsung, where I delivered high-throughput payment platforms and resilient infrastructure solutions. Currently pursuing my Master's in Computer Science at Arizona State University (CGPA: 4.0), I thrive at the intersection of systems engineering and innovation, with a strong drive to solve complex real-world problems through clean, efficient code and thoughtful design.
      </p>

      {/* <p style={{ lineHeight: '1.7', fontSize: '1.1rem', color: '#444', marginTop: '1rem' }}>
        At Growealth, I engineered real-time dashboards and dispute-resolution APIs that surfaced $3.2M+ in savings and reduced latency by 40%. Prior to that, I contributed to high-availability microservices at Oracle and developed 5G simulation tools during my internship at Samsung. I enjoy writing clean, testable code and thrive in collaborative environments that challenge me to learn, iterate, and build systems that scale.
      </p> */}
    </div>
  );
};

export default About;
