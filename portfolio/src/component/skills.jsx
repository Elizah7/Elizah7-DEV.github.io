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

      <Box className="section" textAlign="center" paddingTop={["15%","15%","12%","3%"]} >
      <Heading as="h1" fontSize={["xl","xl","2xl","4xl"]}>Skills</Heading>
        <SimpleGrid columns={["3","3","4","5"]} alignItems="center" justifyContent="center" gap="4%" className="skills" width={["100%","90%","80%","80%"]} margin="auto" height={{base:"500px",md:"460px"}}>
          <Flex>
            <FaHtml5 size="50%" className="img" color="black"/>
            {/* <img src="https://www.w3.org/html/logo/downloads/HTML5_Badge_512.png"/> */}
            <h4>HTML</h4>
          </Flex >
          <Flex >
            <DiCss3 size="50%" className="img" color="black" />
            <h4>CSS</h4>
          </Flex>
          <Flex >
            <DiJavascript1 size="50%" className="img" color="black" />
            <h4>Java-Script</h4>
          </Flex>
          <Flex >
            <SiChakraui className="img" size="50%" color="black" />
            <h4>Chakra-UI</h4>
          </Flex>
          <Flex >
            <FaReact className="img" size="50%" color="black" />
            <h4>React</h4>
          </Flex>
          <Flex  >
            <SiRedux size="50%" className="img" color="black" />
            <h4>Redux</h4>
          </Flex>
          <Flex >
            <FaNodeJs size="50%" className="img" color="black" />
            <h4>NodeJs</h4>
          </Flex>
          <Flex >
            <SiMongodb size="50%" className="img" color="black" />
            <h4>MongoDb</h4>
          </Flex>
        </SimpleGrid>
      </Box>
    </>
  );
}
AOS.init()
export { Skills }