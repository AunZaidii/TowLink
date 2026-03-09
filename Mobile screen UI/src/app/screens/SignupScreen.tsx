import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Lock, Phone, Eye, EyeOff } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";

export function SignupScreen() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  
  // Form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const totalSteps = 2;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete signup - navigate to home
      navigate("/home");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    } else {
      navigate("/login");
    }
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        {/* Header with Back Button */}
        <div className="flex items-center px-4 pt-6 pb-4">
          <button
            onClick={handleBack}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Go back"
          >
            <ArrowLeft className="w-6 h-6 text-foreground" />
          </button>
          <h1 className="text-xl text-foreground ml-4">Create Account</h1>
        </div>

        {/* Progress Indicator */}
        <div className="px-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-muted-foreground">
              Step {currentStep} of {totalSteps}
            </span>
            <span className="text-sm text-muted-foreground">
              {Math.round((currentStep / totalSteps) * 100)}%
            </span>
          </div>
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <div
              className="h-full bg-[#FF6B00] transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              role="progressbar"
              aria-valuenow={currentStep}
              aria-valuemin={1}
              aria-valuemax={totalSteps}
              aria-label={`Step ${currentStep} of ${totalSteps}`}
            />
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleNext} className="flex-1 px-6 overflow-y-auto">
          {currentStep === 1 && (
            <div className="space-y-4">
              <h2 className="text-2xl text-foreground mb-6">Personal Information</h2>
              
              {/* Full Name */}
              <div>
                <label htmlFor="name" className="block text-sm mb-2 text-foreground">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm mb-2 text-foreground">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-4">
              <h2 className="text-2xl text-foreground mb-6">Secure Your Account</h2>
              
              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm mb-2 text-foreground">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    placeholder="Create a password"
                    className="w-full pl-12 pr-12 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                    aria-required="true"
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" aria-hidden="true" />
                    ) : (
                      <Eye className="w-5 h-5" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Must be at least 8 characters
                </p>
              </div>

              {/* Confirm Password */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm mb-2 text-foreground">
                  Confirm Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    placeholder="Re-enter password"
                    className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                    aria-required="true"
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="bg-muted rounded-lg p-4 mt-6">
                <p className="text-sm text-muted-foreground">
                  By creating an account, you agree to our{" "}
                  <button type="button" className="text-[#FF6B00] hover:underline">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button type="button" className="text-[#FF6B00] hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </div>
            </div>
          )}
        </form>

        {/* Continue/Complete Button */}
        <div className="p-6 pb-8">
          <button
            type="submit"
            onClick={handleNext}
            className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
          >
            {currentStep === totalSteps ? "Create Account" : "Continue"}
          </button>
        </div>
      </div>
    </MobileContainer>
  );
}
