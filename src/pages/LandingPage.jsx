import React from 'react'
import { Link } from 'react-router-dom'

function LandingPage() {
    return (
        <div style={{background: "#0b0f1a",color: "white",fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif'}}>

          
            <section
                style={{height: "100vh",backgroundImage: "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000')",backgroundSize: "cover",backgroundPosition: "center",display: "flex",alignItems: "center",justifyContent: "center",position: "relative"}}>
                <div style={{position: "absolute",inset: 0,background: "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,40,0.6))"}} />

                <div style={{position: "relative",background: "rgba(255,255,255,0.08)",backdropFilter: "blur(12px)",padding: "40px",borderRadius: "20px",textAlign: "center",border: "1px solid rgba(255,255,255,0.2)",maxWidth: "600px",}}>

                    <h1 style={{fontSize: "clamp(2rem, 5vw, 3rem)",marginBottom: "10px"}}>Designed to get hired</h1>
                    <h4 style={{color: "#cbd5e1",marginBottom: "20px"}}>Stand out from the crowd and <br />land your dream job</h4>

                    <Link to="/resume">
                        <button style={{padding: "12px 28px",borderRadius: "30px",border: "none",cursor: "pointer",fontWeight: "600",color: "white",background: "linear-gradient(90deg,#6366f1,#06b6d4)",boxShadow: "0 10px 30px rgba(0,0,0,0.4)",transition: "0.3s"}}>Get Started
                        </button>
                    </Link>

                </div>
            </section>

       
            <section style={{ padding: "80px 20px", textAlign: "center" }}>
                <h1 style={{fontSize: "2.2rem",marginBottom: "50px"}}>
                    Tools
                </h1>

                <div style={{display: "flex",flexWrap: "wrap",justifyContent: "center",gap: "40px",maxWidth: "1100px",margin: "auto"}}>

                    {/* LEFT */}
                    <div style={{flex: "1",minWidth: "280px",textAlign: "left",lineHeight: "1.7"}}>
                        <h3>Resume</h3>
                        <p>Build and manage multiple resumes with seamless editing and updates.</p>

                        <h3>Cover Letters</h3>
                        <p>Easily write professional cover letters.</p>

                        <h3>Jobs</h3>
                        <p>Automatically receive relevant job postings.</p>

                        <h3>Applications</h3>
                        <p>Track your job applications in one place.</p>
                    </div>

                   
                    <div style={{flex: "1",minWidth: "280px",display: "flex",justifyContent: "center",alignItems: "center"}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"alt=""style={{width: "220px",filter: "drop-shadow(0 10px 20px rgba(0,0,0,0.5))"}}/>
                    </div>
                </div>
            </section>

            <section style={{height: "300px",backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=2000')",backgroundAttachment: "fixed",backgroundSize: "cover",backgroundPosition: "center"}} />
            <section style={{ padding: "80px 20px", textAlign: "center" }}>

                <h1 style={{fontSize: "2.2rem",marginBottom: "50px"}}>
                    Testimony
                </h1>

                <div style={{display: "flex",flexWrap: "wrap",justifyContent: "center",gap: "40px",maxWidth: "1100px",margin: "auto"}}>

                 
                    <div style={{flex: "1",minWidth: "280px",textAlign: "left"}}>
                        <h3>Trusted by professionals worldwide</h3>

                        <p style={{color: "#cbd5e1",marginTop: "20px",lineHeight: "1.6"}}>
                            We help job seekers land interviews faster using ATS optimized resumes,
                            clean formatting, and professional templates.
                        </p>
                    </div>

                 
                    <div style={{flex: "1",minWidth: "280px",display: "grid",gridTemplateColumns: "repeat(4, 1fr)",gap: "10px"}}>
                        {Array.from({ length: 16 }).map((_, i) => (
                            <img key={i}src={`https://i.pravatar.cc/100?img=${i + 10}`}alt=""style={{width: "100%",borderRadius: "10px",border: "2px solid rgba(255,255,255,0.1)"}} />))}
                    </div>

                </div>
            </section>

        </div>
    )
}

export default LandingPage