import { useState } from "react";
import { useNavigate } from "react-router";
import { Check } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";

export function PlansScreen() {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: "basic",
      name: "TowLink Basic",
      price: "2,999",
      currency: "PKR",
      period: "month",
      features: [
        "Basic towing service",
        "Up to 50km coverage",
        "Business hours support (9 AM - 6 PM)",
        "Standard workshop network",
      ],
    },
    {
      id: "plus",
      name: "TowLink Plus",
      price: "4,999",
      currency: "PKR",
      period: "month",
      popular: true,
      features: [
        "Priority towing",
        "Extended distance coverage (up to 150km)",
        "Workshop coordination",
        "Home drop-off service",
        "24/7 customer support",
      ],
    },
    {
      id: "premium",
      name: "TowLink Premium",
      price: "7,999",
      currency: "PKR",
      period: "month",
      features: [
        "VIP priority service",
        "Unlimited distance coverage",
        "Premium workshop network",
        "Concierge service",
        "24/7 emergency hotline",
        "Replacement vehicle available",
      ],
    },
  ];

  const handleSelectPlan = (planId: string) => {
    setSelectedPlan(planId);
  };

  const handleContinue = () => {
    if (selectedPlan) {
      navigate("/payment");
    }
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-gray-50">
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="px-6 pt-8 pb-6 bg-white">
            <h1 className="text-2xl text-center text-foreground mb-2">Choose Your TowLink Plan</h1>
            <p className="text-sm text-center text-muted-foreground">
              Reliable breakdown recovery wherever you are.
            </p>
          </div>

          {/* Plans */}
          <div className="px-6 py-6 space-y-4 pb-32">
            {plans.map((plan) => (
              <button
                key={plan.id}
                onClick={() => handleSelectPlan(plan.id)}
                className={`w-full text-left bg-white border rounded-2xl p-6 transition-all relative shadow-sm hover:shadow-md ${
                  selectedPlan === plan.id
                    ? "border-[#FF6B00] shadow-md"
                    : "border-border"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FF6B00] text-white px-4 py-1 rounded-full text-xs">
                    Most Popular
                  </div>
                )}

                {/* Plan Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg text-foreground mb-2">{plan.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl text-foreground">{plan.currency} {plan.price}</span>
                      <span className="text-sm text-muted-foreground">/ {plan.period}</span>
                    </div>
                  </div>
                  <div
                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all mt-1 ${
                      selectedPlan === plan.id
                        ? "border-[#FF6B00] bg-[#FF6B00]"
                        : "border-gray-300"
                    }`}
                  >
                    {selectedPlan === plan.id && (
                      <Check className="w-4 h-4 text-white" aria-hidden="true" />
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-2 mt-4 pt-4 border-t border-border">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] mt-2 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Subscribe Button */}
                {selectedPlan === plan.id && (
                  <button
                    className="w-full mt-4 bg-[#FF6B00] text-white py-3 rounded-xl hover:bg-[#FF7A1A] transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContinue();
                    }}
                  >
                    Subscribe Now
                  </button>
                )}
              </button>
            ))}
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}