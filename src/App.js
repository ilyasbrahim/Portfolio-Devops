import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TerminalAnimation from './components/TerminalAnimation';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Background, Projects } from "./components/Background";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TerminalAnimation />
      <NavBar />
      <Banner />
      <Skills />
      <Background />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

