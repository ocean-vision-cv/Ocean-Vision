import './App.css';
import Viewer360 from "./components/pages/Viewer360.jsx";
import Home from "./components/pages/Home.jsx";
import About from './components/pages/About';
import Footer from './components/pages/Footer';


function App() {
  return (
    <div className="App">
     <Viewer360/>
     <Home/>
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
