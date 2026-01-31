import { useState, useEffect } from "react";

function NavigationBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Check window width for mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    navbar: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "16px 8%",
      backgroundColor: "#111",
      color: "#fff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
    },
    logo: { fontWeight: "bold", fontSize: "1.5rem" },
    menu: {
      display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
      flexDirection: isMobile ? "column" : "row",
      gap: "20px",
      marginTop: isMobile ? "16px" : "0",
    },
    link: {
      color: "#fff",
      textDecoration: "none",
      fontWeight: "500",
      cursor: "pointer",
    },
    hamburger: {
      display: isMobile ? "block" : "none",
      cursor: "pointer",
      fontSize: "1.5rem",
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Chifu Kilenga</div>

      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      <div style={styles.menu}>
        <a style={styles.link} href="#hero">Home</a>
        <a style={styles.link} href="#about">About</a>
        <a style={styles.link} href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default NavigationBar;
