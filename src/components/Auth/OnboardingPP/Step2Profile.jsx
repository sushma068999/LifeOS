import defaultProfiles from "../../../data/defaultProfiles";

export default function Step2Profile({
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
        Who are you?
      </h2>

      <p
        style={{
          color: "var(--text-secondary)",
          marginBottom: "24px",
        }}
      >
        This helps LifeOS personalize your workspace.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "16px",
        }}
      >
        {defaultProfiles.map((profile) => {
          const selected = user.profile === profile.id;
          const Icon = profile.icon;

          return (
            <button
              key={profile.id}
              onClick={() =>
                setUser({
                  ...user,
                  profile: profile.id,
                })
              }
              style={{
                padding: "22px",
                borderRadius: "18px",
                cursor: "pointer",
                border: selected
                  ? "2px solid var(--primary-border)"
                  : "1px solid var(--border)",
                background: selected
                  ? "var(--primary-soft)"
                  : "var(--bg-main)",
                boxShadow: selected
                  ? "var(--shadow-sm)"
                  : "none",
                transition: "0.2s",
              }}
            >
              <div
                style={{
                  fontSize: "30px",
                  marginBottom: "10px",
                }}
              >
                <Icon
                    size= {32}
                    color= {
                      selected 
                      ? "var(--primary)" 
                      : "var(--text-secondary)"}
                />
              </div>

              <div
                style={{
                    fontWeight: 600,
                    color: 
                      selected 
                        ? "var(--primary)" 
                        : "var(--text-secondary)",
                    marginTop: "10px",
                }}
              >
                {profile.title}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}