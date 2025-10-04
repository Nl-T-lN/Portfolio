import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Home } from "../home";
import { About } from "../about";
import { Portfolio } from "../portfolio";
import { ContactUs } from "../contact";

export const ScrollablePage = () => {
  return (
    <HelmetProvider>
      <div className="scrollable-page">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        
        {/* Home Section */}
        <section id="home" className="scroll-section">
          <Home />
        </section>

        {/* About Section */}
        <section id="about" className="scroll-section">
          <About />
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="scroll-section">
          <Portfolio />
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-section">
          <ContactUs />
        </section>
      </div>
    </HelmetProvider>
  );
};