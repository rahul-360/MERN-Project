import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';

import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import Search from '../../pages/Search';
import Travel from '../../pages/Travel';
import Traveldetails from '../../pages/Traveldetails';
import Gallery from '../../pages/Gallery';
import ThankYou from '../../pages/ThankYou';



const Routers = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to ="Home"/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/travel' element={<Travel/>}></Route>
        <Route path='/tour/:id' element={<Traveldetails/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route> 

        <Route path='/travel/search' element={<Search/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
        <Route path='/thank-you' element={<ThankYou/>}></Route>    
    </Routes>
  )
}

export default Routers