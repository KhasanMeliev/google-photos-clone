import "./App.css";
import Photos from "./components/Photos/Photos";
import Search from "./components/Search/Search";
import Footer from "./containers/Footer/Footer";
import Header from "./containers/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
