import React from 'react';

function Footer() {
  return (
    <footer className="rb-footer">

      <div className="rb-footer-container">

        <div className="rb-footer-brand">
          <h2 className="rb-logo">ResumeBuilder</h2>
          <p className="rb-desc">
            Build professional, ATS-friendly resumes in minutes with a clean modern experience.
          </p>
        </div>

        {/* CONTACT */}
        <div className="rb-footer-section">
          <h3 className="rb-title">Contact</h3>
          <p className="rb-item">
            <i className="fa-solid fa-envelope rb-icon"></i>
            resumebuilder@gmail.com
          </p>
          <p className="rb-item">
            <i className="fa-solid fa-phone rb-icon"></i>
            +91 12345 67676
          </p>
        </div>

        <div className="rb-footer-section">
          <h3 className="rb-title">Connect</h3>

          <div className="rb-social">
            <i className="fa-brands fa-whatsapp rb-social-icon"></i>
            <i className="fa-brands fa-instagram rb-social-icon"></i>
            <i className="fa-brands fa-linkedin rb-social-icon"></i>
            <i className="fa-brands fa-github rb-social-icon"></i>
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="rb-footer-bottom">
        <p>© {new Date().getFullYear()} ResumeBuilder</p>
        
      </div>

    </footer>
  );
}

export default Footer;