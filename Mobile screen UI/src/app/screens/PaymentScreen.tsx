import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { StepIndicator } from "../components/StepIndicator";
import { PlanSummary } from "../components/PlanSummary";

export function PaymentScreen() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [agreed, setAgreed] = useState(false);
  const [vehicleData, setVehicleData] = useState({
    registrationNumber: "",
    make: "",
    model: "",
    year: "",
  });
  const [personalData, setPersonalData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [paymentData, setPaymentData] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const steps = ["Vehicle Details", "Personal Info", "Payment"];

  const handleVehicleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(3);
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (agreed) {
      navigate("/success");
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0; i < match.length; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length >= 2) {
      return v.slice(0, 2) + "/" + v.slice(2, 4);
    }
    return v;
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-border z-10 px-4 py-4">
            <div className="flex items-center mb-6">
              <button
                onClick={() => step === 1 ? navigate("/plans") : setStep(step - 1)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-6 h-6 text-foreground" />
              </button>
            </div>
            <StepIndicator currentStep={step} steps={steps} />
          </div>

          <div className="px-6 py-6 pb-32">
            {/* Step 1: Vehicle Details */}
            {step === 1 && (
              <form onSubmit={handleVehicleSubmit} className="space-y-6">
                <div className="bg-white">
                  <h2 className="text-xl text-foreground mb-6">Vehicle Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="registrationNumber" className="block text-sm mb-2 text-foreground">
                        Vehicle Registration Number
                      </label>
                      <input
                        type="text"
                        id="registrationNumber"
                        value={vehicleData.registrationNumber}
                        onChange={(e) =>
                          setVehicleData({ ...vehicleData, registrationNumber: e.target.value })
                        }
                        placeholder="ABC-1234"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="make" className="block text-sm mb-2 text-foreground">
                        Vehicle Make
                      </label>
                      <input
                        type="text"
                        id="make"
                        value={vehicleData.make}
                        onChange={(e) =>
                          setVehicleData({ ...vehicleData, make: e.target.value })
                        }
                        placeholder="Toyota"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="model" className="block text-sm mb-2 text-foreground">
                        Vehicle Model
                      </label>
                      <input
                        type="text"
                        id="model"
                        value={vehicleData.model}
                        onChange={(e) =>
                          setVehicleData({ ...vehicleData, model: e.target.value })
                        }
                        placeholder="Corolla"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="year" className="block text-sm mb-2 text-foreground">
                        Year
                      </label>
                      <input
                        type="text"
                        id="year"
                        value={vehicleData.year}
                        onChange={(e) =>
                          setVehicleData({ ...vehicleData, year: e.target.value })
                        }
                        placeholder="2020"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <PlanSummary
                  planName="TowLink Plus"
                  planPrice="PKR 4,999"
                  billing="Monthly Subscription"
                />

                <button
                  type="submit"
                  className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
                >
                  Continue
                </button>
              </form>
            )}

            {/* Step 2: Personal Information */}
            {step === 2 && (
              <form onSubmit={handlePersonalSubmit} className="space-y-6">
                <div className="bg-white">
                  <h2 className="text-xl text-foreground mb-6">Personal Information</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm mb-2 text-foreground">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={personalData.fullName}
                        onChange={(e) =>
                          setPersonalData({ ...personalData, fullName: e.target.value })
                        }
                        placeholder="Aun Zaidi"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-foreground">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={personalData.email}
                        onChange={(e) =>
                          setPersonalData({ ...personalData, email: e.target.value })
                        }
                        placeholder="aunzaidi548@gmail.com"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2 text-foreground">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={personalData.phone}
                        onChange={(e) =>
                          setPersonalData({ ...personalData, phone: e.target.value })
                        }
                        placeholder="+923313639870"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm mb-2 text-foreground">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={personalData.address}
                        onChange={(e) =>
                          setPersonalData({ ...personalData, address: e.target.value })
                        }
                        placeholder="F-26 Old Rizvia Society"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <PlanSummary
                  planName="TowLink Plus"
                  planPrice="PKR 4,999"
                  billing="Monthly Subscription"
                />

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 bg-white text-foreground py-4 rounded-xl border border-border hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
                  >
                    Continue
                  </button>
                </div>
              </form>
            )}

            {/* Step 3: Payment Details */}
            {step === 3 && (
              <form onSubmit={handlePaymentSubmit} className="space-y-6">
                <div className="bg-white">
                  <h2 className="text-xl text-foreground mb-6">Payment Details</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="cardholderName" className="block text-sm mb-2 text-foreground">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        id="cardholderName"
                        value={paymentData.cardholderName}
                        onChange={(e) =>
                          setPaymentData({ ...paymentData, cardholderName: e.target.value })
                        }
                        placeholder="Aun Zaidi"
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="cardNumber" className="block text-sm mb-2 text-foreground">
                        Card Number
                      </label>
                      <input
                        type="text"
                        id="cardNumber"
                        value={paymentData.cardNumber}
                        onChange={(e) =>
                          setPaymentData({
                            ...paymentData,
                            cardNumber: formatCardNumber(e.target.value),
                          })
                        }
                        placeholder="4785780038233203"
                        maxLength={19}
                        className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="expiryDate" className="block text-sm mb-2 text-foreground">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          id="expiryDate"
                          value={paymentData.expiryDate}
                          onChange={(e) =>
                            setPaymentData({
                              ...paymentData,
                              expiryDate: formatExpiryDate(e.target.value),
                            })
                          }
                          placeholder="09/28"
                          maxLength={5}
                          className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="cvv" className="block text-sm mb-2 text-foreground">
                          CVV
                        </label>
                        <input
                          type="text"
                          id="cvv"
                          value={paymentData.cvv}
                          onChange={(e) =>
                            setPaymentData({
                              ...paymentData,
                              cvv: e.target.value.replace(/\D/g, "").slice(0, 3),
                            })
                          }
                          placeholder="123"
                          maxLength={3}
                          className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-start gap-3 mt-6">
                      <input
                        type="checkbox"
                        id="terms"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-[#FF6B00] focus:ring-[#FF6B00]"
                      />
                      <label htmlFor="terms" className="text-sm text-foreground">
                        I agree to the Terms & Conditions
                      </label>
                    </div>
                  </div>
                </div>

                <PlanSummary
                  planName="TowLink Plus"
                  planPrice="PKR 4,999"
                  billing="Monthly Subscription"
                />

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 bg-white text-foreground py-4 rounded-xl border border-border hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!agreed}
                    className="flex-1 bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Confirm & Subscribe
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </MobileContainer>
  );
}