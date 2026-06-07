import React from 'react';
import { IoMdDocument } from "react-icons/io";
import { IoIosDownload } from "react-icons/io";
import { Link } from 'react-router-dom';

function ResumeGenerator() {

  const containerStyle = {
    minHeight: "80vh",
    padding: "100px 20px 60px",
    background: "linear-gradient(180deg, #0b1220, #0f172a)",
    color: "#fff",
    fontFamily: "Poppins, sans-serif"
  };

  const heroStyle = {
    textAlign: "center",
    maxWidth: "750px",
    margin: "auto"
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "30px",
    maxWidth: "900px",
    margin: "50px auto"
  };

  const cardStyle = {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "18px",
    padding: "35px",
    textAlign: "center",
    backdropFilter: "blur(12px)",
    transition: "0.3s ease",
    cursor: "pointer"
  };

  const iconStyle = (color) => ({
    fontSize: "55px",
    marginBottom: "15px",
    color
  });

  const stepBadge = {
    display: "inline-block",
    marginTop: "15px",
    fontSize: "12px",
    padding: "5px 12px",
    borderRadius: "999px",
    background: "rgba(56, 189, 248, 0.15)",
    color: "#38bdf8"
  };

  const buttonStyle = {
    background: "linear-gradient(135deg, #38bdf8, #2563eb)",
    border: "none",
    padding: "14px 32px",
    fontSize: "14px",
    fontWeight: "600",
    color: "white",
    borderRadius: "12px",
    cursor: "pointer",
    transition: "0.3s ease",
    letterSpacing: "0.5px"
  };

  return (
    <div style={containerStyle}>


      <div style={heroStyle}>
        <h1 style={{ fontSize: "40px", fontWeight: "700" }}>
          Create a job-winning resume in minutes
        </h1>
        <p style={{ color: "#94a3b8", fontSize: "15px", lineHeight: "1.6" }}>
          Build ATS-friendly resumes with a clean, guided experience.
        </p>
      </div>

  
      <div style={gridStyle}>

    
        <div style={cardStyle}>
          <IoMdDocument style={iconStyle("#38bdf8")} />
          <h3>Add Your Information</h3>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            Fill structured sections with smart suggestions
          </p>
          <span style={stepBadge}>Step 1</span>
        </div>

     
        <div style={cardStyle}>
          <IoIosDownload style={iconStyle("#fb7185")} />
          <h3>Download Resume</h3>
          <p style={{ color: "#94a3b8", fontSize: "14px" }}>
            Export instantly as a professional PDF
          </p>
          <span style={stepBadge}>Step 2</span>
        </div>

      </div>

      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/form">
          <button style={buttonStyle}onMouseOver={(e) => {e.target.style.transform = "scale(1.05)";e.target.style.boxShadow = "0 12px 35px rgba(56,189,248,0.3)";}}onMouseOut={(e) => {e.target.style.transform = "scale(1)";e.target.style.boxShadow = "none";}}>MAKE YOUR RESUME
          </button>
        </Link>
      </div>

    </div>
  );
}

export default ResumeGenerator;