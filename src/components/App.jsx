// import { useState } from "react";
import Header from "./Header";
import Linktree from "./Linktree";
import Contact from "./Contact";
import Hero from "./Hero";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Hero />
      <div className="flex justify-center px-5 md:px-12">
        <Linktree />
        <Contact />
      </div>
    </>
  );
}

export default App;
