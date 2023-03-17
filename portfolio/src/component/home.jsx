import { Box, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";



const Home = ()=>{
 
     return <Box className="home section nav-link home" width="100%" display={{base:"block",md:"flex"}} gap="5%" paddingTop={["15%","15%","12%","6%"]} >
             <Box className="about-section" width={["80%","98%","50%","50%"]} margin="auto" paddingTop="1%">
                <Heading as="h1">Hi,</Heading>
                <Heading as="h1">I am Uddeshy Jaiswal</Heading>
                <Heading as="h1"> A Full Stack MERN Developer</Heading>  
             </Box>
             <Box  width={["80%","75%","50%","30%"]} margin="auto" paddingTop={["8%","8%","0","0"]} className="image-section2">
                <Image src="https://camo.githubusercontent.com/e20822b4282c07ffd010cd05f855a6561d3b62358ca9e607e4901288dd748fcb/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f323133313939332f73637265656e73686f74732f343934383733362f74686f75676874776f726b732d6769665f6472696262626c652e676966"  />
            </Box>
           
     </Box>
        
   
     
        
       

}

export {Home}