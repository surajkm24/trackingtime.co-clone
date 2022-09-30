import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
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
       <Image  src="time-white-logo.svg"></Image>

       <Box className={styles.inputBox}>
          <Text className={styles.lets}>Let's set up your account</Text>
          <Text className={styles.welcome}>Welcome to trackingtime and thank you for signing up! please choose an option below to get started.</Text>

          <Link to="/create-new-org">
            <Box className={styles.jointBox}>
              <Text className={styles.headBox}>Create a new account</Text>
              <Text className={styles.joinBox}>Start a new account and invite your teammates</Text>
            </Box>
          </Link>
          <Box className={styles.jointBox}>
            <Text className={styles.headBox}>Join an existing account</Text>
            <Text className={styles.joinBox}>Your company is already using trackingtime</Text>
          </Box>
       </Box>

       </Box>
    </Box>

  </Box>
  )
}

export default CreateNewAcc
