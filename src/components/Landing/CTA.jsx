import Button from "../Commons/Button";
import Container from "../Commons/Container";

export default function CTA() {
  return (
    <section
      style={{
        padding: "160px 0",
        background: "var(--bg-primary)",
      }}
    >
      <Container>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          {/* Small Tag */}

          <span
            style={{
              display: "inline-block",
              padding: "8px 18px",
              background: "var(--primary-light)",
              color: "var(--primary-dark)",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "24px",
            }}
          >
            Your journey starts here
          </span>

          {/* Heading */}

          <h2
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "58px",
              fontWeight: 600,
              lineHeight: 1.15,
              color: "var(--text-primary)",
              marginBottom: "28px",
            }}
          >
            Start building
            <br />
            the life you actually want.
          </h2>

          {/* Description */}

          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "20px",
              color: "var(--text-secondary)",
              lineHeight: 1.8,
              maxWidth: "700px",
              margin: "0 auto 48px",
            }}
          >
            Whether you're managing studies, work, health,
            finances or your personal goals, LifeOS helps
            everything stay connected in one calm workspace.
          </p>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <Button>
              Download for Windows
            </Button>

            <Button variant="secondary">
              Open in Browser
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}