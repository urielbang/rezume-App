import "./index.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import ListResumes from "./pages/ListResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
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
