import heroImage from "../assets/hero.jpg";
import { useState, useEffect } from "react";

function HeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    hero: {
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "60px 8%",
      gap: "40px",
      textAlign: isMobile ? "center" : "left",
    },
    heroLeft: { flex: 1 },
    heroLeftH1: { fontSize: "3rem", color: "antiquewhite", margin: 0 },
    heroLeftH2: { marginTop: "16px", fontStyle: "oblique", fontWeight: "bold", color: "antiquewhite" },
    heroRight: { flex: 1, display: "flex", justifyContent: "center", marginTop: isMobile ? "20px" : "0" },
    heroImage: { width: isMobile ? "200px" : "280px", height: isMobile ? "200px" : "280px", borderRadius: "50%", objectFit: "cover", border: "2px solid #222" },
  };

  return (
    <section id="hero" style={styles.hero}>
      <div style={styles.heroLeft}>
        <h1 style={styles.heroLeftH1}>Chifu Kilenga</h1>
        <h2 style={styles.heroLeftH2}>Frontend Developer</h2>
      </div>

      <div style={styles.heroRight}>
        <img src={heroImage} alt="Profile" style={styles.heroImage} />
      </div>
    </section>
  );
}

export default HeroSection;
