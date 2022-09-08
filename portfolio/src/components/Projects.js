import React from 'react'
import data from "../data/projects"
import { 
  Flex

 } from '@chakra-ui/react'
import Cardo from './card'

const Projects = () => {
  console.log(data)
  
  const projMap = data.map((ell, ind) => {
    return (
      <Cardo key={ind} proj={ell}/>
    )
  })

  return (
    <Flex wrap={"wrap"}>
      {projMap}
    </Flex>
  )
}

export default Projects
