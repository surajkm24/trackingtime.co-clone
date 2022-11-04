import React from 'react'
import {
    Flex,
    Heading,
    Stack,
    Text,
    Button,
    Box,
    Input,
    Image,
    Link,
} from '@chakra-ui/react';
import Marquee from "react-fast-marquee";
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';

const featuresData = [
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-1.svg",
        heading: "Measure your team's productivity ",
        desc: "Get a Record of the worked hours and keep your projects in order, be abreast of ongoind or completed projects with our super friendly app."
    },
    {
        img: 'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-2.svg',
        heading: 'The most flexible reporting engine',
        desc: "Project budgeting, client billing, payroll, productivity analytics and much more.Tracking time has got you covered."
    },
    {
        img: 'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-3.svg',
        heading: "Monitor your team's workload, in realtime",
        desc: "See every works in progress and measure the productivity of the team by monitoring them in real life."
    }
]

const toolsData = [
    {
        img: 'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/asana.png',
        title: 'Asana',
        subtitle: "Asana pust tasks and conversations together to enable teamwork without email."
    },
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/trello.png",
        title: "Trello",
        subtitle: "Trello is a collaboration tool that organize your projects into boards."
    },
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/todoist.png",
        title: "Todoist",
        subtitle: "Todoist is a task manager that useful fast and easy to use."
    },
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/smartsheet.png",
        title: "Smartsheet",
        subtitle: "Smartsheet is web based project and task management and work collaboration software."
    }
]

