import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoAmI from './components/WhoAmI';
import MySkills from './components/MySkills';
import ContactInfo from './components/ContactInfo';
import LineSeparator from './components/LineSeparator';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <LineSeparator />
      <WhoAmI />
      <MySkills />
      <LineSeparator />
      <ContactInfo />
    </div>
  );
}

export default App;
