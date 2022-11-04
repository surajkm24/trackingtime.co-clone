import { Box, Image, Text, Input, Flex, Button, Slide, Alert, AlertIcon, AlertTitle, AlertDescription } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Form, Link, useNavigate } from 'react-router-dom'
import styles from "../CreateNewOrg/CreateNewOrg.module.css"

const CreateNewOrg = () => {
   const navigate = useNavigate();
   const [success, setSuccess] = useState(false);



   const handleSubmit = (e) => {
      e.preventDefault();
      setSuccess(true);
      setTimeout(() => {
         setSuccess(false);
         navigate('/project')
      }, 2000)
      // navigate("/project");
   }



   return (
      <Box display='flex' maxW='100%'>

         <Slide in={success} direction='left' position='fixed' top='0px' style={{ zIndex: 10 }}>
            <Alert status='success' w='80vw' mx='10vw' flexWrap='wrap'>
               <AlertIcon />
               <AlertTitle>Succesfully created account!</AlertTitle>
               <AlertDescription>Now you can start your new project.</AlertDescription>
            </Alert>
         </Slide>


         {/* leftBox */}
         <Box w='50%' display={{ base: "none", md: "block" }} bgColor='#2e4476' bgSize='100% 100%' minH='100vh' bgGradient={`url('https://pro.trackingtime.co/img/onboarding/onboarding-join-account.svg')`}>
         </Box>

         {/* rightBox */}
         <Box w={{ base: '100%', md: "50%" }} py={{ base: "25px", md: "60px" }} display='grid' alignItems={'center'} minH='100vh'>
            <Box w={{ base: '90%', md: "70%" }} m='auto'>
               <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' w='150px' ></Image>
               <form onSubmit={handleSubmit}>
                  <Box >

                     <Text fontSize='25px' fontWeight={700} mt='10px'>Create your organization</Text>

                     <Text fontSize='14px' fontWeight={600} color='rgba(0,0,0,0.7)' mt='10px'>Set up your company in TrackingTime.</Text>

                     <Text fontSize='10px' fontWeight={600} color='rgba(0,0,0,0.9)' mt='20px' mb='3px'>Organization name</Text>
                     <Input required placeholder='Organization' variant='unstyled' p='10px' border='1px solid rgba(55,57,62,0.5)'></Input>

                     <Text fontSize='10px' fontWeight={600} color='rgba(0,0,0,0.9)' mt='20px' mb='3px'>Team size</Text>
                     <Flex gap={'15px'} flexWrap='wrap'>
                        <Button bg='#0a192f' color='white' fontWeight={500} _hover={{ opacity: "0.85", transform: 'scale(0.99)' }}>solo (1)</Button>
                        <Button bg='#0a192f' color='white' fontWeight={500} _hover={{ opacity: "0.85", transform: 'scale(0.99)' }}>2-5</Button>
                        <Button bg='#0a192f' color='white' fontWeight={500} _hover={{ opacity: "0.85", transform: 'scale(0.99)' }}>5-15</Button>
                        <Button bg='#0a192f' color='white' fontWeight={500} _hover={{ opacity: "0.85", transform: 'scale(0.99)' }}>+15</Button>
                     </Flex>

                     <Text fontSize='10px' fontWeight={600} color='rgba(0,0,0,0.9)' mt='20px' mb='3px'>Your name</Text>
                     <Input required placeholder='First Name' variant='unstyled' p='10px' border='1px solid rgba(55,57,62,0.5)'></Input>

                     <Text fontSize='10px' fontWeight={600} color='rgba(0,0,0,0.9)' mt='20px' mb='3px'>Last name</Text>
                     <Input required placeholder='Last Name' variant='unstyled' p='10px' border='1px solid rgba(55,57,62,0.5)'></Input>

                     <Flex gap="15px" mt='10px'>
                        <Button bg='#dc143c' fontWeight={700} color='whitesmoke' _hover={{ opacity: "0.85", transform: 'scale(0.99)' }} onClick={() => navigate('/create-new-acc')}>BACK</Button>
                        {/* <Link to="/project"> */}
                        <Button type='submit' bg='#0a192f' color='white' fontWeight={500} _hover={{ opacity: "0.85", transform: 'scale(0.99)' }}>GET STARTED</Button>
                        {/* </Link> */}
                     </Flex>
                  </Box>

               </form>
            </Box>
         </Box>

      </Box>
   )
}

export default CreateNewOrg
