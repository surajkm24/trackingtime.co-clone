import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Down = ({ formData, setFormData }) => {
  return (
    <Box color={"white"}>
      <br />
      <Box>
        <Text fontSize={"xl"} fontWeight={600} >Information</Text>
        <label>Estimated Time</label>
        <Input type='number'
          value={formData.estimatedTime}
          onChange={(e) => setFormData({ ...formData, estimatedTime: e.target.value })}
        />
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