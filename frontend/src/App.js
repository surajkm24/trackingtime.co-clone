
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { AllRoutes } from './Routes/AllRoutes';
import { Route, Routes, useParams } from 'react-router-dom';
import Login from './Pages/LoginSignup/Login/Login';
import { useEffect, useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import CreateNewOrg from './Pages/LoginSignup/CreateNewOrg/CreateNewOrg';


function App() {
  return (
    <div>
      <div>
        <ChakraProvider theme={theme}>
          <AllRoutes />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
