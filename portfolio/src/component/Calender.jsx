import { Box, Heading,Text } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import ReactTooltip from 'react-tooltip'

const Calender = () => {
  return (
    <div className='calender-dark'>
        <Box paddingBottom="0px" pt='20px' >
        <Heading as="h1" fontSize={["xl","xl","2xl","4xl"]}>Calendar & Stats</Heading>
      <Text className='statHeading' pb="25px" >Check out my Github Calendar & Streak Stats</Text>
      </Box>
      <Box style={{textAlign:'center'}} className='calanderBox' data-aos="fade-up">
      <GitHubCalendar username="Elizah7" >
      <ReactTooltip className="react-tool"  delayShow={20} html />
      </GitHubCalendar>
      </Box>
      <Box className="statBox-dark" data-aos="fade-up" >
        <img src="https://streak-stats.demolab.com/?user=Elizah7&theme=highcontrast&hide_border=true&border_radius=10" width='100%' alt="" />
        </Box>
    </div>
  )
}

export default Calender