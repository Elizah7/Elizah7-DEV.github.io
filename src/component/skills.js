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
     <FaHtml5 size="50%" className="img" color=""/>
            {/* <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"/> */}
            <h4>HTML</h4>
        </div>
        <div className="div-img">
           <DiCss3 className="img"/>
            <h4>CSS</h4>
        </div>
        <div className="div-img">
          <DiJavascript1 className="img"/>
             <h4>Java-Script</h4>
        </div>
        <div className="div-img">
          <SiChakraui className="img"/>
             <h4>Chakra-UI</h4>
        </div>
        <div className="div-img">
        <FaReact className="img"/>
              <h4>React</h4>
        </div>
        <div className="div-img">
          <SiTypescript size="50%" className="img"/>
              <h4>Type-Script</h4>
        </div>
      </div>
      </div>  
      </>
    );
  }
  
  export { Skills}