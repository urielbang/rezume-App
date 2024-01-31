import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import ListResumes from "./pages/ListResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import { UserContext } from "./context/User";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      {user ? (
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/resumes" element={<ListResumes />} />
            <Route path="/resumeapp" element={<ResumeBuilder />} />
          </Routes>{" "}
        </BrowserRouter>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
