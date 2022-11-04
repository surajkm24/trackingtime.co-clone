import React, {useState } from 'react'
import { Alert, AlertDescription, AlertIcon, AlertTitle, Box, Button, Image, Input, InputGroup, InputLeftElement, Slide, Text } from "@chakra-ui/react";
import styles from "./Login.module.css";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { loginAPI } from '../../../Redux/Auth/auth.action';

const Login = () => {
  const { token, error } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [alertMsg, setAlertMsg] = useState(false);
  const [success, setSuccess] = useState(false);
  const [text, setText] = useState({
    email: "",
    password: "",
  }); 

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("hello");
    dispatch(loginAPI(text))
      .then((res) => {
        if (res.token) {
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
            navigate('/project')
          }, 3000)
        }
        else {
          setAlertMsg(true);
          setTimeout(() => {
            setAlertMsg(false)
          }, 4000)
        }
      }).catch(err => {
        console.log(err);
      })
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


    <Box display='flex' maxW='100%' >

      <Slide in={success} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
        <Alert status='success' w='80vw' mx='10vw' flexWrap={'wrap'}>
          <AlertIcon />
          <AlertTitle>Logged In Succesfully!</AlertTitle>
          <AlertDescription>Redirecting to Project Page</AlertDescription>
        </Alert>
      </Slide>


      <Slide in={alertMsg} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }} bg='white' mt={"-20px"}>
        <Alert status='error' w='60vw' mx='20vw' flexWrap={'wrap'}>
          <AlertIcon />
          <AlertTitle>User with given credentials doesn't exist!</AlertTitle>
          <AlertDescription>Try Signup!</AlertDescription>
        </Alert>
      </Slide>

      <Box w='50%' display={{ base: "none", md: "block" }} bgColor='#2e4476' bgSize='100% 100%' minH='100vh' bgGradient={`url('https://pro.trackingtime.co/img/ui-login-background.svg')`}>
        {/* <Image src="https://pro.trackingtime.co/img/ui-login-background.svg" w='100%' bg='#2e4476' h='100%'></Image> */}
      </Box>

      {/* rightBox */}
      <Box w={{ base: '100%', md: "50%" }} py={{ base: "40px", md: "60px" }}>
        <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' w='135px' m='auto' mb='20px'></Image>

        <Box w='100%'>
          <Button display='flex' position='relative' gap='15px' fontSize='13px' alignItems='center' w='250px' justifyContent={'center'} pl='10px' m='auto' mb='5px'>
            <img width='30px' style={{ position: 'absolute', left: "10px" }} src='https://pro.trackingtime.co/img/login/google-logo.png' />
            <p>Sign in with Google</p>
          </Button>
          <Button display='flex' position='relative' gap='15px' fontSize='13px' alignItems='center' w='250px' justifyContent={'center'} pl='10px' m='auto' mb='5px'>
            <img width='30px' style={{ position: 'absolute', left: "10px" }} src='https://pro.trackingtime.co/img/login/microsoft-logo.png' />
            <p>Sign in with Microsoft</p>
          </Button>
          <Button display='flex' position='relative' gap='15px' fontSize='13px' alignItems='center' w='250px' justifyContent={'center'} pl='10px' m='auto' mb='5px'>
            <img width='30px' style={{ position: 'absolute', left: "10px" }} src='https://pro.trackingtime.co/img/login/apple-logo.png' />
            <p>Sign in with Apple</p>
          </Button>
          {/* <br /> */}

          {/* from start*/}
          <form onSubmit={handleSubmit} width='100%'>
            <Text fontSize='13px' align='center' fontWeight={600} mt='20px'>Sign in with your email</Text>
            <br />
            <Box w='fit-content' m='auto'>
              <Input w='250px' mb='9px' textAlign='center' onChange={handleChange} name="email" required value={text.email} type="email" placeholder="Email" variant='unstyled' py='8px' border='1px solid rgba(0,0,0,0.1)' backgroundColor='white' _focus={{ border: '1px solid blue' }}></Input>
              <br />
              <Input w='250px' mb='9px' textAlign='center' onChange={handleChange} name="password" required value={text.password} type="password" placeholder="Password" variant='unstyled' py='8px' border='1px solid rgba(0,0,0,0.1)' backgroundColor='white' _focus={{ border: '1px solid blue' }}></Input>
              <br />
            </Box>
            <Text fontSize='10px' w='250px' textAlign='right' m='auto'>Forgot Your password? <a href='' style={{ textDecoration: "underline" }}>Retrieve</a></Text>
            <br />
            <Box w='fit-content' m='auto' mt='-10px'>
              <Button fontSize='14px' type='submit' w='250px' m='auto' bg='black' color='white' _hover={{ opacity: "0.9" }}>
                LOGIN
              </Button>
            </Box>
          </form>
          <br />
          <Text fontSize='12px' color='gray' textAlign='center' fontWeight={600}>Don't have an account?  &nbsp;
            <Link to="/signup" style={{ textDecoration: "underline" }}>
              SIGNUP
            </Link>
          </Text>
          <br />
          <Text fontSize='12px' color='gray' textAlign='center' fontWeight={600} mt='0px'><a href='' style={{ textDecoration: "underline" }}>Terms of service</a> / <a href='' style={{ textDecoration: "underline" }}>Privacy Policy</a></Text>
        </Box>
      </Box>

    </Box>


  )
}

export default Login
