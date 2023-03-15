import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";



const About = ()=>{
 
     return <Box className="home section" width="100%"  gap="5%" paddingTop={["15%","15%","12%","6%"]} textAlign="center">
         <Heading as="h1" fontSize={["xl","xl","2xl","4xl"]}>About Me</Heading>
         <Box display={{base:"block",md:"flex"}}>
         <Box className="image-section" width={["80%","75%","50%","30%"]} margin="auto" marginTop="4%" borderRadius="50%">
                <Image src="https://ca.slack-edge.com/T044M5T44JV-U045JEVURMH-960522c0f125-512" className="img-fluid" borderRadius="50%"/>
            </Box>
             <Box className="about-section" width={["100%","98%","50%","50%"]} margin="auto">
                <Heading> A Full Stack MERN Developer</Heading>
                <br/>
                <Text>A Full Stack web developer with more than 1200+ hours of experience of coding and creating dynamic and responsive web applications. I have a strong background in both front-end and back-end development, as well as experience working with thechnologies like React, Redux, Api, . I'm always interested in learning new technologies and staying up-to-date on the latest trends in web development.</Text>
               
             </Box>
             </Box>
     </Box>
        
   
     
        
       

}

export {About}