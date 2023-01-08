import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Photos from "./pages/Photos/Photos";
import Share from "./pages/SharingPage/Share";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Search from "./pages/Search/Search";
import View from "./components/SearchPageComponents/PeopleImages/ViewImages/View";
import ViewPlace from "./components/SearchPageComponents/Places/ViewPlaces/ViewPlace";
import Library from "./pages/Library/Library";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Photos />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/search" element={<Search />} />
        <Route path="/share" element={<Share />} />
        <Route path="/library" element={<Library />} />
        <Route path="/viewPeople" element={<View />} />
        <Route path="/viewPlaces" element={<ViewPlace />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
