import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import styles from "../CreateNewAcc/CreateNewAcc.module.css";


const CreateNewAcc = () => {
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
          <Text>Let's set up your account</Text>
          <Text>Welcome to trackingtime and thank you for signing up! please choose an option below to get started.</Text>

          <Box>
            <Text>Create a new account</Text>
            <Text>Start a new account and invite your teammates.</Text>
          </Box>
          <Box>
            <Text>join an existing account</Text>
            <Text>Your company is already using trackingtime.</Text>
          </Box>
       </Box>

       </Box>
    </Box>

  </Box>
  )
}

export default CreateNewAcc
