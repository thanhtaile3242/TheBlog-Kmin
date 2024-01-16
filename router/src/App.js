import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProjectPage from "./pages/ProjectPage.js";
import NewsletterPage from "./pages/NewsletterPage.js";
import AboutPage from "./pages/AboutPage.js";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/newsletter" element={<NewsletterPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </>
    );
}

export default App;
