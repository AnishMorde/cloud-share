import { useState } from 'react'
import './App.css'
import { assets } from './assets/assests'
import {BrowserRouter , Route, Routes} from "react-router-dom";
import DashBoard from './Pages/DashBoard';
import Upload from './Pages/Upload';
import MyFiles from './Pages/MyFiles';
import Subscription from './Pages/Subscription';
import Transaction from './Pages/Transaction';
import Landing from './Pages/Landing';

function App() {

  return (

  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<Landing/>}/>
    <Route  path='/dashboard' element={<DashBoard/>}/>
    <Route  path='/upload' element={<Upload/>}/>
    <Route  path='/my-files' element={<MyFiles/>}/>
    <Route  path='/subscription' element={<Subscription/>}/>
    <Route  path='/transaction' element={<Transaction/>}/>
  </Routes>
  </BrowserRouter>
  ) 
}

export default App
