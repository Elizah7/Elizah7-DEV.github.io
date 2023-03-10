import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, IconButton, Input, Link, Stack, useDisclosure, VStack } from '@chakra-ui/react'
import React, { useRef } from 'react'
import resume from "../Resume/resume.pdf"
import { CloseIcon, HamburgerIcon, Search2Icon, } from "@chakra-ui/icons";
const HamMenu = ({ handleClick }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (<Box >
    <IconButton icon={<HamburgerIcon />}
      display={{ md: "none" }}
      color="black"
      onClick={isOpen ? onClose : onOpen}
    />
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
      finalFocusRef={btnRef}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerBody>
          <VStack alignItems="left">
            <Link className="anchor1" href="#home" onClick={handleClick}>Home</Link>
            <Link className="anchor1" href="#about" onClick={handleClick}>About</Link>
            <Link className="anchor2" href="#about" onClick={handleClick}>Skills</Link>
            <Link className="anchor3" href="#skills" onClick={handleClick}>Projects</Link>
            <Link className="anchor4" href="#projects" onClick={handleClick}>Contacts</Link>
            <Link className="anchor5" href={resume} download target="_blank">Resume</Link>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  </Box>
  )
}

export default HamMenu
