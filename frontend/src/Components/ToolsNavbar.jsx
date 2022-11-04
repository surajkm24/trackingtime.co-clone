import { Avatar, Box, Button, Circle, Divider, Flex, HStack, Icon, IconButton, Image, Popover, PopoverBody, PopoverContent, PopoverTrigger, Portal, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AddIcon, SearchIcon } from '@chakra-ui/icons'
import { GoPlay } from "react-icons/go";
import { AiOutlineUser, AiOutlineTeam } from 'react-icons/ai'
import { FiLogOut, FiToggleRight } from 'react-icons/fi'
import { BiTimeFive } from 'react-icons/bi'
import { RiTimeFill, RiHandbagFill } from 'react-icons/ri'
import { CgFileDocument } from 'react-icons/cg'
import { TbGridDots } from 'react-icons/tb'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { BsInboxes, BsShieldCheck } from 'react-icons/bs'
import TimerNav from './Timer/TimerNav.jsx'
import { useDispatch } from 'react-redux';
import { logoutAPI } from '../Redux/Auth/auth.action.js';

const ToolsNavbar = ({ play, setPlay, updateDuration }) => {

    const dispatch = useDispatch()
    const activeStyle = {
        color: "#6683FF",
        fontWeight: "bold",
        fontSize: "13px",
    }
    const defaultStyle = {
        color: "rgba(0,0,0,0.9)",
        TextDecoration: "none",
        fontWeight: "bold",
        fontSize: "13px",
    }

    const logOut = () => {
        dispatch(logoutAPI())
    }

    return (
        <Box backgroundColor={"white"} w="100%" h='7vh' minHeight={'40px'} display='flex' alignItems='center' px='20px'>
            <Box display='flex' justifyContent='space-between' alignItems='center' w='100%' >
                <HStack >
                    <Box display={{ base: "none", lg: "block" }}>
                        <img alt='' src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' width="135px" mr='15px' />
                    </Box>
                    <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/hours'><Text px='10px' py='5px' borderRadius={'5px'} _hover={{ backgroundColor: "rgba(0,0,0,0.07)" }}>Hours</Text></NavLink>
                    <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/project'><Text px='10px' py='5px' borderRadius={'5px'} _hover={{ backgroundColor: "rgba(0,0,0,0.07)" }}>Projects</Text></NavLink>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/reports'><Text px='10px' py='5px' borderRadius={'5px'} _hover={{ backgroundColor: "rgba(0,0,0,0.07)" }}>Reports</Text></NavLink>
                        </PopoverTrigger>

                        <PopoverContent color='black' w="200px" mt={2} >
                            <PopoverBody fontSize="12px" bg='white' fontWeight="bold" lineHeight={7} px='0' py='10px' boxShadow={'lg'} cursor='pointer'>
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={BiTimeFive} mt={1.5} />
                                    <Text>Timesheets</Text>
                                </Flex>
                                <Divider pb={1} />
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={RiTimeFill} mt={1.5} />
                                    <Text>Dashboard</Text>
                                </Flex>
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={CgFileDocument} mt={1.5} />
                                    <Text>Project reports</Text>
                                </Flex>
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={AiOutlineUser} mt={1.5} />
                                    <Text>User reports</Text>
                                </Flex>
                                <Divider pb={1} />
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={TbGridDots} mt={1.5} />
                                    <Text>Pace</Text>
                                </Flex>
                                <Divider pb={1} />
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={HiOutlineDocumentReport} mt={1.5} />
                                    <Text>Shared reports</Text>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>

                    </Popover>
                    <Popover trigger='hover'>
                        <PopoverTrigger>
                            <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/manage'><Text px='10px' py='5px' borderRadius={'5px'} _hover={{ backgroundColor: "rgba(0,0,0,0.07)" }}>Manage</Text></NavLink>
                        </PopoverTrigger>

                        <PopoverContent color='black' w="200px" mt={2} >
                            <PopoverBody fontSize="12px" bg='white' fontWeight="bold" lineHeight={7} px='0' py='10px' boxShadow={'lg'} cursor='pointer'>
                                <Flex pb={1} pt={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={AiOutlineTeam} mt={1.5} />
                                    <Text>Team</Text>
                                </Flex>
                                <Flex pb={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={BiTimeFive} mt={1.5} />
                                    <Text>Work shedules</Text>
                                </Flex>
                                <Divider pb={1} />
                                <Flex pb={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={RiHandbagFill} mt={1.5} />
                                    <Text>Clients</Text>
                                </Flex>
                                <Flex pb={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={BsInboxes} mt={1.5} />
                                    <Text>Custom fields</Text>
                                </Flex>
                                <Divider pb={1} />
                                <Flex pb={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={BsShieldCheck} mt={1.5} />
                                    <Text>Tracking policies</Text>
                                </Flex>
                                <Flex pb={1} _hover={{ background: "rgba(0,0,0,0.07)" }}>
                                    <IconButton boxSize={4}
                                        bg='transparent' _hover='transparent' as={FiToggleRight} mt={1.5} />
                                    <Text>Add-ons</Text>
                                </Flex>
                            </PopoverBody>
                        </PopoverContent>
                    </Popover>
                    <Circle display={{base:"none",md:"flex"}} justifyContent='center' alignItems={'center'} border="0.5px solid rgba(0,0,0,0.09)" p={2} w='30px' h='30px' cursor='pointer'>
                        <SearchIcon fontSize='13px' color="black" />
                    </Circle>
                </HStack>
                <HStack mr={3} spacing={3}>
                    {/* <Icon boxSize={7} color="white" as={GoPlay} /> */}
                    <TimerNav play={play} setPlay={setPlay} updateDuration={updateDuration} />
                    <Circle border="0.5px solid silver" p={1} >
                        <AddIcon boxSize={2} color="black" />
                    </Circle>

                    <Button display={{ base: "none", lg: "block" }} bgGradient='linear(to-l,#FF8D77,#FF183D)' size='xs' p='5px 10px' color="white" _hover={{ bgGradient: 'linear(to-l,#FF8D77,#FF183D)' }}>
                        GET PRO
                    </Button>
                    <Popover>
                        <PopoverTrigger>
                            <Avatar bg='red.500' icon={<AiOutlineUser color='white' fontSize={28} />} w="30px" h="30px" />
                        </PopoverTrigger>
                        <Portal>
                            <PopoverContent color='black' bg='white' borderColor='rgba(0,0,0,0.09)' w='170px' mr='20px' cursor={"pointer"}>
                                <PopoverBody fontSize="12px" fontWeight={500} lineHeight={7} px='0' py='10px' pb='10px'>
                                    <Text py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }}>Setting</Text>
                                    <Text py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }}>Apps</Text>
                                    <Divider pb={1} />
                                    <Text py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }}>Need Help?</Text>
                                    <Text py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }}>Feedback</Text>
                                    <Divider pb={1} />
                                    <Text py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }}>Appeareance</Text>
                                    <Select size='xs' w="100%" px='10px' py='2px' bg="transparent">
                                        <option>Auto</option>
                                        <option>Dark</option>
                                        <option>Light</option>
                                    </Select>
                                    <Divider pb={1.5} />
                                    <Text py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }}>What's New</Text>
                                    <Flex onClick={logOut} py='3px' px='10px' _hover={{ background: "rgba(0,0,0,0.07)" }} justifyContent='space-between' alignItems={'center'}>
                                        <Text>Logout</Text>
                                        <IconButton boxSize={4}
                                            bg='transparent' _hover='transparent' as={FiLogOut} />
                                    </Flex>
                                </PopoverBody>


                            </PopoverContent>
                        </Portal>
                    </Popover>
                </HStack>
            </Box>
        </Box>
    )
}

export default ToolsNavbar
