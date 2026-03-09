import { useState } from "react";
import { useNavigate } from "react-router";
import { Truck, MapPin, Clock, Shield } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { motion } from "motion/react";

const onboardingData = [
  {
    icon: Truck,
    title: "Quick Towing Service",
    description: "Get help fast when you need it most. Request a tow truck with just one tap.",
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking",
    description: "Track your tow truck in real-time and know exactly when help will arrive.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "We're here for you around the clock, every day of the year.",
  },
  {
    icon: Shield,
    title: "Safe & Trusted",
    description: "All our drivers are verified professionals dedicated to your safety.",
  },
];

export function OnboardingScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/login");
    }
  };

  const handleSkip = () => {
    navigate("/login");
  };

  const currentData = onboardingData[currentStep];
  const Icon = currentData.icon;

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        {/* Skip Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={handleSkip}
            className="text-muted-foreground hover:text-foreground px-4 py-2"
            aria-label="Skip onboarding"
          >
            Skip
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col items-center justify-center px-8">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center text-center"
          >
            <div className="bg-[#FFF4ED] rounded-full p-8 mb-8">
              <Icon className="w-20 h-20 text-[#FF6B00]" aria-hidden="true" />
            </div>
            <h2 className="text-2xl text-foreground mb-4">{currentData.title}</h2>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              {currentData.description}
            </p>
          </motion.div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mb-8" role="tablist" aria-label="Onboarding progress">
          {onboardingData.map((_, index) => (
            <div
              key={index}
              role="tab"
              aria-selected={index === currentStep}
              aria-label={`Step ${index + 1} of ${onboardingData.length}`}
              className={`h-2 rounded-full transition-all ${
                index === currentStep ? "w-8 bg-[#FF6B00]" : "w-2 bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <div className="p-6 pb-8">
          <button
            onClick={handleNext}
            className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
            aria-label={currentStep === onboardingData.length - 1 ? "Get started" : "Next"}
          >
            {currentStep === onboardingData.length - 1 ? "Get Started" : "Next"}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
