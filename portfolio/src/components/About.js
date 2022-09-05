import React from 'react'
import { Box, Text } from '@chakra-ui/react'

const About = ({isLargerThanLG}) => {
  return (
    <Box 
    mb="2"
    >
        <Text fontSize={"4xl"} py="4">
            Hi! I'm Trevor.
        </Text>
        <Text fontSize={"xl"} py="4" >
        I'm an aspiring backend developer passionate about providing accessible technology that improves the lives of others. </Text>
        <Text fontSize={"xl"} py="4">
        My background experience in Public Interest Technology through collaborative design gives me skills in analyzing stakeholder needs and creating efficient and organized code to address them. I am communicative, hard-working, and motivated by social impact.
        </Text>
        <Text fontSize={"xl"} py="4">
        Outside of backend work, I also have experience in React, Datascience, and Machine Learning.
        </Text>
        <Text fontSize={"xl"} py="4">
        I live in Nashville, TN, but current go to school at <b>Olin College of Engineering</b> in Needham, MA. If I'm not coding, odds are I'm either running, rockclimbing, powerlifting, or sitting at the piano :)
        </Text>
        <Text fontSize={"5xl"} py="4">
            Let's make something great.
        </Text>
    </Box>
  )
}

export default About
