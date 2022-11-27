import React from "react"
import {Link} from "react-router-dom"
import "../style/style.css"


const Navbar= ()=>{
   
      return (
        <div className="navbar">
          <img className="img" src="https://static.vecteezy.com/system/resources/thumbnails/004/857/314/small_2x/letter-u-or-uj-logo-or-icon-design-vector.jpg"></img>
          <div className="nav_child">
           <Link to="/">home</Link>
           <Link to="/about">about</Link>
           <Link to="/projects">projects</Link>
           <Link to="/skills">skills</Link>
           </div>
        </div>
      )

}
export {Navbar}