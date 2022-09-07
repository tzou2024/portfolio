import React from 'react'
import { 
    Box,
    Image,
    Badge
 } from '@chakra-ui/react'

const Cardo = ({proj}) => {
  const badgeMap = proj.tags.map((dat, ind) => {
      return (
          <Badge mx="1"
            colorScheme="teal" key={ind}>
                {dat}
            </Badge>
      )
  })
  return (
    <Box maxW='sm' borderWidth='2px' borderColor="black" borderRadius='lg' overflow='hidden' p="2">
    <Image src={proj.img} />
    <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
        >
        {proj.name}
    </Box>
    <Box as='span' color='gray.600' fontSize='sm'>
            {proj.description}
    </Box>
    <Box>
    {badgeMap}
    </Box>
    </Box>
  )
}

export default Cardo
