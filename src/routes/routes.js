import React from "react";
import { Route,Routes } from "react-router-dom";
import { Home } from "../component/home";
import { About } from "../component/about";
import { Projects } from "../component/projects";
import { Skills } from "../component/skills";
const NavbarRoutes = ()=>{

     return(
        <div className="body">
            <Routes>
               <Route path="/" element={<Home/>}></Route>
               <Route path="/about" element={<About></About>}></Route>
               <Route path="/projects" element={<Projects></Projects>}></Route>
               <Route path="/skills" element={<Skills></Skills>}></Route>
            </Routes>
        </div>
     )
}

export {NavbarRoutes}