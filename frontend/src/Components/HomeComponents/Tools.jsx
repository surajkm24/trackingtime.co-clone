import { Box, Heading, Image, Text, Button } from "@chakra-ui/react"
import { toolsData } from "../../data/home.data.js"

export const Tools = () => {
    return (
        <Box width="90%" display={{ base: 'block', lg: "flex" }} justifyContent='space-evenly'
            alignItems='center' overflow={'hidden'} m="auto"
            mt={{ base: "25px", sm: "40px", md: "100px" }}
            mb={{ base: "25px", sm: "40px", md: "100px" }} >
            <Box width={{ base: "100%", lg: "25%" }}>
                <Image m={{ base: "auto", lg: '0' }}
                    src="https://trackingtime.co/wp-content/themes/trackingtime-v5/img/temp/logos/grupo.svg" w="231px" h="141px" />
                <Box w="100%">
                    <Heading m={{ base: "auto", lg: "0" }} w='fit-content' color="#242954"
                        fontSize='30px' textAlign={{ base: "center", lg: "left" }}>
                        Add time tracking to your favourite business apps</Heading>
                    <Text color="gray" mt='10px' lineHeight={2}
                        textAlign={{ base: "center", lg: "left" }}>
                        No matter where your employees work, TrackingTime works with them.
                        Install the TrackingTime Button for chrome and Firefox and track time
                        right within the productivity apps your employees use everyday.
                    </Text>
                    <Box w='fit-content' m={{ base: 'auto', lg: '0' }} >
                        <Button
                            height='35px'
                            width='fit-content'
                            mt='15px'
                            rounded='lg'
                            border='2px solid #0a192f'
                            bg='white'
                            color='black'
                            p='6px 30px'
                            _hover={{ background: "#0a192f", color: "white" }}
                            mb={{ base: '25px', lg: "0" }}
                        >SEE ALL
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Box display={'flex'} flexWrap={'wrap'} gap={{ base: "20px 0px" }}
                width={{ base: "100%", lg: "70%" }} mb={2} justifyContent='space-evenly'>
                {toolsData.map((tool) => (
                    <Box w={{ base: "200px", lg: "23%" }} maxH={'300px'} p={2}
                        borderRadius='5px' key={tool.title}>
                        <Image src={tool.img} h="64px" w="70px" m='auto' />
                        <Heading fontSize="21px" color='#0a192f' mt='4px' align='center'>
                            {tool.title}</Heading>
                        <Text color="gray" p={2} lineHeight={1.5} align='justify'>
                            {tool.subtitle}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}