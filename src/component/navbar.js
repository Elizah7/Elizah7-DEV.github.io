
import { Home } from "../component/home";
import { Contect } from "../component/contact";
import { Projects } from "../component/projects";
import { Skills } from "../component/skills";
import resume from "../Resume/resume.pdf"



const NavbarLink= ()=>{

return (
 <>
 <div className="navbar">
       <div className="img-div">       
          <a href="#home">
            <img className="logo-img" src="https://t4.ftcdn.net/jpg/02/93/29/43/360_F_293294319_YPgRVpVJylQY9G55qi735ac2tEPnFlpd.jpg" alt="logo"/>
          </a>
       </div>   
          <div className="stack">
            <a className="anchor1" href="#home">Home</a>
            <a className="anchor2" href="#about">About</a>
            <a className="anchor3" href="#skills">Skills</a>
            <a className="anchor4" href="#projects">Projects</a>
            <a className="anchor5" href={resume} download>Resume</a>
          </div>
 </div>
 <div>
  <div className="card" id="home">
    {/* <div id="home" className="anchor"> */}
        <Home/>
        {/* </div> */}
  </div>
  <div className="card" id="about">
    {/* <div id="about" className="anchor"> */}
       <Skills/>
    {/* </div> */}
  </div>
  <div className="card" id="skills">
     {/* <div id="skills" className="anchor"> */}
        <Projects/>
     {/* </div> */}
  </div>
  <div className="card" id="projects">
     {/* <div id="projects" className="anchor"> */}
        <Contect/>
     {/* </div> */}
  </div>
 </div>
 </>
   
);
}
export {NavbarLink}