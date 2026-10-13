import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={styles.footer}>
      
      <div style={styles.container}>
        
        {/* About */}
        <div style={styles.section}>
          <h3 style={styles.title}>Digital Complaint System</h3>
          <p style={styles.text}>
            A platform for students to raise complaints and track them easily.
          </p>
        </div>

        {/* Links */}
        <div style={styles.section}>
          <h4 style={styles.subtitle}>Quick Links</h4>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/add" style={styles.link}>Submit Complaint</Link>
          <Link to="/login" style={styles.link}>Login</Link>
        </div>

        {/* Contact */}
        <div style={styles.section}>
          <h4 style={styles.subtitle}>Contact</h4>
          <p style={styles.text}>Email: support@college.com</p>
          <p style={styles.text}>Phone: +91 9876543210</p>
        </div>

      </div>

      {/* Bottom */}
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Digital Complaint System | All Rights Reserved
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "rgba(15, 23, 42, 0.9)", // 👈 match navbar theme
    color: "#fff",
    marginTop: "8px",
  },

  container: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap",
    padding: "30px 40px",
    gap: "20px",
  },

  section: {
    maxWidth: "250px",
    display: "flex",
    flexDirection: "column",
  },

  title: {
    marginBottom: "10px",
  },

  subtitle: {
    marginBottom: "10px",
    fontSize: "16px",
  },

  text: {
    fontSize: "14px",
    opacity: 0.8,
    marginBottom: "5px",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "14px",
    marginBottom: "6px",
    transition: "0.3s",
  },

  bottom: {
    textAlign: "center",
    borderTop: "1px solid rgba(255,255,255,0.2)",
    padding: "12px",
    fontSize: "13px",
    opacity: 0.8,
  },
};

export default Footer;