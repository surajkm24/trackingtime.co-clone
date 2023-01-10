import { ChevronDownIcon } from "@chakra-ui/icons";
import { Box, Popover, PopoverContent, PopoverTrigger, Stack, useColorModeValue, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { NAV_ITEMS } from "../../data/navbar.data";
import { DesktopSubNav } from "./DesktopSubNav";

export const DesktopNav = () => {
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