export default function AuthLayout({ children }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "58% 42%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "var(--bg-main)",
      }}
    >
      {/* LEFT SIDE */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          position: "relative",
          overflow: "hidden",
        }}
      >

        <p
          style={{
            color: "var(--primary)",
            fontSize: "0.9rem",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "20px",
            fontWeight: 600,
          }}
        >
          YOUR SECOND BRAIN
        </p>

        <h1
          style={{
            fontFamily: "Poppins",
            fontSize: "4rem",
            lineHeight: "1.1",
            color: "var(--text-primary)",
            maxWidth: "650px",
            marginBottom: "24px",
          }}
        >
          Organize your life.
          <br />
          Without organizing your mind.
        </h1>

        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            maxWidth: "520px",
            lineHeight: "1.8",
            marginBottom: "45px",
          }}
        >
          Tasks, habits, projects, goals and journals—
          everything lives together in one calm workspace,
          designed to help you think clearly and build consistently.
        </p>

        <div
          style={{
            display: "flex",
            gap: "40px",
            marginTop: "10px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Poppins",
                color: "var(--primary-dark)",
                margin: 0,
                fontSize: "2rem",
              }}
            >
              4+
            </h2>

            <span style={{ color: "var(--text-muted)" }}>
              Productivity Systems
            </span>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "Poppins",
                color: "var(--primary-dark)",
                margin: 0,
                fontSize: "2rem",
              }}
            >
              ᦠ
            </h2>

            <span style={{ color: "var(--text-muted)" }}>
              Possibilities
            </span>
          </div>

          <div>
            <h2
              style={{
                fontFamily: "Poppins",
                color: "var(--primary-dark)",
                margin: 0,
                fontSize: "2rem",
              }}
            >
              1
            </h2>

            <span style={{ color: "var(--text-muted)" }}>
              Beautiful Workspace
            </span>
          </div>
        </div>

        {/* Decorative Blobs */}

        <div
          style={{
            position: "absolute",
            width: "420px",
            height: "420px",
            background: "var(--primary-light)",
            borderRadius: "50%",
            filter: "blur(140px)",
            opacity: 0.18,
            top: "-120px",
            left: "-120px",
            zIndex: -1,
          }}
        />

        <div
          style={{
            position: "absolute",
            width: "300px",
            height: "300px",
            background: "var(--accent-light)",
            borderRadius: "50%",
            filter: "blur(120px)",
            opacity: 0.18,
            bottom: "-80px",
            right: "80px",
            zIndex: -1,
          }}
        />
      </div>

      {/* RIGHT SIDE */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "48px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "480px",
            background: "white",
            borderRadius: "24px",
            padding: "40px",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}