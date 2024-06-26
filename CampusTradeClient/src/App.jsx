// import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



import './App.css';
import React from 'react';
import Home from './Pages/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import LandingPage from './Pages/LandingPage/LandingPage';
import AdPage from './Pages/AdPage/AdPage';
import Admin from './Pages/Admin/Admin';
// import UserProfile from './Pages/UserProfile/UserProfile';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import ProfileX from './Pages/UserProfile/ProfileX';
import Adform from './Pages/AdForm/Adform';
import AdUpdate from './Pages/updateAdForm/updateAd';
import UpdateProfileForm from './Pages/UserProfile/UpdateProfileForm';
function App() {

  return (
    <>
      <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path='/' exact element={<LandingPage />}/>
          <Route path="/home" exact element={<Home/>} />
          <Route path="/ad" element={<AdPage/>} />
          <Route path="/admin" exact element={<Admin/>} />
          <Route path="/user" exact element={<ProfileX/>} />
          <Route path="/about" element={<AboutUs/>} />
          <Route path="/user/Ad" element={<Adform/>} />
          <Route path="/user/AdUpdate" element={<AdUpdate/>} />
          <Route path="/updateprofile" element={<UpdateProfileForm/>} />
        </Routes>
        <Footer/>
        
      </div>
    </Router>
    </>
  )
}

export default App
