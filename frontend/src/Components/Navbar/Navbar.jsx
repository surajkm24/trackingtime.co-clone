import { Box, Flex, IconButton, Button, Stack, Collapse, useColorModeValue, useDisclosure } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import { DesktopNav } from './DesktopNav';
import { MobileNav } from './MobileNav';

export function Navbar() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box style={{ position: "sticky", top: "0px", width: "100%", zIndex: 2 }}>
            <Flex
                bg="#F6F8F9"
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={['20px', '20px', '20px', '65px', '100px']}
                align={'center'}
                justifyContent="space-between"
                width='100%'
                overflowX={'hidden'}
            >
                <Flex
                    order="1"
                    ml={{ base: -2 }}
                    display={{ base: 'flex', lg: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={'16.5px'} h={'16.5px'} fontWeight={900} color='black' /> : <HamburgerIcon w={'19.5px'} h={'19.5px'} color='black' fontWeight={900} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex justify={{ base: 'center', md: 'start' }}>
                    <NavLink to='/'>
                        <img alt='' src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/logo.svg' height="70px" width="180px" />
                    </NavLink>
                </Flex>
                <Flex display={{ base: 'none', lg: 'flex' }} ml={10} alignItems={"center"} gap="20px">
                    <DesktopNav />
                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={6}>
                        <Button
                            as={NavLink}
                            target="_blank"
                            rel='noreferrer'
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
                            display={{ base: 'none', md: 'inline-flex' }}
                            fontSize={'12px'}
                            fontWeight={700}
                            as={NavLink}
                            target="_blank"
                            rel='noreferrer'
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
                </Flex>
            </Flex>

            <Box display={isOpen ? "block" : "none"} style={{ zIndex: "10" }}>
                <Collapse in={isOpen} style={{ position: 'absolute', width: "100%", zIndex: "10" }} >
                    <MobileNav />
                </Collapse>
            </Box>
            <Outlet />
        </Box>
    );
}