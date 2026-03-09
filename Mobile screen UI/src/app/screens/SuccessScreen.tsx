import { useNavigate } from "react-router";
import { CheckCircle2, Home, FileText } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { motion } from "motion/react";

export function SuccessScreen() {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="h-full flex flex-col items-center justify-center bg-white px-6">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="mb-8"
        >
          <div className="bg-[#16A34A]/10 rounded-full p-6">
            <CheckCircle2 className="w-24 h-24 text-[#16A34A]" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Success Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl text-foreground mb-3">Subscription Confirmed!</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            Your TowLink Plus subscription has been activated. You're all set to use emergency roadside assistance services.
          </p>
        </motion.div>

        {/* Confirmation Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-gray-50 rounded-2xl p-6 mb-8 border border-border"
        >
          <h3 className="text-lg text-foreground mb-4">Subscription Details</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Plan</span>
              <span className="text-foreground">TowLink Plus</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Amount</span>
              <span className="text-foreground">PKR 4,999</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Billing</span>
              <span className="text-foreground">Monthly Subscription</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Next Billing</span>
              <span className="text-foreground">March 15, 2026</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Confirmation</span>
              <span className="text-foreground">#TL-2026-0215-001</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="w-full space-y-3"
        >
          <button
            onClick={() => navigate("/home")}
            className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            <span>Go to Home</span>
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="w-full bg-white border-2 border-border text-foreground py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          >
            <FileText className="w-5 h-5" aria-hidden="true" />
            <span>View Receipt</span>
          </button>
        </motion.div>

        {/* Additional Info */}
        <p className="text-xs text-center text-muted-foreground mt-8">
          A confirmation email has been sent to your registered email address
        </p>
      </div>
    </MobileContainer>
  );
}