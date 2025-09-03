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
import { RedirectToSignIn, SignedOut, SignedIn } from '@clerk/clerk-react';

function App() {

  return (

  <BrowserRouter>
  <Routes>
    <Route  path='/' element={<Landing/>}/>
    <Route  path='/dashboard' element={

      <>
       <SignedIn><DashBoard/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
      </>
     
     
    }/>
    <Route  path='/upload' element={
      <>
       <SignedIn><Upload/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
      </>
    }/>
    <Route  path='/my-files' element={
      <>
       <SignedIn><MyFiles/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
      </>
    }/>
    <Route  path='/subscription' element={
      <>
       <SignedIn><Subscription/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
      </>
    }/>
    <Route  path='/transaction' element={
      <>
       <SignedIn><Subscription/></SignedIn>
        <SignedOut><RedirectToSignIn/></SignedOut>
      </>
    }/>

    <Route path='/' element={<RedirectToSignIn/>} />
  </Routes>
  </BrowserRouter>
  ) 
}

export default App
