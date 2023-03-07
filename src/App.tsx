import React from "react";
import "./App.css";
import { Homepage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";


function App() {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <Footer/>
   </div>
  );
}
export default App;
