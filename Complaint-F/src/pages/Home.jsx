import { useNavigate } from "react-router-dom";
import JIT from "../assets/JIT_Borawan.png";

function Home() {
  const navigate = useNavigate();

  const categories = [
    "Faculty",
    "Hostel",
    "Canteen",
    "Ragging",
    "Fees",
    
  ];

  const handleCategory = (category) => {
    navigate("/add", {
      state: { category },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}>

        <h1 style={styles.title}>Digital Complaint System</h1>

        <p style={styles.subtitle}>
          Raise your issues easily and track them transparently
        </p>

        {/*  Complaint Category Cards */}
        <div style={styles.cardContainer}>
          {categories.map((item, index) => (
            <div key={index} style={styles.card}>

              <h2 style={styles.cardTitle}>{item}</h2>

              <button
                style={styles.cardButton}
                onClick={() => handleCategory(item)}
              >
                Add Complaint
              </button>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    backgroundImage: `url(${JIT})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  overlay: {
    minHeight: "100vh",
    background: "rgba(0, 0, 0, 0.32)",
    color: "white",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    paddingTop: "100px",
    paddingBottom: "40px",
  },

  title: {
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
  },

  subtitle: {
    marginTop: "10px",
    fontSize: "18px",
    marginBottom: "50px",
    textAlign: "center",
  },

  cardContainer: {
    width: "90%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "25px",
  },

  card: {
    background: "rgba(16, 15, 15, 0)",
    // backdropFilter: "blur(0px)",
    borderRadius: "15px",
    padding: "30px 20px",

    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
    transition: "0.3s",
  },

  cardTitle: {
    marginBottom: "20px",
    fontSize: "24px",
  },

  cardButton: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    fontSize: "15px",
    cursor: "pointer",
  },
};

export default Home;