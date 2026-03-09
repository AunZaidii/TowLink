import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Label } from "@/app/components/ui/label";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { Checkbox } from "@/app/components/ui/checkbox";
import { Check } from "lucide-react";

export function DesktopPaymentPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const planId = location.state?.plan || "plus";
  const [currentStep, setCurrentStep] = useState(1);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const planDetails = {
    basic: { name: "TowLink Basic", price: "2,999" },
    plus: { name: "TowLink Plus", price: "4,999" },
    premium: { name: "TowLink Premium", price: "7,999" },
  };

  const plan =
    planDetails[planId as keyof typeof planDetails] || planDetails.plus;

  const steps = [
    { number: 1, label: "Vehicle Details" },
    { number: 2, label: "Personal Info" },
    { number: 3, label: "Payment" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else if (agreedToTerms) {
      navigate("/success");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Progress Steps */}
      <div className="bg-white border-b">
        <div className="max-w-[1440px] mx-auto px-20 py-8">
          <div className="flex items-center justify-center gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center gap-8">
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                      currentStep >= step.number
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <Check className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${
                      currentStep >= step.number
                        ? "text-gray-900"
                        : "text-gray-500"
                    }`}
                  >
                    {step.label}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-16 h-[2px] bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1440px] mx-auto px-20 py-12">
        <div className="flex gap-8">
          {/* Form Section */}
          <div className="flex-1">
            <Card className="p-8">
              <form onSubmit={handleSubmit}>
                {currentStep === 1 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-6">
                      Vehicle Details
                    </h2>
                    <div className="space-y-2">
                      <Label
                        htmlFor="registration"
                        className="text-xs font-medium"
                      >
                        Vehicle Registration Number
                      </Label>
                      <Input
                        id="registration"
                        placeholder="ABC-1234"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="make" className="text-xs font-medium">
                        Vehicle Make
                      </Label>
                      <Input
                        id="make"
                        placeholder="Toyota"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="model" className="text-xs font-medium">
                        Vehicle Model
                      </Label>
                      <Input
                        id="model"
                        placeholder="Corolla"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="year" className="text-xs font-medium">
                        Year
                      </Label>
                      <Input
                        id="year"
                        placeholder="2020"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-6">
                      Personal Information
                    </h2>
                    <div className="space-y-2">
                      <Label
                        htmlFor="fullname"
                        className="text-xs font-medium"
                      >
                        Full Name
                      </Label>
                      <Input
                        id="fullname"
                        placeholder="John Doe"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-xs font-medium">
                        Email Address
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-xs font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        placeholder="+92 300 1234567"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address" className="text-xs font-medium">
                        Address
                      </Label>
                      <Input
                        id="address"
                        placeholder="123 Main Street, Karachi"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-4">
                    <h2 className="text-2xl font-semibold mb-6">
                      Payment Details
                    </h2>
                    <div className="space-y-2">
                      <Label
                        htmlFor="cardname"
                        className="text-xs font-medium"
                      >
                        Cardholder Name
                      </Label>
                      <Input
                        id="cardname"
                        placeholder="John Doe"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label
                        htmlFor="cardnumber"
                        className="text-xs font-medium"
                      >
                        Card Number
                      </Label>
                      <Input
                        id="cardnumber"
                        placeholder="1234 5678 9012 3456"
                        className="h-12 rounded-lg text-sm"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label
                          htmlFor="expiry"
                          className="text-xs font-medium"
                        >
                          Expiry Date
                        </Label>
                        <Input
                          id="expiry"
                          placeholder="MM/YY"
                          className="h-12 rounded-lg text-sm"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv" className="text-xs font-medium">
                          CVV
                        </Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="h-12 rounded-lg text-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-6">
                      <Checkbox
                        id="terms"
                        checked={agreedToTerms}
                        onCheckedChange={(checked) =>
                          setAgreedToTerms(checked as boolean)
                        }
                      />
                      <label
                        htmlFor="terms"
                        className="text-xs cursor-pointer"
                      >
                        I agree to the Terms & Conditions
                      </label>
                    </div>
                  </div>
                )}

                <div className="flex gap-4 mt-8">
                  {currentStep > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(currentStep - 1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                  )}
                  <Button
                    type="submit"
                    className="flex-1 bg-orange-500 hover:bg-orange-600"
                    disabled={currentStep === 3 && !agreedToTerms}
                  >
                    {currentStep === 3 ? "Confirm & Subscribe" : "Continue"}
                  </Button>
                </div>
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="w-[360px]">
            <Card className="p-6 sticky top-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-xl font-semibold">
                  Your TowLink Plan
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-600">Plan</div>
                    <div className="font-semibold">{plan.name}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600">Billing</div>
                    <div className="font-semibold">Monthly Subscription</div>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total</span>
                      <span className="text-2xl font-bold">
                        PKR {plan.price}
                      </span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">per month</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

