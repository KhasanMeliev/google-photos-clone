import { Route, Routes } from "react-router-dom";
import "./App.css";
import Photos from "./components/Photos/Photos";
import Search from "./components/Search/Search";
import Share from "./components/SharingPage/Share";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Photos />}>
          <Route index element={<Photos />} />
          <Route path="search" element={<Search />} />
          <Route path="share" element={<Share />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
