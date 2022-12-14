import React, { useState,useEffect } from 'react';
import { Box, Button, Image, Input, Text, Checkbox, useToast } from "@chakra-ui/react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { singupAPI } from '../../../Redux/Auth/auth.action';

const SignupPage = () => {
  const { token } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const [text, setText] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(singupAPI(text))
      .then((res) => {
        if (res.token) {
          toast({
            title: 'Account created.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 2000,
            isClosable: true,
          })
          setTimeout(() => {
            navigate('/create-new-acc')
          }, 2000)
        }
        else {
          toast({
            title: 'Signup failed.',
            description: "This email is already registered!",
            status: 'error',
            duration: 2000,
            isClosable: true,
          })
        }
      }).catch(err => {
        console.log(err);
      })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setText({
      ...text,
      [name]: value,
    });
  };

  useEffect(() => {
    if (token) navigate('/project');
  }, [])

  return (
    <Box display='flex' maxW='100%' >
      <Box w='50%' display={{ base: "none", md: "block" }} bgColor='#2e4476' bgSize='100% 100%' minH='100vh' bgGradient={`url('https://pro.trackingtime.co/img/ui-login-background.svg')`}>
      </Box>

      {/* rightBox */}
      <Box w={{ base: '100%', md: "50%" }} py={{ base: "40px", md: "60px" }}>
        <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' w='135px' m='auto' mb='20px'></Image>

        <Box w='100%'>
          <Button display='flex' position='relative' gap='15px' fontSize='13px' alignItems='center' w='250px' justifyContent={'center'} pl='10px' m='auto' mb='5px'>
            <img width='30px' style={{ position: 'absolute', left: "10px" }} src='https://pro.trackingtime.co/img/login/google-logo.png' />
            <p>Sign up with Google</p>
          </Button>
          <Button display='flex' position='relative' gap='15px' fontSize='13px' alignItems='center' w='250px' justifyContent={'center'} pl='10px' m='auto' mb='5px'>
            <img width='30px' style={{ position: 'absolute', left: "10px" }} src='https://pro.trackingtime.co/img/login/microsoft-logo.png' />
            <p>Sign up with Microsoft</p>
          </Button>
          <Button display='flex' position='relative' gap='15px' fontSize='13px' alignItems='center' w='250px' justifyContent={'center'} pl='10px' m='auto' mb='5px'>
            <img width='30px' style={{ position: 'absolute', left: "10px" }} src='https://pro.trackingtime.co/img/login/apple-logo.png' />
            <p>Sign up with Apple</p>
          </Button>
          {/* form start */}
          <form onSubmit={handleSubmit} width='100%' >
            <Text fontSize='13px' align='center' fontWeight={600} mt='20px'>Sign up with your email</Text>
            <br />
            <Box w='fit-content' m='auto'>
              <Input w='250px' mb='9px' textAlign='center' onChange={handleChange} name="email" required value={text.email} type="email" placeholder="Email" variant='unstyled' py='8px' border='1px solid rgba(0,0,0,0.1)' backgroundColor='white' _focus={{ border: '1px solid blue' }}></Input>
              <br />
              <Input w='250px' mb='9px' textAlign='center' onChange={handleChange} name="password" required value={text.password} type="password" placeholder="Password" variant='unstyled' py='8px' border='1px solid rgba(0,0,0,0.1)' backgroundColor='white' _focus={{ border: '1px solid blue' }}></Input>
              <br />
            </Box>

            <Box w='fit-content' m='auto'>
              <Checkbox borderColor='gray' required />
            </Box>
            <Text fontSize='12px' fontWeight={600} w='fit-content' m='auto' color='gray'>I agree with the <a href='' style={{ textDecoration: "underline" }}>Terms of service & </a></Text>
            <Text fontSize='12px' fontWeight={600} w='fit-content' m='auto' color='gray'><a href='' style={{ textDecoration: "underline" }}>Privacy Policy. </a></Text>
            <br />
            <Box w='fit-content' m='auto' mt='-10px'>
              <Button type='submit' w='250px' m='auto' bg='black' color='white' _hover={{ opacity: "0.9" }}>
                SIGN UP
              </Button>
            </Box>
          </form>

          <br />
          <Text fontSize='12px' color='gray' textAlign='center' fontWeight={600} textDecoration={'underline'} mt='-10px'><Link to="/login">Back to login</Link></Text>
          <br />
          <Text fontSize='12px' color='gray' textAlign='center' fontWeight={600} mt='0px'><a href='' style={{ textDecoration: "underline" }}>Terms of service</a> / <a href='' style={{ textDecoration: "underline" }}>Privacy Policy</a></Text>
        </Box>
      </Box>

    </Box>
  )
}

export default SignupPage
