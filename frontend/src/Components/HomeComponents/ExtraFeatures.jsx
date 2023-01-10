import { Box, Heading, Image, Text } from "@chakra-ui/react"
import { extraFeaturesData } from "../../data/home.data"

export const ExtraFeatures = () => {
    return (
        <Box w="100%" m="auto" backgroundColor="white" boxShadow={'md'} mt="50px"
            overflow={'hidden'}>
            <Box display={{ base: "block", md: "flex" }} w="90%" m="auto"
                justifyContent='space-between'>
                {extraFeaturesData.map((item) => (
                    <Box w={{ base: 'fit-content', md: '23%' }} m='auto'
                        mt={{ base: "40px", md: '70px' }} key={item.title + Date.now()}
                        mb={{ base: "40px", md: '70px' }} >
                        <Image src={item.img} w="233px" h="150px" />
                        <Heading color="#242954" align="center" fontSize="21px">
                            {item.title}</Heading>
                        <Text color="gray" align="center" fontSize='14px' mt='10px'>
                            {item.subtitle}</Text>
                    </Box>
                ))}
            </Box>
        </Box>
    )
}