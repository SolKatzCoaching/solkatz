import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#1f1f1f]">
      <header className="px-6 py-5 flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold tracking-tight">Sol Katz</div>
        <a
          href="#contact"
          className="bg-black text-white px-5 py-2 rounded-full text-sm font-medium"
        >
          Contact
        </a>
      </header>

      <main>
        <section className="px-6 py-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.25em] text-sm text-gray-500 mb-4">
              Trusted. Professional. Personal.
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Clear guidance with a personal touch.
            </h1>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Sol Katz provides reliable, professional service with a focus on
              trust, clarity, and results.
            </p>

            <div className="flex gap-4 flex-wrap">
              <a
                href="#contact"
                className="bg-black text-white px-6 py-3 rounded-full font-medium"
              >
                Get in Touch
              </a>

              <a
                href="#about"
                className="border border-black px-6 py-3 rounded-full font-medium"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 min-h-[360px] flex items-center justify-center">
            <div className="text-center">
              <div className="w-28 h-28 rounded-full bg-black text-white flex items-center justify-center text-4xl font-bold mx-auto mb-6">
                SK
              </div>
              <h2 className="text-2xl font-semibold">Sol Katz</h2>
              <p className="text-gray-600 mt-2">Professional Services</p>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white px-6 py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">About</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
              With a straightforward and dependable approach, Sol Katz helps
              clients move forward with confidence. The focus is simple:
              understand the need, provide clear direction, and deliver with
              care.
            </p>
          </div>
        </section>

        <section className="px-6 py-20 max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Why Work With Us</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Reliable</h3>
              <p className="text-gray-600">
                Clear communication and dependable follow-through.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Professional</h3>
              <p className="text-gray-600">
                A polished approach focused on real results.
              </p>
            </div>

            <div className="bg-white p-7 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold mb-3">Personal</h3>
              <p className="text-gray-600">
                Every client is treated with attention and respect.
              </p>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-black text-white px-6 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-5">Let’s Connect</h2>
            <p className="text-gray-300 text-lg mb-8">
              Reach out today to start the conversation.
            </p>

            <a
              href="mailto:sol@example.com"
              className="bg-white text-black px-7 py-3 rounded-full font-semibold inline-block"
            >
              Email Sol
            </a>
          </div>
        </section>
      </main>

      <footer className="px-6 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Sol Katz. All rights reserved.
      </footer>
    </div>
  );
}
