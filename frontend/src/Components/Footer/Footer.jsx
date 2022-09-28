import {
    Box, Heading, Text, Input, Button, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import './Footer.css';

export const Footer = () => {

    return <Box bg='#f6f8f9'>
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
                // zIndex={0}
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
                    // zIndex={0}
                    >
                        START FOR FREE
                    </Button>
                    <Text textAlign='center' fontSize='12px' mt='10px'>14-day-PRO trial included</Text>
                </Box>
            </Box>
            <Box display='flex' gap='20px'>
                <img width='25px' src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/google-key.png' alt='' />
                <Text fontWeight={700} textDecoration='underline' textUnderlineOffset={'3px'} cursor='pointer' _hover={{ textDecoration: "none" }}>Sign in with Google</Text>
            </Box>
        </Box>
        <Box id='sk_reFt'>
            <Box id='deskFoot' display='flex' px={['20px', '20px', '20px', '65px', '100px']} py='45px' flexWrap='wrap' justifyItems={'flex-start'} gap='15px' justifyContent={'space-between'}>
                <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'} gap='10px' minW='17%' maxW='20%'>
                    <Text fontWeight={700}>Industries</Text>
                    <Text>Time tracking for Graphic Designers</Text>
                    <Text>Time tracking software for Architects</Text>
                    <Text>Time tracking for Remote Workers</Text>
                    <Text>Time tracking for Marketing Teams</Text>
                    <Text>Time tracking for Freelancers</Text>
                </Box>
                <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'} gap='10px' minW='17%' maxW='20%'>
                    <Text fontWeight={700}>Products</Text>
                    <Text>Plans & Pricing</Text>
                    <Text>Integrations</Text>
                    <Text>Product Updates</Text>
                    <Text>Slack Bot</Text>
                    <Text>Microsoft Teams</Text>
                </Box>
                <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'} gap='10px' minW='17%' maxW='20%'>
                    <Text fontWeight={700}>Features</Text>
                    <Text>Online Timesheet For Efficient Companies</Text>
                    <Text>Time Tracker for every business</Text>
                    <Text>Reports for billing and payroll to reduce administrative work</Text>
                    <Text>Attendance tracker for every business</Text>
                    <Text>Project Management Time Tracking Software</Text>
                </Box>
                <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'} gap='10px' minW='17%' maxW='20%'>
                    <Text fontWeight={700}>Apps</Text>
                    <Text>Web App</Text>
                    <Text>Time tracker app for Mac</Text>
                    <Text>Time tracker for Windows</Text>
                    <Text>iPhone App</Text>
                    <Text>Android App</Text>
                    <Text>Time Tracking for Chrome</Text>
                    <Text>Time Tracking for FireFox</Text>
                    <Text>Time Tracking for Safari</Text>
                </Box>
                <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'} gap='10px' minW='17%' maxW='20%'>
                    <Text fontWeight={700}>Company</Text>
                    <Text>About Us</Text>
                    <Text>Blog</Text>
                    <Text>Media kit</Text>
                    <Text>Terms of service</Text>
                    <Text>Privacy Policy</Text>
                    <Text>DMCA Policy</Text>
                    <Text>Impressum</Text>
                </Box>
                <Box width='20%' textAlign={'left'}>
                    <Box display='flex' width='70%' justifyContent={'space-between'}>
                        <Box background='#0a192f' padding='10px' borderRadius={'50%'}>
                            <BsTwitter color='white' />
                        </Box>
                        <Box background='#0a192f' padding='10px' borderRadius={'50%'}>
                            <BsLinkedin color='white' />
                        </Box>
                        <Box background='#0a192f' padding='10px' borderRadius={'50%'}>
                            <GrFacebookOption color='white' />
                        </Box>
                    </Box>
                    <Text mt='20px' textDecor={'underline'} color='#0a192f' fontSize='13px' fontWeight={700}><a href='mailto:support@trackingtime.co'>support@trackingtime.co</a></Text>
                    <Text mt='15px' align={'left'} fontWeight={"500"} fontSize='11px' color='#0a192f'>© 2022 TrackingTime, LLC</Text>
                </Box>
                <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'} gap='10px' minW='17%' maxW='20%'>
                    <Text fontWeight={700}>Help & Support</Text>
                    <Text>Help Center</Text>
                    <Text>Developer</Text>
                    <Text>Contact Us</Text>
                </Box>
            </Box>

            <Box id='mobFoot' px='20px' py='45px'>
                <Accordion allowMultiple allowToggle borderColor='#f6f8f9'>
                    <AccordionItem>
                        <h2>
                            <AccordionButton borderBottom='2px solid #0a192f'>
                                <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                                    Industries
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                            <Text>Time tracking for Graphic Designers</Text>
                            <Text>Time tracking software for Architects</Text>
                            <Text>Time tracking for Remote Workers</Text>
                            <Text>Time tracking for Marketing Teams</Text>
                            <Text>Time tracking for Freelancers</Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton borderBottom='2px solid #0a192f'>
                                <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                                    Product
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                            <Text>Plans & Pricing</Text>
                            <Text>Integrations</Text>
                            <Text>Product Updates</Text>
                            <Text>Slack Bot</Text>
                            <Text>Microsoft Teams</Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton borderBottom='2px solid #0a192f'>
                                <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                                    Features
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                            <Text>Online Timesheet For Efficient Companies</Text>
                            <Text>Time Tracker for every business</Text>
                            <Text>Reports for billing and payroll to reduce administrative work</Text>
                            <Text>Attendance tracker for every business</Text>
                            <Text>Project Management Time Tracking Software</Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton borderBottom='2px solid #0a192f'>
                                <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                                    Apps
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                            <Text>Web App</Text>
                            <Text>Time tracker app for Mac</Text>
                            <Text>Time tracker for Windows</Text>
                            <Text>iPhone App</Text>
                            <Text>Android App</Text>
                            <Text>Time Tracking for Chrome</Text>
                            <Text>Time Tracking for FireFox</Text>
                            <Text>Time Tracking for Safari</Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton borderBottom='2px solid #0a192f'>
                                <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                                    Company
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                            <Text>About Us</Text>
                            <Text>Blog</Text>
                            <Text>Media kit</Text>
                            <Text>Terms of service</Text>
                            <Text>Privacy Policy</Text>
                            <Text>DMCA Policy</Text>
                            <Text>Impressum</Text>
                        </AccordionPanel>
                    </AccordionItem>
                    <AccordionItem>
                        <h2>
                            <AccordionButton borderBottom='2px solid #0a192f'>
                                <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                                    Help & Support
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                            <Text>Help Center</Text>
                            <Text>Developer</Text>
                            <Text>Contact Us</Text>
                        </AccordionPanel>
                    </AccordionItem>

                </Accordion>
            </Box>
        </Box>
    </Box>
}