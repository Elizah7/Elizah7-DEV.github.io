
import { About } from "./about";
import { Contect } from "./contact";
import { Projects } from "./projects";
import { Skills } from "./skills";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx"
import resume from "../Resume/resume.pdf"
import { useRef, useState } from "react";
import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, HStack, Image, Input, Stack, useDisclosure, Link, Heading } from "@chakra-ui/react";
import HamMenu from "./drawer"
import { Home } from "./home";
import { FiDownload } from "react-icons/fi"

const NavbarLink = () => {
      const { isOpen, onOpen, onClose } = useDisclosure()
      const btnRef = useRef()

      return (
            <>
                  <Flex id="nav-menu" width={["100%", "100%", "100%", "100%"]} height={["10%", "10%", "10%", "15%"]} className="navbar" justifyContent="space-between" alignItems="center" >
                        <Box className="img-div" width={["18%", "13%", "12%", "5%"]}>
                              <a href="#home">
                                    <Image className="logo-img" src="https://t4.ftcdn.net/jpg/02/93/29/43/360_F_293294319_YPgRVpVJylQY9G55qi735ac2tEPnFlpd.jpg" alt="logo" />
                              </a>
                        </Box>
                        <HStack height="50%" width={["0", "0", "60%", "50%"]} display={{ base: "none", md: "flex" }} className="stack" paddingRight="1%">
                              <Link width={["0", "0", "16%", "15%"]} className="anchor1" href="#home">Home</Link>
                              <Link width={["0", "0", "16%", "15%"]} className="anchor1" href="#about">About</Link>
                              <Link width={["0", "0", "16%", "15%"]} className="anchor2" href="#skills">Skills</Link>
                              <Link width={["0", "0", "16%", "15%"]} className="anchor3" href="#projects">Projects</Link>
                              <Link width={["0", "0", "16%", "15%"]} className="anchor4" href="#contact">Contacts</Link>
                              <Link width={["0", "0", "16%", "15%"]} className="anchor5 nav-link resume" id="resume-button-1" href={resume} download target="_blank" ><FiDownload /> Resume </Link>
                        </HStack>
                        <Flex display={{ base: "flex", md: "none" }} paddingRight="3%">
                              <HamMenu />
                        </Flex>

                  </Flex>
                  <div>
                        <div className="card" id="home">
                              <Home />
                        </div>
                        <div className="card" id="about">

                              <About />

                        </div>
                        <div className="card" id="skills">

                              <Skills />
                        </div>
                        <div className="card" id="projects">
                              <Projects />
                        </div>
                        <div className="card" id="contact">
                              <Contect />
                        </div>
                  </div>
            </>

      );
}
export { NavbarLink }