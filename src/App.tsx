import React from "react";
import { Route, Routes ,useNavigate} from "react-router-dom";
import "./App.css";
import { BookCheckoutPage } from "./layouts/BookCheckoutPage/BookCheckoutPage";
import { Homepage } from "./layouts/HomePage/HomePage";
import { Footer } from "./layouts/NavbarAndFooter/Footer";
import { Navbar } from "./layouts/NavbarAndFooter/Navbar";
import { SearchBooksPage } from "./layouts/SearchBooksPage/SearchBooksPage";
import { oktaConfig } from "./lib/oktaConfig";
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import {LoginCallback, Security} from '@okta/okta-react'
import LoginWidget from "./Auth/LoginWidget";


const oktaAuth = new OktaAuth(oktaConfig)
function App() {


  const customAuthHandler = () => {
    navigate('/login');
  }
  const navigate = useNavigate();
  const restoreOriginalUri = async (_oktaAuth: any, originalUri: any) => {
    navigate(toRelativeUrl(originalUri||'/',window.location.origin),{replace:true})
  }



  return (
    <div className="d-flex flex-column min-vh-100">
      <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri} onAuthRequired={customAuthHandler}>
      <Navbar />
      <div className="flex-grow-1">
          <Routes>
            console.log(oktaAuth)
            
          <Route path="/home" element={<Homepage />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/search" element={<SearchBooksPage />} />
            <Route path="/checkout/:bookId" element={<BookCheckoutPage />} />
            <Route path="/login" element={
              <LoginWidget config={oktaConfig}/>
            } />
            <Route path="/login/callback" Component={LoginCallback}/>
        </Routes>
      </div>
      <Footer />
     </Security>
    </div>
  );
}
export default App;
