import { Box, Accordion, } from '@chakra-ui/react';
import { footerData } from '../../data/footer.data';
import './Footer.css';
import { MobileFooterItem } from './MobileFooterItem';

export const MobileFooter = () => {
    return (
        <Box id='mobFoot' px='20px' py='45px'>
            <Accordion allowMultiple allowToggle borderColor='#f6f8f9'>
                {footerData.map((item) => (
                    <MobileFooterItem key={item.label} {...item} />
                ))}
            </Accordion>
        </Box>
    )
}