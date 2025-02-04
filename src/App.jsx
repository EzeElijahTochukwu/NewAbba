import { useState } from 'react'
import Header from "./components/Header";
import Services from "./components/Services";
import Blog from "./pages/Blog";
import Footer from "./components/Footer";
import "./index.css";
import './App.css'

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <Services />
        
      </main>
      <Footer />
    </div>
  );
};



export default App
