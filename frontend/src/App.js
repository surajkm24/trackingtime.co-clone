
import './App.css';
// import { AllRoutes } from './Routes/AllRoutes';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import HomeRoutes from './Pages/Home/HomeRoutes';

 
function App() {
  return (
    <div className="App">
     {/* <HomeNavbar/> */}
     
     <Navbar />
     <HomeRoutes/>
    <Footer />
    </div>
  );
}

export default App;
