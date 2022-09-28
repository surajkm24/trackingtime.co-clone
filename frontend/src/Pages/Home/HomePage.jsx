import React from 'react'
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Box,
    HStack,
    Input,
    Image,
    Link,
} from '@chakra-ui/react';
import Marquee from "react-fast-marquee";
import { Outlet } from 'react-router-dom';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';


const HomePage = () => {
    return (
        <>
         {/* navbar start */}
         <Navbar />
         {/* navbar end */}

            <Container maxW="100%" backgroundColor={"#F6F8F9"}>
                <Stack
                    textAlign={'center'}
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                >
                    <Box maxW="90%" mb='25px'>
                        <Text fontSize="12px" fontWeight="bold" mb={"30px"}
                            color={"#ED565A"}>TRACKINGTIME TIME TRACKER SOFTWARE</Text>
                        <Heading as='h3' size="sm" color="#242954">SET AND FORGET TIME TRACKING</Heading>
                        <Heading
                            m={0}
                            maxW='50rem'
                            fontWeight={700}
                            fontSize="70px"
                            color="#242954"
                            lineHeight={'110%'}>
                            Bring your Productivity to the next level.
                        </Heading>
                    </Box>
                    <HStack pb="40px">
                        <Input outline='none'
                            placeholder='Your Work Email' p="10px" width='220px' />
                        <Text backgroundColor="#ED565A" h="38px" width='200px' color='white'>START FOR FREE!</Text>
                    </HStack>
                    <Flex gap='20px'>
                        <Image h="25px" w="24px"
                            src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/google-key.png' alt="" />
                        <Link color='black' href='#' fontSize="17px" fontWeight="bold">
                            Sign in with Google
                        </Link>
                    </Flex>
                </Stack>
                <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/ilus-header-2.svg' w='1200px' h='354px' mx="-25x" />
                <Stack borderBottom="1px solid white" boxShadow="2xl" backgroundColor="white" pt="15px" pb="20px" h="230px">
                    <Box w="85%" m='auto' p={5} >
                        <Text align='center' color="gray">Companies of all shapes and size use Tracking Time:</Text>
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

                <Box width="85%" m="auto" mt="120px">
                    <Heading as={"h3"} size="md" mb="70px" align="center" style={{ wordSpacing: "5px" }}>THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.</Heading>
                    <HStack spacing={25}>
                        <Box backgroundColor="white" border="4px solid white" boxShadow="2xl" w="370px" p={5} pb="40px">
                            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-1.svg" />
                            <Heading fontSize="23px" align="center" mt="-10px">Measure your team's productivity </Heading>
                            <Text color='gray' lineHeight="28px" w="75%" m="auto">Get a Record of the worked hours and keep your projects in order, be abreast of ongoind or completed projects with our super friendly app.</Text>
                        </Box>
                        <Box backgroundColor="white" border="2px solid white" boxShadow="2xl" w="370px" p={55}>
                            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-2.svg" />
                            <Heading fontSize="23px" align="center" mt="-10px" w="85%">The most flexible reporting engine</Heading>
                            <Text color='gray' lineHeight="28px" w="77%" m="auto">Project budgeting, clint billing, payroll, productivity analytics and much more.Tracking time has got you covered</Text>
                        </Box>
                        <Box backgroundColor="white" border="2px solid white" boxShadow="2xl" w="370px" p={5} pb="60px">
                            <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/article-3.svg" />
                            <Heading fontSize="23px" align="center" mt="-10px" w="95%">Monitor your team's workload, in realtime </Heading>
                            <Text color='gray' lineHeight="28px" w="75%" m="auto">See every works in progress and measure the productivity of the team by monitoring them in real life.</Text>
                        </Box>

                    </HStack>
                </Box>
                <Box w="85%" m="auto" mt="120px" >
                    <Image src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/grupo.svg" w="231px" h="141px" />
                </Box>
                <HStack w="85%" m="auto">
                    <Box w="49%" p={5} pl={10} mr="40px">
                        <Heading color="#242954" fontSize='30px'>Add time tracking to your favourite business apps</Heading>
                        <Text color="gray" p={2} lineHeight={2}>No matter where your employees work, TrackingTime works with them. Install the TrackingTime Button for chrome and Firefox and track time right within the productivity apps your employees use everyday.</Text>
                        <Button size='md'
                            height='35px'
                            width='140px'
                            rounded
                            colorScheme='#242954'>SEE ALL</Button>
                    </Box>
                    <Box w="33%" p={5} pl={10} pt={75}>
                        <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/asana.png' h="64px" w="70px" />
                        <Heading fontSize="23px">Asana</Heading>
                        <Text color="gray" p={2} lineHeight={1.5}>Asana pust tasks and conversations together to enable teamwork without email.</Text>
                    </Box>
                    <Box w="33%" p={5} pl={10} pt={55}>
                        <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/trello.png' h="70px" w="70px" />
                        <Heading fontSize="23px">Trello</Heading>
                        <Text color="gray" p={2} lineHeight={1.5}>Trello is a collaboration tool that organize your projects into boards.</Text>
                    </Box>
                    <Box w="33%" p={5} pl={10} pt={15}>
                        <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/todoist.png' h="70px" w="70px" />
                        <Heading fontSize="23px">Todoist</Heading>
                        <Text color="gray" p={2} lineHeight={1.5}>Todoist is a task manager that useful fast and easy to use.</Text>
                    </Box>
                    <Box w="33%" p={5} pl={10} pt={55}>
                        <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/smartsheet.png' h="70px" w="70px" />
                        <Heading fontSize="23px">Smartsheet</Heading>
                        <Text color="gray" p={2} lineHeight={1.5}>Smartsheet is web based project and task management and work collaboration software</Text>
                    </Box>

                </HStack>
                <Box w="100%" m="auto" backgroundColor="white" h="350px" pb={80} mt="-50px">
                    <Flex pt={20} w="85%" m="auto" gap={50}>
                        <Box>
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-1.svg' w="233px" h="150px" />
                            <Heading color="#242954" align="center" fontSize="23px">Timecards Approval</Heading>
                            <Text color="gray" align="center">Track clock in and out time with no effort</Text>
                        </Box>
                        <Box>
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-2.svg' w="233px" h="150px" />
                            <Heading color="#242954" align="center" fontSize="23px">Budgetting</Heading>
                            <Text color="gray" align="center">Keep your projects on time and budget.</Text>
                        </Box>
                        <Box>
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-3.svg' w="233px" h="150px" />
                            <Heading color="#242954" align="center" fontSize="23px">Work Schedules</Heading>
                            <Text color="gray" align="center" wordSpacing>Specify employees are expected to be their at job.</Text>
                        </Box>
                        <Box>
                            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/keywords/slider-4.svg' w="233px" h="150px" />
                            <Heading color="#242954" align="center" fontSize="23px">Timesheets Audits</Heading>
                            <Text color="gray" align="center">Avoid data inconsistancies with just one click</Text>
                        </Box>
                    </Flex>
                </Box>


                <Flex mt={20} gap={100}>
                    <Box>
                        <Image src='capture.png' />
                    </Box>
                    <Box w="35%" p={5}>
                        <Heading fontSize={33} color="#242954">Get Professional timesheets done in no time!</Heading>
                        <Text color="gray" lineHeight={2}>Sign up Today and join thousands of people around the world using TrackingTime to simplify their timesheets</Text>
                        <HStack>
                            <Input outline='none'
                                placeholder='Your Work Email' p="10px" width='220px' />
                            <Text alignItems="center" backgroundColor="#ED565A" h={38} width='200px' color='white'>START FOR FREE!</Text>
                        </HStack>
                    </Box>
                </Flex>
            </Container>

            {/* footer */}
            <Footer />
        </>

    )
}

export default HomePage