const extraFeaturesData = [
    {
        img: 'https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-1.svg',
        title: "Timecards Approval",
        subtitle: "Track clock in and out times with no effort."
    },
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-2.svg",
        title: "Budgetting",
        subtitle: "Keep your projects on time and budget."
    },
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-3.svg",
        title: "Work Schedules",
        subtitle: "Specify when your employees are expected to be their at job."
    },
    {
        img: "https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-4.svg",
        title: "Timesheets Audits",
        subtitle: "Avoid data inconsistancies with just one click."
    }
]

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Box maxW="100vw" backgroundColor={"#F6F8F9"} overflowX='hidden'>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                >
                    <Box maxW="90%" mb={{ base: '10px', md: '24px' }}>
                        <Text fontSize={{ base: '10px', md: "12px" }} fontWeight="bold" m={'auto'} mb={{ base: '18px', md: '30px' }}
                            color={"#ED565A"} letterSpacing='2px' >TRACKINGTIME TIME TRACKER SOFTWARE</Text>
                        <Heading fontSize={{ base: '14px', md: "18px" }} fontWeight={800} letterSpacing='3px' color="#242954" mb={{ base: '10px', md: '20px' }}>SET AND FORGET TIME TRACKING</Heading>
                        <Heading
                            maxW={{ base: "90vw", md: '80vw', lg: '70vw', xl: '60vw' }}
                            fontWeight={700}
                            fontSize={{ base: '33px', sm: '52px', md: '70px' }}
                            color="#242954"
                            lineHeight={'100%'}
                        >
                            Bring your Productivity to the next level.
                        </Heading>
                    </Box>
                    <Box display={{ base: "block", md: "flex" }} gap='10px' w='90%' m='auto' justifyContent='center' >
                        <Input
                            borderColor={'black'}
                            color='black'
                            _hover={{ borderColor: "black" }}
                            _placeholder={{ color: "black" }}
                            fontSize='16px'
                            variant='outline'
                            placeholder='Your Work Email'
                            textAlign={'center'}
                            width={{ base: "100%", md: '280px' }}
                            mb={{ base: '10px', md: '0px' }}
                        />

                        <Box>
                            <Button
                                bg='#ed565a'
                                color='white'
                                width={{ base: "100%", md: '280px' }}
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
                    <Flex gap='20px'>
                        <Image h="25px" w="24px"
                            src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/google-key.png' alt="" />
                        <Link color='black' href='#' fontSize="17px" fontWeight="bold">
                            Sign in with Google
                        </Link>
                    </Flex>
                </Stack>
                
                {/* feedback:fw18_0042, fw16_644, fw17_0513 - use loops when you want to render the list, create data with array and render on the view*/}
                <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/ilus-header-2.svg' w='80vw' mx='25px' objectFit='cover' />
                <Stack borderBottom="1px solid white" boxShadow="lg" backgroundColor="white" pt="15px" pb="20px" h="230px">
                    <Box w={{ base: "90vw", sm: '85vw' }} m='auto' p={5} >
                        <Text align='center' fontSize='17px' color="gray" fontWeight={700} mb='18px'>Companies of all shapes and sizes use TrackingTime:</Text>
                        <Marquee>
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo4.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo2.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo7.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo3.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo8.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo10.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo7.jpg' w='230px' h='62px' />
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo6.jpg' w='230px' h='62px' />
                            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo11.jpg" w='230px' h='62px' />
                            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/logos/color/logo5.jpg" w='230px' h='62px' />
                        </Marquee>
                    </Box>
                </Stack>

                <Box width="90%" m="auto" mt={{ base: "30px", sm: "60px", md: "120px" }} overflow='hidden' >
                    <Heading fontSize='18px' fontWeight={800} letterSpacing='2px' mb={{ base: "19px", sm: "38px", md: "76px" }} align="center" style={{ wordSpacing: "5px" }}>THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.</Heading>
                    <Box display={{ base: 'grid', lg: 'flex' }} justifyContent='center' gap={6} alignItems={'center'} >
                        {featuresData.map((feature) => (
                            <Box display={{ base: 'block', sm: 'flex', lg: 'block' }} justifyContent='space-evenly' alignItems='center' backgroundColor="white" m={'auto'} border="4px solid white" boxShadow="lg" w={{ base: '90%', sm: '100%', lg: '30%' }} h={{ base: 'fit-content', sm: 'fit-content', lg: "490px" }} overflow='hidden' borderRadius='10px' mb='20px'>
                                <Image src={feature.img} w={{ base: "100%", sm: "37%", md: '50%', lg: "100%" }} />
                                <Box p='10px' borderRadius='10px'>
                                    <Heading fontSize={{ base: '20px', sm: '16px', md: "18px", lg: '22px' }} align="center" mt="0px">{feature.heading}</Heading>
                                    <Text fontSize={{ base: '16px', sm: '13px', md: "14px", lg: '16px' }} color='gray' align='justify' lineHeight="28px" w="90%" m="auto" mt='10px'>{feature.desc}</Text>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box width="90%" display={{ base: 'block', lg: "flex" }} justifyContent='space-evenly' alignItems='center' overflow={'hidden'} m="auto" mt={{ base: "25px", sm: "40px", md: "100px" }} mb={{ base: "25px", sm: "40px", md: "100px" }} >
                    <Box width={{ base: "100%", lg: "25%" }}>
                        <Image m={{ base: "auto", lg: '0' }} src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/grupo.svg" w="231px" h="141px" />
                        <Box w="100%">
                            <Heading m={{ base: "auto", lg: "0" }} w='fit-content' color="#242954" fontSize='30px' textAlign={{ base: "center", lg: "left" }}>Add time tracking to your favourite business apps</Heading>
                            <Text color="gray" mt='10px' lineHeight={2} textAlign={{ base: "center", lg: "left" }}>No matter where your employees work, TrackingTime works with them. Install the TrackingTime Button for chrome and Firefox and track time right within the productivity apps your employees use everyday.</Text>
                            <Box w='fit-content' m={{ base: 'auto', lg: '0' }} >
                                <Button
                                    height='35px'
                                    width='fit-content'
                                    mt='15px'
                                    rounded='lg'
                                    border='2px solid #0a192f'
                                    bg='white'
                                    color='black'
                                    p='6px 30px'
                                    _hover={{ background: "#0a192f", color: "white" }}
                                    mb={{ base: '25px', lg: "0" }}
                                >SEE ALL
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                    <Box display={'flex'} flexWrap={'wrap'} gap={{ base: "20px 0px" }} width={{ base: "100%", lg: "70%" }} mb={2} justifyContent='space-evenly'>
                        {toolsData.map((tool) => (
                            <Box w={{ base: "200px", lg: "23%" }} maxH={'300px'} p={2} borderRadius='5px'>
                                <Image src={tool.img} h="64px" w="70px" m='auto' />
                                <Heading fontSize="21px" color='#0a192f' mt='4px' align='center'>{tool.title}</Heading>
                                <Text color="gray" p={2} lineHeight={1.5} align='justify'>{tool.subtitle}</Text>
                            </Box>
                        ))}
                    </Box>
                </Box>

                <Box w="100%" m="auto" backgroundColor="white" boxShadow={'md'} mt="50px" overflow={'hidden'}>
                    <Box display={{ base: "block", md: "flex" }} w="90%" m="auto" justifyContent='space-between'>
                        {extraFeaturesData.map((item) => (
                            <Box w={{ base: 'fit-content', md: '23%' }} m='auto' mt={{ base: "40px", md: '70px' }} mb={{ base: "40px", md: '70px' }}>
                                <Image src={item.img} w="233px" h="150px" />
                                <Heading color="#242954" align="center" fontSize="21px">{item.title}</Heading>
                                <Text color="gray" align="center" fontSize='14px' mt='10px'>{item.subtitle}</Text>
                            </Box>
                        ))}
                    </Box>
                </Box>


                <Box mt={20} display={{ base: "block", lg: "flex" }} alignItems='center' mb={15}>
                    <Box w={{ base: "100%", lg: "50%" }} bgGradient={"url('https://trackingtime.co/wp-content/themes/trackingtime-v3/img/keywords/lineas.png')"} bgSize='100% 100%'>
                        <Image w='70%' src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/bottom-action.svg' m='auto' />
                    </Box>
                    <Box w={{ base: "90%", lg: "40%" }} p={5} m='auto'>
                        <Heading fontSize={{base:"24px",md:"29px",lg:"33px"}} lineHeight={'100%'} color="#242954" textAlign={{base:"center",lg:"left"}}>Get Professional timesheets done in no time!</Heading>
                        <Text mt='20px' color="gray" lineHeight={2} textAlign={{base:"center",lg:"left"}} display={{base:"none",lg:"block"}}>Sign up Today and join thousands of people around the world using TrackingTime to simplify their timesheets</Text>
                        <Text mt='20px' color='#0a192f' fontSize='22px' fontWeight={700} textAlign={{base:"center",lg:"left"}} display={{base:"block",lg:"none"}}>Try Tracking Time Pro</Text>
                        <Box mt='20px' display={{ base: "block", lg: "flex" }} gap='10px' w='100%' justifyContent='center' >
                            <Input
                                borderColor={'black'}
                                color='black'
                                _hover={{ borderColor: "black" }}
                                _placeholder={{ color: "black" }}
                                fontSize='16px'
                                variant='outline'
                                placeholder='Your Work Email'
                                textAlign={'center'}
                                width={{ base: "100%", lg: '280px' }}
                                mb={{ base: '10px', lg: '0px' }}
                            />

                            <Box width={{ base: "100%", lg: '280px' }}>
                                <Button
                                    bg='#ed565a'
                                    color='white'
                                    width='100%'
                                    fontSize='13px'
                                    fontWeight={600}
                                    letterSpacing='2px'
                                    _hover={{ background: "#0a192f" }}
                                >
                                    START FOR FREE
                                </Button>
                                <Text textAlign='center' fontWeight={600} fontSize='12px' mt='10px'>14-day-PRO trial included</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Footer />
        </>

    )
}

export default HomePage
