import { Home, CreditCard, MapPin, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router";

export function BottomNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { icon: Home, label: "Home", path: "/home" },
    { icon: CreditCard, label: "Plans", path: "/plans" },
    { icon: MapPin, label: "Track", path: "/tracking" },
    { icon: User, label: "Profile", path: "/profile" },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border safe-area-bottom">
      <div className="max-w-md mx-auto flex items-center justify-around px-2 h-16">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-lg transition-colors min-w-[60px] ${
                isActive
                  ? "text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="w-6 h-6" aria-hidden="true" />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
