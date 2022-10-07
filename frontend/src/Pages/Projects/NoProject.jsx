import React from 'react'
import {Box, Image, Text} from "@chakra-ui/react"
const NoProject = () => {
  return (
     <Box  w={"100%"} display={"block"}>
        <Image  m={"auto"}  h={"200px"} w={"300px"} mt={"150px"} src="https://pro.trackingtime.co/img/empties/empties-tasks.svg"></Image>
        <Text color={"white"} textAlign={"center"} fontWeight={"bold"}>No Projects</Text>
     </Box>
  )
}

export default NoProject
