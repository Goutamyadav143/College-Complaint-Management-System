// import { useState } from "react";
// import { useLocation } from "react-router-dom";
// import ComplaintForm from "../components/ComplaintForm";

// function AddComplaint() {

//   const [successMsg, setSuccessMsg] = useState("");

//   //  Get category from Home page
//   const location = useLocation();

//   const selectedCategory =
//     location.state?.category || "Faculty";

//   return (
//     <div style={styles.container}>
      
//       <div style={styles.wrapper}>
        
//         <h2 style={styles.heading}>Submit a Complaint</h2>
        
//         <p style={styles.subtext}>
//           Fill the form below to raise your issue
//         </p>

//         {successMsg && (
//           <p style={{ color: "lightgreen", textAlign: "center" }}>
//             {successMsg}
//           </p>
//         )}

//         {/*  Pass category */}
//         <ComplaintForm
//           setSuccessMsg={setSuccessMsg}
//           selectedCategory={selectedCategory}
//         />

//       </div>

//     </div>
//   );
// }

// const styles = {
//   container: {
//     minHeight: "100vh",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     background: "linear-gradient(135deg, #22242c, #7d89a3)",
//     padding: "80px 20px 20px 20px",
//   },

//   wrapper: {
//     width: "100%",
//     maxWidth: "500px",
//     padding: "30px",
//     borderRadius: "12px",
//     background: "rgba(255,255,255,0.1)",
//     backdropFilter: "blur(12px)",
//     boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
//     color: "white",
//     margin: "0 auto",
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
// };

// export default AddComplaint;


import { useState } from "react";
import { useLocation } from "react-router-dom";

import ComplaintForm from "../components/ComplaintForm";

import JIT from "../assets/JIT_Borawan.png";

function AddComplaint() {

  const [successMsg, setSuccessMsg] = useState("");

  //  Get category from Home page
  const location = useLocation();

  const selectedCategory =
    location.state?.category || "Faculty";

  return (

    <div style={styles.container}>

      {/*  Dark Overlay */}
      <div style={styles.overlay}>

        <div style={styles.wrapper}>
          
          <h2 style={styles.heading}>
            Submit a Complaint
          </h2>
          
          <p style={styles.subtext}>
            Fill the form below to raise your issue
          </p>

          {successMsg && (
            <p
              style={{
                color: "lightgreen",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              {successMsg}
            </p>
          )}

          {/*  Complaint Form */}
          <ComplaintForm
            setSuccessMsg={setSuccessMsg}
            selectedCategory={selectedCategory}
          />

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

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "80px 20px 20px 20px",

    background: "rgba(0,0,0,0.55)",
  },

  wrapper: {

    width: "100%",
    maxWidth: "500px",

    padding: "30px",

    borderRadius: "16px",

    background: "rgba(255,255,255,0.08)",
    backdropFilter: "blur(12px)",

    boxShadow:
      "0 8px 25px rgba(0,0,0,0.3)",

    color: "white",

    margin: "0 auto",
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
};

export default AddComplaint;