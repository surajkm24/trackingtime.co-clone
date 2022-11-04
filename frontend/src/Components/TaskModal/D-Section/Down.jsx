import { Box, Input, Text } from '@chakra-ui/react'
import React from 'react'

const Down = ({ formData, setFormData }) => {
  return (
    <Box color={"black"}>
      <br />
      <Box>
        <Text fontSize={"xl"} fontWeight={600} >Information</Text>
        <label>Estimated Time</label>
        <Input type='number'
          placeholder='00:00'
          value={formData.estimatedTime||""}
          onChange={(e) => setFormData({ ...formData, estimatedTime: +e.target.value || 0 })}
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