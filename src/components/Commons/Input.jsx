export default function Input({
    value,
    onChange,
    placeholder,
    type = "text",
}) {
  return (
    <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
            flex: 1,
            padding: "12px 16px",
            border: "1px solid var(--border)",
            borderRadius: "10px",
            background: "var(--surface)",
            color: "var(--text)",
            fontSize: "16px",
            outline: "none",
        }}
    />
  );
}