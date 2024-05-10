

import React from 'react';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Background, Projects } from "./components/Background";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

const MainPage = () => {
  return (
    <div>
      <NavBar />
      <Banner />
      <Skills />
      <Background />
      <Contact />
      <Footer />
    </div>
  );
};

export default MainPage;
