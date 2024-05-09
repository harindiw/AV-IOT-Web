import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Home/NavBar";
import { Footer } from "./components/Home/Footer";
import { Explore } from "./components/Consultation/Explore";
import { Home } from "./components/Home/Home";
import { ServicesHome } from "./components/Services/ServicesHome";
import { Abouthome } from "./components/AboutUs/Abouthome";
import { Blog } from "./components/Blog/Blog";
import { Contact } from "./components/Contact/Contact"
import { SendMsg } from "./components/Contact/SendMsg"

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} /> 
          <Route path="/Explore" element={<Explore/>} /> 
          <Route path="/Service" element={<ServicesHome/>} /> 
          <Route path="/Blog" element={<Blog/>} /> 
          <Route path="/Abouthome" element={<Abouthome/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/SendMsg" element={<SendMsg/>} />
        </Routes>
        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
