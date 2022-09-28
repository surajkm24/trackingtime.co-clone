import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { AllRoutes } from './Routes/AllRoutes';

 
function App() {
  return (
    <div>
    <div>
      <Navbar />
      <AllRoutes/>
      <Footer />
    </div>
    </div>
  );
}

export default App;
