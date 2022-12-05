import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Home } from "../component/home";
import { About } from "../component/about";
import { Projects } from "../component/projects";
import { Skills } from "../component/skills";
import 'bootstrap/dist/css/bootstrap.min.css';


const NavbarLink= ()=>{
  return <>

  <Navbar className='navbar' fixed='top' expand="sm" collapseOnSelect bg="transparent">
  <Container classname="container">
    <Navbar.Brand classname="brand" href="#home">
      {/* <img src="https://static.vecteezy.com/system/resources/previews/002/768/229/original/uj-logo-letter-initial-logo-designs-template-free-vector.jpg"/> */}
    </Navbar.Brand>
    <Navbar.Toggle className='coloring' aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
       <Nav className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }} 
            navbarScroll
              >
        <Nav.Link className="link" href="#home">Home</Nav.Link>
        <Nav.Link className="link" href="#about">About</Nav.Link>
        <Nav.Link className="link" href="#skills">Skills</Nav.Link>
        <Nav.Link className="link" href="#projects">Projects</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
<div className='div'>
<div className="content">
   <a className='anchor' id="home">
       {<Home/>}
   </a>
</div>
<div className="content">
   <a className='anchor' id="about">
       {<About/>}
   </a>
</div>
<div className="content">
   <a className='anchor'id="skills">
       {<Skills/>}
   </a>
</div>
<div className="content">
   <a className='anchor' id="projects">
       {<Projects/>}
   </a>
</div>
</div>
</>
}
export {NavbarLink}