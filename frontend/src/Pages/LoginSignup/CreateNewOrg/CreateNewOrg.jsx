import { Box, Image, Text, Input,Flex, Button } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
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
       <Image  src="time-white-logo.svg"></Image>

     
       <Box className={styles.inputBox}>
        
          <Text className={styles.lets}>Create your organization</Text>
          
          <Text className={styles.welcome}>Set up your company in TrackingTime.</Text>
          
         <Text className={styles.orgName}>Organization name</Text>
         <Input className={styles.inp}></Input>

         <Text className={styles.orgName}>Team size</Text>
         <Flex className={styles.BtnFlex}>
            <Button>solo (1)</Button>
            <Button>2-5</Button>
            <Button>5-15</Button>
            <Button>+15</Button>
         </Flex>

         <Text className={styles.orgName}>Your name</Text>
         <Input  className={styles.inp}></Input>

         <Text className={styles.orgName}>Last name</Text>
         <Input  className={styles.inp}></Input>

         <Flex className={styles.getStarted}>
            <Button className={styles.back}>BACK</Button>
            <Link to="/project">
              <Button  className={styles.started}>GET STARTED</Button>
            </Link>
         </Flex>
       </Box>

       </Box>
    </Box>

  </Box>
  )
}

export default CreateNewOrg
