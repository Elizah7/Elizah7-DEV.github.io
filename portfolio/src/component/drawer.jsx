import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, Link, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import resume from "../Resume/uddeshy _jaiswal_resume.pdf"
import { CloseIcon, HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";

const HamMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  let handleClick2 = () => {
    onClose()
}
  return (<Box>
    <IconButton icon={<HamburgerIcon color="black"/>}
      display={{ md: "none" }}
      backgroundColor="black"
      color="white"
      onClick={isOpen ? onClose : onOpen}
    />
    <Drawer
     
      isOpen={isOpen}
      placement='right'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader backgroundColor="white"></DrawerHeader>
        <DrawerBody backgroundColor="white">
          <VStack alignItems="center" className="left">
            <Link className="anchor1" href="#home" onClick={handleClick2}>Home</Link>
            <Link className="anchor1" href="#about" onClick={handleClick2}>About</Link>
            <Link className="anchor2" href="#skills" onClick={handleClick2}>Skills</Link>
            <Link className="anchor3" href="#projects" onClick={handleClick2}>Projects</Link>
            <Link className="anchor4" href="#contact" onClick={handleClick2}>Contacts</Link>
            <Link className="anchor5" href={resume} download target="_blank">Resume</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  )
}

export default HamMenu
