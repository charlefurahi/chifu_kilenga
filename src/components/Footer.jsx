import { useState, useEffect } from "react";

function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    footer: {
      backgroundColor: "#111",
      color: "#fff",
      padding: "40px 8%",
      textAlign: "center",
    },
    links: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap", marginBottom: "16px" },
    link: { color: "#fff", textDecoration: "none", fontWeight: "500" },
    copy: { fontSize: "0.9rem", color: "#aaa" },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.links}>
        <a style={styles.link} href="#hero">Home</a>
        <a style={styles.link} href="#about">About</a>
        <a style={styles.link} href="#contact">Contact</a>
      </div>
      <div style={styles.copy}>© 2026 Chifu Kilenga. All rights reserved.</div>
    </footer>
  );
}

export default Footer;
