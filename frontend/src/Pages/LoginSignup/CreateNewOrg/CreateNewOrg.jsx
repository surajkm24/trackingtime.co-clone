import { Box, Image, Text, Input,Flex, Button } from '@chakra-ui/react'
import React from 'react'
import styles from "../CreateNewOrg/CreateNewOrg.module.css"

const CreateNewOrg = () => {
  return (
    <Box className={styles.CreateMainBox} >

    {/* leftBox */}
    <Box className={styles.leftBox} >
       <Image src="https://pro.trackingtime.co/img/onboarding/onboarding-join-account.svg"></Image>
    </Box>

    {/* rightBox */}
    <Box className={styles.rightBox} > 

      <Box className={styles.rightBox2}>
       <Image  src={process.env.PUBLIC_URL+"Time-tracking-white-logo.png"}></Image>

     
       <Box className={styles.inputBox}>
        
            <Text className={styles.lets}>Create your organisation</Text>
          
          <Text className={styles.welcome}>Set up your company in TrackingTime.</Text>
          
         <Text>Organisation name</Text>
         <Input></Input>

         <Text>Team size</Text>
         <Flex className={styles.BtnFlex}>
            <Button>solo (1)</Button>
            <Button>2-5</Button>
            <Button>5-15</Button>
            <Button>+15</Button>
         </Flex>

         <Text>Your name</Text>
         <Input></Input>

         <Text>Last name</Text>
         <Input></Input>

         <Flex className={styles.getStarted}>
            <Button className={styles.back}>BACK</Button>
            <Button className={styles.started}>GET STARTED</Button>
         </Flex>
       </Box>

       </Box>
    </Box>

  </Box>
  )
}

export default CreateNewOrg
