export default function Step1Name({
  user,
  setUser,
}) {
  return (
    <div>
      <h2
        style={{
          marginBottom: "8px",
        }}
      >
        What's your name?
      </h2>

      <p
        style={{
          color: "#777",
          marginBottom: "20px",
        }}
      >
        This name will be used across LifeOS.
      </p>

      <input
        type="text"
        placeholder="Enter your name"
        value={user.name}
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
        style={{
          width: "100%",
          padding: "14px",
          borderRadius: "12px",
          border: "1px solid #d9d9d9",
          fontSize: "16px",
          outline: "none",
          boxSizing: "border-box",
        }}
      />
    </div>
  );
}