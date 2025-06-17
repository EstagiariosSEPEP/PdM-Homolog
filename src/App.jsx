import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import { HashRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Home />
      <Footer/>
    </HashRouter>
  );
}

export default App;