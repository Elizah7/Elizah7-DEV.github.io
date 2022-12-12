import React from "react";

import './index.css';
import { NavbarLink } from "./component/navbar";

import "./App.css"
import { Header } from "./component/Header";

const App = () => {
       return(
        <>
        <div>
        <Header/>
        </div>
         
           <div style={{marginTop:"150px"}}>
           <NavbarLink/>
           </div>
            
           
             
        </>
       )
  };
export default App;