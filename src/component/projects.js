import React from "react";

import GitHubCalendar from 'react-github-calendar';
import ReactTooltip  from "react-tooltip"
const Projects = ()=>{
  const selectLastHalfYear = contributions => {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const shownMonths = 10;
  
    return contributions.filter(day => {
      const date = new Date(day.date);
      const monthOfDay = date.getMonth();
  
      return (
        date.getFullYear() === currentYear &&
        monthOfDay > currentMonth - shownMonths &&
        monthOfDay <= currentMonth
      );
    });
  };
       
    return (
        <>
         
           <div className="projects-section section">
           <h3 className="hp">My Projects</h3>
           <div className="projects-container">
              <div className="project-div">
                <img src="my-portfolio/src/style/product1.png" alt=""/>
              </div>
              <div className="project-div">
              <img src="my-portfolio/src/style/product2.png" alt=""/>
              </div>
              <div className="project-div">
              <img src="my-portfolio/src/style/product2.png" alt=""/>
              </div>
              </div>
              
           </div>
           <div className="h2" style={{width:"10%",marginTop:"5%"}}>
            <h4>Github Stats</h4>
           </div>
           <div className="github">
            <GitHubCalendar  blockSize={18} username="Elizah7" transformData={selectLastHalfYear}>
              <ReactTooltip delayShow={20} html/>
            </GitHubCalendar>
          
           </div>
           <div className="github-stats" style={{marginTop:"0"}}>
              <a href="https://github.com/Elizah7">
                <img src="https://github-readme-streak-stats.herokuapp.com?user=Elizah7&theme=dark"/>
              </a>
            </div>
        </>
    )

}
export {Projects}