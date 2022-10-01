import { Box, Button, Flex, Input } from '@chakra-ui/react'
import React from 'react'
import { HiPlay } from "react-icons/hi"
const ProjAdd = () => {
  return (
    <Flex w={ '100%' } justifyContent={"space-around"}>
        {/* <Input type="text" placeholder='' w={"auto"} /> */}
        <Button >ADD</Button>
        {/* <Flex alignItems={'center'} w={"fit-content"} bg={"black"} borderRadius={"7px"}>
          <HiPlay fontSize={30} backgroundColor={'white'} color={"white"} />
        </Flex> */}
    </Flex>
  )
}

export default ProjAdd