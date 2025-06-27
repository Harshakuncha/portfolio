import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa";
import { FaCode, FaServer, FaCloud, FaDatabase, FaTools, FaVial, FaBrain, FaCubes } from "react-icons/fa";
import mtbankLogo from "../assets/M&T.jpeg";
import oracleLogo from "../assets/oracle.png";
import samsungLogo from "../assets/samsung.png";
import sparksLogo from "../assets/sparks.png";
import Header from "../components/Header";

const experienceData = [
  {
    role: "Software Engineer",
    company: "M&T Bank",
    location: "Tempe, AZ",
    duration: "May 2024 – April 2025",
    logo: mtbankLogo,
    bullets: [
      "Built AI-driven full-stack trading solutions using React, Redux and Java/Spring Boot to streamline and optimize buy/sell flows by optimizing S3 REST endpoints and integrating third-party APIs, resulting in $500K in quarterly transactions.",
      "Developed a scalable system as a set of microservices for a fintech SaaS platform using Node.js and Merge Queue Systems that focused on producing 40% performance difference via JVM profiling to enable faster approval times for the credit cards.",
      "Refactored critical trading workflows by optimizing MongoDB queries, orchestrating with temporal.io and leveraging Glue, Spark for scalable ETL and RBAC. Integrated OAuth 2.0 for secure access and enhanced code quality through unit testing."
    ]
  },
  {
    role: "Software Developer",
    company: "Oracle",
    location: "Hyderabad, India",
    duration: "Jan 2022 – Jul 2023",
    logo: oracleLogo,
    bullets: [
      "Optimized enterprise UI components with React/TypeScript and Java leveraged Redis caching to fetch real-time financial data and implemented lazy loading strategy to reduce data fetch latency by ~35% and enhancing dashboard responsiveness.",
      "Engineered scalable, event-driven REST APIs and Apache Kafka event pipelines with Node.js, handling 10K+ concurrent requests via multithreaded processing. Optimized PostgreSQL queries and integrated Splunk for observability and monitoring.",
      "Orchestrated microservices architecture using Docker, Kubernetes and Nginx as an Ingress load balancer. Secured communication with SSL Certificates from Let’s Encrypt and implemented mutual TLS within the service mesh to support product development.",
      "Championed Agile development (Jira), conducting peer code reviews and code analysis (SonarQube) to ensure code quality.",
      "Managed and maintained CI/CD pipelines with build tools Gradle, Jenkins performed code reviews on repositories using GIT following TDD best practices and acted as scrum master to mentor 2 interns in documentation, user requirements and coding."
    ]
  },
  {
    role: "Software Engineer Intern",
    company: "Samsung",
    location: "Manipal, India",
    duration: "May 2021 – Nov 2021",
    logo: samsungLogo,
    bullets: [
      "Crafted modular, real-time data visualization components using modern JavaScript (ES6+), HTML5, and CSS3, and enhanced backend with Laravel (PHP) by implementing RESTful APIs and integrating MySQL for persistent storage reducing manual workflows by ~40%.",
      "Constructed a Spring Boot microservice with Kafka for Async event processing and Redis Caching, optimizing the throughput to handle 10,000+ req/sec at 200ms latency and automated build with Terraform (IaC) to create services and assured software maintenance."
    ]
  },
  {
    role: "Android Developer Intern",
    company: "Sparks Foundation",
    location: "Bengaluru, India",
    duration: "Mar 2021 – May 2021",
    logo: sparksLogo,
    bullets: [
      "Architected and built core payment modules using React Native and Android SDK, applying MVVM and Android Architecture Components for clean separation of concerns and faster feature development.",
      "Integrated Retrofit/okHTTP to consume RESTful APIs for authentication, payment, and transaction history. Implemented Role-Based Access Control (RBAC) via JWT tokens for granular access policies and enforce field level masking for PIIs."
    ]
  }
];

