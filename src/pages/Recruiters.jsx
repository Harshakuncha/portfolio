import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";

const Recruiters = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const skillSections = [
    {
      title: "Programming Languages",
      skills: "Java, Python, C#, SQL, Bash, JavaScript, TypeScript"
    },
    {
      title: "Web & Backend Technologies",
      skills: "FastAPI, Flask, Spring Boot, ASP.NET Core, Node.js, React.js, Next.js, HTML, CSS, Bootstrap, Jinja2, REST APIs"
    },
    {
      title: "Databases & Messaging",
      skills: "PostgreSQL, MongoDB, MySQL, Redis, Kafka, RabbitMQ, DynamoDB, Oracle"
    },
    {
      title: "Cloud & DevOps",
      skills: "AWS (EC2, S3, Lambda, SQS, CloudWatch), GCP, Docker, Kubernetes, GitHub Actions, Jenkins"
    },
    {
      title: "Tools & IDEs",
      skills: "Git, GitHub, Bitbucket, VS Code, IntelliJ, Postman, Swagger, PyCharm, Grafana, JIRA"
    },
    {
      title: "Testing & CI",
      skills: "JUnit, PyTest, xUnit, Moq, Selenium, Postman, SonarQube, CI/CD Pipelines"
    },
    {
      title: "GenAI & ML",
      skills: "LangChain, Llama3, OpenAI API, HuggingFace, TensorFlow, PyTorch, Scikit-learn"
    },
    {
      title: "Architecture & Principles",
      skills: "Microservices, RESTful API Design, SOA, MVC, TDD, Clean Architecture, Distributed Systems"
    }
  ];

  const toggleSection = (index) => {
    setExpandedIndex(index === expandedIndex ? null : index);
  };

  return (
    <>
      <Header />
      <section className="section-services" style={{ backgroundColor: "#f7f9fc", padding: "3rem 1rem" }}>
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-md-10 col-lg-8">
              <h2 className="title text-center" style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#2c3e50" }}>My Skills</h2>
              <p style={{ color: "#666", fontSize: "1.1rem" }}>Here’s a quick look at the technologies I’ve worked with across full-stack development, cloud, and AI-driven systems.</p>
            </div>
          </div>

          <div className="row g-2">
            {skillSections.map((section, index) => (
              <div key={index} className="col-md-6 mb-3">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  onClick={() => toggleSection(index)}
                  style={{
                    backgroundColor: "#fff",
                    borderRadius: "12px",
                    padding: "1.2rem",
                    boxShadow: "0 3px 8px rgba(0,0,0,0.05)",
                    cursor: "pointer",
                    transition: "all 0.3s ease"
                  }}
                >
                  <h4 style={{ display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "600", color: "#34495e", marginBottom: "0.2rem" }}>
                    <motion.span
                      animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                      transition={{ duration: 0.3 }}
                      style={{ marginRight: "8px", display: "inline-block" }}
                    >
                      ▶
                    </motion.span>
                    {section.title}
                  </h4>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <p style={{ color: "#555", fontSize: "1rem", lineHeight: "1.5", marginTop: "0.75rem", textAlign: "center" }}>{section.skills}</p>
                    </motion.div>
                  )}
                </motion.div>
              </div>
            ))}
          </div>
          <div class="row justify-content-center text-center">
  <div class="col-md-10 col-lg-8">
    <div class="header-section">
      <h2 class="title">Resume</h2>
    </div>
  </div>
</div>
<div id="main"> 
  <object
    data="/HarshaVardhanReddy_Resume.pdf"
    type="application/pdf"
    width="100%"
    height="800px"
  >
    <p>
      Unable to display PDF file.{" "}
      <a href="/Harsha_Vardhan_Reddy_Kuncha_Resume.pdf" download>
        Download Resume
      </a>{" "}
      instead.
    </p>
  </object>
</div>

          <div className="row justify-content-center text-center mt-5">
            <div className="col-md-12 col-lg-12">
              <div className="header-section">
                <h2 className="title">Thanks for the review</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recruiters;
