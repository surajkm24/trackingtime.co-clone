import { Box, Stack, Text, Image, Flex } from "@chakra-ui/react"
import { marqueeImgs } from "../../data/home.data"

export const Companies = () => {
    return (
        <Stack borderBottom="1px solid white" boxShadow="lg" backgroundColor="white" pt="15px" pb="20px" h="230px">
            <Box w={{ base: "90vw", sm: '85vw' }} m='auto' p={5} >
                <Text align='center' fontSize='16px' color="#0a192f" fontWeight={650} mb='18px'>Companies of all shapes and sizes use TrackingTime:</Text>
                <marquee width='100%' direction='left'>
                    <Flex>
                        {
                            marqueeImgs.map((src, i) => {
                                return <Image src={src} key={src + Date.now()}
                                    alt={src} w='230px' h='62px' />
                            })
                        }
                    </Flex>
                </marquee>
            </Box>
        </Stack>
    )
}