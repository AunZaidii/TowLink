import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Phone, MapPin, Car } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";

export function PersonalInfoScreen() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");

  const [personalData, setPersonalData] = useState({
    fullName: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main Street, New York, NY 10001",
  });

  const [vehicleData, setVehicleData] = useState({
    registrationNumber: "ABC-1234",
    make: "Toyota",
    model: "Corolla",
    year: "2020",
    color: "Silver",
  });

  const handlePersonalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Personal information updated successfully!");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleVehicleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Vehicle information updated successfully!");
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
              <h1 className="text-xl text-foreground ml-4">Personal Information</h1>
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mx-6 mt-4 bg-[#16A34A] text-white px-4 py-3 rounded-xl">
              {successMessage}
            </div>
          )}

          {/* Personal Details Section */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFF4ED] p-2 rounded-lg">
                <User className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
              </div>
              <h2 className="text-lg text-foreground">Personal Details</h2>
            </div>

            <form onSubmit={handlePersonalSubmit} className="space-y-4">
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
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
              >
                Update Personal Details
              </button>
            </form>
          </div>

          {/* Vehicle Information Section */}
          <div className="px-6 py-6 border-t-8 border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFF4ED] p-2 rounded-lg">
                <Car className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
              </div>
              <h2 className="text-lg text-foreground">Vehicle Information</h2>
            </div>

            <form onSubmit={handleVehicleSubmit} className="space-y-4 pb-32">
              <div>
                <label htmlFor="registrationNumber" className="block text-sm mb-2 text-foreground">
                  Registration Number
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  value={vehicleData.registrationNumber}
                  onChange={(e) =>
                    setVehicleData({ ...vehicleData, registrationNumber: e.target.value })
                  }
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
                  className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
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
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="color" className="block text-sm mb-2 text-foreground">
                    Color
                  </label>
                  <input
                    type="text"
                    id="color"
                    value={vehicleData.color}
                    onChange={(e) =>
                      setVehicleData({ ...vehicleData, color: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
              >
                Update Vehicle Information
              </button>
            </form>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}
