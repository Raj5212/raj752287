import React from 'react';
import  './App.css';  

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle' ;
import {BrowserRouter,Route,Routes} from 'react-router-dom';

import Home from './Home';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';




const App = () => {
  return (
    <>
   
   <BrowserRouter>
        <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/SignupForm" element={<SignupForm/>} />
        <Route exact path="/LoginForm" element={<LoginForm/>} />
        
        </Routes>
      </BrowserRouter>
   
   
    </>
  );
};

export default App;