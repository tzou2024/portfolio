import React from 'react'
import data from "../data/projects"
import { 
  Box,

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
    <div>
      {projMap}
    </div>
  )
}

export default Projects
