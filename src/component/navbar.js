import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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

  <Navbar className='navbar' fixed='top' expand="sm md lg xl xxl"  bg="dark">
  <Container className="container">
    <Navbar.Brand className="brand" href="#home">
    <img data-aos="slide-right" data-aos-delay="500" src="https://t4.ftcdn.net/jpg/02/93/29/43/360_F_293294319_YPgRVpVJylQY9G55qi735ac2tEPnFlpd.jpg" className="img-fluid" alt="logo"/>
    </Navbar.Brand>
    <Navbar.Toggle className='coloring' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       <Nav className="nnn"
            style={{ maxHeight: '100px' }} 
            navbarScroll
            collapseOnToggle
              >
        <Nav.Link className="linkk" href="#home">Home</Nav.Link>
        
        <Nav.Link className="linkk" href="#skills">Skills</Nav.Link>
        <Nav.Link className="linkk" href="#projects">Projects</Nav.Link>
        <Nav.Link className="linkk" href="#about">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
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