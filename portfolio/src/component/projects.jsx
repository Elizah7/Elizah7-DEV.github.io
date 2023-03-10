import React from "react";
import Calender from "./Calender";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Box, Heading, Image } from "@chakra-ui/react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
const Projects = () => {
  const slideImages = [
    {
      url: 'https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 1'
    },
    {
      url: 'https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80',
      caption: 'Slide 2'
    },
    {
      url: 'https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
      caption: 'Slide 3'
    },
  ];
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

      <Box className="projects-section section" paddingTop={["15%", "15%", "12%", "3%"]}>
        <Heading as="h1" fontSize={["xl","xl","2xl","4xl"]}>My Projects</Heading>
        <Box className="projects-container">
          <Box display={{ base: "block", sm: "block", md: "flex" }} className="project-div" height={["500px", "460px", "430px", "450px"]} width={["100%","100%","95%","95%"]}>
            <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["220px","220px","405px","417px"]}>
              <Slide>
                {devtv.map((slideImage, index) => (
                  <Box key={index} height={["220px","220px","405px","417px"]} >
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
            <Box className="textl" width={["100%","100%","50%","50%"]} textAlign={["left","left","center","center"]}>
              <h4>Name: DevTv+</h4>
              <div>
                <p>This is clone of AppleTv+ which is a straming platform where we can watch web-shows and movies it was a group project in which we were five teammembers I created the authentication for the application like login page signup page</p>
              </div>
              <h4>Tech Used</h4>
              <div>
                <h5>React</h5>
                <h5>Chakra-Ui</h5>
                <h5>Api</h5>
                <h5>Redux</h5>
              </div>
              <div className="live-button">
                <a href="https://github.com/Channa47/debonair-salt-5814" target="next-page">Github</a>
                <a href="https://devtv.netlify.app" target="next-page">Live server</a>
              </div>
            </Box>
          </Box>
          <Box display={{ base: "block", sm: "block", md: "flex" }} className="project-div" height={["500px", "460px", "430px", "450px"]} width={["100%","100%","95%","95%"]}>
          <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["220px","220px","405px","417px"]}>
              <Slide>
                {fashion.map((slideImage, index) => (
                  <Box key={index} height={["220px","220px","405px","417px"]}>
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
            <Box className="textl" width={["100%","100%","50%","50%"]}  textAlign={["left","left","center","center"]}>
              <h4>Name : Industry Buying</h4>
              <div>
                <p>This is an clone of E-Commerse website Industy Buying which sells Machine and tools my part w </p>
              </div>
              <h4>Tech Used</h4>
              <div>
                <h4>React</h4>
                <h4>Chakra-Ui</h4>
                <h4>Api</h4>
                <h4>Redux</h4>
              </div>
              <div className="live-button">
                <a href="">Github</a>
                <a href="">Live server</a>
              </div>
            </Box>
          </Box>
          <Box display={{ base: "block", sm: "block", md: "flex" }} className="project-div" width={["100%","100%","95%","95%"]} height={["500px", "460px", "430px", "450px"]}>
          <Box className="slide-container" width={["100%", "100%", "50%", "50%"]} height={["220px","220px","405px","417px"]}>
              <Slide>
                {industry.map((slideImage, index) => (
                  <Box key={index} height={["220px","220px","405px","417px"]}>
                    <Box display="flex" justifyContent="center" height="100%">
                      <Image src={slideImage.img} />
                    </Box>

                  </Box>
                ))}
              </Slide>
            </Box>
            <Box className="textl" width={["100%","100%","50%","50%"]}  textAlign={["left","left","center","center"]} >
              <h4>Name:Zee5</h4>
              <div>
                <p>This is clone of zee5 webiste which is an Indian streaming platform where you can watch Indian web-shows and movies this website is a solo project I built this project from scrath it has login and signup function also</p>
              </div>

              <h4>Tech Used</h4>
              <div>
                <h4>React</h4>
                <h4>Chakra-Ui</h4>
                <h4>Api</h4>
                <h4>Redux</h4>
              </div>
              <div className="live-button">
                <a href="">Github</a>
                <a href="">Live server</a>
              </div>
            </Box>
          </Box>
        </Box>

      </Box>
      <div className="github-section">
        <Calender />
      </div>

    </>

  )


}
AOS.init();
export { Projects }