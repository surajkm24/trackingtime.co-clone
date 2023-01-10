import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react"

export const MobileFooterItem = ({ label, children }) => {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton borderBottom='2px solid #0a192f'>
                    <Box flex='1' textAlign='left' fontSize={'14px'} py='10px' fontWeight={700} color='#0a192f' >
                        {label}
                    </Box>
                    <AccordionIcon />
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4} textAlign='left' display='grid' gap='20px' fontSize='14px'>
                {
                    children.map((label) => (
                        <Text key={label + Date.now()}>{label}</Text>
                    ))
                }
            </AccordionPanel>
        </AccordionItem>
    )
}