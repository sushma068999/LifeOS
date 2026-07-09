export default function Container({ children, style = {} }) {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "0 2rem",
        boxSizing: "border-box",
        ...style,
      }}
    >
      {children}
    </div>
  );
}