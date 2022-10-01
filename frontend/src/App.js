import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { ChakraProvider, theme } from '@chakra-ui/react';

// import NavProject2 from './Components/NavProject2/NavProject2';

// import CreateNewOrg from './Pages/LoginSignup/CreateNewOrg/CreateNewOrg';
// import ToolsNavbar from './Components/ToolsNavbar';



function App() {
  return (
    <div>
      <div>
        {/* <ChakraProvider theme={theme}> */}
          <AllRoutes />
          {/* <NavProject2 /> */}
        {/* </ChakraProvider> */}
       
      </div>
    </div>
  );
}

export default App;
