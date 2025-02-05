// src/App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Services from "./components/Services"; // You can choose to show a summary of services on the home page
import "./index.css";
import "./App.css";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        {/* You can include additional content for your home page here */}
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default App;
