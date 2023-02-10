import React from "react";
import {GrLinkedin} from "react-icons/gr"
import {BsWhatsapp} from "react-icons/bs"
import {GoMarkGithub} from "react-icons/go"
import {SiMinutemailer} from "react-icons/si"
const Contect = ()=>{
       
    return (
        <div className="section contact-section">
           <h3 className="h3">My Contacts</h3>
           <h4 className="h4">Phone No : +91 8808346600</h4>
           
            <div className="contact-child">
                <div>
                <a href="https://github.com/Elizah7" target="next-page">
                <div>
               <GoMarkGithub size="50%"/>
                </div>
                <h4>Github</h4>
                </a>
                </div>
                <div>
                <a href="https://www.linkedin.com/in/uddeshy-jaiswal-56a69a201/" target="next-page">
           <div>
           <GrLinkedin size="50%"/>
           </div>
           <h4>Linkedin</h4>
           </a>
           </div>
           <div>
           <a href="" target="next-page">
           <div>
          <SiMinutemailer color="" size="50%"/>
           </div>
           <h4>Email</h4>
           </a>
           </div>
           <div>
           <a href="" target="next-page">
           <div>
           <BsWhatsapp size="50%"/>
           </div>
           <h4>Whataspp</h4>
           </a>
           </div>
            </div>
            <h4 className="h5">Thanks</h4>
        </div>
    )

}
export {Contect}