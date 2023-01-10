import { Box, Text } from '@chakra-ui/react';
import { BsTwitter, BsLinkedin } from 'react-icons/bs';
import { GrFacebookOption } from 'react-icons/gr';
import { apps, company, features, helpAndSupport, industries, products } from '../../data/footer.data.js';
import './Footer.css';

export const DesktopFooter = () => {
    return (
        <Box id='deskFoot' display='flex' px={['20px', '20px', '20px', '65px', '100px']} py='45px'
            flexWrap='wrap' justifyItems={'flex-start'} gap='15px' justifyContent={'space-between'}>
            <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'}
                gap='10px' minW='17%' maxW='20%'>
                <Text fontWeight={700}>Industries</Text>
                {industries.map((label) => (
                    <Text key={label + Date.now()}>{label}</Text>
                ))}
            </Box>
            <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'}
                gap='10px' minW='17%' maxW='20%'>
                <Text fontWeight={700}>Products</Text>
                {products.map((label) => (
                    <Text key={label + Date.now()}>{label}</Text>
                ))}
            </Box>
            <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'}
                gap='10px' minW='17%' maxW='20%'>
                <Text fontWeight={700}>Features</Text>
                {features.map((label) => (
                    <Text key={label + Date.now()}>{label}</Text>
                ))}
            </Box>
            <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'}
                gap='10px' minW='17%' maxW='20%'>
                <Text fontWeight={700}>Apps</Text>
                {apps.map((label) => (
                    <Text key={label + Date.now()}>{label}</Text>
                ))}
            </Box>
            <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'}
                gap='10px' minW='17%' maxW='20%'>
                <Text fontWeight={700}>Company</Text>
                {company.map((label) => (
                    <Text key={label + Date.now()}>{label}</Text>
                ))}
            </Box>
            <Box width='20%' textAlign={'left'}>
                <Box display='flex' width='70%' justifyContent={'space-between'}>
                    <Box background='#0a192f' padding='10px' borderRadius={'50%'}>
                        <BsTwitter color='white' />
                    </Box>
                    <Box background='#0a192f' padding='10px' borderRadius={'50%'}>
                        <BsLinkedin color='white' />
                    </Box>
                    <Box background='#0a192f' padding='10px' borderRadius={'50%'}>
                        <GrFacebookOption color='white' />
                    </Box>
                </Box>
                <Text mt='20px' textDecor={'underline'} color='#0a192f' fontSize='13px' fontWeight={700}>
                    <a href='mailto:support@trackingtime.co'>support@trackingtime.co</a></Text>
                <Text mt='15px' align={'left'} fontWeight={"500"} fontSize='11px' color='#0a192f'>
                    © 2022 TrackingTime, LLC</Text>
            </Box>
            <Box fontSize='12px' textAlign={'left'} color='#0a192f' display='flex' flexDir={'column'}
                gap='10px' minW='17%' maxW='20%'>
                <Text fontWeight={700}>Help & Support</Text>
                {helpAndSupport.map((label) => (
                    <Text key={label + Date.now()}>{label}</Text>
                ))}
            </Box>
        </Box>
    )
}