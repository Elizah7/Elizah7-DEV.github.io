import React from "react";
import { GrLinkedin } from "react-icons/gr"
import { GoMarkGithub } from "react-icons/go"
import { SiMinutemailer } from "react-icons/si"
import { ImWhatsapp } from "react-icons/im"
import emailjs from 'emailjs-com';
import { Box, Heading, HStack } from "@chakra-ui/react";
const Contect = () => {
    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <Box className="section contact-section nav-link contact" paddingTop={["15%","15%","12%","3%"]} >
          <Heading as="h1" fontSize={["3xl","3xl","4xl","4xl"]}>Contacts</Heading>
          <Box marginTop="20px">
            <h1 className="h4">Phone No : +91 8808346600</h1>

            <HStack className="contact-child" width={["100%","95%","70%","50%"]} height={["250px","250px","300px","300px"]}>
                <Box>
                    <a href="https://github.com/Elizah7" target="next-page">
                        <div>
                            <GoMarkGithub size="50%" color="black"/>
                        </div>
                        <h4>Github</h4>
                    </a>
                </Box>
                <Box>
                    <a href="https://www.linkedin.com/in/uddeshy-jaiswal-56a69a201/" target="next-page">
                        <div>
                            <GrLinkedin size="50%" color="black"/>
                        </div>
                        <h4>Linkedin</h4>
                    </a>
                </Box>
                <Box>
                    <a href="https://wa.me/918808346600" target="_blank">
                        <div>
                            <ImWhatsapp size="50%" color="black"/>
                        </div>
                        <h4>Whataspp</h4>
                    </a>
                </Box>
            </HStack>
            </Box>
            <form className="contact-form" onSubmit={sendEmail}>
                <input type="hidden" name="contact_number" />
                <label>Name</label>
                <input type="text" name="from_name" />
                <label>Email</label>
                <input type="email" name="from_email" />
                <label>Subject</label>
                <input type="text" name="subject" />
                <label>Message</label>
                <textarea name="html_message" />
                <input type="submit" value="Send" />
            </form>
            );
        </Box>

    )

}
export { Contect }