import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const colors = {
    navy: "#1B3A4B",
    gold: "#D4A853",
    cream: "#F5F0E8",
    terra: "#C67B4E",
    black: "#1A1A1A",
    white: "#FFFFFF",
  };

  const heading = {
    fontFamily: "Recoleta, Georgia, serif",
    letterSpacing: "-0.04em",
  };

  const body = {
    fontFamily: "Aileron, Arial, sans-serif",
  };

  const LogoText = ({ size = 46 }) => (
    <div
      style={{
        fontFamily: "Recoleta, Georgia, serif",
        fontSize: `${size}px`,
        fontWeight: 600,
        letterSpacing: "-0.05em",
        lineHeight: 1,
        color: colors.navy,
      }}
    >
      SolKatz
    </div>
  );

  const levels = [
    "Increase Income",
    "Increase Impact",
    "Increase Productivity",
    "Increase Satisfaction",
  ];

  const testimonials = [
    {
      quote:
        "Sol doesn’t just answer questions, he reframes them. Every conversation moves the needle.",
      name: "Moshe Hecht",
      role: "Founder & CEO",
    },
    {
      quote:
        "Sol helps you define your goals with clarity and get there step by step.",
      name: "Judah Farkas",
      role: "VP of Operations",
    },
    {
      quote:
        "If you're seeking new levels of financial prosperity, Sol can help you see the path forward.",
      name: "Dovid Winter",
      role: "Business Owner",
    },
  ];

  return (
    <main style={{ ...body, background: colors.cream, color: colors.black }}>
      <header
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 20,
          background: "rgba(245,240,232,.86)",
          backdropFilter: "blur(18px)",
          borderBottom: "1px solid rgba(27,58,75,.12)",
        }}
      >
        <div
          style={{
            maxWidth: 1220,
            margin: "0 auto",
            padding: "18px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <LogoText />

          <a
            href="#apply"
            style={{
              background: colors.gold,
              color: colors.navy,
              padding: "13px 24px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: ".12em",
              fontSize: 13,
            }}
          >
            Free Profit Map
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
          color: colors.white,
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1800&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(27,58,75,.96), rgba(27,58,75,.78), rgba(198,123,78,.36))",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 1050,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: colors.gold,
              fontWeight: 900,
              letterSpacing: ".35em",
              textTransform: "uppercase",
              margin: "0 0 20px",
              fontSize: 14,
            }}
          >
            SOL KATZ
          </p>

          <h1
            style={{
              ...heading,
              fontSize: "clamp(56px, 9vw, 112px)",
              lineHeight: ".92",
              margin: "0 auto 26px",
              maxWidth: 1000,
            }}
          >
            Take Your Business
            <br />
            to the Next Level
          </h1>

          <p
            style={{
              fontSize: 26,
              lineHeight: 1.45,
              maxWidth: 780,
              margin: "0 auto",
              fontWeight: 700,
            }}
          >
            Got business problems? The bigger the problem, the bigger the
            opportunity hiding behind it.
          </p>

          <a
            href="#apply"
            style={{
              display: "inline-block",
              marginTop: 36,
              background: colors.gold,
              color: colors.navy,
              padding: "18px 34px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 900,
              letterSpacing: ".14em",
              textTransform: "uppercase",
              boxShadow: "0 18px 45px rgba(212,168,83,.34)",
            }}
          >
            Get a Free Profit Map
          </a>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "96px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: colors.terra,
            fontWeight: 900,
            letterSpacing: ".3em",
            textTransform: "uppercase",
          }}
        >
          What's your next level?
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: 18,
            marginTop: 42,
          }}
        >
          {levels.map((level) => (
            <div
              key={level}
              style={{
                background: colors.white,
                borderRadius: 28,
                padding: 34,
              }}
            >
              <h3
                style={{
                  ...heading,
                  color: colors.navy,
                  fontSize: 32,
                  margin: 0,
                }}
              >
                {level}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section style={{ maxWidth: 1160, margin: "0 auto", padding: "70px 28px" }}>
        <div
          style={{
            background: colors.navy,
            color: colors.white,
            borderRadius: 42,
            padding: "64px 48px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              ...heading,
              fontSize: "clamp(50px, 7vw, 82px)",
              margin: 0,
            }}
          >
            SolKatz
          </h2>

          <p style={{ color: colors.gold, fontSize: 24, fontWeight: 800 }}>
            Your Guide on the Side
          </p>

          <p
            style={{
              fontSize: 23,
              lineHeight: 1.65,
              maxWidth: 850,
              margin: "24px auto 0",
            }}
          >
            To help you SHINE. Guidance, advice, consulting, coaching, money,
            health, spirituality, connection, relationships, trust, and G-d.
          </p>
        </div>
      </section>

      <section id="apply" style={{ maxWidth: 1220, margin: "0 auto", padding: "96px 28px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            borderRadius: 42,
            overflow: "hidden",
            background: colors.navy,
          }}
        >
          <div style={{ padding: 58, color: colors.white }}>
            <p
              style={{
                color: colors.gold,
                fontWeight: 900,
                letterSpacing: ".22em",
                textTransform: "uppercase",
              }}
            >
              Free Profit Map
            </p>

            <h2 style={{ ...heading, fontSize: 64, lineHeight: 1 }}>
              Find the hidden profit inside your business
            </h2>

            <p style={{ fontSize: 21, lineHeight: 1.7 }}>
              We’ll look at where money is leaking, where growth is stuck, and
              what your clearest next move should be.
            </p>
          </div>

          <div style={{ background: colors.white, padding: 36 }}>
            {submitted ? (
              <div style={{ padding: 60, textAlign: "center" }}>
                <h3 style={{ ...heading, color: colors.navy, fontSize: 44 }}>
                  Request received.
                </h3>
                <p>Thank you. The next step is a private review.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <h3
                  style={{
                    ...heading,
                    color: colors.navy,
                    fontSize: 42,
                    marginTop: 0,
                  }}
                >
                  Get your free profit map.
                </h3>

                {["Full name", "Email", "Phone", "Business / company"].map(
                  (label) => (
                    <label
                      key={label}
                      style={{
                        display: "block",
                        marginBottom: 16,
                        fontWeight: 800,
                        color: colors.navy,
                      }}
                    >
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
                          border: "1px solid rgba(27,58,75,.18)",
                          background: colors.cream,
                        }}
                      />
                    </label>
                  )
                )}

                <label
                  style={{
                    display: "block",
                    marginBottom: 18,
                    fontWeight: 800,
                    color: colors.navy,
                  }}
                >
                  What is the biggest money or growth problem in your business?
                  <textarea
                    required
                    rows="4"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      marginTop: 8,
                      padding: 16,
                      borderRadius: 16,
                      border: "1px solid rgba(27,58,75,.18)",
                      background: colors.cream,
                    }}
                  />
                </label>

                <button
                  style={{
                    width: "100%",
                    border: 0,
                    background: colors.gold,
                    color: colors.navy,
                    padding: 19,
                    borderRadius: 999,
                    fontWeight: 900,
                    letterSpacing: ".15em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                  }}
                >
                  Get a Free Profit Map
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1220, margin: "0 auto", padding: "96px 28px" }}>
        <p
          style={{
            color: colors.terra,
            fontWeight: 900,
            letterSpacing: ".24em",
            textTransform: "uppercase",
          }}
        >
          Hear Directly From Clients
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(310px,1fr))",
            gap: 24,
            marginTop: 34,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: colors.white,
                borderRadius: 30,
                padding: 34,
              }}
            >
              <p style={{ fontSize: 17, lineHeight: 1.75 }}>“{t.quote}”</p>
              <h3 style={{ ...heading, color: colors.navy, fontSize: 30 }}>
                {t.name}
              </h3>
              <p style={{ color: colors.terra, fontWeight: 900 }}>{t.role}</p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: colors.navy,
          color: colors.white,
          padding: 42,
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: colors.cream,
            padding: "16px 26px",
            borderRadius: 18,
          }}
        >
          <LogoText size={48} />
        </div>

        <p>Your Guide on the Side — To help you SHINE.</p>
      </footer>
    </main>
  );
}
