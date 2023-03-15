import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { Homepage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1">
        <Routes>
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchBooksPage />} />
          <Route path="/checkout/:bookId" element={<BookCheckoutPage/>}/>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
export default App;
