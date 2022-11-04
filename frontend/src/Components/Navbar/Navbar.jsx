import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useDisclosure,
} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
} from '@chakra-ui/icons';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { NavLink, Outlet } from 'react-router-dom';
import './Navbar.css';
import { useNavigate } from "react-router-dom"
import Login from '../../Pages/LoginSignup/Login/Login';

export function Navbar() {
    const { isOpen, onToggle } = useDisclosure();
    const navigate = useNavigate()
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

const DesktopNav = () => {
    const popoverContentBgColor = useColorModeValue('white', 'gray.800');

    return (
        <Stack direction={'row'} spacing={4}>
            {NAV_ITEMS.map((navItem) => (
                <Box key={navItem.label}>
                    <Popover trigger={'hover'} placement={'bottom-start'} >
                        <PopoverTrigger>
                            <Link
                                p={2}
                                as={NavLink}
                                to={navItem.href ?? '#'}
                                fontSize={'12.3px'}
                                fontWeight={650}
                                letterSpacing="1px"
                                color={'#0a192f'}
                                _hover={{
                                    textDecoration: 'none',
                                    opacity: '0.7'
                                }}>
                                {navItem.label}{!navItem.children ? "" : <ChevronDownIcon fontSize={"20px"} />}
                            </Link>
                        </PopoverTrigger>

                        {navItem.children && (
                            <PopoverContent
                                border={0}
                                boxShadow={'xl'}
                                bg={popoverContentBgColor}
                                px={4}
                                py={6}
                                rounded={'md'}
                                minW={'fit-content'}
                            >
                                <Stack gap="16px" className='popFea'
                                >
                                    {navItem.children.map((child) => (
                                        <DesktopSubNav key={child.label} {...child} />
                                    ))}
                                </Stack>
                            </PopoverContent>
                        )}
                    </Popover>
                </Box>
            ))}
        </Stack>
    );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
    return (
        <Link
            href={href}
            role={'group'}
            display={'block'}
            p={2}
            rounded={'md'}
            _hover={{ bg: useColorModeValue('pink.50', 'gray.900') }}>
            <Stack direction={'row'} align={'center'}>
                <Box>
                    <Text
                        transition={'all .3s ease'}
                        _groupHover={{ color: 'purple.400' }}
                        fontWeight={900}
                        fontSize="14px"
                    >
                        {label}
                    </Text>
                    <Text fontSize={'sm'}>{subLabel}</Text>
                </Box>
                <Flex
                    transition={'all .3s ease'}
                    transform={'translateX(-10px)'}
                    opacity={0}
                    _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
                    justify={'flex-end'}
                    align={'center'}
                    flex={1}>
                    <Icon color={'purple.500'} w={5} h={5} as={ChevronRightIcon} />
                </Flex>
            </Stack>
        </Link>
    );
};

const MobileNav = () => {
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

const MobileNavItem = ({ label, children, href }) => {

    return (
        <Stack spacing={4} zIndex={3}>
            <Flex
                as={NavLink}
                mb='20px'
                to={href ?? '#'}
                justify={'space-between'}
                align={'center'}
                _hover={{
                    textDecoration: 'none',
                }}>
                <Text
                    fontWeight={800}
                    fontSize="12px"
                    letterSpacing={'1.5px'}
                    color={useColorModeValue('gray.600', 'gray.200')}>
                    {label}
                </Text>
            </Flex>

            {children && <Collapse in={true} animateOpacity style={{ marginTop: '0!important', zIndex: '3' }}>
                <Stack
                    mt={'-15px'}
                    pl={4}
                    align={'start'}>
                    {children &&
                        children.map((child) => (
                            <Link key={child.label} py={2} href={child.href} fontWeight={600} fontSize='15px' _hover={{ textDecoration: "none" }}>
                                {child.label}
                            </Link>
                        ))}
                </Stack>
            </Collapse>}
        </Stack>
    );
};

const NAV_ITEMS = [
    {
        label: 'INTEGRATIONS',
        href: "/integrations"
    },
    {
        label: 'BLOG',
        href: "/blog"
    },
    {
        label: 'FEATURES',
        children: [
            {
                label: "Time Tracker",
                href: "#"
            },
            {
                label: "Project Management",
                href: "#"
            },
            {
                label: "Online Timesheet",
                href: "#"
            },
            {
                label: "Time cards",
                href: "#"
            },
            {
                label: "Attendance tracking",
                href: "#"
            },
            {
                label: "Time reporting",
                href: "#"
            }
        ]
    }
];