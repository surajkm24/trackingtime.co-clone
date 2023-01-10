import { Box } from '@chakra-ui/react';
import './Footer.css';
import { FooterBottomSection } from './FooterBottomSection';
import { FooterTopSection } from './FooterTopSection';

export const Footer = () => {

    return (
        <Box bg='#f6f8f9'>
            <FooterTopSection />
            <FooterBottomSection />
        </Box>
    )
}