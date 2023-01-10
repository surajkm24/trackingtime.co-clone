import { Box, Heading, Text, Input, Button } from '@chakra-ui/react';
import './Footer.css';

export const FooterTopSection = () => {
    return (
        <Box id='sk_getSt' px={['20px', '20px', '20px', '65px', '100px']} py='45px'>
            <img src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/footer/tt.svg' alt='' />
            <Heading mt='23px' color='#242954' fontSize={'40px'} letterSpacing='0.4px'>Get Started</Heading>
            <Text mt='15px' lineHeight={'30px'} fontSize={'18px'} color='gray' fontWeight={500} width='50%'>
                Sign up today and join thousands of people around the world using TrackingTime to make the most of their time.
            </Text>
            <Box display='flex' gap='10px' mt='40px' >
                <Input
                    borderColor={'black'}
                    color='black'
                    _hover={{ borderColor: "black" }}
                    _placeholder={{ color: "black" }}
                    fontSize='16px'
                    variant='outline'
                    placeholder='Your Work Email'
                    textAlign={'center'}
                    width='280px'
                />
                <Box>
                    <Button
                        bg='#ed565a'
                        color='white'
                        width='230px'
                        fontSize='13px'
                        fontWeight={600}
                        letterSpacing='2px'
                        _hover={{ background: "#0a192f" }}
                    >
                        START FOR FREE
                    </Button>
                    <Text textAlign='center' fontSize='12px' mt='10px'>14-day-PRO trial included</Text>
                </Box>
            </Box>
            <Box display='flex' gap='20px'>
                <img width='25px' src='https://pro.trackingtime.co/img/login/google-logo.png' alt='' />
                <Text fontWeight={700} textDecoration='underline' textUnderlineOffset={'3px'}
                    cursor='pointer' _hover={{ textDecoration: "none" }}>Sign in with Google</Text>
            </Box>
        </Box>
    )
}