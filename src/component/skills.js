import React from "react";
import Stack from 'react-bootstrap/Stack';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
const  Skills = ()=> {
    return (
      <>
      <h2 className="h2" data-aos="slide-down" data-aos-delay="500">Skills</h2>
      <Stack  direction="horizontal" gap={3} className="skills-section section" data-aos="slide-up"  data-aos-delay="500">
     
        <div className="div-img" data-aos="slide-down" data-aos-delay="1000">
            <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"/>
        </div>
        <div className="div-img" data-aos="slide-down" data-aos-delay="1000">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/2048px-CSS3_logo.svg.png"/>
        </div>
        <div className="div-img" data-aos="slide-down" data-aos-delay="1000">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3-rxVqlnVUWa1-XJrUKxDXSzrG4mKyufcXA&usqp=CAU"/>
        </div>
        <div className="div-img" data-aos="slide-down" data-aos-delay="1000">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIZ2IU_6aCgjMJK1f63BhUA8dffZ0TXjgJNEu1X7X1Y0JjlaSM2_EWhVE3ex85Hag4uWw&usqp=CAU"/>
        </div>
        <div className="div-img" data-aos="slide-down" data-aos-delay="1000">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"/>
        </div>
        <div className="div-img" data-aos="slide-down" data-aos-delay="1000">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png"/>
        </div>
      </Stack>
      </>
    );
  }
  
  export { Skills}