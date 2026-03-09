import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Truck } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { motion } from "motion/react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/onboarding");
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <MobileContainer>
      <div className="h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#FF6B00] to-[#FF8C00] p-8">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="bg-white rounded-full p-8 shadow-lg mb-6">
            <Truck className="w-16 h-16 text-[#FF6B00]" aria-hidden="true" />
          </div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl text-white mb-2"
          >
            TowLink
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white/90 text-center"
          >
            Emergency Roadside Assistance
          </motion.p>
        </motion.div>
      </div>
    </MobileContainer>
  );
}
