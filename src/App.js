
import './App.css';
import Navbar from './Components/NavigationBar/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import ContactUs from './Components/Pages/ContactUs';
import TopBar from './Components/Pages/TopBar';

const  App =() =>  {

  return (
  <>
  <TopBar/>
  <Navbar/>
    <Home/>
    <AboutUs />
    <Services/>
    <ContactUs/>
    <div style={{width:"100%" , textAlign: "center"}}>Copyright © 2022 Brow Pro | All Rights Reserved</div>
    </>
    
  );
}

export default App;
