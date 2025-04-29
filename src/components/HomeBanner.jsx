import React from "react";
import { motion } from "framer-motion";
import '../style.css';
import harshaImage from '../assets/harsha.jpg';
import asuImage from '../assets/asu.jpeg';

const HomeBanner = () => {
    return (
        <div className="homebanner center" style={{ 
            padding: "4rem 1rem", 
            backgroundColor: "#1a1a1a", 
            position: "relative", 
            overflow: "hidden", 
            color: "#fff",
            textAlign: "center"
        }}>
            <img
                src={asuImage}
                alt="Background"
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "blur(4px)",
                    opacity: 0.25,
                    zIndex: 1
                }}
            />
            <div style={{ 
                position: "absolute", 
                top: 0, 
                left: 0, 
                width: "100%", 
                height: "100%", 
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 1 
            }} />
            
            <div className="container" style={{ position: "relative", zIndex: 2 }}>
                <div className="row align-items-center justify-content-center">
                    <motion.div
                        className="col-md-12 text-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                       <motion.div
  initial={{ opacity: 0, x: 50, y: -20 }}
  animate={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  style={{
    position: "absolute",
    top: "-100px",    // control vertical distance
    right: "230px",  // control horizontal distance
    zIndex: 3
  }}
>
  <img
    src={harshaImage}
    alt="Harsha Vardhan Reddy Kuncha"
    height="200px"
    width="200px"
    style={{
      borderRadius: '50%',
      objectFit: 'cover',
      boxShadow: '0 8px 16px rgba(0,0,0,0.3)',
      border: "3px solid white"
    }}
  />
</motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            style={{ marginTop: "8rem" }}
                        >
                            <div style={{ fontSize: "1.4rem", color: "#ddd", marginLeft:'6rem',marginBottom: "0.3rem" }}>Hello, I'm</div>
                            <div style={{ fontSize: "2.8rem", fontWeight: "bold", color: "#fff", marginLeft:'6rem',marginBottom: "0.4rem" }}>
                                Harsha Vardhan Reddy Kuncha
                            </div>
                            <div style={{ fontSize: "1.3rem", color: "#bbb", marginLeft:'6rem',marginBottom: "0.4rem"}}>Software Engineer</div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
