export default function Container({
  children,
  style = {},
}) {
  return (
    <div
      className="container"
      style={{
        width: "min(100%, var(--container-width))",
        margin: "0 auto",
        padding: "0 2rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}