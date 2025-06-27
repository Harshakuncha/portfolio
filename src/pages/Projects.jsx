import React from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Crypto Price Tracker",
    subtitle: "Jan 2025 – Apr 2025",
    description: "An AI-powered price tracking dashboard optimized with React and Kafka. Real-time crypto analytics using OpenAPI stream integrations.",
    type: "Professional"
  },
  {
    title: "Green AI",
    subtitle: "Jan 2025 – Apr 2025",
    description: "Tools and techniques for energy-efficient AI development. Built LLM training optimization visualizations using CUDA and Python.",
    type: "Professional"
  },
  {
    title: "E-Library",
    subtitle: "Aug 2024 – Dec 2024",
    description: "Flask + SQLAlchemy-based digital library system with user authentication, search, issue tracking, and reminders.",
    type: "Professional"
  },
  {
    title: "Data Preprocessing Pipeline",
    subtitle: "Dec 2023 – Jan 2024",
    description: "Interface pipeline with Flask to process 50M+ rows and export clean CSVs for downstream ML tasks.",
    type: "Professional"
  },
  {
    title: "Robinhood Stock Predictor",
    subtitle: "May 2024 – Jun 2024",
    description: "Kafka stream-based predictive analytics pipeline with 78% final accuracy on momentum-based market moves.",
    type: "Academic"
  },
  {
    title: "vLoRA",
    subtitle: "Jan 2024 – Mar 2024",
    description: "Integrated segmented gather-matrix CUDA kernels from Punica for 12x throughput improvement serving LoRA models.",
    type: "Academic"
  },
  {
    title: "Serverless Video Analysis Pipeline on AWS",
    subtitle: "Apr 2024 – May 2024",
    description: "FFmpeg-based video frame extractor with face recognition deployed using AWS Lambda, S3, and SQS.",
    type: "Academic"
  },
  {
    title: "Folksonomy Mining",
    subtitle: "Aug 2023 – Dec 2023",
    description: "Tweet classification using BERTopic and LLaMA2. Theme clustering from large-scale race discourse on Twitter.",
    type: "Academic"
  },
  {
    title: "Earthquake Detection Using Deep Neural Networks",
    subtitle: "Jan 2023 – May 2023",
    description: "Achieved 83% accuracy on STEAD dataset using improved InceptionTime model, beating CNN and LSTM baselines.",
    type: "Academic"
  },
  {
    title: "Automotive Inventory Warehouse",
    subtitle: "Aug 2023 – Dec 2023",
    description: "Amazon-style inventory manager using Clingo for logic programming and constraint-based decision flow.",
    type: "Academic"
  },
  {
    title: "Movie Genre Predictor using Plot Summary",
    subtitle: "Jan 2023 – May 2023",
    description: "Built ML and Bi-LSTM models for genre classification; Bi-LSTM outperformed with highest F1-score.",
    type: "Academic"
  },
  {
    title: "Prompt Efficiency LLM Metric System",
    subtitle: "Jul 2025 – Apr 2025",
    description: "Evaluated prompt quality across datasets using Mistral 7B via Ollama. Built a GPU-inference performance dashboard.",
    type: "GenAI"
  }
];

const Projects = () => {
  return (
    <>
      <Header />
      <section className="section-services" style={{ background: "#0b0f1a", padding: "3rem 1rem", color: "#fff" }}>
        <div className="container">
          {["Professional", "Academic", "GenAI"].map((type) => (
            <div key={type} className="mb-5">
              <h2 className="text-center mb-4" style={{ fontSize: "2rem", fontWeight: 700 }}>{type} Projects</h2>
              <div className="grid" style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.5rem"
              }}>
                {projects.filter(p => p.type === type).map((proj, idx) => (
                  <motion.div
                    key={idx}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      background: "linear-gradient(135deg, #1f2235, #11131f)",
                      borderRadius: "12px",
                      padding: "1.5rem",
                      minHeight: "260px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between"
                    }}
                  >
                    <div>
                      <h4 style={{ color: "#fff", fontWeight: "bold", marginBottom: "0.25rem" }}>{proj.title}</h4>
                      <h5 style={{ color: "#aaa", fontSize: "0.9rem", marginBottom: "0.75rem" }}>{proj.subtitle}</h5>
                      <p style={{ color: "#ccc", fontSize: "0.95rem" }}>{proj.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;