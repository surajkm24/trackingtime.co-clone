import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Inp = () => {
  return (
    <Flex gap={".7rem"}>
        <input type="checkbox" style={{borderRadius:"50%"}}/>
        <Text as={"label"} color={'white'}fontSize={"15px"} >Mark as Done</Text>
    </Flex>
  )
}

export default Inp