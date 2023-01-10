import { Box } from '@chakra-ui/react';
import { DesktopFooter } from './DesktopFooter';
import './Footer.css';
import { MobileFooter } from './MobileFooter';

export const FooterBottomSection = () => {
    return (
        <Box id='sk_reFt'>
            <DesktopFooter />
            <MobileFooter />
        </Box>
    )
}