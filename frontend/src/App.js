import './App.css';
import HomePage from './Pages/Home/HomePage';
// import logo from './logo.svg';
// import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
