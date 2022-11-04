import React, { useEffect } from 'react'
import { Box, Flex } from "@chakra-ui/react";
import Timer from '../Timer/Timer'
const SingleProHeader = ({ singleProject, projectData, play, setPlay }) => {

  useEffect(() => {
    console.log(projectData);
  }, [projectData])

  return (
    <Box borderBottom='1px solid rgba(0,0,0,0.1)'>
      <Flex color={"#0a192f"}
        fontSize={"18px"} fontWeight={"bold"}
        h={"47px"}
        w={"100%"}
        ml={"30px"}
        gap={"24px"}
        alignItems='center'
      //    padding={"5px"}
      >
        <Box h='18px' w='18px' borderRadius='3px' bg='rgba(0,0,0,0.25)'></Box>
        <Box ml={"-10px"}>{singleProject.projectName}</Box>
        <Box ><Timer play={play} setPlay={setPlay} projectData={projectData} /></Box>
      </Flex>
    </Box>
  )
}

export default SingleProHeader
