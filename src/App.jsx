import { useContext, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Auth from "./pages/Auth";
import ListResumes from "./pages/ListResumes";
import ResumeBuilder from "./pages/ResumeBuilder";
import { UserContext } from "./context/User";
import CardResumeSecond from "./components/cardResumeSeconde/CardResumeSecond";
import CardResumeTheard from "./components/CardResumeTheard.jsx/CardResumeTheard";
import CardResumeFirst from "./components/cardResumeFirst/CardResumeFirst";

function App() {
  const { user, currentResume } = useContext(UserContext);
  const [resume, setResume] = useState({});

  useEffect(() => {
    if (user) {
      setResume(currentResume);
    }
  }, [user]);

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
            <Route
              path="/firstTamplate"
              element={<CardResumeFirst currentResume={resume} />}
            ></Route>
            <Route
              path="/secondTamplate"
              element={<CardResumeSecond currentResume={resume} />}
            ></Route>
            <Route
              path="/theardTamplate"
              element={<CardResumeTheard currentResume={resume} />}
            ></Route>
          </Routes>{" "}
        </BrowserRouter>
      ) : (
        <Auth />
      )}
    </>
  );
}

export default App;
