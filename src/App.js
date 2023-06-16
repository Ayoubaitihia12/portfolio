import Navbar from "./components/Navbar";
import Home from './components/Home'
import SocailLinks from "./components/SocailLinks";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
      
      <SocailLinks/>
    </div>
  );
}

export default App;
