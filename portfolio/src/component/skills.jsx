import React from "react";
import { Box, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react"
import { FaReact } from "react-icons/fa"
import { FaHtml5 } from "react-icons/fa"
import { DiCss3 } from "react-icons/di"
import { DiJavascript1 } from "react-icons/di"
import { SiChakraui, SiMongodb } from "react-icons/si"
import { SiRedux } from "react-icons/si"
import {FaNodeJs} from "react-icons/fa"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  return (
    <>

      <Box className="section nav-link skills" textAlign="center" paddingTop={["15%","15%","12%","3%"]} >
      <Heading as="h1" fontSize={["3xl","3xl","4xl","4xl"]}>Skills</Heading>
        <SimpleGrid columns={["3","3","4","5"]} alignItems="center" justifyContent="center" gap="4%" className="skills_child" width={["100%","90%","80%","80%"]} margin="auto" height={{base:"500px",md:"460px"}} data-aos="fade-up">
          <Flex className="skills-card">
            <FaHtml5  className="img skills-card-img" color="rgb(44, 42, 42)"/>
            {/* <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"/> */} 

            <h4 className="skills-card-name">HTML</h4>
          </Flex >
          <Flex className="skills-card">
            <DiCss3  className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">CSS</h4>
          </Flex>
          <Flex className="skills-card">
            <DiJavascript1 className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Java-Script</h4>
          </Flex>
          <Flex className="skills-card">
            <SiChakraui className="img skills-card-img"  color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Chakra-UI</h4>
          </Flex>
          <Flex className="skills-card">
            <FaReact className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">React</h4>
          </Flex>
          <Flex className="skills-card" >
            <SiRedux  className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">Redux</h4>
          </Flex>
          <Flex className="skills-card">
            <FaNodeJs className="img skills-card-img" color="rgb(44, 42, 42)" />
            <h4 className="skills-card-name">NodeJs</h4>
          </Flex>
          <Flex className="skills-card">
            <SiMongodb  className="img skills-card-img" color="rgb(44, 42, 42)"/>
            <h4 className="skills-card-name">MongoDb</h4>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
}
AOS.init()
export { Skills }