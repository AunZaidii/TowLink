import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, CreditCard, Plus, Trash2, Check } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";

interface PaymentMethod {
  id: string;
  type: string;
  lastFour: string;
  expiryDate: string;
  isDefault: boolean;
}

export function PaymentMethodsScreen() {
  const navigate = useNavigate();
  const [showAddCard, setShowAddCard] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([
    {
      id: "1",
      type: "Visa",
      lastFour: "4242",
      expiryDate: "12/25",
      isDefault: true,
    },
    {
      id: "2",
      type: "Mastercard",
      lastFour: "8888",
      expiryDate: "08/26",
      isDefault: false,
    },
  ]);

  const [newCard, setNewCard] = useState({
    cardholderName: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

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

  const handleAddCard = (e: React.FormEvent) => {
    e.preventDefault();
    const lastFour = newCard.cardNumber.replace(/\s/g, "").slice(-4);
    const newPaymentMethod: PaymentMethod = {
      id: String(paymentMethods.length + 1),
      type: "Visa", // In a real app, detect card type
      lastFour: lastFour,
      expiryDate: newCard.expiryDate,
      isDefault: paymentMethods.length === 0,
    };
    setPaymentMethods([...paymentMethods, newPaymentMethod]);
    setNewCard({ cardholderName: "", cardNumber: "", expiryDate: "", cvv: "" });
    setShowAddCard(false);
    setSuccessMessage("Payment method added successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleSetDefault = (id: string) => {
    setPaymentMethods(
      paymentMethods.map((method) => ({
        ...method,
        isDefault: method.id === id,
      }))
    );
    setSuccessMessage("Default payment method updated!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDeleteCard = (id: string) => {
    setPaymentMethods(paymentMethods.filter((method) => method.id !== id));
    setSuccessMessage("Payment method removed!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white">
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-white border-b border-border sticky top-0 z-10">
            <div className="flex items-center px-4 py-4">
              <button
                onClick={() => navigate("/profile")}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
                aria-label="Go back"
              >
                <ArrowLeft className="w-6 h-6 text-foreground" />
              </button>
              <h1 className="text-xl text-foreground ml-4">Payment Methods</h1>
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mx-6 mt-4 bg-[#16A34A] text-white px-4 py-3 rounded-xl">
              {successMessage}
            </div>
          )}

          <div className="px-6 py-6 pb-32">
            {/* Saved Cards */}
            <div className="space-y-4 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className="bg-white border border-border rounded-xl p-4"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="bg-[#FFF4ED] p-3 rounded-lg">
                        <CreditCard className="w-6 h-6 text-[#FF6B00]" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-foreground">{method.type} •••• {method.lastFour}</p>
                        <p className="text-sm text-muted-foreground">Expires {method.expiryDate}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDeleteCard(method.id)}
                      className="p-2 hover:bg-muted rounded-lg transition-colors"
                      aria-label="Delete card"
                    >
                      <Trash2 className="w-5 h-5 text-destructive" />
                    </button>
                  </div>

                  {method.isDefault ? (
                    <div className="flex items-center gap-2 bg-[#FFF4ED] px-3 py-2 rounded-lg">
                      <Check className="w-4 h-4 text-[#FF6B00]" aria-hidden="true" />
                      <span className="text-sm text-[#FF6B00]">Default Payment Method</span>
                    </div>
                  ) : (
                    <button
                      onClick={() => handleSetDefault(method.id)}
                      className="w-full text-center text-sm text-[#FF6B00] hover:underline py-2"
                    >
                      Set as Default
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Add New Card Button */}
            {!showAddCard && (
              <button
                onClick={() => setShowAddCard(true)}
                className="w-full bg-white border-2 border-dashed border-[#FF6B00] text-[#FF6B00] py-4 rounded-xl hover:bg-[#FFF4ED] transition-colors flex items-center justify-center gap-2"
              >
                <Plus className="w-5 h-5" aria-hidden="true" />
                <span>Add New Payment Method</span>
              </button>
            )}

            {/* Add New Card Form */}
            {showAddCard && (
              <div className="bg-white border border-border rounded-xl p-6">
                <h3 className="text-lg text-foreground mb-4">Add New Card</h3>
                <form onSubmit={handleAddCard} className="space-y-4">
                  <div>
                    <label htmlFor="cardholderName" className="block text-sm mb-2 text-foreground">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      id="cardholderName"
                      value={newCard.cardholderName}
                      onChange={(e) =>
                        setNewCard({ ...newCard, cardholderName: e.target.value })
                      }
                      placeholder="John Doe"
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
                      value={newCard.cardNumber}
                      onChange={(e) =>
                        setNewCard({
                          ...newCard,
                          cardNumber: formatCardNumber(e.target.value),
                        })
                      }
                      placeholder="4242 4242 4242 4242"
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
                        value={newCard.expiryDate}
                        onChange={(e) =>
                          setNewCard({
                            ...newCard,
                            expiryDate: formatExpiryDate(e.target.value),
                          })
                        }
                        placeholder="MM/YY"
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
                        value={newCard.cvv}
                        onChange={(e) =>
                          setNewCard({
                            ...newCard,
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

                  <div className="flex gap-3">
                    <button
                      type="button"
                      onClick={() => setShowAddCard(false)}
                      className="flex-1 bg-white text-foreground py-3 rounded-xl border border-border hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-[#FF6B00] text-white py-3 rounded-xl hover:bg-[#FF7A1A] transition-colors"
                    >
                      Add Card
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}
