import { useNavigate } from "react-router";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Bell,
  Shield,
  HelpCircle,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";

export function ProfileScreen() {
  const navigate = useNavigate();

  const userInfo = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    plan: "Premium",
  };

  const menuItems = [
    {
      icon: User,
      label: "Personal Information",
      description: "Update your details & vehicle",
      path: "/profile/personal-info",
    },
    {
      icon: CreditCard,
      label: "Payment Methods",
      description: "Manage payment options",
      path: "/profile/payment",
    },
    {
      icon: Shield,
      label: "Privacy & Security",
      description: "Password and security settings",
      path: "/profile/security",
    },
  ];

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] px-6 pt-8 pb-12 rounded-b-3xl">
            <h1 className="text-2xl text-white mb-1">Profile</h1>
            <p className="text-white/80 text-sm">Manage your account</p>
          </div>

          {/* Profile Card */}
          <div className="px-6 -mt-8 mb-6">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl">
                  JD
                </div>
                <div className="flex-1">
                  <h2 className="text-xl text-foreground">{userInfo.name}</h2>
                  <p className="text-sm text-muted-foreground">{userInfo.plan} Member</p>
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-border">
                <div className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-foreground">{userInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                  <span className="text-foreground">{userInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="px-6 space-y-2 pb-32">
            {menuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <button
                  key={index}
                  onClick={() => navigate(item.path)}
                  className="w-full bg-white border border-border rounded-xl p-4 hover:bg-muted transition-colors flex items-center gap-4 text-left"
                >
                  <div className="bg-[#FFF4ED] p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{item.label}</p>
                    <p className="text-xs text-muted-foreground">{item.description}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" aria-hidden="true" />
                </button>
              );
            })}

            {/* Logout Button */}
            <div className="pt-4 pb-32">
              <button
                onClick={handleLogout}
                className="w-full bg-white border-2 border-destructive text-destructive py-4 rounded-xl hover:bg-destructive hover:text-white transition-colors flex items-center justify-center gap-2"
              >
                <LogOut className="w-5 h-5" aria-hidden="true" />
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}