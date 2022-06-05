
import './App.css';
import Navbar from './Components/NavigationBar/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import ContactUs from './Components/Pages/ContactUs';

const  App =() =>  {

  return (
  <><Navbar/>
    <Home/>
    <AboutUs />
    <Services/>
    <ContactUs/></>
    
  );
}

export default App;
