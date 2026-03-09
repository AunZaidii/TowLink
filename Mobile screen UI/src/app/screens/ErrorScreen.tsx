import { useNavigate } from "react-router";
import { AlertCircle, Home, RefreshCcw } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { motion } from "motion/react";

export function ErrorScreen() {
  const navigate = useNavigate();

  const handleRetry = () => {
    // In a real app, this would retry the failed operation
    navigate("/home");
  };

  const handleGoHome = () => {
    navigate("/home");
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col items-center justify-center bg-white px-6">
        {/* Error Icon */}
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
          <div className="bg-destructive/10 rounded-full p-6">
            <AlertCircle className="w-24 h-24 text-destructive" aria-hidden="true" />
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl text-foreground mb-3">Oops! Something Went Wrong</h1>
          <p className="text-muted-foreground max-w-sm mx-auto">
            We couldn't complete your request. Please check your connection and try again.
          </p>
        </motion.div>

        {/* Error Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="w-full bg-destructive/5 border-l-4 border-destructive rounded-lg p-5 mb-8"
        >
          <h3 className="text-sm text-foreground mb-2">Error Details</h3>
          <div className="space-y-1">
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Error Code:</span> ERR_NETWORK_CONNECTION
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Time:</span> Feb 15, 2026 at 2:45 PM
            </p>
            <p className="text-xs text-muted-foreground">
              <span className="font-medium">Reference:</span> #TL-ERR-2026-0215
            </p>
          </div>
        </motion.div>

        {/* Suggested Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="w-full mb-8"
        >
          <h3 className="text-sm text-foreground mb-3">Try these solutions:</h3>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B00] mt-1">•</span>
              <span>Check your internet connection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B00] mt-1">•</span>
              <span>Ensure location services are enabled</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#FF6B00] mt-1">•</span>
              <span>Try again in a few moments</span>
            </li>
          </ul>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="w-full space-y-3"
        >
          <button
            onClick={handleRetry}
            className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg flex items-center justify-center gap-2"
          >
            <RefreshCcw className="w-5 h-5" aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <button
            onClick={handleGoHome}
            className="w-full bg-white border-2 border-border text-foreground py-4 rounded-xl hover:bg-muted transition-colors flex items-center justify-center gap-2"
          >
            <Home className="w-5 h-5" aria-hidden="true" />
            <span>Go to Home</span>
          </button>
        </motion.div>

        {/* Support Link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8"
        >
          <p className="text-sm text-center text-muted-foreground">
            Still having issues?{" "}
            <button className="text-[#FF6B00] hover:underline">
              Contact Support
            </button>
          </p>
        </motion.div>
      </div>
    </MobileContainer>
  );
}
