import AuthLayout from "../../layouts/AuthLayout";
import { Link } from "react-router-dom";

export default function ForgotPass() {
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
            Need help logging in?
          </h1>

          <p
            style={{
              fontFamily: "Inter",
              color: "var(--text-secondary)",
              lineHeight: "1.6",
            }}
          >
            Enter the email associated with your account. We'll send you a verification code.
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
          Sign In
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

        <p
          style={{
            marginTop: "12px",
            textAlign: "center",
            color: "var(--text-secondary)",
          }}
        >
          Already have an account?{" "}
          <Link 
            to="/login"
            style={{
            color: "var(--primary)",
            textDecoration: "none",
            fontWeight: 600,
            cursor: "pointer",
          }}
          >
            Log in
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
}