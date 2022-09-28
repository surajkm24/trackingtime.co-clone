import React from 'react';
import {Box, Button, Image, Input, Text, InputGroup, InputLeftElement} from "@chakra-ui/react";
import styles from "../Login/Login.module.css";

const SignupPage = () => {
  return (
    <Box className={styles.LoginMainBox} >
      
    {/* <div class="background" style="background-image: url(img/ui-login-background.svg);"></div> */}
    {/* leftBox */}
    <Box className={styles.leftBox} >
       {/* <Box backgroundImage="url:(img/ui-login-background.svg)"></Box> */}
       
       <Image src="https://pro.trackingtime.co/img/ui-login-background.svg"></Image>
    </Box>

    {/* rightBox */}
    <Box className={styles.rightBox} > 
       <Image  src={process.env.PUBLIC_URL+"TrackingTime-logo.png"}></Image>

       <Box className={styles.inputBox}>
          <InputGroup>
             <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL+"google-logo-login.png"} color="gray.300" />} />
             <Input className={styles.greyBackG} placeholder="Sign in with Google"></Input>
          </InputGroup>
          
           {/* <br /> */}
           <InputGroup>
             <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL+"microsoft-logo-login.png"} color="gray.300" />} />
             <Input className={styles.greyBackG} placeholder="Sign in Microsoft"></Input>
           </InputGroup>
           {/* <br /> */}
           <InputGroup>
              <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL+"apple-logo-login.png"} color="gray.300" />} />
              <Input className={styles.greyBackG} placeholder="Sign in with Apple"></Input>
           </InputGroup>

         <Text className={styles.text2}>Sign in with you email</Text>
         <br />
         <Input className={styles.whiteBackG} type="email" placeholder="Email"></Input>
         <br />
         <Input className={styles.whiteBackG} type="password"   placeholder="Password"></Input>
         <br />
         <Box>
           <Input className={styles.check} type="checkbox"></Input>
         </Box>
         <Text className={styles.switch}>I agree with<a href=''>Terms of service & </a></Text>
         <Text className={styles.switch}><a href=''>Privacy Policy. </a></Text>
         <br />
         <Button className={styles.loginBtn}>SIGN UP</Button>
         <br />
         <Text className={styles.switch}><a href=''>Back to login</a></Text>
         <br />
         <Text className={styles.switch}><a href=''>Terms of service</a> /<a href=''>Privacy Policy</a></Text>
       </Box>
    </Box>

  </Box>
  )
}

export default SignupPage
