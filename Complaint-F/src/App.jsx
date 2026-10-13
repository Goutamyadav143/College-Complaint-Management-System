import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddComplaint from "./pages/AddComplaint";
import ViewComplaints from "./pages/ViewComplaints";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Footer from "./components/Footer";

function App() {

  //  Auto Logout After 5 Minutes
  useEffect(() => {

    const checkSession = () => {

      const loginTime = localStorage.getItem("loginTime");

      if (loginTime) {

        const currentTime = Date.now();

        const diff = currentTime - loginTime;

        // 5 minutes = 300000 ms
        if (diff > 300000) {

          localStorage.removeItem("token");
          localStorage.removeItem("loginTime");

          alert("Session Expired. Please Login Again.");

          window.location.href = "/login";
        }
      }
    };

    // check every 5 sec
    const interval = setInterval(checkSession, 5000);

    return () => clearInterval(interval);

  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddComplaint />} />
        <Route path="/view" element={<ViewComplaints />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;