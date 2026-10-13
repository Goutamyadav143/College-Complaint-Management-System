import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const token = localStorage.getItem("token"); // simple auth check

  return (
    <nav style={styles.navbar}>
      
      <h2 style={styles.logo}>Complaint System</h2>

      <div style={styles.links}>
        <Link to="/" style={{...styles.link, ...(isActive("/") && styles.active)}}>Home</Link>
        <Link to="/add" style={{...styles.link, ...(isActive("/add") && styles.active)}}>Add</Link>
        <Link to="/view" style={{...styles.link, ...(isActive("/view") && styles.active)}}>View</Link>

        {!token ? (
          <>
            <Link to="/login" style={{...styles.link, ...(isActive("/login") && styles.active)}}>Login</Link>
            <Link to="/register" style={styles.registerBtn}>Register</Link>
          </>
        ) : (
          <button onClick={() => {
            localStorage.removeItem("token");
            window.location.reload();
          }} style={styles.logoutBtn}>
            Logout
          </button>
        )}
      </div>

    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    boxSizing: "border-box",
    background: "rgba(15, 23, 42, 0.6)",
    backdropFilter: "blur(10px)",
    color: "white",
    zIndex: 1000,
  },

  logo: {
    fontWeight: "bold",
    fontSize: "22px",
  },

  links: {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap", // 👈 mobile safety
  },

  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    transition: "0.3s",
  },

  active: {
    color: "#60a5fa",
    borderBottom: "2px solid #60a5fa",
  },

  registerBtn: {
    background: "#2563eb",
    padding: "8px 16px",
    borderRadius: "6px",
    color: "white",
    textDecoration: "none",
  },

  logoutBtn: {
    background: "#ef4444",
    border: "none",
    padding: "8px 14px",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
  },
};

export default Navbar;