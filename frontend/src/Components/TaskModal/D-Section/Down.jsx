import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Down = () => {
  return (
    <Box color={"white"}>
      <br />
      <Box>
          <Text fontSize={"xl"} fontWeight={600} >Information</Text>
          <label>Estimated Time</label>
          <Input/>
      </Box>
      {/* <Box>
          <Text fontSize={"xl"} fontWeight={600} >Information</Text>
          <label>Estimated Time</label>
          <Input/>
      </Box> */}
    </Box>
  )
}

export default Down