import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';

const CreateNewAcc = () => {
  return (

    <Box display='flex' maxW='100%'>

      {/* leftBox */}
      <Box w='50%' display={{ base: "none", md: "block" }} bgColor='#2e4476' bgSize='100% 100%' minH='100vh' bgGradient={`url('https://pro.trackingtime.co/img/onboarding/onboarding-join-account.svg')`}>
      </Box>

      {/* rightBox */}
      <Box w={{ base: '100%', md: "50%" }} py={{ base: "25px", md: "60px" }} display='grid' alignItems={'center'} justifyContent='center' minH='100vh'>
        <Box w={{ base: '80%', md: "60%" }} m='auto'>
          <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' w='150px' ></Image>
          <Box >
            <Text fontSize='24px' fontWeight={700} mt='20px'>Let's set up your account</Text>
            <Text fontSize='14px' color='black' fontWeight={600} my='10px'>Welcome to trackingtime and thank you for signing up! please choose an option below to get started.</Text>

            <Link to="/create-new-org">
              <Box bg='#ed565a' color='white' _hover={{
                bg: '#0a192f',
                color: "white"
              }} borderRadius='5px' p='10px' mb='10px'>
                <Text fontSize='15px' fontWeight={700}>Create a new account</Text>
                <Text fontSize='12px' fontWeight={600}>Start a new account and invite your teammates</Text>
              </Box>
            </Link>
            <Box bg='#ed565a' color='white' _hover={{
              bg: '#0a192f',
              color: "white"
            }} borderRadius='5px' p='10px' cursor='pointer'>
              <Text fontSize='15px' fontWeight={700}>Join an existing account</Text>
              <Text fontSize='12px' fontWeight={600}>Your company is already using trackingtime</Text>
            </Box>

          </Box>

        </Box>
      </Box>

    </Box>
  )
}

export default CreateNewAcc
