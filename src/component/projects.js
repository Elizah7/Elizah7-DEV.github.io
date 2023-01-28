import React from "react";

import GitHubCalendar from 'react-github-calendar';
import ReactTooltip from "react-tooltip"
import Calender from "./Calender";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Projects = () => {
  return (
    <>

      <div className="projects-section section" data-aos="slide-up" data-aos-duration="20000">
        <h1 className="hp">My Projects</h1>
        <div className="projects-container">
          <div className="project-div">
            <img src="https://i.ibb.co/R2JVhMz/devtv.png" alt="images" />
           
            <h4>Name: DevTv+</h4>
            <div>
            <p>This is clone of AppleTv+ which is a straming platform where we can watch web-shows and movies it was a group project in which we were five teammembers I created the authentication for the application like login page signup page and admin page also</p>
            </div>
            <h4>Tech Used</h4>
            <div>
            <h4>React</h4>
            <h4>Chakra-Ui</h4>
            <h4>Api</h4>
            <h4>Redux</h4>
            </div> 
            <div className="live-button">
              <a href="https://github.com/Channa47/debonair-salt-5814" target="next-page">Github</a>
              <a href="https://devtv.netlify.app" target="next-page">Live server</a>
            </div>
          </div>
          <div className="project-div">
            <img src="https://i.ibb.co/4MmMKL6/product1.png" alt="images" />
          
            <h4>Name : Shop.com</h4>
            <div>
            <p>This is an clone of E-Commerse website which sells garments of men women children this was an single project I built this project myself it has login and signup functionality </p>
            </div>
            <h4>Tech Used</h4>
            <div>
            <h4>React</h4>
            <h4>Chakra-Ui</h4>
            <h4>Api</h4>
            <h4>Redux</h4>
            </div>
            <div className="live-button">
              <a href="">Github</a>
              <a href="">Live server</a>
            </div>
          </div>
          <div className="project-div">
            <img src="https://i.ibb.co/SNMkj0b/product2.png" alt="" />
     
              <h4>Name:Zee5</h4>
              <div>
              <p>This is clone of zee5 webiste which is an Indian streaming platform where you can watch Indian web-shows and movies this website is a solo project I built this project from scrath it has login and signup function also</p>
            </div>
           
            <h4>Tech Used</h4>
            <div>
            <h4>React</h4>
            <h4>Chakra-Ui</h4>
            <h4>Api</h4>
            <h4>Redux</h4>
            </div>
            <div className="live-button">
              <a href="">Github</a>
              <a href="">Live server</a>
            </div>
          </div>
        </div>

      </div>
      <div className="github-section" data-aos="slide-up" data-aos-duration="20000">
        <Calender />
      </div>

    </>
     
  )


}
AOS.init();
export { Projects }