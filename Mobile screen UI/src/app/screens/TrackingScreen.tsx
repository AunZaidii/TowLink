import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Phone, MessageCircle, Clock, Navigation } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";
import { motion } from "motion/react";

export function TrackingScreen() {
  const navigate = useNavigate();
  const [eta, setEta] = useState(15);

  // Simulate ETA countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 60000); // Every minute

    return () => clearInterval(interval);
  }, []);

  const driverInfo = {
    name: "Michael Johnson",
    rating: 4.9,
    vehicle: "Tow Truck #247",
    phone: "+1 (555) 123-4567",
    plateNumber: "TOW-247",
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white border-b border-border sticky top-0 z-10">
            <div className="flex items-center px-4 py-4">
              <button
                onClick={() => navigate("/home")}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-6 h-6 text-foreground" />
              </button>
              <h1 className="text-xl text-foreground ml-4">Track Tow Truck</h1>
            </div>
          </div>

          {/* Map Area */}
          <div className="relative h-80 bg-gradient-to-br from-blue-50 to-blue-100">
            {/* Mock Map with Route */}
            <div className="absolute inset-0">
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid grid-cols-8 grid-rows-8 h-full">
                  {Array.from({ length: 64 }).map((_, i) => (
                    <div key={i} className="border border-blue-300"></div>
                  ))}
                </div>
              </div>
              
              {/* Route Line */}
              <svg className="absolute inset-0 w-full h-full">
                <path
                  d="M 60 240 Q 150 180, 240 120"
                  stroke="#FF6B00"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray="8,4"
                  strokeLinecap="round"
                />
              </svg>

              {/* Driver Location */}
              <motion.div
                className="absolute"
                style={{ left: "60px", top: "220px" }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <div className="bg-[#FF6B00] p-3 rounded-full shadow-lg">
                  <Navigation className="w-6 h-6 text-white" />
                </div>
              </motion.div>

              {/* Your Location */}
              <div className="absolute" style={{ right: "60px", top: "100px" }}>
                <div className="bg-[#16A34A] p-3 rounded-full shadow-lg">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>

            {/* ETA Badge */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-3 shadow-lg">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                <div>
                  <p className="text-xs text-muted-foreground">Estimated Arrival</p>
                  <p className="text-lg text-foreground">{eta} min</p>
                </div>
              </div>
            </div>
          </div>

          {/* Driver Info Card */}
          <div className="px-6 -mt-8 mb-4 relative z-10">
            <div className="bg-white rounded-2xl shadow-xl border border-border p-5">
              <div className="flex items-start gap-4">
                {/* Driver Avatar */}
                <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] w-16 h-16 rounded-full flex items-center justify-center text-white text-xl flex-shrink-0">
                  MJ
                </div>
                
                {/* Driver Details */}
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <h3 className="text-lg text-foreground">{driverInfo.name}</h3>
                    <div className="flex items-center gap-1 bg-[#FFF4ED] px-2 py-1 rounded-lg">
                      <span className="text-[#FF6B00]">★</span>
                      <span className="text-sm text-foreground">{driverInfo.rating}</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{driverInfo.vehicle}</p>
                  <p className="text-xs text-muted-foreground">Plate: {driverInfo.plateNumber}</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-4">
                <button className="flex items-center justify-center gap-2 bg-[#FF6B00] text-white py-3 rounded-xl hover:bg-[#FF7A1A] transition-colors">
                  <Phone className="w-5 h-5" aria-hidden="true" />
                  <span>Call Driver</span>
                </button>
                <button 
                  onClick={() => navigate("/chat")}
                  className="flex items-center justify-center gap-2 bg-muted text-foreground py-3 rounded-xl hover:bg-muted/80 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" aria-hidden="true" />
                  <span>Message</span>
                </button>
              </div>
            </div>
          </div>

          {/* Status Timeline */}
          <div className="px-6 pb-32">
            <h3 className="text-lg text-foreground mb-4">Status Updates</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-[#16A34A] w-8 h-8 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-0.5 h-full bg-muted mt-2"></div>
                </div>
                <div className="pb-6">
                  <p className="text-sm text-foreground">Driver En Route</p>
                  <p className="text-xs text-muted-foreground">2:45 PM • Driver is on the way to your location</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-[#16A34A] w-8 h-8 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-0.5 h-full bg-muted mt-2"></div>
                </div>
                <div className="pb-6">
                  <p className="text-sm text-foreground">Request Confirmed</p>
                  <p className="text-xs text-muted-foreground">2:40 PM • Tow truck assigned to your request</p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-[#16A34A] w-8 h-8 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-foreground">Request Placed</p>
                  <p className="text-xs text-muted-foreground">2:38 PM • Emergency tow service requested</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}