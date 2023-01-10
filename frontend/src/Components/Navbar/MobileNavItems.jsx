import { Collapse, Flex, Stack, Text, useColorModeValue, Link } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

export const MobileNavItem = ({ label, children, href }) => {

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

            {children && <Collapse in={true} animateOpacity style={{ zIndex: '3' }}>
                <Stack
                    mt='-10px'
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