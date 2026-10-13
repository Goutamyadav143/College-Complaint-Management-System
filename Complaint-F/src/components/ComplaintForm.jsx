import { useState } from "react";
import axios from "axios";

function ComplaintForm({ setSuccessMsg, selectedCategory }) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  //  Auto selected category from Home page
  const [category, setCategory] = useState(
    selectedCategory || "Faculty"
  );

  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Check if user is logged in
    const token = localStorage.getItem("token");

    if (!token) {
      setMessage("❌ Please login first to submit a complaint");
      return;
    }

    if (!title || !description) {
      setMessage("⚠️ All fields are required");
      return;
    }

    try {

      setLoading(true);
      setMessage("");

      const res = await axios.post(
        "http://127.0.0.1:8000/api/complaints/",
        {
          subject: title,
          description,
          category,
          is_anonymous: isAnonymous,
        },
        {
          headers: {
            Authorization: `Token ${token}`,
          },
        }
      );

      if (setSuccessMsg) {
        setSuccessMsg(
          "✅ Complaint Submitted! ID: " + res.data.complaint_id
        );
      }

      //  Clear form
      setTitle("");
      setDescription("");

      // keep selected category
      setCategory(selectedCategory || "Faculty");

      setIsAnonymous(false);
      setMessage("");

    } catch (error) {

      setMessage("❌ Login required or error occurred");

    } finally {

      setLoading(false);

    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>

      <input
        type="text"
        placeholder="Enter complaint title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />

      <textarea
        placeholder="Describe your issue..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={styles.textarea}
      />

      {/*  Category Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={styles.input}
      >
        <option style={styles.option}>Faculty</option>
        <option style={styles.option}>Hostel</option>
        <option style={styles.option}>Canteen</option>
        <option style={styles.option}>Ragging</option>
        <option style={styles.option}>Fees</option>
      </select>

      <label
        style={{
          marginBottom: "15px",
          fontSize: "14px",
          color: "white",
        }}
      >
        <input
          type="checkbox"
          checked={isAnonymous}
          onChange={() => setIsAnonymous(!isAnonymous)}
        />{" "}
        Submit as Anonymous
      </label>

      <button style={styles.button} disabled={loading}>
        {loading ? "Submitting..." : "Submit Complaint"}
      </button>

      {message && (
        <p style={styles.message}>
          {message}
        </p>
      )}

    </form>
  );
}

const styles = {

  form: {
    display: "flex",
    flexDirection: "column",
  },

  input: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    background: "rgba(255,255,255,0.2)",
    color: "white",
  },

  //  Dropdown option styling
  option: {
    backgroundColor: "#2d3748",
    color: "white",
  },

  textarea: {
    padding: "12px",
    marginBottom: "15px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    fontSize: "14px",
    minHeight: "100px",
    resize: "none",
    background: "rgba(255,255,255,0.2)",
    color: "white",
  },

  button: {
    padding: "12px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "#fff",
    fontSize: "15px",
    cursor: "pointer",
  },

  message: {
    marginTop: "12px",
    textAlign: "center",
    fontSize: "14px",
    color: "#fff",
  },
};

export default ComplaintForm;