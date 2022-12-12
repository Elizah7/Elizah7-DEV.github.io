
import { Home } from "../component/home";
import { Contect } from "../component/contact";
import { Projects } from "../component/projects";
import { Skills } from "../component/skills";

import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const NavbarLink= ()=>{
  return <>

 
<div className='div'>
<div className="content content-home">
   <a className='anchor' id="home">
       {<Home/>}
   </a>
</div>

<div className="content content-skills">
   <a className='anchor'id="skills">
       {<Skills/>}
   </a>
</div>
<div className="content content-project">
   <a className='anchor' id="projects">
       {<Projects/>}
   </a>
</div>
<div className="content contact-section">
   <a className='anchor' id="about">
       {<Contect/>}
   </a>
</div>
</div>
</>
}
export {NavbarLink}