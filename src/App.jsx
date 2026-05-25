import React, { useState } from "react";

export default function App() {
  const [submitted, setSubmitted] = useState(false);

  const colors = {
    copper: "#B87333",
    navy: "#2F265E",
    cream: "#F7F2EA",
    paper: "#FFFCF6",
    text: "#211B36",
  };

  const heading = {
    fontFamily: "Georgia, 'Times New Roman', serif",
    letterSpacing: "-0.04em",
  };

  return (
    <main style={{ background: colors.cream, color: colors.text, fontFamily: "Arial, sans-serif" }}>
      <header style={{
        position: "sticky", top: 0, zIndex: 10, background: "rgba(255,252,246,.9)",
        borderBottom: "1px solid rgba(47,38,94,.12)", backdropFilter: "blur(14px)"
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "22px 28px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ ...heading, fontSize: 42, fontWeight: 700, color: colors.navy }}>SolKatz</div>
          <a href="#apply" style={{
            textDecoration: "none", color: colors.navy, border: "1px solid rgba(47,38,94,.2)",
            padding: "12px 22px", borderRadius: 18, fontWeight: 700
          }}>Apply</a>
        </div>
      </header>

      <section style={{
        maxWidth: 1200, margin: "0 auto", padding: "90px 28px",
        display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 50, alignItems: "center"
      }}>
        <div>
          <div style={{
            display: "inline-block", padding: "10px 16px", borderRadius: 999,
            background: "rgba(255,255,255,.65)", border: "1px solid rgba(184,115,51,.25)",
            color: colors.navy, fontWeight: 700, marginBottom: 24
          }}>
            ✦ Executive coaching for business people
          </div>

          <h1 style={{
            ...heading, fontSize: "clamp(58px, 8vw, 105px)", lineHeight: .92,
            color: colors.navy, margin: 0
          }}>
            Take Your Business to the Next Level.
          </h1>

          <p style={{ fontSize: 21, lineHeight: 1.7, color: "rgba(33,27,54,.75)", maxWidth: 650 }}>
            Got business problems? We love big ones. The bigger the problem, the bigger the opportunity hiding behind it.
          </p>

          <a href="#apply" style={{
            display: "inline-block", marginTop: 18, background: colors.copper, color: "white",
            padding: "18px 28px", borderRadius: 18, textDecoration: "none",
            fontWeight: 800, letterSpacing: ".12em", textTransform: "uppercase",
            boxShadow: "0 18px 35px rgba(184,115,51,.22)"
          }}>
            Apply to Work With SolKatz →
          </a>
        </div>

        <div style={{
          borderRadius: 34, background: colors.paper, padding: 22,
          boxShadow: "0 35px 80px rgba(47,38,94,.14)", border: "1px solid rgba(47,38,94,.1)"
        }}>
          <div style={{
            minHeight: 560, borderRadius: 28, padding: 42, color: "white",
            display: "flex", flexDirection: "column", justifyContent: "flex-end",
            background: `linear-gradient(135deg, ${colors.navy}, #1E183D 55%, ${colors.copper})`
          }}>
            <div style={{ fontSize: 13, letterSpacing: ".28em", textTransform: "uppercase", opacity: .75 }}>
              Executive Strategic Advisory
            </div>
            <div style={{ ...heading, fontSize: 78, marginTop: 18 }}>SolKatz</div>
            <div style={{ color: "#E7C79F", letterSpacing: ".22em", textTransform: "uppercase" }}>
              Your Guide on the Side
            </div>
            <h2 style={{ ...heading, fontSize: 54, lineHeight: 1.02, marginBottom: 12 }}>
              The conversation that changes your trajectory.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, opacity: .8 }}>
              Powerful guidance for leaders navigating growth, uncertainty, opportunity, and the next chapter.
            </p>
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "70px 28px", textAlign: "center" }}>
        <div style={{ color: colors.copper, fontWeight: 800, letterSpacing: ".28em", textTransform: "uppercase" }}>
          What is your next level?
        </div>
        <h2 style={{ ...heading, fontSize: "clamp(46px, 6vw, 76px)", color: colors.navy, lineHeight: 1 }}>
          Choose the future you want to grow into.
        </h2>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: 20, marginTop: 48
        }}>
          {["Increase Income", "Increase Impact", "Increase Productivity", "Increase Satisfaction"].map((item) => (
            <div key={item} style={{
              background: "rgba(255,255,255,.72)", borderRadius: 30, padding: 32,
              boxShadow: "0 20px 45px rgba(47,38,94,.07)", border: "1px solid rgba(255,255,255,.7)"
            }}>
              <div style={{ height: 1, background: colors.copper, marginBottom: 26, opacity: .5 }} />
              <h3 style={{ ...heading, fontSize: 34, color: colors.navy, lineHeight: 1.05 }}>{item}</h3>
              <p style={{ color: "rgba(33,27,54,.65)", lineHeight: 1.6 }}>
                Elevate your business and personal trajectory with focused guidance.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="apply" style={{ maxWidth: 1200, margin: "0 auto", padding: "80px 28px" }}>
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr", overflow: "hidden",
          borderRadius: 40, background: colors.navy, boxShadow: "0 35px 80px rgba(47,38,94,.18)"
        }}>
          <div style={{ padding: 52, color: "white" }}>
            <div style={{ color: colors.copper, fontWeight: 800, letterSpacing: ".28em", textTransform: "uppercase" }}>
              Exclusive Availability
            </div>
            <h2 style={{ ...heading, fontSize: 62, lineHeight: 1 }}>
              Apply for a private SolKatz conversation.
            </h2>
            <p style={{ fontSize: 18, lineHeight: 1.7, opacity: .75 }}>
              For business owners ready to think bigger, move clearer, and unlock the opportunity inside their challenges.
            </p>
          </div>

          <div style={{ background: colors.paper, padding: 34 }}>
            {submitted ? (
              <div style={{ background: "white", borderRadius: 28, padding: 60, textAlign: "center" }}>
                <h3 style={{ ...heading, fontSize: 44, color: colors.navy }}>Application received.</h3>
                <p>Thank you. We’ll review and follow up if it feels aligned.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                style={{ background: "white", borderRadius: 28, padding: 32, boxShadow: "0 20px 45px rgba(47,38,94,.06)" }}>
                <h3 style={{ ...heading, fontSize: 42, color: colors.navy, marginTop: 0 }}>
                  Tell us where you are and where you want to go.
                </h3>

                {["Full name", "Email", "Phone", "Business / company"].map((label) => (
                  <label key={label} style={{ display: "block", marginBottom: 16, fontWeight: 700, color: colors.navy }}>
                    {label}
                    <input required={label !== "Phone"} type={label === "Email" ? "email" : "text"} style={{
                      width: "100%", boxSizing: "border-box", marginTop: 8, padding: 16,
                      borderRadius: 16, border: "1px solid rgba(47,38,94,.15)", background: colors.cream
                    }} />
                  </label>
                ))}

                <label style={{ display: "block", marginBottom: 16, fontWeight: 700, color: colors.navy }}>
                  Biggest business challenge right now
                  <textarea required rows="4" style={{
                    width: "100%", boxSizing: "border-box", marginTop: 8, padding: 16,
                    borderRadius: 16, border: "1px solid rgba(47,38,94,.15)", background: colors.cream
                  }} />
                </label>

                <button style={{
                  width: "100%", border: 0, background: colors.copper, color: "white",
                  padding: 18, borderRadius: 18, fontWeight: 900,
                  letterSpacing: ".15em", textTransform: "uppercase", cursor: "pointer"
                }}>
                  Apply for consideration →
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer style={{
        background: colors.paper, borderTop: "1px solid rgba(47,38,94,.1)",
        padding: 32, textAlign: "center", color: "rgba(33,27,54,.55)"
      }}>
        © 2026 SolKatz. Executive Coaching.
      </footer>
    </main>
  );
}
