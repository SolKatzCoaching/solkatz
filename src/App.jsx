import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const navy = "#2F265E";
  const copper = "#B87333";
  const cream = "#F7F2EA";
  const paper = "#FFFCF6";
  const text = "#211B36";

  const heading = {
    fontFamily: "Georgia, 'Times New Roman', serif",
    letterSpacing: "-0.045em",
  };

  const levels = [
    "Increase Income",
    "Increase Impact",
    "Increase Productivity",
    "Increase Satisfaction",
    "Type here...",
  ];

  const testimonials = [
    {
      quote:
        "I’ve had the privilege of working with Shloimy (Sol) Katz over the past several months, and it has been an enriching experience. Shloimy’s wisdom transcends his years, and as an executive coach, he brings a unique perspective to achieving success. If you're seeking new levels of financial prosperity, Shloimy can show you how to achieve that through a holistic emphasis on fulfillment and positive energy. I highly recommend Shloimy to any professional or organization seeking transformative leadership.",
      name: "Dovid Winter",
      role: "Business Owner, Concierge IT",
    },
    {
      quote:
        "It's my pleasure to give a strong recommendation for Sol. I personally have gained tremendous insight from Sol while helping me navigate my career and business opportunities. Sol brings out the best in people due to his friendly personality and persistence and sees to it that his clients are meeting their short and long term goals. I'm confident that Sol will help you define your goals and objectives with clarity and help you get there step by step.",
      name: "Judah Farkas",
      role: "VP of Operations, Frontier Education",
    },
    {
      quote:
        "Sol is the kind of consultant who doesn't just answer questions, he reframes them. Working with him sparks ideas you didn't know you were sitting on, gives you the conviction to actually move on them, and pushes the business to a place you couldn't have mapped on your own. Every conversation moves the needle. If you're serious about growth and want a partner who thinks bigger than you do, Sol is who you call.",
      name: "Moshe Hecht",
      role: "Founder, CEO, Mozart Company",
    },
  ];

  const values = [
    {
      title: "The Torah is our Guide",
      text:
        "When we are not sure, we become sure by consulting with Daas Torah openly, honestly, and transparently because our #1 value is to do the will of Hashem.",
    },
    {
      title: "Trust Building",
      text:
        "We fuel a safe and protected space where truths can be shared even when they are uncomfortable, but only when there is enough comfort to successfully handle the uncomfortability.",
    },
    {
      title: "Radical Candor",
      text:
        "Real-time honest feedback and constructive criticism is not only welcomed but cherished as a fuel for growth.",
    },
  ];

  return (
    <main style={{ background: cream, color: text, fontFamily: "Arial, sans-serif" }}>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 20,
          background: "rgba(12,10,24,.42)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            padding: "20px 28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            color: "white",
          }}
        >
          <div style={{ ...heading, fontSize: 42, fontWeight: 700 }}>SolKatz</div>

          <a
            href="#apply"
            style={{
              color: "white",
              textDecoration: "none",
              background: copper,
              padding: "13px 24px",
              borderRadius: 18,
              fontWeight: 900,
              letterSpacing: ".08em",
              textTransform: "uppercase",
            }}
          >
            Apply
          </a>
        </div>
      </header>

      <section
        style={{
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          padding: "120px 28px 80px",
          color: "white",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
            filter: "saturate(1.1) contrast(1.05)",
          }}
          poster="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1800&auto=format&fit=crop"
        >
          <source
            src="https://videos.pexels.com/video-files/3184292/3184292-uhd_2560_1440_25fps.mp4"
            type="video/mp4"
          />
        </video>

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(18,14,38,.95) 0%, rgba(47,38,94,.82) 42%, rgba(184,115,51,.22) 100%)",
            zIndex: 1,
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1240,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "1.1fr .9fr",
            gap: 50,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                border: "1px solid rgba(255,255,255,.2)",
                background: "rgba(255,255,255,.1)",
                padding: "11px 16px",
                borderRadius: 999,
                fontWeight: 800,
                letterSpacing: ".16em",
                textTransform: "uppercase",
                fontSize: 13,
              }}
            >
              For VIP business people — living a good life
            </div>

            <h1
              style={{
                ...heading,
                fontSize: "clamp(62px, 9vw, 118px)",
                lineHeight: ".9",
                margin: "28px 0 22px",
              }}
            >
              Take Your Business to the Next Level 📈
            </h1>

            <p style={{ fontSize: 26, lineHeight: 1.45, maxWidth: 720, fontWeight: 700 }}>
              Got business problems? We love BIG ones. The bigger the problem.
              The bigger the opportunity hiding behind it.
            </p>

            <a
              href="#apply"
              style={{
                display: "inline-block",
                marginTop: 26,
                background: copper,
                color: "white",
                padding: "18px 32px",
                borderRadius: 18,
                textDecoration: "none",
                fontWeight: 900,
                letterSpacing: ".14em",
                textTransform: "uppercase",
                boxShadow: "0 18px 40px rgba(184,115,51,.35)",
              }}
            >
              Apply to Work With SolKatz →
            </a>
          </div>

          <div
            style={{
              borderRadius: 36,
              padding: 34,
              background: "rgba(255,255,255,.11)",
              border: "1px solid rgba(255,255,255,.18)",
              backdropFilter: "blur(18px)",
              boxShadow: "0 35px 90px rgba(0,0,0,.25)",
            }}
          >
            <div style={{ ...heading, fontSize: 82, lineHeight: 1 }}>SolKatz</div>
            <div
              style={{
                color: "#E7C79F",
                letterSpacing: ".22em",
                textTransform: "uppercase",
                fontWeight: 900,
                marginTop: 8,
              }}
            >
              Your Guide on the Side
            </div>

            <h2 style={{ ...heading, fontSize: 56, lineHeight: 1, margin: "34px 0 16px" }}>
              To help you SHINE.
            </h2>

            <p style={{ fontSize: 19, lineHeight: 1.7, opacity: .86 }}>
              Guidance, advice, consulting, coaching, money, health, friends,
              spirituality, connection, relationships, trust, and G-d.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "90px 28px", textAlign: "center" }}>
        <p style={{ color: copper, fontWeight: 900, letterSpacing: ".3em", textTransform: "uppercase" }}>
          What's your next level?
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 18,
            marginTop: 44,
          }}
        >
          {levels.map((level) => (
            <div
              key={level}
              style={{
                background: paper,
                borderRadius: 30,
                padding: 32,
                boxShadow: "0 24px 55px rgba(47,38,94,.08)",
              }}
            >
              <h3 style={{ ...heading, color: navy, fontSize: 34, lineHeight: 1, margin: 0 }}>
                {level}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "70px 28px" }}>
        <div
          style={{
            background: navy,
            color: "white",
            borderRadius: 42,
            padding: "60px 48px",
            textAlign: "center",
            boxShadow: "0 35px 85px rgba(47,38,94,.2)",
          }}
        >
          <h2 style={{ ...heading, fontSize: "clamp(50px, 7vw, 86px)", lineHeight: 1, margin: 0 }}>
            ** SolKatz **
          </h2>
          <p style={{ fontSize: 24, color: "#E7C79F", fontWeight: 800 }}>~ is a brand ~</p>
          <p style={{ fontSize: 22, lineHeight: 1.7, maxWidth: 850, margin: "22px auto 0", opacity: .82 }}>
            Enter a powerful conversation that changes your dynamic. Stop guessing.
            Start measuring your success with clear metrics.
          </p>
        </div>
      </section>

      <section id="apply" style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.05fr",
            overflow: "hidden",
            borderRadius: 44,
            background: navy,
            boxShadow: "0 35px 90px rgba(47,38,94,.2)",
          }}
        >
          <div style={{ padding: 56, color: "white" }}>
            <p style={{ color: "#E7C79F", fontWeight: 900, letterSpacing: ".24em", textTransform: "uppercase" }}>
              Apply today for exclusive availability
            </p>
            <h2 style={{ ...heading, fontSize: 66, lineHeight: 1 }}>
              Apply to work with SolKatz
            </h2>
            <p style={{ fontSize: 20, lineHeight: 1.7, opacity: .78 }}>
              Enter a powerful conversation that changes your dynamic.
            </p>
          </div>

          <div style={{ background: paper, padding: 36 }}>
            {submitted ? (
              <div style={{ background: "white", borderRadius: 30, padding: 60, textAlign: "center" }}>
                <h3 style={{ ...heading, color: navy, fontSize: 46 }}>Application received.</h3>
                <p>Thank you. The next step is a private review.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                style={{
                  background: "white",
                  borderRadius: 30,
                  padding: 34,
                  boxShadow: "0 20px 50px rgba(47,38,94,.08)",
                }}
              >
                <h3 style={{ ...heading, color: navy, fontSize: 44, marginTop: 0 }}>
                  Start the conversation.
                </h3>

                {["Full name", "Email", "Phone", "Business / company"].map((label) => (
                  <label key={label} style={{ display: "block", marginBottom: 16, color: navy, fontWeight: 800 }}>
                    {label}
                    <input
                      required={label !== "Phone"}
                      type={label === "Email" ? "email" : "text"}
                      style={{
                        width: "100%",
                        boxSizing: "border-box",
                        marginTop: 8,
                        padding: 16,
                        borderRadius: 16,
                        border: "1px solid rgba(47,38,94,.15)",
                        background: cream,
                      }}
                    />
                  </label>
                ))}

                <label style={{ display: "block", marginBottom: 18, color: navy, fontWeight: 800 }}>
                  What is your biggest business problem right now?
                  <textarea
                    required
                    rows="4"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      marginTop: 8,
                      padding: 16,
                      borderRadius: 16,
                      border: "1px solid rgba(47,38,94,.15)",
                      background: cream,
                    }}
                  />
                </label>

                <button
                  style={{
                    width: "100%",
                    border: 0,
                    background: copper,
                    color: "white",
                    padding: 19,
                    borderRadius: 18,
                    fontWeight: 900,
                    letterSpacing: ".16em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Apply →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 28px" }}>
        <p style={{ color: copper, fontWeight: 900, letterSpacing: ".24em", textTransform: "uppercase" }}>
          Hear Directly From Clients
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
            gap: 24,
            marginTop: 34,
          }}
        >
          {testimonials.map((t) => (
            <div key={t.name} style={{ background: paper, borderRadius: 32, padding: 34 }}>
              <p style={{ fontSize: 17, lineHeight: 1.75 }}>“{t.quote}”</p>
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(47,38,94,.12)" }}>
                <h3 style={{ ...heading, color: navy, fontSize: 30, margin: 0 }}>{t.name}</h3>
                <p style={{ color: copper, fontWeight: 900 }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1240, margin: "0 auto", padding: "90px 28px" }}>
        <h2 style={{ ...heading, color: navy, fontSize: "clamp(52px, 7vw, 86px)", textAlign: "center" }}>
          SolKatz Values
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
          {values.map((value, i) => (
            <div key={value.title} style={{ background: paper, borderRadius: 32, padding: 36 }}>
              <div style={{ color: copper, fontWeight: 900, marginBottom: 16 }}>0{i + 1}</div>
              <h3 style={{ ...heading, color: navy, fontSize: 35, margin: 0 }}>{value.title}</h3>
              <p style={{ fontSize: 17, lineHeight: 1.75, color: "rgba(33,27,54,.72)" }}>{value.text}</p>
            </div>
          ))}
        </div>
      </section>

      <footer style={{ background: paper, padding: 36, textAlign: "center" }}>
        <div style={{ ...heading, color: navy, fontSize: 44, fontWeight: 700 }}>SolKatz</div>
        <p style={{ color: "rgba(33,27,54,.6)" }}>Your Guide on the Side — To help you SHINE.</p>
      </footer>
    </main>
  );
}
