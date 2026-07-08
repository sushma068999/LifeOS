import Button from "../commons/Button";
import Container from "../commons/Container";

export default function Navbar() {
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        background: "rgba(248,249,247,.82)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <Container>
        <div
          style={{
            height: "82px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}

          <div
            style={{
              fontFamily: "var(--font-title)",
              fontSize: "2rem",
              color: "var(--text-primary)",
              cursor: "pointer",
              userSelect: "none",
            }}
          >
            LifeOS
          </div>

          {/* Navigation */}

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2.5rem",
            }}
          >
            <a
              href="#pricing"
              style={{
                textDecoration: "none",
                color: "var(--text-secondary)",
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                transition: ".3s",
              }}
            >
              Pricing
            </a>

            <Button variant="secondary">
              Start Free
            </Button>

            <Button>
              Request Demo
            </Button>
          </nav>
        </div>
      </Container>
    </header>
  );
}