// import logo from './logo.svg';
import { ChakraProvider, theme } from '@chakra-ui/react';
import './App.css';
import CreateNewAcc from './Pages/LoginSignup/CreateNewAcc/CreateNewAcc';
import Login from './Pages/LoginSignup/Login/Login';
import ReviewTerms from './Pages/LoginSignup/ModalLogin/ReviewTerms';
import SignupPage from './Pages/LoginSignup/Signup/SignupPage';


function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        {/* <ReviewTerms /> */}
        {/* <Login /> */}
        {/* <SignupPage /> */}
        <CreateNewAcc />
      </ChakraProvider>
    </div>
  );
}

export default App;
