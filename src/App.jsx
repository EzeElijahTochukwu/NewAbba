import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Services from "./components/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Testimonial from "./pages/Testimonial";
import Footer from "./components/Footer";
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
