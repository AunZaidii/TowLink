import { useNavigate } from "react-router";
import { AlertCircle, MapPin, Clock, Phone, FileText, Wrench, Truck as TruckIcon } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";
import { motion } from "motion/react";

export function HomeScreen() {
  const navigate = useNavigate();

  const quickActions = [
    {
      icon: FileText,
      title: "Register Vehicle",
      description: "Add your vehicle details",
      color: "bg-blue-50",
      iconColor: "text-blue-600",
    },
    {
      icon: Phone,
      title: "Emergency Call",
      description: "24/7 assistance",
      color: "bg-purple-50",
      iconColor: "text-purple-600",
    },
    {
      icon: Wrench,
      title: "Workshop",
      description: "Find nearby shops",
      color: "bg-green-50",
      iconColor: "text-green-600",
    },
    {
      icon: TruckIcon,
      title: "Track Service",
      description: "Live tracking",
      color: "bg-orange-50",
      iconColor: "text-[#FF6B00]",
    },
  ];

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-gray-50">
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] px-6 pt-6 pb-24 rounded-b-3xl">
            <div className="flex items-center justify-between mb-2">
              <div>
                <p className="text-white/80 text-sm">Welcome back,</p>
                <h1 className="text-2xl text-white">John Doe</h1>
              </div>
              <button
                className="bg-white/20 p-2 rounded-full backdrop-blur-sm"
                aria-label="Notifications"
              >
                <AlertCircle className="w-6 h-6 text-white" />
              </button>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 mt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/80 text-xs">Your Plan</p>
                  <p className="text-white">TowLink Plus</p>
                </div>
                <button
                  onClick={() => navigate("/plans")}
                  className="text-white text-sm underline"
                >
                  Upgrade
                </button>
              </div>
            </div>
          </div>

          {/* Map Preview */}
          <div className="px-6 -mt-16 mb-6">
            <div className="bg-white rounded-2xl h-48 overflow-hidden shadow-lg border border-border relative">
              {/* Mock Map */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-[#FF6B00]" />
                </div>
                {/* Grid pattern for map effect */}
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-8 grid-rows-8 h-full">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div key={i} className="border border-blue-300"></div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-4 left-4 bg-white px-3 py-2 rounded-lg shadow-md flex items-center gap-2">
                <div className="w-2 h-2 bg-[#16A34A] rounded-full animate-pulse"></div>
                <span className="text-sm text-foreground">Your Location</span>
              </div>
            </div>
          </div>

          {/* Emergency Help Button */}
          <div className="px-6">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/request")}
              className="w-full bg-gradient-to-r from-[#FF6B00] to-[#FF8C00] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm"></div>
              <div className="relative flex flex-col items-center">
                <div className="bg-white/20 p-4 rounded-full mb-4">
                  <AlertCircle className="w-12 h-12" aria-hidden="true" />
                </div>
                <h2 className="text-2xl mb-2">Emergency Help</h2>
                <p className="text-white/90">Tap to request tow service</p>
              </div>
            </motion.button>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">Avg. Response</span>
                </div>
                <p className="text-xl text-foreground">15 min</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground">24/7 Support</span>
                </div>
                <p className="text-xl text-foreground">Available</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="px-6 mt-6">
            <h3 className="text-lg text-foreground mb-3">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <button
                    key={index}
                    className="bg-white border border-border rounded-xl p-4 hover:shadow-md transition-shadow text-left"
                  >
                    <div className={`${action.color} w-10 h-10 rounded-lg flex items-center justify-center mb-2`}>
                      <Icon className={`w-5 h-5 ${action.iconColor}`} aria-hidden="true" />
                    </div>
                    <p className="text-sm text-foreground mb-1">{action.title}</p>
                    <p className="text-xs text-muted-foreground">{action.description}</p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="px-6 mt-6 pb-24">
            <h3 className="text-lg text-foreground mb-3">Recent Activity</h3>
            <div className="bg-white border border-border rounded-xl p-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#FFF4ED] p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground">Last Service</p>
                  <p className="text-xs text-muted-foreground">Jan 28, 2026 • Downtown</p>
                </div>
                <button 
                  onClick={() => navigate("/tracking")}
                  className="text-[#FF6B00] text-sm hover:underline"
                >
                  View
                </button>
              </div>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}