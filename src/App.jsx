import "./index.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import ListResumes from "./pages/ListResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
function App() {
  const [isLoged, setIsLoged] = useState(false);

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoged(true);
      } else {
        setIsLoged(false);
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <NavBar isLoged={isLoged} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/resumes" element={<ListResumes />} />
        <Route path="/resumeapp" element={<ResumeBuilder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
