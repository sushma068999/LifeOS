import Container from "../Commons/Container";

const stats = [
  {
    number: "15+",
    title: "Life Modules",
    desc: "Tasks, Notes, Calendar, Goals, Health and more",
  },
  {
    number: "1",
    title: "Unified Workspace",
    desc: "Everything connected in one place",
  },
  {
    number: "24/7",
    title: "Always Available",
    desc: "Access your life from anywhere",
  },
  {
    number: "ᦠ",
    title: "Possibilities",
    desc: "Grow LifeOS the way you want",
  },
];

export default function Stats() {
  return (
    <section
      style={{
        background: "var(--primary)",
        padding: "70px 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
            gap: "40px",
            textAlign: "center",
          }}
        >
          {stats.map((item, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: "3rem",
                  fontWeight: 600,
                  color: "#fff",
                  marginBottom: "12px",
                  fontFamily: "var(--font-number)",
                }}
              >
                {item.number}
              </h2>

              <h3
                style={{
                  color: "#fff",
                  marginBottom: "12px",
                  fontSize: "1.15rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "rgba(255,255,255,.82)",
                  lineHeight: 1.6,
                  fontSize: ".95rem",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}