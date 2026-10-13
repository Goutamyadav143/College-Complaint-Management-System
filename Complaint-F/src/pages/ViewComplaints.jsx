// import Dashboard from "../components/Dashboard";

// function ViewComplaints() {
//   return (
//     <div style={styles.container}>
      
//       <div style={styles.wrapper}>
//         <h2 style={styles.heading}>Complaint Dashboard</h2>
//         <p style={styles.subtext}>
//           View and track all complaints
//         </p>

//         <Dashboard />
//       </div>

//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     padding: "90px 20px 20px 20px", // for navbar space

//     background: "linear-gradient(135deg, #1e293b, #0f172a)",
//   },

//   wrapper: {
//     maxWidth: "1100px",
//     margin: "0 auto",
//     padding: "25px",

//     borderRadius: "12px",
//     background: "rgba(255,255,255,0.05)",
//     backdropFilter: "blur(10px)",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.3)",

//     color: "white",
//   },

//   heading: {
//     marginBottom: "5px",
//   },

//   subtext: {
//     marginBottom: "20px",
//     fontSize: "14px",
//     opacity: 0.7,
//   },
// };

// export default ViewComplaints;



import Dashboard from "../components/Dashboard";

import JIT from "../assets/JIT_Borawan.png";

function ViewComplaints() {

  return (

    <div style={styles.container}>

      {/*  Overlay */}
      <div style={styles.overlay}>

        <div style={styles.wrapper}>

          <h2 style={styles.heading}>
            Complaint Dashboard
          </h2>

          <p style={styles.subtext}>
            View and track all complaints
          </p>

          <Dashboard />

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
    backgroundAttachment: "fixed",
  },

  overlay: {

    minHeight: "100vh",

    padding: "90px 20px 20px 20px",

    background: "rgba(0,0,0,0.55)",
  },

  wrapper: {

    maxWidth: "1100px",
    margin: "0 auto",

    padding: "25px",

    borderRadius: "16px",

    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",

    boxShadow:
      "0 8px 25px rgba(0,0,0,0.3)",

    color: "white",
  },

  heading: {

    marginBottom: "5px",

    fontSize: "32px",
  },

  subtext: {

    marginBottom: "20px",

    fontSize: "14px",
    opacity: 0.8,
  },
};

export default ViewComplaints;