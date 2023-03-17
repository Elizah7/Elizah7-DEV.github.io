import React from "react";
import Calender from "./Calender";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Heading, Image } from "@chakra-ui/react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Projects = () => {

  const devtv = [
    { img: "style/devtv.png" },
    { img: "style/devtv2.png" },
    { img: "style/devtv3.png" },
    { img: "style/devtv4.png" },
    { img: "style/devtv5.png" }
  ]
  const fashion = [
    { img: "style/fashionmantra1.png" },
    { img: "style/fashionmantra2.png" },
    { img: "style/fashionmantra3.png" },
    { img: "style/fashionmantra4.png" },
    { img: "style/fashionmantra5.png" }
  ]
  const industry = [
    { img: "style/industrybying2.png" },
    { img: "style/industrybying3.png" },
    { img: "style/industrybying4.png" },
    { img: "style/industrybying5.png" },
    { img: "style/industrybying6.png" },
  ]
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  return (
    <>

      <Box className="projects-section section nav-link projects" paddingTop={["15%", "15%", "12%", "3%"]} fontSize={["xm", "sm", "md", "l"]} id="projects">
        <Heading as="h1" fontSize={["3xl", "3xl", "4xl", "4xl"]}>My Projects</Heading>
        <Box className="projects-container">
          <Box data-aos="fade-up" display={{ base: "block", sm: "block", md: "flex" }} className="project-div project-card" height={["550px", "460px", "430px", "450px"]} width={["100%", "100%", "95%", "95%"]}>
            <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["40%", "40%", "100%", "99%"]}>
              <Slide>
                {devtv.map((slideImage, index) => (
                  <Box key={index} height={["220px", "220px", "430px", "448px"]} >
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
            <Box className="textl" width={["100%", "100%", "50%", "50%"]} textAlign={["left", "left", "center", "center"]}>
              <Box display="flex" justifyContent="space-around">
                <Heading as="h2" className="project-title">Name: DevTv+</Heading>
                <Heading as="h2">Front-End Project</Heading>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} className="project-description" >
                <p>This is a clone of AppleTv+ which is a straming platform where we can watch web-shows and movies it was a group project in which we were five teammembers I created the authentication for the application like login page signup page</p>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} >
                <Heading as="h2">Tech Stack :</Heading>
                <Box marginTop={["10px", "10px", "50px", "50px"]} className="tech_stack">
                  <Heading as="h6">React</Heading>
                  <Heading as="h6">Chakra-Ui</Heading>
                  <Heading as="h6">Api</Heading>
                  <Heading as="h6">Redux</Heading>
                </Box>
              </Box>
              <Box className="live-button" marginTop={["10px", "10px", "50px", "50px"]} >
                <a href="https://github.com/Channa47/debonair-salt-5814" target="next-page">Github</a>
                <a href="https://devtv.netlify.app" target="next-page">Live server</a>
              </Box>
            </Box>
          </Box>
          <Box data-aos="fade-up" display={{ base: "flex", sm: "flex", md: "flex" }} flexDirection={["column-reverse","column-reverse","row","row"]} className="project-div project-card" height={["550px", "460px", "430px", "450px"]} width={["100%", "100%", "95%", "95%"]}>
            <Box className="textl" width={["100%", "100%", "50%", "50%"]} textAlign={["left", "left", "center", "center"]} height={["60%","60%","100%","100%"]} >
              <Box display="flex" justifyContent="space-around">
                <Heading as="h2" className="project-title">Name: Fashion Mantra</Heading>
                <Heading as="h2">Front-End Project</Heading>
              </Box>
              <Box marginTop={["0", "0", "15px", "50px"]} className="project-description">
                <p>This is a clone of E-Commerse website Myntra, this was a group project we were five team members, my part was to build the authentication and the admin side </p>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} >
                <Heading as="h2">Tech Stack :</Heading>
                <Box marginTop={["10px", "10px", "15px", "50px"]} className="tech_stack">
                  <Heading as="h6">React</Heading>
                  <Heading as="h6">Chakra-Ui</Heading>
                  <Heading as="h6">Api</Heading>
                  <Heading as="h6">Redux</Heading>
                </Box>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} className="live-button">
                <a href="https://github.com/Navneetcode1/animated-plants-4461">Github</a>
                <a href="https://fashionmantra.vercel.app/">Live server</a>
              </Box  >
            </Box>
            <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["40%", "40%", "100%", "99%"]}>
              <Slide>
                {fashion.map((slideImage, index) => (
                  <Box key={index} height={["220px", "220px", "430px", "448px"]}>
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
          </Box>
          <Box display={{ base: "block", sm: "block", md: "flex" }} className="project-div project-card" width={["100%", "100%", "95%", "95%"]} height={["680px", "460px", "430px", "450px"]} data-aos="fade-up">
            <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["40%", "40%", "100%", "99%"]}>
              <Slide>
                {industry.map((slideImage, index) => (
                  <Box key={index} height={["220px", "220px", "430px", "448px"]}>
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
            <Box className="textl" width={["100%", "100%", "50%", "50%"]} textAlign={["left", "left", "center", "center"]} >
              <Box display="flex" justifyContent="space-around">
                <Heading as="h2" className="project-title">Name: Industry Buying</Heading>
                <Heading as="h2">Full Stack Project</Heading>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} className="project-description">
                <p>This is a clone of Industry Bying website which sells mechanical tools and industry releated things this was a group project we were five team members and we completed this within four days my part was to build the admin side</p>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "20px"]} >
                <Heading as="h2">Tech Stack :</Heading>
                <Box marginTop={["5px", "5px", "15px", "20px"]} className="tech_stack">
                  <Heading as="h6">React</Heading>
                  <Heading as="h6">Chakra-Ui</Heading>
                  <Heading as="h6">Api</Heading>
                  <Heading as="h6">Redux</Heading>
                  <Heading as="h6">Express</Heading>
                  <Heading as="h6">NodeJs</Heading>
                  <Heading as="h6">MongoDb</Heading>

                </Box>
              </Box>
              <Box className="live-button" marginTop={["60px", "10px", "15px", "80px"]} >
                <a href="https://github.com/Prashant1562/IndustryBuying-Clone">Github</a>
                <a href="https://soft-dogs-2567.netlify.app/">Live server</a>
              </Box>
            </Box>
          </Box>
          <Box data-aos="fade-up" display={{ base: "flex", sm: "flex", md: "flex" }} flexDirection={["column-reverse","column-reverse","row","row"]} className="project-div project-card" height={["550px", "460px", "430px", "450px"]} width={["100%", "100%", "95%", "95%"]}>
            <Box className="textl" width={["100%", "100%", "50%", "50%"]} textAlign={["left", "left", "center", "center"]} height={["60%","60%","100%","100%"]} >
              <Box display="flex" justifyContent="space-around">
                <Heading as="h2" className="project-title">Name: Fashion Mantra</Heading>
                <Heading as="h2">Front-End Project</Heading>
              </Box>
              <Box marginTop={["0", "0", "15px", "50px"]} className="project-description">
                <p>This is a clone of E-Commerse website Myntra, this was a group project we were five team members, my part was to build the authentication and the admin side </p>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} >
                <Heading as="h2">Tech Stack :</Heading>
                <Box marginTop={["10px", "10px", "15px", "50px"]} className="tech_stack">
                  <Heading as="h6">React</Heading>
                  <Heading as="h6">Chakra-Ui</Heading>
                  <Heading as="h6">Api</Heading>
                  <Heading as="h6">Redux</Heading>
                </Box>
              </Box>
              <Box marginTop={["10px", "10px", "15px", "50px"]} className="live-button">
                <a href="https://github.com/Navneetcode1/animated-plants-4461">Github</a>
                <a href="https://fashionmantra.vercel.app/">Live server</a>
              </Box  >
            </Box>
            <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["40%", "40%", "100%", "99%"]}>
              <Slide>
                {fashion.map((slideImage, index) => (
                  <Box key={index} height={["220px", "220px", "430px", "448px"]}>
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
          </Box>
        </Box>

      </Box>
      <Box className="github-section">
        <Calender />
      </Box>

    </>

  )


}
AOS.init();
export { Projects }