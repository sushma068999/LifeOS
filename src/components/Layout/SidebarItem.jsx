import { ChevronDown, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTabs } from "../../context/TabContext";

export default function SidebarItem({
  item,
  collapsed,
  active,
  openGroup,
  setOpenGroup,
}) {
  const Icon = item.icon;
  const isGroup = item.children;
  const isOpen = openGroup[item.title];

  const activeColor = "var(--primary)"; // Replace with your sage green variable later

  const navigate = useNavigate();
  const { openTab } = useTabs();
  return (
    <div>
      {/* Main Button */}

      <button
        onClick={() => {
          if (isGroup) {
            setOpenGroup((prev) => ({
              ...prev,
              [item.title]: !prev[item.title],
            }));
          } else {
            openTab({
              title: item.title,
              id: item.id ?? item.title.toLowerCase(),
              path: item.path,
            });

            if (item.path) {
              navigate(item.path);
            }
          }
        }}
        style={{
          width: "100%",
          height: "46px",
          border: "none",
          borderRadius: "12px",
          background:
            active === item.title
              ? "#ffffff"
              : "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: collapsed ? "center" : "space-between",
          cursor: "pointer",
          transition: "0.18s ease",
          padding: collapsed ? "0" : "0 14px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {Icon && (
            <Icon
              size={20}
              color={
                active === item.title
                  ? activeColor
                  : "#7b7b7b"
              }
            />
          )}

          {!collapsed && (
            <span
              style={{
                marginLeft: 14,
                color:
                  active === item.title
                    ? activeColor
                    : "#4c4c4c",
                fontWeight:
                  active === item.title
                    ? 600
                    : 500,
                fontSize: "15px",
              }}
            >
              {item.title}
            </span>
          )}
        </div>
        {!collapsed && isGroup && (
          isOpen ? (
            <ChevronDown
              size={17}
              color="#888"
            />
          ) : (
            <ChevronRight
              size={17}
              color="#888"
            />
          )
        )}
      </button>

        {collapsed && isGroup && isOpen && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "8px",
              marginTop: "8px",
            }}
          >
            {item.children.map((child) => {
              const ChildIcon = child.icon;

              return (
                <button
                  key={child.title}
                  onClick={() => {
                    openTab({
                      title: child.title,
                      id: child.id ?? child.title.toLowerCase(),
                      path: child.path,
                    });

                    if (child.path) {
                      navigate(child.path)
                    }
                  }}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    padding: "6px",
                    borderRadius: "8px",
                  }}
                >
                  {ChildIcon && (
                    <ChildIcon
                      size={16}
                      color={
                        active === child.title
                          ? activeColor
                          : "#7b7b7b"
                      }
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}

      {/* Children */}

      {!collapsed && isGroup && isOpen && (
        <div
          style={{
            marginLeft: "42px",
            marginTop: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            transition: "0.2s ease",
          }}
        >
          {item.children.map((child) => {
            const ChildIcon = child.icon;

            return (
              <button
                key={child.title}
                onClick={() => {
                  openTab({
                    title: child.title,
                    id: child.id ?? child.title.toLowerCase(),
                    path: child.path,
                  });

                  if (child.path) {
                    navigate(child.path)
                  }
                }}
                style={{
                  border: "none",
                  background: "transparent",
                  textAlign: "left",
                  padding: "10px 8px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  color:
                    active === child.title
                      ? activeColor
                      : "#666",
                  fontWeight:
                    active === child.title
                      ? 600
                      : 400,
                  transition: "0.15s ease",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  {ChildIcon && (
                    <ChildIcon
                      size={16}
                      color={
                        active === child.title
                          ? activeColor
                          : "#8b8b8b"
                      }
                    />
                  )}

                  <span>{child.title}</span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}