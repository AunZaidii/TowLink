import {
  ArrowLeft,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
} from "lucide-react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";

export function DesktopTrackingPage() {
  const navigate = useNavigate();

  const eta = 15;

  const driverInfo = {
    name: "Michael Johnson",
    rating: 4.9,
    vehicle: "Tow Truck #247",
    phone: "+1 (555) 123-4567",
    plateNumber: "TOW-247",
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border">
        <div className="max-w-[1200px] mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/home")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-5 h-5 text-foreground" />
            </button>
            <h1 className="text-xl font-semibold text-foreground">
              Track Tow Truck
            </h1>
          </div>
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 text-[#FF6B00]" />
            <span>
              Estimated Arrival:{" "}
              <span className="font-semibold text-foreground">
                {eta} min
              </span>
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-8 py-8 grid grid-cols-[2fr,1fr] gap-8">
        {/* Map / route */}
        <section className="relative h-[480px] bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden shadow-sm">
          {/* Grid pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 grid-rows-8 h-full">
              {Array.from({ length: 96 }).map((_, i) => (
                <div key={i} className="border border-blue-300" />
              ))}
            </div>
          </div>

          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full">
            <path
              d="M 80 360 Q 260 260, 460 180"
              stroke="#FF6B00"
              strokeWidth="4"
              fill="none"
              strokeDasharray="8,4"
              strokeLinecap="round"
            />
          </svg>

          {/* Driver marker */}
          <motion.div
            className="absolute"
            style={{ left: "80px", top: "340px" }}
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <div className="bg-[#FF6B00] p-3 rounded-full shadow-lg">
              <Navigation className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          {/* User marker */}
          <div className="absolute" style={{ right: "80px", top: "140px" }}>
            <div className="bg-[#16A34A] p-3 rounded-full shadow-lg">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
        </section>

        {/* Side panel */}
        <aside className="space-y-6">
          <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
            <div className="flex items-start gap-4">
              <div className="bg-gradient-to-br from-[#FF6B00] to-[#FF8C00] w-14 h-14 rounded-full flex items-center justify-center text-white text-lg flex-shrink-0">
                MJ
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h2 className="text-lg font-semibold text-foreground">
                    {driverInfo.name}
                  </h2>
                  <div className="flex items-center gap-1 bg-[#FFF4ED] px-2 py-1 rounded-lg text-xs">
                    <span className="text-[#FF6B00]">★</span>
                    <span className="font-medium text-foreground">
                      {driverInfo.rating}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">
                  {driverInfo.vehicle}
                </p>
                <p className="text-xs text-muted-foreground">
                  Plate: {driverInfo.plateNumber}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mt-5">
              <button className="flex items-center justify-center gap-2 bg-[#FF6B00] text-white py-2.5 rounded-xl hover:bg-[#FF7A1A] transition-colors text-sm">
                <Phone className="w-4 h-4" />
                <span>Call Driver</span>
              </button>
              <button
                onClick={() => navigate("/chat")}
                className="flex items-center justify-center gap-2 bg-muted text-foreground py-2.5 rounded-xl hover:bg-muted/80 transition-colors text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Message</span>
              </button>
            </div>
          </div>

          <div className="bg-white border border-border rounded-2xl shadow-sm p-6">
            <h3 className="text-base font-semibold text-foreground mb-4">
              Status Updates
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-[#16A34A] w-7 h-7 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="w-0.5 h-full bg-muted mt-1" />
                </div>
                <div className="pb-4">
                  <p className="text-foreground">Driver En Route</p>
                  <p className="text-xs text-muted-foreground">
                    2:45 PM • Driver is on the way to your location
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-[#16A34A] w-7 h-7 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                  <div className="w-0.5 h-full bg-muted mt-1" />
                </div>
                <div className="pb-4">
                  <p className="text-foreground">Request Confirmed</p>
                  <p className="text-xs text-muted-foreground">
                    2:40 PM • Tow truck assigned to your request
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="bg-[#16A34A] w-7 h-7 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full" />
                  </div>
                </div>
                <div>
                  <p className="text-foreground">Request Placed</p>
                  <p className="text-xs text-muted-foreground">
                    2:38 PM • Emergency tow service requested
                  </p>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </main>
    </div>
  );
}

