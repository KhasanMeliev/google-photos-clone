import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Photos from "./components/Photos/Photos";
import Search from "./components/Search/Search";
import Share from "./components/SharingPage/Share";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/photos" element={<Photos />} />
        <Route path="/search" element={<Search />} />
        <Route path="/share" element={<Share />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
