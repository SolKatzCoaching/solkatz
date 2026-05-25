import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="header">
        <div className="logo">Sol Katz</div>
        <a href="#contact" className="navButton">Contact</a>
      </header>

      <section className="hero">
        <div>
          <p className="eyebrow">Trusted. Professional. Personal.</p>
          <h1>Clear guidance with a personal touch.</h1>
          <p className="heroText">
            Sol Katz provides reliable, professional service with a focus on
            trust, clarity, and results.
          </p>

          <div className="buttons">
            <a href="#contact" className="primary">Get in Touch</a>
            <a href="#about" className="secondary">Learn More</a>
          </div>
        </div>

        <div className="card">
          <div className="circle">SK</div>
          <h2>Sol Katz</h2>
          <p>Professional Services</p>
        </div>
      </section>

      <section id="about" className="section white">
        <h2>About</h2>
        <p>
          With a straightforward and dependable approach, Sol Katz helps clients
          move forward with confidence. The focus is simple: understand the need,
          provide clear direction, and deliver with care.
        </p>
      </section>

      <section className="section">
        <h2>Why Work With Us</h2>
        <div className="grid">
          <div className="box">
            <h3>Reliable</h3>
            <p>Clear communication and dependable follow-through.</p>
          </div>
          <div className="box">
            <h3>Professional</h3>
            <p>A polished approach focused on real results.</p>
          </div>
          <div className="box">
            <h3>Personal</h3>
            <p>Every client is treated with attention and respect.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Let’s Connect</h2>
        <p>Reach out today to start the conversation.</p>
        <a href="mailto:sol@example.com">Email Sol</a>
      </section>

      <footer>© {new Date().getFullYear()} Sol Katz. All rights reserved.</footer>
    </div>
  );
}
