import { useNavigate, useLocation } from "react-router";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function DevNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const screens = [
    { path: "/", label: "Splash" },
    { path: "/onboarding", label: "Onboarding" },
    { path: "/login", label: "Login" },
    { path: "/signup", label: "Signup" },
    { path: "/home", label: "Home" },
    { path: "/request", label: "Tow Request" },
    { path: "/tracking", label: "Tracking" },
    { path: "/plans", label: "Plans" },
    { path: "/payment", label: "Payment" },
    { path: "/success", label: "Success" },
    { path: "/profile", label: "Profile" },
    { path: "/error", label: "Error" },
  ];

  const currentScreen = screens.find((s) => s.path === location.pathname);

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#2C2C2C] text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-[#3C3C3C] transition-colors"
      >
        <span className="text-sm">
          {currentScreen?.label || "Dev Menu"}
        </span>
        {isOpen ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-2xl border border-border overflow-hidden w-48">
          <div className="max-h-96 overflow-y-auto">
            {screens.map((screen) => (
              <button
                key={screen.path}
                onClick={() => {
                  navigate(screen.path);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                  location.pathname === screen.path
                    ? "bg-[#FFF4ED] text-[#FF6B00]"
                    : "text-foreground"
                }`}
              >
                {screen.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
