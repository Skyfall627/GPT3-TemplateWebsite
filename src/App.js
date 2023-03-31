import React from 'react';
import {CTA, Brand, NavBar} from './Components';
import {Blog, Header, Footer, Features, WhatGPT3, Possibilities} from './Containers';
import './App.css';

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>
        <Brand/>
        <WhatGPT3 />
        <Features />
        <Possibilities />
        <CTA />
        <Blog />
        <Footer />
    </div>
  )
}

export default App