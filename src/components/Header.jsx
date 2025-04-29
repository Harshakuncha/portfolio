import React from "react";
import { Link, Outlet } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  const navStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end", // ✅ moved links to the right
    backgroundColor: "#333",
    padding: "10px 30px",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    width: "100vw",
    left: 0,
    margin: 0,
    boxSizing: "border-box"
  };

  const navLinksStyle = {
    display: "flex",
    gap: "30px",
    listStyle: "none",
    margin: 0,
    padding: 0,
    alignItems: "center"
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px"
  };

  const hoverEffect = {
    scale: 1.1,
    transition: { duration: 0.2 }
  };

  return (
    <>
      <nav style={navStyle}>
        <ul style={navLinksStyle}>
          {[
            { name: "About Me", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "For Recruiters", path: "/recruiters" },
            { name: "Contact Me", path: "/contactMe" }
          ].map((item) => (
            <motion.li key={item.name} whileHover={hoverEffect}>
              <Link to={item.path} style={linkStyle}>
                {item.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Header;
