import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const colors = {
    navy: "#2F265E",
    copper: "#B87333",
    cream: "#F7F2EA",
    paper: "#FFFCF6",
    text: "#211B36",
  };

  const heading = {
    fontFamily: "Georgia, 'Times New Roman', serif",
    letterSpacing: "-0.045em",
  };

  const nextLevels = [
    "Increase Income",
    "Increase Impact",
    "Increase Productivity",
    "Increase Satisfaction",
    "Type here...",
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

  return (
    <main
      style={{
        minHeight: "100vh",
        background: colors.cream,
        color: colors.text,
        fontFamily: "Arial, sans-serif",
      }}
    >
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "rgba(255,252,246,.9)",
          borderBottom: "1px solid rgba(47,38,94,.12)",
          backdropFilter: "blur(14px)",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "22px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              ...heading,
              fontSize: 42,
              fontWeight: 700,
              color: colors.navy,
            }}
          >
            SolKatz
          </div>

          <a
            href="#apply"
            style={{
              textDecoration: "none",
              background: colors.copper,
              color: "white",
              padding: "13px 22px",
              borderRadius: 18,
              fontWeight: 800,
            }}
          >
            Apply
          </a>
        </div>
      </header>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "90px 28px",
          display: "grid",
          gridTemplateColumns: "1.05fr .95fr",
          gap: 50,
          alignItems: "center",
        }}
      >
        <div>
          <p
            style={{
              color: colors.copper,
              fontWeight: 900,
              letterSpacing: ".22em",
              textTransform: "uppercase",
            }}
          >
            For VIP business people living a good life
          </p>

          <h1
            style={{
              ...heading,
              fontSize: "clamp(58px, 8vw, 104px)",
              lineHeight: ".92",
              color: colors.navy,
              margin: "16px 0",
            }}
          >
            Take Your Business to the Next Level 📈
          </h1>

          <p
            style={{
              fontSize: 24,
              lineHeight: 1.55,
              color: "rgba(33,27,54,.75)",
              maxWidth: 680,
              fontWeight: 700,
            }}
          >
            Got business problems? We love BIG ones. The bigger the problem, the
            bigger the opportunity hiding behind it.
          </p>

          <a
            href="#apply"
            style={{
              display: "inline-block",
              marginTop: 22,
              background: colors.copper,
              color: "white",
              padding: "18px 30px",
              borderRadius: 18,
              textDecoration: "none",
              fontWeight: 900,
              letterSpacing: ".13em",
              textTransform: "uppercase",
              boxShadow: "0 18px 35px rgba(184,115,51,.24)",
            }}
          >
            Apply to Work With SolKatz →
          </a>
        </div>

        <div
          style={{
            background: colors.paper,
            borderRadius: 34,
            padding: 22,
            boxShadow: "0 35px 80px rgba(47,38,94,.14)",
          }}
        >
          <div
            style={{
              minHeight: 540,
              borderRadius: 28,
              padding: 42,
              color: "white",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              background: `linear-gradient(135deg, ${colors.navy}, #1E183D 55%, ${colors.copper})`,
            }}
          >
            <div
              style={{
                ...heading,
                fontSize: 82,
                fontWeight: 700,
              }}
            >
              SolKatz
            </div>

            <div
              style={{
                color: "#E7C79F",
                letterSpacing: ".22em",
                textTransform: "uppercase",
                fontWeight: 800,
              }}
            >
              Your Guide on the Side
            </div>

            <h2
              style={{
                ...heading,
                fontSize: 56,
                lineHeight: 1,
                marginBottom: 10,
              }}
            >
              To help you SHINE.
            </h2>

            <p style={{ fontSize: 18, lineHeight: 1.7, opacity: .82 }}>
              Guidance, advice, consulting, coaching, money, health, friends,
              spirituality, connection, relationships, trust, and G-d.
            </p>
          </div>
        </div>
      </section>

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "70px 28px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: colors.copper,
            fontWeight: 900,
            letterSpacing: ".28em",
            textTransform: "uppercase",
          }}
        >
          What's your next level?
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
            gap: 18,
            marginTop: 38,
          }}
        >
          {nextLevels.map((item) => (
            <div
              key={item}
              style={{
                background: "rgba(255,255,255,.72)",
                padding: 30,
                borderRadius: 28,
                boxShadow: "0 20px 45px rgba(47,38,94,.07)",
                border: "1px solid rgba(255,255,255,.7)",
              }}
            >
              <h3
                style={{
                  ...heading,
                  fontSize: 32,
                  color: colors.navy,
                  margin: 0,
                }}
              >
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "70px 28px",
        }}
      >
        <div
          style={{
            background: colors.paper,
            borderRadius: 36,
            padding: 48,
            boxShadow: "0 25px 65px rgba(47,38,94,.08)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              ...heading,
              color: colors.navy,
              fontSize: "clamp(46px, 6vw, 76px)",
              margin: 0,
            }}
          >
            ** SolKatz ** is a brand
          </h2>

          <p
            style={{
              fontSize: 22,
              lineHeight: 1.65,
              maxWidth: 850,
              margin: "24px auto 0",
              color: "rgba(33,27,54,.72)",
            }}
          >
            Apply today for exclusive availability. Enter a powerful
            conversation that changes your dynamic. Stop guessing. Start
            measuring your success with clear metrics.
          </p>
        </div>
      </section>

      <section
        id="apply"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 28px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.1fr",
            overflow: "hidden",
            borderRadius: 40,
            background: colors.navy,
            boxShadow: "0 35px 80px rgba(47,38,94,.18)",
          }}
        >
          <div style={{ padding: 52, color: "white" }}>
            <p
              style={{
                color: "#E7C79F",
                fontWeight: 900,
                letterSpacing: ".24em",
                textTransform: "uppercase",
              }}
            >
              Apply today for exclusive availability
            </p>

            <h2 style={{ ...heading, fontSize: 62, lineHeight: 1 }}>
              Apply to work with SolKatz
            </h2>

            <p style={{ fontSize: 19, lineHeight: 1.7, opacity: .78 }}>
              Enter a powerful conversation that changes your dynamic.
            </p>
          </div>

          <div style={{ background: colors.paper, padding: 34 }}>
            {submitted ? (
              <div
                style={{
                  background: "white",
                  borderRadius: 28,
                  padding: 60,
                  textAlign: "center",
                }}
              >
                <h3
                  style={{
                    ...heading,
                    fontSize: 44,
                    color: colors.navy,
                  }}
                >
                  Application received.
                </h3>
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
                  borderRadius: 28,
                  padding: 32,
                  boxShadow: "0 20px 45px rgba(47,38,94,.06)",
                }}
              >
                <h3
                  style={{
                    ...heading,
                    fontSize: 42,
                    color: colors.navy,
                    marginTop: 0,
                  }}
                >
                  Start the conversation.
                </h3>

                {["Full name", "Email", "Phone", "Business / company"].map(
                  (label) => (
                    <label
                      key={label}
                      style={{
                        display: "block",
                        marginBottom: 16,
                        fontWeight: 700,
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
                          border: "1px solid rgba(47,38,94,.15)",
                          background: colors.cream,
                        }}
                      />
                    </label>
                  )
                )}

                <label
                  style={{
                    display: "block",
                    marginBottom: 16,
                    fontWeight: 700,
                    color: colors.navy,
                  }}
                >
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
                      background: colors.cream,
                    }}
                  />
                </label>

                <button
                  style={{
                    width: "100%",
                    border: 0,
                    background: colors.copper,
                    color: "white",
                    padding: 18,
                    borderRadius: 18,
                    fontWeight: 900,
                    letterSpacing: ".15em",
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

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 28px",
        }}
      >
        <p
          style={{
            color: colors.copper,
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
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
            marginTop: 30,
          }}
        >
          {testimonials.map((t) => (
            <div
              key={t.name}
              style={{
                background: colors.paper,
                borderRadius: 30,
                padding: 32,
                boxShadow: "0 20px 50px rgba(47,38,94,.07)",
              }}
            >
              <p style={{ fontSize: 17, lineHeight: 1.75 }}>“{t.quote}”</p>
              <div
                style={{
                  marginTop: 26,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(47,38,94,.12)",
                }}
              >
                <h3
                  style={{
                    ...heading,
                    color: colors.navy,
                    fontSize: 28,
                    margin: 0,
                  }}
                >
                  {t.name}
                </h3>
                <p style={{ color: colors.copper, fontWeight: 800 }}>
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "80px 28px",
        }}
      >
        <h2
          style={{
            ...heading,
            color: colors.navy,
            fontSize: "clamp(46px, 6vw, 74px)",
            textAlign: "center",
          }}
        >
          SolKatz Values
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
            marginTop: 34,
          }}
        >
          {values.map((value, index) => (
            <div
              key={value.title}
              style={{
                background: colors.paper,
                borderRadius: 30,
                padding: 34,
                boxShadow: "0 20px 50px rgba(47,38,94,.07)",
              }}
            >
              <div
                style={{
                  color: colors.copper,
                  fontWeight: 900,
                  marginBottom: 14,
                }}
              >
                0{index + 1}
              </div>

              <h3
                style={{
                  ...heading,
                  color: colors.navy,
                  fontSize: 34,
                  margin: 0,
                }}
              >
                {value.title}
              </h3>

              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(33,27,54,.72)",
                }}
              >
                {value.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <footer
        style={{
          background: colors.paper,
          borderTop: "1px solid rgba(47,38,94,.1)",
          padding: 34,
          textAlign: "center",
        }}
      >
        <div
          style={{
            ...heading,
            fontSize: 42,
            color: colors.navy,
            fontWeight: 700,
          }}
        >
          SolKatz
        </div>
        <p style={{ color: "rgba(33,27,54,.55)" }}>
          Your Guide on the Side — To help you SHINE.
        </p>
      </footer>
    </main>
  );
}
