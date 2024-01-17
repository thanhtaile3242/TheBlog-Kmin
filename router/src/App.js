import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import ProjectPage from "./pages/ProjectPage.js";
import NewsletterPage from "./pages/NewsletterPage.js";
import AboutPage from "./pages/AboutPage.js";
import DetailBlogPage from "./pages/DetailBlogPage.js";
function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectPage />} />
                <Route path="/newsletter" element={<NewsletterPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/blog/detail" element={<DetailBlogPage />} />
            </Routes>
        </>
    );
}

export default App;
