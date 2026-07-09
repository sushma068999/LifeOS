import { Link } from "react-router-dom";

import Button from "../Commons/Button";
import Container from "../Commons/Container";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "130vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "110px 0 80px",
        background: "var(--bg-primary)"
      }}
    >
      <Container>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          {/* Small badge */}

          <span
            style={{
              background: "var(--sage-light)",
              color: "var(--sage-dark)",
              padding: "8px 16px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 600,
              marginBottom: "28px"
            }}
          >
            Your complete digital life
          </span>

          {/* Heading */}

          <h1
            style={{
              fontSize: "72px",
              lineHeight: 1.05,
              maxWidth: "900px",
              marginBottom: "28px",
              fontWeight: 600,
              color: "var(--text-primary)"
            }}
          >
            Where everything
            <br />
            comes together.
          </h1>

          {/* Description */}

          <p
            style={{
              maxWidth: "760px",
              fontSize: "22px",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              marginBottom: "52px"
            }}
          >
            LifeOS brings your tasks, calendar, goals, notes, habits,
            projects, career, health and finances into one intelligent
            workspace—so you spend less time organizing your life and more
            time living it.
          </p>

          {/* Buttons */}

          <div
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              justifyContent: "center",
              marginBottom: "70px",
            }}
          >
            <Button>Download for Windows</Button>

            <Link
              to="/signup"
              style={{
                textDecoration: "none",
              }}
            >
              <Button variant="secondary">
                Open in Browser
              </Button>
            </Link>
          </div>

          {/* Dashboard Screenshot */}

          <div
            style={{
              width: "100%",
              maxWidth: "1250px",
              borderRadius: "26px",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(0,0,0,.15)",
              background: "#fff"
            }}
          >
            <img
              src="/Homepage.PNG"
              alt="LifeOS Homepage"
              style={{
                width: "100%",
                display: "block"
              }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}