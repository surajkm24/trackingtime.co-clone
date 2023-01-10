import React from 'react'
import { Box } from '@chakra-ui/react';
import { Navbar } from '../../Components/Navbar/Navbar';
import { Footer } from '../../Components/Footer/Footer';
import { Features } from '../../Components/HomeComponents/Features';
import { Tools } from '../../Components/HomeComponents/Tools';
import { ExtraFeatures } from '../../Components/HomeComponents/ExtraFeatures';
import { GetStarted } from '../../Components/HomeComponents/GetStarted';
import { Header } from '../../Components/HomeComponents/Header';
import { Companies } from '../../Components/HomeComponents/Companies';

const HomePage = () => {
    return (
        <>
            <Navbar />
            <Box maxW="100vw" backgroundColor={"#F6F8F9"} overflowX='hidden'>
                <Header />
                <Companies />
                <Features />
                <Tools />
                <ExtraFeatures />
                <GetStarted />
            </Box>
            <Footer />
        </>

    )
}

export default HomePage
