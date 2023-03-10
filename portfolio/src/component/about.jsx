import { Box, Image, Stack } from "@chakra-ui/react";
import React from "react";



const About = ()=>{
 
     return <Box className="home section" width="100%" display={{base:"block",md:"flex"}} gap="5%" paddingTop={["15%","15%","12%","6%"]} >
         <Box className="image-section" width={["80%","75%","50%","30%"]} margin="auto">
                <Image src="https://ca.slack-edge.com/T044M5T44JV-U045JEVURMH-960522c0f125-512" className="img-fluid" />
            </Box>
             <Box className="about-section" width={["100%","98%","50%","50%"]} margin="auto">
                <h1>Hi,</h1>
                <h1>I am Uddeshy Jaiswal</h1>
                <h1> A Full Stack MERN Developer</h1>
                <br/>
                <p>I love to learn new technoligies and work hard, collabrative in nature,passionate about building projects and solving problems.</p>
               
             </Box>
           
     </Box>
        
   
     
        
       

}

export {About}