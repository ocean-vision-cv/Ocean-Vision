import './App.css';
import Viewer360 from "./components/pages/Viewer360.jsx";
import Home from "./components/pages/Home.jsx";
import Events from './components/pages/Events';
import About from './components/pages/About';
import Footer from './components/pages/Footer';



function App() {
  return (
    <div className="App">
     <Viewer360/>
     <Home/>
     <Events/>
     <About/>
     <Footer/>
    </div>
  );
}

export default App;
