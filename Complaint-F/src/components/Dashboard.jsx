import { useEffect, useState } from "react";
import axios from "axios";

function Dashboard() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({ total: 0, pending: 0, resolved: 0 });
  const [statsLoading, setStatsLoading] = useState(true);
  const token = localStorage.getItem("token");

  //  Public stats – bina login ke kaam karega
  const fetchStats = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:8000/api/stats/");
      setStats(res.data);
    } catch (err) {
      console.log("Stats fetch failed", err);
    } finally {
      setStatsLoading(false);
    }
  };

  //  User ki complaints – sirf login par
  const fetchComplaints = async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const res = await axios.get(
        "http://127.0.0.1:8000/api/my-complaints/",
        {
          headers: { Authorization: `Token ${token}` },
        }
      );
      setData(res.data);
    } catch (err) {
      console.log("Error fetching complaints", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();      // hamesha chalega
    fetchComplaints(); // sirf token ho to
  }, []);

  // Filter logic only for user complaints
  const filteredData =
    filter === "All"
      ? data
      : data.filter(c => c.status === filter);

  return (
    <div style={{ padding: "20px" }}>
      {/*  Stats Cards – bina login ke dikhenge */}
      <div style={styles.cardContainer}>
        <div style={styles.card}>
          <h3>Total Complaints</h3>
          <p>{statsLoading ? "..." : stats.total}</p>
        </div>
        <div style={styles.card}>
          <h3>Pending</h3>
          <p>{statsLoading ? "..." : stats.pending}</p>
        </div>
        <div style={styles.card}>
          <h3>Resolved</h3>
          <p>{statsLoading ? "..." : stats.resolved}</p>
        </div>
      </div>

      {/*  Agar login nahi hai to sirf stats dikho, baaki nahi */}
      {!token ? (
        <div style={styles.loginPrompt}>
          <p>🔐 Login to see your complaints and detailed status.</p>
          <button onClick={() => window.location.href = "/login"} style={styles.loginBtn}>
            Go to Login
          </button>
        </div>
      ) : (
        <>
          {/* Filter Buttons – only for logged in users */}
          <div style={styles.filterBar}>
            <span style={styles.label}>Complaint status</span>
            {["All", "Pending", "Resolved"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  ...styles.filterBtn,
                  background: filter === f ? "#2563eb" : "rgba(255,255,255,0.1)",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* User Complaints List */}
          {loading ? (
            <p style={{ color: "white" }}>Loading your complaints...</p>
          ) : filteredData.length === 0 ? (
            <p style={{ color: "white" }}>No complaints found</p>
          ) : (
            <div style={styles.grid}>
              {filteredData.map((c) => (
                <div key={c.id} style={styles.complaintCard}>
                  <h3>{c.subject}</h3>
                  <p style={styles.desc}>{c.category}</p>
                  <span
                    style={{
                      ...styles.status,
                      background:
                        c.status === "Pending"
                          ? "#f87171"
                          : c.status === "Resolved"
                          ? "#4ade80"
                          : "#facc15",
                    }}
                  >
                    {c.status}
                  </span>
                  <p style={styles.meta}>ID: {c.id}</p>
                  <p style={styles.meta}>
                    {new Date(c.created_at).toLocaleString()}
                  </p>
                  {c.admin_reply && <p style={styles.reply}>Admin Reply: {c.admin_reply}</p>}
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  cardContainer: {
    display: "flex",
    gap: "20px",
    marginBottom: "20px",
  },
  card: {
    flex: 1,
    padding: "20px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.1)",
    textAlign: "center",
    color: "white",
  },
  filterBar: {
    marginBottom: "20px",
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  },
  label: {
  color: "white",
  width: "100%",
  fontSize: "20px",
  fontWeight: "500",
},
  filterBtn: {
    padding: "8px 15px",
    borderRadius: "6px",
    border: "none",
    color: "white",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "20px",
  },
  complaintCard: {
    padding: "20px",
    borderRadius: "10px",
    background: "rgba(255,255,255,0.1)",
    boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
    color: "white",
  },
  desc: { fontSize: "14px", opacity: 0.8, marginBottom: "10px" },
  status: {
    padding: "5px 10px",
    borderRadius: "6px",
    fontSize: "12px",
    color: "#000",
    fontWeight: "bold",
    display: "inline-block",
  },
  meta: { fontSize: "12px", opacity: 0.7, marginTop: "5px" },
  reply: {
    marginTop: "10px",
    padding: "10px",
    background: "rgba(0,0,0,0.3)",
    borderRadius: "6px",
    fontSize: "13px",
  },
  loginPrompt: {
    textAlign: "center",
    padding: "40px",
    background: "rgba(255,255,255,0.1)",
    borderRadius: "12px",
    color: "white",
  },
  loginBtn: {
    marginTop: "15px",
    padding: "10px 20px",
    background: "#2563eb",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default Dashboard;