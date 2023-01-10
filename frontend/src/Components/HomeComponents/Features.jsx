import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { featuresData } from "../../data/home.data.js"

export const Features = () => {
    return (
        <Box width="90%" m="auto" mt={{ base: "30px", sm: "60px", md: "120px" }}
            overflow='hidden' >
            <Heading fontSize='18px' fontWeight={800} letterSpacing='2px' mb={{
                base: "19px",
                sm: "26px", md: "45px", lg: "65px"
            }} align="center" style={{ wordSpacing: "5px" }}>
                THE FEATURES YOUR PROJECT MANAGEMENT APP IS MISSING.</Heading>
            <Box display={{ base: 'grid', lg: 'flex' }} justifyContent='center' gap={6}
                alignItems={'center'} >
                {featuresData.map((feature) => (
                    <Box display={{ base: 'block', sm: 'flex', lg: 'block' }}
                        justifyContent='space-evenly' alignItems='center'
                        backgroundColor="white"
                        m={'auto'} border="4px solid white" boxShadow="lg"
                        w={{ base: '90%', sm: '100%', lg: '30%' }}
                        h={{ base: 'fit-content', sm: 'fit-content', lg: "490px" }}
                        overflow='hidden' borderRadius='10px' mb='20px' key={feature.img}>
                        <Image src={feature.img}
                            w={{ base: "100%", sm: "37%", md: '50%', lg: "100%" }} />
                        <Box p='10px' borderRadius='10px'>
                            <Heading
                                fontSize={{ base: '20px', sm: '16px', md: "18px", lg: '22px' }}
                                align="center" mt="0px">{feature.heading}</Heading>
                            <Text
                                fontSize={{ base: '16px', sm: '13px', md: "14px", lg: '16px' }}
                                color='gray' align='justify' lineHeight="28px" w="90%" m="auto"
                                mt='10px'>{feature.desc}</Text>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}