export default function App() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f7f4ef",
        minHeight: "100vh",
        color: "#222",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "80px",
          }}
        >
          <h2>Sol Katz</h2>

          <a
            href="#contact"
            style={{
              background: "#111",
              color: "#fff",
              textDecoration: "none",
              padding: "12px 24px",
              borderRadius: "30px",
            }}
          >
            Contact
          </a>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "100px",
          }}
        >
          <div>
            <p
              style={{
                textTransform: "uppercase",
                letterSpacing: "3px",
                color: "#666",
              }}
            >
              Trusted. Professional. Personal.
            </p>

            <h1
              style={{
                fontSize: "64px",
                lineHeight: "1.1",
                margin: "20px 0",
              }}
            >
              Clear guidance with a personal touch.
            </h1>

            <p
              style={{
                fontSize: "20px",
                color: "#666",
                lineHeight: "1.6",
              }}
            >
              Sol Katz provides reliable, professional service with a focus on
              trust, clarity, and results.
            </p>
          </div>

          <div
            style={{
              background: "#fff",
              borderRadius: "30px",
              padding: "60px",
              textAlign: "center",
              boxShadow: "0 15px 40px rgba(0,0,0,.08)",
            }}
          >
            <div
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "60px",
                background: "#111",
                color: "#fff",
                margin: "0 auto 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
                fontWeight: "bold",
              }}
            >
              SK
            </div>

            <h2>Sol Katz</h2>
            <p>Professional Services</p>
          </div>
        </div>

        <div
          style={{
            background: "#fff",
            padding: "80px 40px",
            borderRadius: "30px",
            marginBottom: "60px",
          }}
        >
          <h2>About</h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#666",
            }}
          >
            With a straightforward and dependable approach, Sol Katz helps
            clients move forward with confidence. The focus is simple:
            understand the need, provide clear direction, and deliver with care.
          </p>
        </div>

        <h2 style={{ marginBottom: "30px" }}>Why Work With Us</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>Reliable</h3>
            <p>Clear communication and dependable follow-through.</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>Professional</h3>
            <p>A polished approach focused on real results.</p>
          </div>

          <div
            style={{
              background: "#fff",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3>Personal</h3>
            <p>Every client is treated with attention and respect.</p>
          </div>
        </div>
      </div>

      <div
        id="contact"
        style={{
          background: "#111",
          color: "#fff",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h2>Let's Connect</h2>

        <p>Reach out today to start the conversation.</p>

        <a
          href="mailto:sol@example.com"
          style={{
            display: "inline-block",
            marginTop: "20px",
            background: "#fff",
            color: "#111",
            padding: "14px 30px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Email Sol
        </a>
      </div>
    </div>
  );
}
