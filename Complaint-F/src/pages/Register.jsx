// import { useState } from "react";
// import axios from "axios";

// function Register() {
//   const [formData, setFormData] = useState({
//     username: "",
//     password: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");


//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const registerUser = async (e) => {
//     e.preventDefault();

//     if (!formData.username || !formData.password) {
//       setMessage("All fields are required");
//       return;
//     }

//     if (formData.password.length < 6) {
//       setMessage("Password must be at least 6 characters");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       await axios.post("http://127.0.0.1:8000/api/register/", formData);

//       setMessage("✅ User Registered Successfully");
//       setFormData({ username: "", password: "" });

//     }
//     //  catch (error) {
//     //   setMessage("❌ Username already exists");
//     // }
//      catch (error) {
//   if (error.response && error.response.data.error) {
//     setMessage("❌ " + error.response.data.error);
//   } else {
//     setMessage("❌ Something went wrong");
//   }
// }
//     finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={registerUser} style={styles.form}>
        
//         <h2 style={styles.heading}>Create Account</h2>
//         <p style={styles.subtext}>Register to continue</p>

//         <input
//           type="text"
//           name="username"
//           placeholder="Enter Username"
//           value={formData.username}
//           onChange={handleChange}
//           style={styles.input}
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={formData.password}
//           onChange={handleChange}
//           style={styles.input}
//         />

//         <button type="submit" style={styles.button} disabled={loading}>
//           {loading ? "Registering..." : "Register"}
//         </button>

//         {message && <p style={styles.message}>{message}</p>}
//       </form>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     height: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",

//     // 🔥 Gradient Background
//     background: "linear-gradient(135deg, #22242c, #7d89a3)",
//   },

//   form: {
//     width: "340px",
//     padding: "35px",
//     borderRadius: "12px",

//     // 🔥 Glass effect
//     background: "rgba(255,255,255,0.1)",
//     backdropFilter: "blur(12px)",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.2)",

//     display: "flex",
//     flexDirection: "column",
//     color: "white",
//   },

//   heading: {
//     textAlign: "center",
//     marginBottom: "5px",
//   },

//   subtext: {
//     textAlign: "center",
//     marginBottom: "20px",
//     fontSize: "14px",
//     opacity: 0.8,
//   },

//   input: {
//     padding: "12px",
//     marginBottom: "15px",
//     borderRadius: "8px",
//     border: "none",
//     outline: "none",
//     fontSize: "14px",

//     background: "rgba(255,255,255,0.2)",
//     color: "white",
//   },

//   button: {
//     padding: "12px",
//     border: "none",
//     borderRadius: "8px",
//     background: "#2563eb",
//     color: "#fff",
//     fontSize: "15px",
//     cursor: "pointer",
//     transition: "0.3s",
//   },

//   message: {
//     marginTop: "12px",
//     textAlign: "center",
//     fontSize: "14px",
//   },
// };

// export default Register;






import { useState } from "react";
import axios from "axios";

import JIT from "../assets/JIT_Borawan.png";

function Register() {

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const registerUser = async (e) => {

    e.preventDefault();

    if (!formData.username || !formData.password) {

      setMessage("⚠️ All fields are required");
      return;

    }

    if (formData.password.length < 6) {

      setMessage("⚠️ Password must be at least 6 characters");
      return;

    }

    try {

      setLoading(true);
      setMessage("");

      await axios.post(
        "http://127.0.0.1:8000/api/register/",
        formData
      );

      setMessage("✅ User Registered Successfully");

      setFormData({
        username: "",
        password: "",
      });

    } catch (error) {

      if (
        error.response &&
        error.response.data.error
      ) {

        setMessage(
          "❌ " + error.response.data.error
        );

      } else {

        setMessage("❌ Something went wrong");

      }

    } finally {

      setLoading(false);

    }
  };

  return (

    <div style={styles.container}>

      {/*  Dark Overlay */}
      <div style={styles.overlay}>

        <form
          onSubmit={registerUser}
          style={styles.form}
        >

          <h2 style={styles.heading}>
            Create Account
          </h2>

          <p style={styles.subtext}>
            Register to continue
          </p>

          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            value={formData.username}
            onChange={handleChange}
            style={styles.input}
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />

          <button
            type="submit"
            style={styles.button}
            disabled={loading}
          >
            {loading
              ? "Registering..."
              : "Register"}
          </button>

          {message && (
            <p style={styles.message}>
              {message}
            </p>
          )}

        </form>

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
    backgroundAttachment: "fixed",
  },

  overlay: {

    minHeight: "100vh",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    background: "rgba(0,0,0,0.55)",
  },

  form: {

    width: "340px",
    padding: "35px",

    borderRadius: "16px",

    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",

    boxShadow:
      "0 8px 25px rgba(0,0,0,0.3)",

    display: "flex",
    flexDirection: "column",

    color: "white",
  },

  heading: {

    textAlign: "center",
    marginBottom: "5px",

    fontSize: "30px",
  },

  subtext: {

    textAlign: "center",
    marginBottom: "20px",

    fontSize: "14px",
    opacity: 0.8,
  },

  input: {

    padding: "12px",
    marginBottom: "15px",

    borderRadius: "8px",
    border: "none",
    outline: "none",

    fontSize: "14px",

    background:
      "rgba(255,255,255,0.18)",

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

    transition: "0.3s",
  },

  message: {

    marginTop: "12px",

    textAlign: "center",
    fontSize: "14px",
  },
};

export default Register;