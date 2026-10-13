// import { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//   const loginUser = async (e) => {
//     e.preventDefault();

//     if (!username || !password) {
//       setMessage("⚠️ All fields are required");
//       return;
//     }

//     try {
//       setLoading(true);
//       setMessage("");

//       const res = await axios.post(
//         "http://127.0.0.1:8000/api/login/",
//         { username, password }
//       );

//       // ✅ Save token
//       localStorage.setItem("token", res.data.access);

//       // ✅ Save login time
//       localStorage.setItem("loginTime", Date.now());

//       setMessage("✅ Login Successful");

//       setTimeout(() => {
//         navigate("/view");
//       }, 1000);

//     } catch (error) {
//       setMessage("❌ Invalid credentials");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <form onSubmit={loginUser} style={styles.form}>
        
//         <h2 style={styles.heading}>Welcome Back</h2>
//         <p style={styles.subtext}>Login to continue</p>

//         <input
//           style={styles.input}
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />

//         <input
//           style={styles.input}
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button style={styles.button} type="submit" disabled={loading}>
//           {loading ? "Logging in..." : "Login"}
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

//     background: "linear-gradient(135deg, #22242c, #7d89a3)",
//   },

//   form: {
//     width: "340px",
//     padding: "35px",
//     borderRadius: "12px",

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
//   },

//   message: {
//     marginTop: "12px",
//     textAlign: "center",
//     fontSize: "14px",
//   },
// };

// export default Login;



import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import JIT from "../assets/JIT_Borawan.png";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const loginUser = async (e) => {

    e.preventDefault();

    if (!username || !password) {
      setMessage("⚠️ All fields are required");
      return;
    }

    try {

      setLoading(true);
      setMessage("");

      const res = await axios.post(
        "http://127.0.0.1:8000/api/login/",
        {
          username,
          password,
        }
      );

      //  Save token
      localStorage.setItem("token", res.data.access);

      //  Save login time
      localStorage.setItem("loginTime", Date.now());

      setMessage("✅ Login Successful");

      setTimeout(() => {
        navigate("/view");
      }, 1000);

    } catch (error) {

      setMessage("❌ Invalid credentials");

    } finally {

      setLoading(false);

    }
  };

  return (
    <div style={styles.container}>

      {/*  Dark Overlay */}
      <div style={styles.overlay}>

        <form onSubmit={loginUser} style={styles.form}>
          
          <h2 style={styles.heading}>Welcome Back</h2>

          <p style={styles.subtext}>
            Login to continue
          </p>

          <input
            style={styles.input}
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            style={styles.button}
            type="submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
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

    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",

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

    background: "rgba(255,255,255,0.18)",
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
  },
};

export default Login;