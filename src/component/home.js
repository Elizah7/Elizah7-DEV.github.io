import React from "react";
import resume from "../Resume/resume.pdf"
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = ()=>{
 
     return <div  className="home section">
         <div className="image-section">
                <img src="https://ca.slack-edge.com/T044M5T44JV-U045JEVURMH-960522c0f125-512" className="img-fluid" />
            </div>
             <div className="about-section">
                <h1>Hi,</h1>
                <h1>I am Uddeshy Jaiswal A Full Stack MERN Developer </h1>
                <p>I love to learn new technoligies and work hard, passionate about building projects and solving problems</p>
                <a href={resume} download>Resume</a>
             </div>
           
     </div>
        
   
     
        
       

}
export {Home}