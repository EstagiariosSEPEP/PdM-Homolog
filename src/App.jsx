import Home from './pages/Home/home';
import { HashRouter } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <HashRouter>
       <Home/>
    </HashRouter>
  );
}

export default App