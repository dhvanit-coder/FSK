import React from "react";

function Footer() {
  const footerStyle = {
    background: "linear-gradient(135deg, #000428, #004e92)",
    color: "#ffffff",
    padding: "20px 0",
    textAlign: "center",
    width: "100%",
    boxShadow: "0 -4px 10px rgba(0,0,0,0.2)",
    borderTop: "1px solid rgba(255, 255, 255, 0.1)",
    fontFamily: "'Poppins', sans-serif"
  };

  const copyrightStyle = {
    margin: 0,
    fontSize: "14px",
    letterSpacing: "1px",
    opacity: 0.8
  };

  const linkStyle = {
    color: "#00d2ff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "13px"
  };

  return (
    <footer style={footerStyle}>
      <div style={{ marginBottom: "10px" }}>
        <a href="#" style={linkStyle}>Privacy Policy</a>
        <a href="#" style={linkStyle}>Terms of Service</a>
        <a href="#" style={linkStyle}>Contact Us</a>
      </div>

      <p style={copyrightStyle}>
        © 2026 <span style={{ fontWeight: "bold", color: "#00d2ff" }}>
          My React FSK Project
        </span> | All Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;