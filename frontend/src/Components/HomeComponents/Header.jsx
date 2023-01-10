import { Box, Button, Flex, Heading, Input, Link, Stack, Text, Image } from "@chakra-ui/react"

export const Header = () => {
    return (
        <>
            <Stack
                textAlign={'center'}
                align={'center'}
                spacing={{ base: 8, md: 10 }}
            >
                <Box maxW="90%" mb={{ base: '10px', md: '24px' }}>
                    <Text fontSize={{ base: '10px', md: "12px" }} fontWeight="bold" m={'auto'}
                        mb={{ base: '18px', md: '30px' }}
                        color={"#ED565A"} letterSpacing='2px' >
                        TRACKINGTIME TIME TRACKER SOFTWARE
                    </Text>
                    <Heading fontSize={{ base: '14px', md: "18px" }} fontWeight={800}
                        letterSpacing='3px' color="#242954" mb={{ base: '10px', md: '20px' }}>
                        SET AND FORGET TIME TRACKING
                    </Heading>
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
                <Box display={{ base: "block", md: "flex" }} gap='10px' w='90%' m='auto'
                    justifyContent='center' >
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
            <Image src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/layout/header/ilus-header-2.svg' w='80vw' mx='25px' objectFit='cover' />
        </>
    )
}