import React, { useContext, useState } from 'react';
import { Box, Button, Image, Input, Text, InputGroup, InputLeftElement, AlertIcon, AlertTitle, AlertDescription, Alert, Slide } from "@chakra-ui/react";
import styles from "../Login/Login.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../../ContextAPI/AuthContext';

// post user
const postUser = async(text)=>{
  try{
      let res = await axios.post("https://whispering-beyond-98740.herokuapp.com/user/signup", text);
      return res.data;
  }catch(e){
    console.log(e);
  } 
}

  //  main sign up function
  // const SignupPage = () => {
  //   const navigate = useNavigate();
  //   const [email, setEmail] = useState(''); 
  //   const [text, setText] = useState({
  //     email: "",
  //     password: "",
  //   });
// const postUser = async (text) => {
//   try {
//     let res = await axios.post("http://localhost:8080/user/signup", text);
//     return res.data;
//   } catch (e) {
//     console.log(e);
//   }
// }

//  main sign up function
const SignupPage = () => {
  const {setToken} = useContext(AuthContext);
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState(false);
  const [email, setEmail] = useState('');
  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    postUser(text)
      .then((res) => {
        if (res.token) {
          setText("")
          setToken(res.token);
          return navigate("/login")
        } else {
          console.log("Signup failed");
        }
      })
      .catch(() => {
        setAlertMsg(true);
          setTimeout(() => {
          setAlertMsg(false)
        }, 4000)
      })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  return (
    <Box className={styles.LoginMainBox} >

     <Slide in={alertMsg} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }} bg='white' mt={"-20px"}>
        <Alert status='error' w='60vw' mx='20vw'  >
          <AlertIcon />
          <AlertTitle>User with given credentials does exist!</AlertTitle>
          <AlertDescription>Try login.</AlertDescription>
        </Alert>
      </Slide>
      {/* <div class="background" style="background-image: url(img/ui-login-background.svg);"></div> */}
      {/* leftBox */}
      <Box className={styles.leftBox} >
        {/* <Box backgroundImage="url:(img/ui-login-background.svg)"></Box> */}

        <Image src="https://pro.trackingtime.co/img/ui-login-background.svg"></Image>
      </Box>

      {/* rightBox */}
      <Box className={styles.rightBox} >
        <Image src={process.env.PUBLIC_URL + "TrackingTime-logo.png"}></Image>

        <Box className={styles.inputBox}>
          <InputGroup>
            <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL + "google-logo-login.png"} color="gray.300" />} />
            <Input className={styles.greyBackG} placeholder="Sign in with Google"></Input>
          </InputGroup>

          {/* <br /> */}
          <InputGroup>
            <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL + "microsoft-logo-login.png"} color="gray.300" />} />
            <Input className={styles.greyBackG} placeholder="Sign in Microsoft"></Input>
          </InputGroup>
          {/* <br /> */}
          <InputGroup>
            <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL + "apple-logo-login.png"} color="gray.300" />} />
            <Input className={styles.greyBackG} placeholder="Sign in with Apple"></Input>
          </InputGroup>

          {/* form start */}
          <form onSubmit={handleSubmit}>
            <Text className={styles.text2}>Sign in with you email</Text>
            <br />
            <Input className={styles.whiteBackG} onChange={handleChange} name="email" required value={text.email} type="email" placeholder="Email"></Input>
            <br />
            <Input className={styles.whiteBackG} onChange={handleChange} name="password" required value={text.password} type="password" placeholder="Password"></Input>
            <br />
            <Box>
              <Input className={styles.check} type="checkbox"></Input>
            </Box>
            <Text className={styles.switch}>I agree with<a href=''>Terms of service & </a></Text>
            <Text className={styles.switch}><a href=''>Privacy Policy. </a></Text>
            <br />
            <Button className={styles.loginBtn} type='submit'>
              {/* <Link to="/login"> */}

              SIGN UP
              {/* </Link>  */}
            </Button>
          </form>
          {/* form end */}

          <br />
          <Text className={styles.switch}><Link to="/login">Back to login</Link></Text>
          <br />
          <Text className={styles.switch}><a href=''>Terms of service</a> /<a href=''>Privacy Policy</a></Text>
        </Box>
      </Box>

    </Box>
  )
}

export default SignupPage
