
import { Home } from "./home";
import { Contect } from "./contact";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx"
import resume from "../Resume/resume.pdf"
import { useRef, useState } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Input, Stack, useDisclosure,Link } from "@chakra-ui/react";
import HamMenu from "./drawer"


const NavbarLink = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = useRef()
      let handleClick = () => {
            isOpen()
      }
      return (
            <>
                  <Flex width={["100%", "100%", "100%", "100%"]} height={["10%","10%","10%","15%"]} className="navbar" justifyContent="space-between" alignItems="center" >
                        <Box className="img-div" width={["18%","13%","12%","5%"]}>
                              <a href="#home">
                                    <Image className="logo-img" src="https://t4.ftcdn.net/jpg/02/93/29/43/360_F_293294319_YPgRVpVJylQY9G55qi735ac2tEPnFlpd.jpg" alt="logo" />
                              </a>
                        </Box>

                        <HStack height="50%" width={["0","0","60%","50%"]} display={{ base: "none", md: "flex" }} className="stack" paddingRight="1%">
                              <Link width={["0","0","16%","15%"]} className="anchor1" href="#home" onClick={handleClick}>Home</Link>
                              <Link  width={["0","0","16%","15%"]} className="anchor1" href="#about" onClick={handleClick}>About</Link>
                              <Link  width={["0","0","16%","15%"]} className="anchor2" href="#about" onClick={handleClick}>Skills</Link>
                              <Link  width={["0","0","16%","15%"]} className="anchor3" href="#skills" onClick={handleClick}>Projects</Link>
                              <Link  width={["0","0","16%","15%"]} className="anchor4" href="#projects" onClick={handleClick}>Contacts</Link>
                              <Link  width={["0","0","16%","15%"]} className="anchor5" href={resume} download target="_blank">Resume</Link>
                        </HStack>
                        <Flex display={{base:"flex",md:"none"}}>
                              <HamMenu handleClick={handleClick}/>
                        </Flex>

                  </Flex>
                  <div>
                        <div className="card" id="home">

                              <Home />

                        </div>
                        <div className="card" id="about">

                              <Skills />
                        </div>
                        <div className="card" id="skills">
                              <Projects />
                        </div>
                        <div className="card" id="projects">
                              <Contect />
                        </div>
                  </div>
            </>

      );
}
export { NavbarLink }