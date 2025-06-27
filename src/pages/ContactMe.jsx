import React from "react";
import Header from "../components/Header";
import profilePic from "../assets/harsha.jpg";

const ContactMe = () => {
  return (
    <>
      <Header />
      <section style={{ background: "#0b0f1a", padding: "3rem 1rem", color: "#fff" }}>
        <div style={{ maxWidth: "1100px", margin: "auto" }}>
          <h2 style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "2rem", color: "#fff" }}>
            Let's Connect
          </h2>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "center" }}>
            <div style={{
              flex: "1 1 300px",
              padding: "2rem",
              borderRadius: "12px",
              backgroundColor: "#1a1f2b",
              textAlign: "center",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
            }}>
              <img
                src={profilePic}
                alt="Harsha Vardhan Reddy Kuncha"
                style={{ width: "140px", height: "140px", borderRadius: "50%", objectFit: "cover", marginBottom: "1rem" }}
              />
              <h3 style={{ marginBottom: "0.3rem", color: "#fff" }}>Harsha Vardhan Reddy Kuncha</h3>
              <p style={{ color: "#bbb" }}>Tempe, Arizona</p>
              <div style={{ marginTop: "1.5rem", display: "flex", justifyContent: "center", gap: "1.2rem", flexWrap: "wrap" }}>
                <a href="https://www.linkedin.com/in/harshakuncha" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-linkedin fa-2x" style={{ color: "#0077b5" }}></i>
                </a>
                <a href="tel:6233028447">
                  <i className="fa-solid fa-phone fa-2x" style={{ color: "#28a745" }}></i>
                </a>
                <a href="mailto:harshareddy.kuncha@gmail.com">
                  <i className="fa-solid fa-envelope fa-2x" style={{ color: "#dc3545" }}></i>
                </a>
                <a href="https://leetcode.com/u/vardhanr009/" target="_blank" rel="noreferrer">
                  <i className="fa-solid fa-code fa-2x" style={{ color: "#f9a825" }}></i>
                </a>
                <a href="https://www.github.com/harshakuncha/" target="_blank" rel="noreferrer">
                  <i className="fa-brands fa-github fa-2x" style={{ color: "#fff" }}></i>
                </a>
              </div>
            </div>

            <div style={{
              flex: "1 1 300px",
              padding: "2rem",
              borderRadius: "12px",
              backgroundColor: "#1a1f2b",
              color: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.4)"
            }}>
              <form action="https://formspree.io/f/meogqogo" method="POST">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required style={inputStyle} />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required style={inputStyle} />

                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" required style={inputStyle}></textarea>

                <button type="submit" style={buttonStyle}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const inputStyle = {
  width: "100%",
  padding: "0.7rem",
  marginBottom: "1rem",
  borderRadius: "8px",
  border: "1px solid #ccc",
  fontSize: "1rem",
  backgroundColor: "#2e3647",
  color: "#fff"
};

const buttonStyle = {
  width: "100%",
  padding: "0.75rem",
  backgroundColor: "#0077b5",
  color: "white",
  fontWeight: "bold",
  fontSize: "1rem",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

export default ContactMe;
