import React from "react";
import "./App.css";
import { Homepage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";


function App() {
  return (
    <div>
      <Navbar />
      {/* <Homepage /> */}
      <SearchBooksPage/>
      <Footer/>
   </div>
  );
}
export default App;
