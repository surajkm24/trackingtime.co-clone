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

const ToolsNavbar = () => {
    const activeStyle = {
        color: "#6683FF",
        fontWeight: "bold",
        fontSize: "14px"
    }
    const defaultStyle = {
        color: "white",
        TextDecoration: "none",
        fontWeight: "bold",
        fontSize: "14px"
    }
    return (
        <Box backgroundColor={"#2A313C"} w="100%">
            <Box border={"1px solid"} p={2}>
                <Flex justifyContent={"space-between"}>
                    <HStack spacing={6}>
                        <Image src="data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!-- Generator: Adobe Illustrator 25.4.1, SVG Export Plug-In . SVG Version: 6.00 Build 0) --%3E%3Csvg version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 509.6 69.4' style='enable-background:new 0 0 509.6 69.4;' xml:space='preserve'%3E%3Cstyle type='text/css'%3E .st0%7Bfill:%23FFFFFF;%7D .st1%7Bfill:url(%23SVGID_1_);%7D .st2%7Bfill:url(%23SVGID_00000175286116837597384730000016078311117507761072_);%7D .st3%7Bfill:url(%23SVGID_00000088815361729210582260000010435904613138206137_);%7D .st4%7Bfill:url(%23SVGID_00000049937652208894362600000011521448219297500588_);%7D%0A%3C/style%3E%3Cg%3E%3Cg%3E%3Cpath class='st0' d='M40.9,9.6c-0.4,0.4-0.9,0.6-1.6,0.6h-13v42.4c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-7 c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-0.9-0.6-1.6V10.1h-13c-0.7,0-1.2-0.2-1.6-0.6C0.2,9.2,0,8.7,0,8V2.5C0,1.9,0.2,1.3,0.6,1 s0.9-0.6,1.6-0.6h37.2c0.7,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.6V8C41.5,8.7,41.3,9.2,40.9,9.6'/%3E%3Cpath class='st0' d='M329.3,9.6c-0.4,0.4-0.9,0.6-1.6,0.6h-10.3v42.4c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-7 c-0.7,0-1.2-0.2-1.6-0.6s-0.6-0.9-0.6-1.6V10.1h-13c-0.7,0-1.2-0.2-1.6-0.6S291,8.7,291,8V2.5c0-0.7,0.2-1.2,0.6-1.6 s0.9-0.6,1.6-0.6h34.6c0.7,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.6V8C329.9,8.7,329.7,9.2,329.3,9.6'/%3E%3Cpath class='st0' d='M62.6,15.5c0.4,0.4,0.6,0.9,0.6,1.6v6c0,1.3-0.7,2-2.1,2.1c-1.5,0.1-3,0.5-4.5,1.1c-1.5,0.6-2.9,1.6-4.1,3 c-1.7,1.9-2.6,4.6-2.6,8.1v15.1c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.3c-0.7,0-1.2-0.2-1.6-0.6s-0.6-0.9-0.6-1.6V17.7 c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6h6.3c0.7,0,1.2,0.2,1.6,0.6c0.4,0.4,0.6,0.9,0.6,1.6v3c1.4-1.8,3-3.2,5-4.1 c2-0.9,4-1.5,6.2-1.7C61.7,14.9,62.2,15.1,62.6,15.5'/%3E%3Cpath class='st0' d='M119.2,52.9c-3.2-1.8-5.8-4.3-7.8-7.4c-1.9-3.2-2.9-6.6-2.9-10.2s0.9-7,2.8-10.2c1.9-3.1,4.5-5.6,7.8-7.5 c3.2-1.8,6.8-2.7,10.6-2.7c3.7,0,7.1,0.8,10.2,2.4s5.7,3.9,7.7,7c0.3,0.4,0.4,0.8,0.4,1.1c0,0.8-0.5,1.3-1.4,1.7l-5.6,2.2 c-0.3,0.1-0.7,0.2-1,0.2c-0.7,0-1.3-0.4-1.9-1.1c-2.2-2.8-5.1-4.2-8.5-4.2c-3.1,0-5.6,1-7.6,3.1c-2,2.1-3,4.7-3,7.9 c0,2.1,0.5,4,1.4,5.7c0.9,1.7,2.2,3,3.8,3.9c1.6,1,3.5,1.4,5.5,1.4c3.6,0,6.5-1.4,8.7-4.1c0.6-0.7,1.2-1.1,1.9-1.1 c0.3,0,0.7,0.1,1,0.2l5.1,2c0.9,0.4,1.4,1,1.4,1.7c0,0.3-0.1,0.7-0.4,1.1c-3.8,6.4-9.8,9.6-17.8,9.6 C126,55.7,122.4,54.8,119.2,52.9'/%3E%3Cpath class='st0' d='M152.1,0.6c0.4-0.4,0.9-0.6,1.6-0.6h6.4c0.7,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.6v30.1L174.5,17 c0.6-0.8,1.5-1.2,2.6-1.2h8c0.6,0,1.1,0.1,1.4,0.4s0.5,0.5,0.5,0.9c0,0.4-0.2,0.8-0.6,1.4L172.8,34L187,52c0.4,0.5,0.6,1,0.6,1.3 c0,0.4-0.2,0.7-0.5,0.9c-0.3,0.2-0.8,0.4-1.4,0.4h-7.9c-1.1,0-2-0.4-2.6-1.3L166,41.9l-3.8,4.4v6.2c0,0.7-0.2,1.2-0.6,1.6 s-0.9,0.6-1.6,0.6h-6.4c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-0.9-0.6-1.6V2.1C151.5,1.5,151.7,0.9,152.1,0.6'/%3E%3Cpath class='st0' d='M191.7,54.1c-0.4-0.4-0.6-0.9-0.6-1.6V17.8c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6h6.4 c0.7,0,1.2,0.2,1.6,0.6c0.4,0.4,0.6,0.9,0.6,1.6v34.7c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.4 C192.6,54.7,192.1,54.5,191.7,54.1'/%3E%3Cpath class='st0' d='M191.7,9.5c-0.4-0.4-0.6-0.9-0.6-1.6l0.2-5.4c0-0.7,0.2-1.2,0.6-1.6s0.9-0.6,1.6-0.6h6.4 c0.7,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.6L201.8,8c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.4C192.6,10.1,192.1,9.9,191.7,9.5'/%3E%3Cpath class='st0' d='M333.8,9.5c-0.4-0.4-0.6-0.9-0.6-1.6l0.2-5.4c0-0.7,0.2-1.2,0.6-1.6s0.9-0.6,1.6-0.6h6.4 c0.7,0,1.2,0.2,1.6,0.6s0.6,0.9,0.6,1.6L343.9,8c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.4C334.7,10.1,334.1,9.9,333.8,9.5'/%3E%3Cpath class='st0' d='M241,19.1c2.5,2.8,3.7,7,3.7,12.5v21c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6H236c-0.7,0-1.2-0.2-1.6-0.6 s-0.6-0.9-0.6-1.6v-21c0-5.3-2.5-7.9-7.5-7.9c-2.2,0-4,0.8-5.4,2.5c-1.4,1.7-2.1,4.3-2,7.8v18.5c0,0.7-0.2,1.2-0.6,1.6 s-0.9,0.6-1.6,0.6h-6.3c-0.7,0-1.2-0.2-1.6-0.6s-0.6-0.9-0.6-1.6V17.7c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6h6.3 c0.7,0,1.2,0.2,1.6,0.6c0.4,0.4,0.6,0.9,0.6,1.6v1.4c1.3-1.3,2.9-2.3,4.8-3c1.9-0.8,3.8-1.1,5.6-1.1 C234.6,14.9,238.5,16.3,241,19.1'/%3E%3Cpath class='st0' d='M334,53.6c-0.4-0.4-0.6-0.9-0.6-1.6V17.3c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6h6.4 c0.7,0,1.2,0.2,1.6,0.6c0.4,0.4,0.6,0.9,0.6,1.6v34.7c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.4C334.9,54.2,334.3,54,334,53.6' /%3E%3Cpath class='st0' d='M410.7,18.7c2.7,2.9,4.1,7,4.1,12.4v21c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.5c-0.7,0-1.2-0.2-1.6-0.6 S404,52.7,404,52v-21c0-2.7-0.7-4.7-2-6c-1.4-1.3-3.2-1.9-5.6-1.9c-2.1,0-3.8,0.8-5.3,2.3s-2.1,3.9-2.2,6.9V52 c0,0.7-0.2,1.2-0.6,1.6s-0.9,0.6-1.6,0.6h-6.5c-0.7,0-1.2-0.2-1.6-0.6c-0.4-0.4-0.6-0.9-0.6-1.6v-21c0-2.7-0.7-4.7-2-6 c-1.3-1.3-3.2-1.9-5.5-1.9c-2.2,0-4,0.8-5.4,2.5c-1.4,1.6-2.1,4.2-2.1,7.8L363.1,52c0,1.4-0.7,2.1-2.1,2.1h-6.3 c-0.7,0-1.2-0.2-1.6-0.6s-0.6-0.9-0.6-1.6V17.2c0-0.7,0.2-1.2,0.6-1.6c0.4-0.4,0.9-0.6,1.6-0.6h6.3c0.7,0,1.2,0.2,1.6,0.6 c0.4,0.4,0.6,0.9,0.6,1.6v1.4c1.4-1.2,3-2.2,5-3.1c1.9-0.8,3.7-1.2,5.3-1.2c5.5,0,9.7,1.8,12.6,5.3c1.5-1.7,3.3-3,5.5-3.9 s4.5-1.4,7.1-1.4C403.9,14.4,408,15.9,410.7,18.7'/%3E%3Cpath class='st0' d='M103.4,15.5h-6.7c-0.9,0-1.6,0.7-1.6,1.6v1c-3.1-2-6.9-3.2-10.9-3.2C73.1,15,64.1,24,64.1,35 c0,11.1,9,20.1,20.1,20.1c4,0,7.8-1.2,10.9-3.2V53c0,0.9,0.7,1.6,1.6,1.6h6.7c0.9,0,1.6-0.7,1.6-1.6V17.2 C105,16.3,104.3,15.5,103.4,15.5 M85,45.7c-5.9,0-10.6-4.8-10.6-10.6S79.2,24.4,85,24.4S95.7,29.2,95.7,35 C95.7,40.9,90.9,45.7,85,45.7'/%3E%3Cpath class='st0' d='M290.8,16.2c-0.4-0.4-0.9-0.6-1.6-0.6H283c-0.7,0-1.2,0.2-1.6,0.6c-0.4,0.4-0.6,0.9-0.6,1.6v0.6 c-2.8-2.3-6.4-3.5-10.9-3.5c-4.2,0-7.8,0.9-10.9,2.6c-3.1,1.8-5.5,4.1-7.2,7c-1.1,2-1.9,4.2-2.2,6.6c-0.2,1.2-0.4,2.5-0.4,3.9 c0,11.1,9,20.1,20.1,20.1c4.3,0,8.3-1.3,11.5-3.6c-0.1,5.9-3.4,8.8-10,8.8c-2,0-3.9-0.3-5.8-0.8c-1.9-0.5-3.6-1.3-5.1-2.3 c-0.5-0.3-0.9-0.4-1.4-0.4c-0.6,0-1.2,0.3-1.6,1l-2.8,4c-0.3,0.5-0.5,0.9-0.5,1.3c0,0.6,0.3,1.1,1,1.6c4.7,3.1,10.3,4.7,17,4.7 c6.2,0,11-1.6,14.5-4.8s5.2-7.7,5.2-13.3V17.7C291.3,17.1,291.1,16.6,290.8,16.2 M270.2,45.7c-5.9,0-10.6-4.8-10.6-10.6 s4.8-10.6,10.6-10.6s10.6,4.8,10.6,10.6C280.8,41,276.1,45.7,270.2,45.7'/%3E%3Cpath class='st0' d='M430,53.1c-8.5-3.9-11.1-13.2-11.1-18c0-4,0.9-7.5,2.8-10.5s4.4-5.4,7.6-7c3.2-1.6,6.4-2.7,10.4-2.5 c4,0.2,5.7,0.8,8.8,2.3c3,1.5,5.5,3.7,7.4,6.6c1.3,1.9,2.1,3.7,2.5,5.5c0.4,1.8,0.6,3.8,0.6,6.2c0,1-0.3,1.8-0.8,2.5 c-0.5,0.7-1.2,1-2.2,1h-26c0.5,2.4,5,8.5,13.9,6c1.4-0.4,2.6-1.5,3.6-2.5c0.6-0.5,1.1-1.2,1.7-1.2c0.4,0,0.9,0.1,1.3,0.4l4.4,2.4 c0.8,0.4,1.1,0.9,1.1,1.5c0,0.4-0.2,0.8-0.6,1.3c-4.3,4.8-8.9,8.2-15.8,8.2C436.3,55.1,433.1,54.4,430,53.1 M429.9,31.5h19.4 c-0.5-1.3-1.2-2.4-2-3.5c-0.8-1.1-3.9-3.6-7.5-3.6C433.2,24.4,430.1,29.5,429.9,31.5z'/%3E%3C/g%3E%3Cg%3E%3Cg%3E%3ClinearGradient id='SVGID_1_' gradientUnits='userSpaceOnUse' x1='466.8696' y1='27.8387' x2='494.8314' y2='49.1009' gradientTransform='matrix(1 0 0 -1 0 72)'%3E%3Cstop offset='0' style='stop-color:%23FF1744'/%3E%3Cstop offset='1' style='stop-color:%23FF9E80'/%3E%3C/linearGradient%3E%3Cpath class='st1' d='M480.1,55.5c2.9-0.7,5-3.3,5.1-6.4c0.4-8.2-1.3-23.9,8.7-27.4l-11.9-6.6c-4.8-2.1-10.1,1.4-10.1,6.7v26.5 C471.9,52.8,475.9,56.1,480.1,55.5z'/%3E%3ClinearGradient id='SVGID_00000060011490956578918740000004429238260086254745_' gradientUnits='userSpaceOnUse' x1='487.3523' y1='27.2806' x2='507.3837' y2='42.5125' gradientTransform='matrix(1 0 0 -1 0 72)'%3E%3Cstop offset='0' style='stop-color:%23FF1744'/%3E%3Cstop offset='1' style='stop-color:%23FF9E80'/%3E%3C/linearGradient%3E%3Cpath style='fill:url(%23SVGID_00000060011490956578918740000004429238260086254745_);' d='M505.1,27.9l-5.1-2.9h0 c-9.1,3.1-8.6,16-8.8,24.7l14-8.1c2.7-1.2,4.4-3.9,4.4-6.8l0,0C509.6,31.8,507.9,29.5,505.1,27.9z'/%3E%3C/g%3E%3ClinearGradient id='SVGID_00000142151104558761531160000010399320689234004920_' gradientUnits='userSpaceOnUse' x1='492.98' y1='43.215' x2='506.1248' y2='43.215' gradientTransform='matrix(1 0 0 -1 0 72)'%3E%3Cstop offset='0' style='stop-color:%23FF1744'/%3E%3Cstop offset='1' style='stop-color:%23FF9E80'/%3E%3C/linearGradient%3E%3Cpath style='fill:url(%23SVGID_00000142151104558761531160000010399320689234004920_);' d='M500,25c-5.6,2-7,7.5-7,7.5 c1.5-3,4.7-5.4,8.2-5.4l0,0c1.8,0,3.5,0.5,4.9,1.5C506.1,28.6,506.7,28.7,500,25z'/%3E%3ClinearGradient id='SVGID_00000129181569086620338880000001559474986270418865_' gradientUnits='userSpaceOnUse' x1='475.46' y1='20.0465' x2='485.25' y2='20.0465' gradientTransform='matrix(1 0 0 -1 0 72)'%3E%3Cstop offset='0' style='stop-color:%23FF1744'/%3E%3Cstop offset='1' style='stop-color:%23FF9E80'/%3E%3C/linearGradient%3E%3Cpath style='fill:url(%23SVGID_00000129181569086620338880000001559474986270418865_);' d='M476.6,54.7L476.6,54.7 c-0.4,0-0.8,0-1.2-0.1c1.4,0.8,3,1.2,4.6,1c2.9-0.7,5-3.3,5.1-6.4c0-0.3,0-0.6,0-0.9C484.1,52,480.7,54.7,476.6,54.7z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A" w="140px" h="25px" />
                        <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/hours'>Hours</NavLink>
                        <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/project'>Projects</NavLink>
                        <Popover trigger='hover'>
                            <PopoverTrigger>
                                <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/reports'>Reports</NavLink>
                            </PopoverTrigger>

                            <PopoverContent color='white' bg='#2A313C' borderColor='#2A313C' w="200px" mt={2} h="285px">
                                <PopoverBody fontSize="14px" fontWeight="bold" lineHeight={7}>
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme="transparent" as={BiTimeFive} mt={1.5} />
                                        <Text>Timesheets</Text>
                                    </Flex>
                                    <Divider pb={2} />
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={RiTimeFill} mt={1.5} />
                                        <Text>Dashboard</Text>
                                    </Flex>
                                    <Flex pb={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={CgFileDocument} mt={1.5} />
                                        <Text>Project reports</Text>
                                    </Flex>
                                    <Flex pb={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={AiOutlineUser} mt={1.5} />
                                        <Text>User reports</Text>
                                    </Flex>
                                    <Divider pb={2} />
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={TbGridDots} mt={1.5} />
                                        <Text>Pace</Text>
                                    </Flex>
                                    <Divider pb={2} />
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={HiOutlineDocumentReport} mt={1.5} />
                                        <Text>Shared reports</Text>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>

                        </Popover>
                        <Popover trigger='hover'>
                            <PopoverTrigger>
                                <NavLink style={({ isActive }) => (isActive ? activeStyle : defaultStyle)} to='/manage'>Manage</NavLink>
                            </PopoverTrigger>

                            <PopoverContent color='white' bg='#2A313C' borderColor='#2A313C' w="200px" mt={2} h="270px">
                                <PopoverBody fontSize="14px" fontWeight="bold" lineHeight={7}>
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme="transparent" as={AiOutlineTeam} mt={1.5} />
                                        <Text>Team</Text>
                                    </Flex>
                                    <Flex pb={2}>
                                        <IconButton boxSize={4}
                                            colorScheme="transparent" as={BiTimeFive} mt={1.5} />
                                        <Text>Work shedules</Text>
                                    </Flex>
                                    <Divider pb={2} />
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={RiHandbagFill} mt={1.5} />
                                        <Text>Clients</Text>
                                    </Flex>
                                    <Flex pb={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={BsInboxes} mt={1.5} />
                                        <Text>Custom fields</Text>
                                    </Flex>
                                    <Divider pb={2} />
                                    <Flex pb={2} pt={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={BsShieldCheck} mt={1.5} />
                                        <Text>Tracking policies</Text>
                                    </Flex>
                                    <Flex pb={2}>
                                        <IconButton boxSize={4}
                                            colorScheme='transparent' as={FiToggleRight} mt={1.5} />
                                        <Text>Add-ons</Text>
                                    </Flex>
                                </PopoverBody>
                            </PopoverContent>
                        </Popover>
                        <Circle border="0.5px solid silver" p={1} mt={2}>
                            <SearchIcon boxSize={3} color="white" />
                        </Circle>
                    </HStack>
                    <HStack mr={3} spacing={3}>
                        <Icon boxSize={7} color="white" as={GoPlay} />
                        <Circle border="0.5px solid silver" p={1} mt={2}>
                            <AddIcon boxSize={2} color="white" />
                        </Circle>

                        <Button bgGradient='linear(to-l,#FF8D77,#FF183D)' size='xs' p={3} color="white" _hover={{ bgGradient: 'linear(to-l,#FF8D77,#FF183D)' }}>
                            GET PRO
                        </Button>
                        <Popover>
                            <PopoverTrigger>
                                <Avatar bg='red.500' icon={<AiOutlineUser color='white' fontSize={28} />} w="30px" h="30px" />
                            </PopoverTrigger>
                            <Portal>
                                <PopoverContent color='white' bg='#2A313C' borderColor='#2A313C' w="170px" mt={1} h="290px">
                                    <PopoverBody fontSize="14px" fontWeight="bold" lineHeight={7}>
                                        <Text>Setting</Text>
                                        <Text>Apps</Text>
                                        <Divider pb={2} />
                                        <Text pt={2}>Need Help?</Text>
                                        <Text>Feedback</Text>
                                        <Divider pb={2} />
                                        <Text>Appeareance</Text>
                                        <Select size='xs' w="50%" bg="transparent">
                                            <option>Auto</option>
                                            <option>Dark</option>
                                            <option>Light</option>
                                        </Select>
                                        <Divider pb={3} />
                                        <Text pt={2}>What's New</Text>
                                        <Flex>
                                            <Text>Logout</Text>
                                            <IconButton boxSize={4}
                                                colorScheme='transparent' as={FiLogOut} mt={2} ml={"65px"} />
                                        </Flex>
                                    </PopoverBody>


                                </PopoverContent>
                            </Portal>
                        </Popover>
                    </HStack>
                </Flex>
            </Box>
        </Box>
    )
}

export default ToolsNavbar