const skillSections = [
  {
    title: "Programming Languages",
    skills: ["Java", "Python", "C#", "SQL", "Bash", "JavaScript", "TypeScript"],
    icon: <FaCode />
  },
  {
    title: "Web & Backend Technologies",
    skills: ["FastAPI", "Flask", "Spring Boot", "ASP.NET Core", "Node.js", "React.js", "Next.js", "HTML", "CSS", "Bootstrap", "Jinja2", "REST APIs"],
    icon: <FaServer />
  },
  {
    title: "Databases & Messaging",
    skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Kafka", "RabbitMQ", "DynamoDB", "Oracle"],
    icon: <FaDatabase />
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda, SQS, CloudWatch)", "GCP", "Docker", "Kubernetes", "GitHub Actions", "Jenkins"],
    icon: <FaCloud />
  },
  {
    title: "Tools & IDEs",
    skills: ["Git", "GitHub", "Bitbucket", "VS Code", "IntelliJ", "Postman", "Swagger", "PyCharm", "Grafana", "JIRA"],
    icon: <FaTools />
  },
  {
    title: "Testing & CI",
    skills: ["JUnit", "PyTest", "xUnit", "Moq", "Selenium", "Postman", "SonarQube", "CI/CD Pipelines"],
    icon: <FaVial />
  },
  {
    title: "GenAI & ML",
    skills: ["LangChain", "Llama3", "OpenAI API", "HuggingFace", "TensorFlow", "PyTorch", "Scikit-learn"],
    icon: <FaBrain />
  },
  {
    title: "Architecture & Principles",
    skills: ["Microservices", "RESTful API Design", "SOA", "MVC", "TDD", "Clean Architecture", "Distributed Systems"],
    icon: <FaCubes />
  }
];

const ExperienceWithSkills = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggle = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  return (
    <>
    <Header/>
    <section style={{ background: "#0b0f1a", color: "#fff", padding: "4rem 1rem" }}>
      <div className="container">
        <h2 className="text-center mb-5" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Experience</h2>
        {experienceData.map((exp, i) => (
          <div key={i} style={{ backgroundColor: "#1a1f2b", borderRadius: "12px", marginBottom: "2rem", padding: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", cursor: "pointer" }} onClick={() => toggle(i)}>
              <img src={exp.logo} alt={exp.company} style={{ width: "40px", height: "40px", borderRadius: "50%" }} />
              <div style={{ flexGrow: 1, textAlign: "left" }}>
                <h4 style={{ margin: 0, fontSize: "1.25rem", fontWeight: 600 }}>{exp.role}</h4>
                <p style={{ margin: 0, color: "#aaa" }}>{exp.company} — <i>{exp.location}</i></p>
                <small style={{ color: "#888" }}>{exp.duration}</small>
              </div>
              <motion.span animate={{ rotate: expandedIndex === i ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <FaChevronDown />
              </motion.span>
            </div>
            <AnimatePresence>
              {expandedIndex === i && (
                <motion.ul
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  style={{ marginTop: "1rem", paddingLeft: "1.5rem", listStyle: "disc", color: "#ccc", textAlign: "left" }}
                >
                  {exp.bullets.map((point, idx) => (
                    <li key={idx} style={{ marginBottom: "0.75rem" }}>{point}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}

        <h2 className="text-center mt-5 mb-4" style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Skills</h2>
        <div className="row g-2">
          {skillSections.map((section, index) => (
            <div key={index} className="col-md-6 mb-3">
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  backgroundColor: "#1a1f2b",
                  borderRadius: "12px",
                  padding: "1.2rem",
                  boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                  cursor: "pointer",
                  transition: "all 0.3s ease"
                }}
              >
                <h4 style={{ display: "flex", alignItems: "center", fontWeight: "600", color: "#fff" }}>
                  <span style={{ marginRight: "10px" }}>{section.icon}</span>
                  {section.title}
                </h4>
                <div style={{ marginTop: "0.75rem", display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {section.skills.map((skill, i) => (
                    <span
                      key={i}
                      style={{
                        backgroundColor: "#2e3647",
                        color: "#fff",
                        borderRadius: "20px",
                        padding: "6px 12px",
                        fontSize: "0.95rem",
                        fontWeight: "500"
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ExperienceWithSkills;
