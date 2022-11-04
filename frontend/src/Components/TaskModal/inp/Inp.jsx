import { Flex, Text } from '@chakra-ui/react'
import React from 'react'

const Inp = ({formData,setFormData}) => {
  return (
    <Flex gap={".7rem"}>
        <input type="checkbox" style={{borderRadius:"50%"}} checked={formData.status} onChange={(e)=>setFormData({...formData,status:e.target.checked})}/>
        <Text as={"label"} color={'black'} fontSize={"14px"} fontWeight={600} >Mark as Done</Text>
    </Flex>
  )
}

export default Inp