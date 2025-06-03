import Home from "./pages/Home/home";
import Navbar from "./components/Navbar/navbar";
import { HashRouter } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Home />
    </HashRouter>
  );
}

export default App;