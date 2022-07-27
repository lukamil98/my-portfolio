import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import WelcomePage from "./components/welcomePage/WelcomePage";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import ProjectsList from "./components/projects/ProjectsList";
import "./app.scss";

export default function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return(
      <div className = "app">
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className = "sections">
          <WelcomePage /> 
          <About />
          <ProjectsList />
          <Contact />
          </div>
      </div>
  )
}