
import { Home } from "../component/home";
import { Contect } from "../component/contact";
import { Projects } from "../component/projects";
import { Skills } from "../component/skills";
import {GiHamburgerMenu} from "react-icons/gi";
import {RxCross2} from "react-icons/rx"
import resume from "../Resume/resume.pdf"
import { useState } from "react";



const NavbarLink= ()=>{

const [state,setState] = useState(true)
   let handleToggle = ()=>{
        setState(false) 
   }

   let handleCancel = ()=>{
       setState(true)
   }

return (
 <>
 <div className="navbar">
       <div className="img-div">       
          <a href="#home">
            <img className="logo-img" src="https://t4.ftcdn.net/jpg/02/93/29/43/360_F_293294319_YPgRVpVJylQY9G55qi735ac2tEPnFlpd.jpg" alt="logo"/>
          </a>
       </div>   
          <div className="stack" id={state ? "stack3" : "stack2"}>
            <a className="anchor1" href="#home">Home</a>
            <a className="anchor2" href="#about">About</a>
            <a className="anchor3" href="#skills">Skills</a>
            <a className="anchor4" href="#projects">Projects</a>
            <a className="anchor5" href={resume} download>Resume</a>
          </div>
          <div className="hc">
            <GiHamburgerMenu  color="white" onClick={handleToggle} className="hamburger" id={state ? "hamburger2" :"hamburger3"}/>
            <RxCross2 onClick={handleCancel} className="cancel" id={state ? "cancel3" : "cancel2"} color="white" />
            </div>
 </div>
 <div>
  <div className="card" id="home">

        <Home />
 
  </div>
  <div className="card" id="about">

       <Skills />
  </div>
  <div className="card" id="skills">
        <Projects />
  </div>
  <div className="card" id="projects">
        <Contect />
  </div>
 </div>
 </>
   
);
}
export {NavbarLink}