import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { ChakraProvider, theme } from '@chakra-ui/react';
import CreateNewOrg from './Pages/LoginSignup/CreateNewOrg/CreateNewOrg';
// import ToolsNavbar from './Components/ToolsNavbar';


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
