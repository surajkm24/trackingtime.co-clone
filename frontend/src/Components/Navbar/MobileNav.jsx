import { NAV_ITEMS } from "../../data/navbar.data.js";
import { MobileNavItem } from "./MobileNavItems.jsx";
import { Text, Button, Stack } from '@chakra-ui/react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

export const MobileNav = () => {
    return (
        <Stack
            bg={'#F6F8F9'}
            p={4}
            style={{ height: '90vh' }}
            display={{ lg: 'none' }}
            overflowY='scroll'
            boxSizing='border-box'
            pb={'25px'}
            id='mbNav'
            zIndex={3}
        >
            {NAV_ITEMS.map((navItem) => (
                <MobileNavItem key={navItem.label} {...navItem} />
            ))}
            <Stack
                display={'flex'}
                direction={'column'}
                spacing={6}
                zIndex={3}
            >
                <Button
                    as={NavLink}
                    to='/signup'
                    fontSize={'12px'}
                    border="2px solid #ed565a"
                    bg={'#f6f8f9'}
                    color="#ed565a"
                    _hover={{
                        bg: '#ed565a',
                        color: "#f6f8f9"
                    }}
                    href={'#'}
                    height="35px"
                    width="140px"
                    fontWeight={700}
                >
                    TRY IT FREE
                </Button>
                <Button
                    fontSize={'12px'}
                    fontWeight={700}
                    as={NavLink}
                    to='/login'
                    color={'white'}
                    bg={'#ED565A'}
                    href={'#'}
                    border="2px solid #ed565a"
                    _hover={{
                        bg: '#F6F8F9',
                        color: "#ED565A"
                    }}
                    height="35px"
                    width="140px"
                >
                    LOGIN
                </Button>
            </Stack>
            <Stack zIndex={3} py='20px' display='flex' flexDirection={'row'} alignItems="center" width='140px' justifyContent={'space-between'}>
                <BsTwitter fontSize={'20px'} cursor='pointer' />
                <BsLinkedin fontSize={'20px'} cursor='pointer' />
                <GrFacebookOption fontSize={'20px'} cursor='pointer' />
            </Stack>
            <Text zIndex={3} align={'left'} fontWeight={"900"} fontSize='13px' letterSpacing='1px' color='#ed565a' textDecor={'underline'}><a href='mailto:support@trackingtime.co'>support@trackingtime.co</a></Text>
            <Text zIndex={3} align={'left'} fontWeight={"900"} fontSize='13px' letterSpacing='1px' color='#0a192f'>© 2022 TrackingTime, LLC</Text>
        </Stack>
    );
};