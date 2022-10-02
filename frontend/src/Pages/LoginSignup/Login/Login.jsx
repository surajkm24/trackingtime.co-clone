import React, { useContext, useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Image, Input, InputGroup, InputLeftElement, Slide, Text } from "@chakra-ui/react";
import styles from "./Login.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { AuthContext } from '../../ContextAPI/AuthContext';

// post user
const postUser = async (text) => {
  try {
    let res = await axios.post("https://whispering-beyond-98740.herokuapp.com/user/login", text);
    return res.data;
  }
  catch (e) {
    console.log(e)
  }
}

// login main function
const Login = () => {
  const { token, setToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    postUser(text).then((res) => {
      if (res.token) {
        localStorage.setItem('token', res.token);
        setToken(res.token);
        setSuccess(true);
        setTimeout(()=>{
            setSuccess(false);
            navigate('/create-new-acc')
        },3000)
      }
      else {
        console.log('Login Failed');
      }
    }).catch(e => {
      setAlertMsg(true);
          setTimeout(() => {
          setAlertMsg(false)
        }, 4000)
    });

  };

  //  console.log(data);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };



  return (


    <Box className={styles.LoginMainBox} >
        
        <Slide in={success} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='success'  w='80vw' mx='10vw' >
                <AlertIcon />
                <AlertTitle>Logged In Succesfully!</AlertTitle>
                <AlertDescription>Redirecting to create new account page</AlertDescription>
            </Alert>
        </Slide>


        <Slide in={alertMsg} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }} bg='white' mt={"-20px"}>
          <Alert status='error' w='60vw' mx='20vw'  >
            <AlertIcon />
            <AlertTitle>User with given credentials doesn't exist!</AlertTitle>
            <AlertDescription>Try signup.</AlertDescription>
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
            <Input className={styles.greyBackG} placeholder="Sign in with Microsoft"></Input>
          </InputGroup>
          {/* <br /> */}
          <InputGroup>
            <InputLeftElement className={styles.iconImg} children={<Image src={process.env.PUBLIC_URL + "apple-logo-login.png"} color="gray.300" />} />
            <Input className={styles.greyBackG} placeholder="Sign in with Apple"></Input>
          </InputGroup>

          {/* <br /> */}

          {/* from start*/}
          <form onSubmit={handleSubmit}>
            <Text className={styles.text2}>Sign in with you email</Text>
            <br />
            <Input onChange={handleChange} name="email" value={text.email} required className={styles.whiteBackG} type="email" placeholder="Email"></Input>
            <br />
            <Input onChange={handleChange} name="password" value={text.password} required className={styles.whiteBackG} type="password" placeholder="Password"></Input>
            <br />
            <Text className={styles.text1}>Forgot Your password? <a href=''>Retrieve</a></Text>
            <br />
            <Button type='submit' className={styles.loginBtn}>
              {/* <Link to="/create-new-acc"> */}
              LOGIN
              {/* </Link> */}
            </Button>
          </form>
          {/* form end */}
          <br />
          <Text className={styles.switch}>Don't have an account?
            <Link to="/signup">
              SIGNUP
            </Link>
          </Text>
          <br />
          <Text className={styles.switch}><a href=''>Terms of service</a> /<a href=''>Privacy Policy</a></Text>
        </Box>
      </Box>

    </Box>


  )
}

export default Login
