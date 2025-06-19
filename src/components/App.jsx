// import { useState } from "react";
import Header from "./Header";
import Linktree from "./Linktree";
import Hero from "./Hero";
import ContactCard from "./ContactCard";
import About from "./About";
import ImageCarousel from "./ImageCarousel";

function App() {
  return (
    <div className="bg-orange-300">
      <Header />
      <div className="m-4 px-4 border-b-2">
        <Hero />
      </div>
      <div className="sm:flex justify-center m-4 px-4 text-center border-b-2">
        <ContactCard />
        <Linktree />
      </div>
      <div className="sm:flex justify-center px-4 text-center border-b-2">
        <About />
      </div>
      {/* <div className="sm:flex justify-center px-4 text-center border-b-2">
        <ImageCarousel />
      </div> */}
    </div>
  );
}

export default App;
