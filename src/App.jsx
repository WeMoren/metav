import React from "react";
import "./index.css";
import Reveal from "./components/Reveal";
import Hero from "./components/Hero";
import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Places from "./components/Places";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="snap-container">
        <section id="hero" className="snap-section">
          <Reveal>
            <Hero />
          </Reveal>
        </section>

        <section id="places" className="snap-section">
          <Reveal>
            <Places />
          </Reveal>
        </section>

        <section id="NFTs" className="snap-section">
          <Reveal></Reveal>
        </section>

        <section id="communities" className="snap-section">
          <Reveal></Reveal>
        </section>
      </main>
    </>
  );
};

export default App;
