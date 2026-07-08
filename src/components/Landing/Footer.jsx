import Container from "../Commons/Container";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        paddingTop: "80px",
      }}
    >
      <Container>

        {/* Main Footer */}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "80px",
            flexWrap: "wrap",
            marginBottom: "70px",
          }}
        >

          {/* Left */}

          <div style={{ maxWidth: "350px" }}>
            <h2
              style={{
                fontFamily: "var(--font-title)",
                fontSize: "2rem",
                marginBottom: "18px",
                color: "var(--text-primary)",
              }}
            >
              LifeOS
            </h2>

            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: "1.8",
              }}
            >
              One calm workspace for your tasks, goals,
              notes, habits, career, health and finances.
              Built to help you focus on living instead
              of managing.
            </p>
          </div>

          {/* Right */}

          <div
            style={{
              display: "flex",
              gap: "80px",
              flexWrap: "wrap",
            }}
          >

            <div>
              <h4
                style={{
                  marginBottom: "18px",
                  color: "var(--text-primary)",
                }}
              >
                Product
              </h4>

              <p style={{ marginBottom: "10px", color: "var(--text-secondary)" }}>
                Features
              </p>

              <p style={{ marginBottom: "10px", color: "var(--text-secondary)" }}>
                Pricing
              </p>

              <p style={{ color: "var(--text-secondary)" }}>
                Roadmap
              </p>
            </div>

            <div>
              <h4
                style={{
                  marginBottom: "18px",
                  color: "var(--text-primary)",
                }}
              >
                Resources
              </h4>

              <p style={{ marginBottom: "10px", color: "var(--text-secondary)" }}>
                Documentation
              </p>

              <p style={{ marginBottom: "10px", color: "var(--text-secondary)" }}>
                Support
              </p>

              <p style={{ color: "var(--text-secondary)" }}>
                Community
              </p>
            </div>

            <div>
              <h4
                style={{
                  marginBottom: "18px",
                  color: "var(--text-primary)",
                }}
              >
                Connect
              </h4>

              <p style={{ marginBottom: "10px", color: "var(--text-secondary)" }}>
                GitHub
              </p>

              <p style={{ marginBottom: "10px", color: "var(--text-secondary)" }}>
                LinkedIn
              </p>

              <p style={{ color: "var(--text-secondary)" }}>
                Email
              </p>
            </div>

          </div>

        </div>

        {/* Bottom */}

        <div
          style={{
            borderTop: "1px solid var(--border)",
            padding: "28px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <p
            style={{
              color: "var(--text-muted)",
              fontSize: ".95rem",
            }}
          >
            © 2026 LifeOS. All rights reserved.
          </p>

          <div
            style={{
              display: "flex",
              gap: "28px",
            }}
          >
            <a
              href="#"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </a>

            <a
              href="#"
              style={{
                color: "var(--text-muted)",
                textDecoration: "none",
              }}
            >
              Terms & Conditions
            </a>
          </div>
        </div>

      </Container>
    </footer>
  );
}