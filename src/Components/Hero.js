import React from "react";
import Header from "./Header";

function Hero() {
  return (
    <section className="hero is-medium is-link">
        <div className="hero-body">
            <Header header={'Huevos Ahogados'} />
        </div>
    </section>
  );
}

export default Hero;