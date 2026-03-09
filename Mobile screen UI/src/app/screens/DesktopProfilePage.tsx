import {
  User,
  Mail,
  Phone,
  CreditCard,
  Shield,
  LogOut,
  ChevronRight,
} from "lucide-react";
import { useNavigate } from "react-router";

export function DesktopProfilePage() {
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
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Profile</h1>
            <p className="text-sm text-muted-foreground">
              Manage your TowLink account and settings
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-2 border border-destructive text-destructive px-4 py-2 rounded-lg text-sm hover:bg-destructive hover:text-white transition-colors"
          >
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-8 py-8 grid grid-cols-[2fr,1.5fr] gap-8">
        {/* Left: profile & contact */}
        <section className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6 flex gap-5 items-center">
            <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] w-20 h-20 rounded-full flex items-center justify-center text-white text-3xl">
              JD
            </div>
            <div>
              <h2 className="text-xl font-semibold text-foreground">
                {userInfo.name}
              </h2>
              <p className="text-sm text-muted-foreground mb-2">
                {userInfo.plan} Member
              </p>
              <div className="flex flex-col gap-1 text-sm text-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{userInfo.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{userInfo.phone}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">
              Account Sections
            </h3>
            <div className="divide-y divide-border">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={() => navigate(item.path)}
                    className="w-full flex items-center gap-4 py-4 text-left hover:bg-muted/60 px-1 transition-colors"
                  >
                    <div className="bg-[#FFF4ED] p-2 rounded-lg">
                      <Icon className="w-5 h-5 text-[#FF6B00]" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground" />
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Right: subscription summary */}
        <aside className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-border p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">
              Subscription Overview
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Current Plan</span>
                <span className="font-medium text-foreground">
                  TowLink {userInfo.plan}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Billing</span>
                <span className="font-medium text-foreground">
                  Monthly Subscription
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Next Renewal</span>
                <span className="font-medium text-foreground">
                  Mar 28, 2026
                </span>
              </div>
            </div>
            <button className="mt-5 w-full bg-[#FF6B00] text-white py-2.5 rounded-lg text-sm hover:bg-[#FF7A1A] transition-colors">
              Manage Plan
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
}

