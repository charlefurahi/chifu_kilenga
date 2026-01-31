import { useState, useEffect } from "react";

function AboutSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    section: { padding: "60px 8%", textAlign: "center" },
    title: { fontSize: "2.5rem", color: "antiquewhite", marginBottom: "24px" },
    text: { fontSize: "1.1rem", lineHeight: "1.6", color: "#ddd", maxWidth: "800px", margin: "0 auto" },
  };

  return (
    <section id="about" style={styles.section}>
      <h2 style={styles.title}>About Me</h2>
      <p style={styles.text}>
        I am a passionate frontend developer creating modern, responsive, and clean websites using React and modern web technologies. I enjoy building scalable user interfaces and enhancing user experience across devices.
      </p>
    </section>
  );
}

export default AboutSection;
