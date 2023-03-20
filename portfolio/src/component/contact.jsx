import React, { useRef } from "react";
import { GrLinkedin } from "react-icons/gr"
import { GoMarkGithub } from "react-icons/go"
import { SiMinutemailer } from "react-icons/si"
import { ImWhatsapp } from "react-icons/im"
import emailjs from 'emailjs-com';
import { Box, FormLabel, Heading, HStack, Input, useToast } from "@chakra-ui/react";
const Contect = () => {
    const form = useRef();
    const toast = useToast()
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('service_oagozmk', 'template_qjqhwtx', e.target, 'OuzZBMHHoETuNVlA-')
            .then((result) => {
                toast({
                    title: 'Message sent .',
                    description: "Message has been sent succecfully.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                })
            }, (error) => {
                toast({
                    title: 'Message Failed.',
                    description: `There was some ${error.text}.`,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                })
            });
    }

    return (
        <Box className="section contact-section nav-link contact" paddingTop={["15%", "15%", "12%", "3%"]} id="contact" height={["150vh","150vh","150vh","150vh"]}>
            <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]}>Contacts</Heading>
            <Box marginTop="20px">
                <h1 className="h4" id="contact-phone">Phone No : +91 8808346600</h1>
                <HStack className="contact-child" width={["100%", "95%", "70%", "50%"]} height={["250px", "250px", "300px", "300px"]}>
                    <Box id="contact-github">
                        <a href="https://github.com/Elizah7" target="next-page">
                            <div>
                                <GoMarkGithub size="50%" />
                            </div>
                            <h4>Github</h4>
                        </a>
                    </Box>
                    <Box id="contact-linkedin">
                        <a href="https://www.linkedin.com/in/uddeshy-jaiswal-56a69a201/" target="next-page">
                            <div>
                                <GrLinkedin size="50%" />
                            </div>
                            <h4>Linkedin</h4>
                        </a>
                    </Box>
                    <Box>
                        <a href="https://wa.me/918808346600" target="_blank">
                            <div>
                                <ImWhatsapp size="50%" />
                            </div>
                            <h4>Whataspp</h4>
                        </a>
                    </Box>
                </HStack>
            </Box>
            <Box width={["100%","100%","50%","50%"]} className="form" margin="auto" marginTop="50px" id="contact-email" padding={["1%","1%","1%","1%"]}>
                <Heading as="h1">Email</Heading>
            <form ref={form} onSubmit={sendEmail}>
                <FormLabel><Heading as="h6">Name</Heading></FormLabel>
                <Input type="text" name="user_name" />
                <FormLabel>Email</FormLabel>
                <Input type="email" name="user_email" />
                <FormLabel>Subject</FormLabel>
                <Input type="text" name="subject" />
                <FormLabel>Message</FormLabel>
                <textarea name="message" />
                <Input type="submit" value="Send"  className="from_submit"/>
            </form>
            </Box>
          
        </Box>

    )

}
export { Contect }