import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <AuthLayout>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: "Poppins",
              fontSize: "2rem",
              fontWeight: 600,
              color: "var(--text-primary)",
              marginBottom: "8px",
            }}
          >
            Welcome Back!
          </h1>

          <p
            style={{
              fontFamily: "Inter",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
            }}
          >
            Pick up where you left and continue building your life, one day at a time.
          </p>
        </div>

        {/* <input
          placeholder="Full Name"
          style={{
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            fontSize: "1rem",
            outline: "none",
          }}
        /> */}

        <input
          placeholder="Email"
          type="email"
          style={{
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            fontSize: "1rem",
            outline: "none",
          }}
        />

        <input
          placeholder="Password"
          type="password"
          style={{
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            fontSize: "1rem",
            outline: "none",
          }}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
            marginBottom: "24px",
          }}
        >
          <label
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontFamily: "Inter",
              fontSize: "14px",
              color: "var(--text-secondary)",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              style={{
                width: "16px",
                height: "16px",
                accentColor: "var(--primary)",
                cursor: "pointer",
              }}
            />
            Remember me
          </label>

          <Link
            to="/forgotPass"
            style={{
              background: "none",
              border: "none",
              color: "var(--primary)",
              cursor: "pointer",
              fontSize: "14px",
              fontFamily: "Inter",
              fontWeight: 500,
            }}
          >
            Forgot password?
          </Link>
        </div>

        {/* <input
          placeholder="Confirm Password"
          type="password"
          style={{
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            fontSize: "1rem",
            outline: "none",
          }}
        /> */}

        <button
          style={{
            marginTop: "8px",
            padding: "16px",
            background: "var(--primary)",
            color: "white",
            border: "none",
            borderRadius: "14px",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Log In
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            margin: "6px 0",
          }}
        >
          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border)",
            }}
          />

          <span
            style={{
              color: "var(--text-muted)",
              fontSize: ".9rem",
            }}
          >
            OR
          </span>

          <div
            style={{
              flex: 1,
              height: "1px",
              background: "var(--border)",
            }}
          />
        </div>

        <button
          style={{
            padding: "16px",
            borderRadius: "14px",
            border: "1px solid var(--border)",
            background: "white",
            cursor: "pointer",
            fontWeight: 500,
          }}
        >
          Continue with Google
        </button>

        {/* <p
          style={{
            marginTop: "12px",
            textAlign: "center",
            color: "var(--text-secondary)",
          }}
        >
          Forgot Password{" "}
          <span
            style={{
              color: "var(--primary)",
              fontWeight: 600,
              cursor: "pointer",
            }}
          >
            Reset
          </span>
        </p> */}
      </div>
    </AuthLayout>
  );
}