import { Box, Button, Heading, Image, Input, Text } from "@chakra-ui/react"

export const GetStarted = () => {
    return (
        <Box mt={20} display={{ base: "block", lg: "flex" }} alignItems='center' mb={15}>
            <Box w={{ base: "100%", lg: "50%" }} bgGradient={"url('https://trackingtime.co/wp-content/themes/trackingtime-v3/img/keywords/lineas.png')"} bgSize='100% 100%'>
                <Image w='70%' src='https://trackingtime.co/wp-content/themes/trackingtime-v5/img/home/bottom-action.svg' m='auto' />
            </Box>
            <Box w={{ base: "90%", lg: "40%" }} p={5} m='auto'>
                <Heading fontSize={{ base: "24px", md: "29px", lg: "33px" }}
                    lineHeight={'100%'} color="#242954"
                    textAlign={{ base: "center", lg: "left" }}>
                    Get Professional timesheets done in no time!
                </Heading>
                <Text mt='20px' color="gray" lineHeight={2}
                    textAlign={{ base: "center", lg: "left" }}
                    display={{ base: "none", lg: "block" }}>
                    Sign up Today and join thousands of people around the world using
                    TrackingTime to simplify their timesheets
                </Text>
                <Text mt='20px' color='#0a192f' fontSize='22px' fontWeight={700}
                    textAlign={{ base: "center", lg: "left" }}
                    display={{ base: "block", lg: "none" }}>
                    Try Tracking Time Pro
                </Text>
                <Box mt='20px' display={{ base: "block", lg: "flex" }} gap='10px' w='100%'
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
                        <Text textAlign='center' fontWeight={600} fontSize='12px' mt='10px'>
                            14-day-PRO trial included
                        </Text>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}