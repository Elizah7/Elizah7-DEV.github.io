import React from "react";

import {FaReact} from "react-icons/fa"
import {FaHtml5} from "react-icons/fa"
import {DiCss3} from "react-icons/di"
import {DiJavascript1} from "react-icons/di"
import {SiChakraui} from "react-icons/si"
import {SiTypescript} from "react-icons/si"
const  Skills = ()=> {
    return (
      <>
     
      <div className="skills-section section">
      <h1 className="h2">Skills</h1>
        <div className="skills">
        <div className="div-img">
     <FaHtml5 size="50%" className="img" style={{color:"rgb(241, 101, 41)"}} />
            {/* <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"/> */}
            <h4>HTML</h4>
        </div>
        <div className="div-img">
           <DiCss3 className="img"  color="#2965f1"/>
            <h4>CSS</h4>
        </div>
        <div className="div-img">
          <DiJavascript1 className="img" color="yellow"/>
             <h4>Java-Script</h4>
        </div>
        <div className="div-img">
          <SiChakraui className="img" color="#81E6D9"/>
             <h4>Chakra-UI</h4>
        </div>
        <div className="div-img">
        <FaReact className="img" color="rgb(97, 219, 251)"/>
              <h4>React</h4>
        </div>
        <div className="div-img">
          <SiTypescript size="50%" className="img" color="rgb(0, 122, 204)"/>
              <h4>Type-Script</h4>
        </div>
      </div>
      </div>  
      </>
    );
  }
  
  export { Skills}