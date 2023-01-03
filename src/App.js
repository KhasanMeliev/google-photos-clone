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
      {/* <Photos/> */}
      {/* <Search /> */}
      <Share />
      <Footer />
    </div>
  );
}

export default App;
