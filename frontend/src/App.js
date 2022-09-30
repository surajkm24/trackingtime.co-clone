import './App.css';
import { AllRoutes } from './Routes/AllRoutes';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { Report } from './Components/ProjectReport/Report.jsx';


function App() {
  return (
    <div>
      <div>
        <ChakraProvider theme={theme}>
          {/* <AllRoutes /> */}
          <Report />
        </ChakraProvider>
      </div>
    </div>
  );
}

export default App;
