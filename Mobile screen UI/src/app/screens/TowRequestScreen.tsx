import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, MapPin, Car, MessageSquare, AlertCircle } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";

export function TowRequestScreen() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    location: "",
    vehicleType: "",
    issue: "",
    additionalNotes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to tracking screen
    navigate("/tracking");
  };

  const vehicleTypes = [
    "Sedan",
    "SUV",
    "Truck",
    "Motorcycle",
    "Van",
  ];

  const commonIssues = [
    "Won't Start",
    "Flat Tire",
    "Accident",
    "Out of Gas",
    "Engine Problem",
    "Other",
  ];

  return (
    <MobileContainer>
      <div className="h-full flex flex-col bg-white overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-border z-10">
          <div className="flex items-center px-4 py-4">
            <button
              onClick={() => navigate("/home")}
              className="p-2 hover:bg-muted rounded-lg transition-colors"
              aria-label="Go back"
            >
              <ArrowLeft className="w-6 h-6 text-foreground" />
            </button>
            <h1 className="text-xl text-foreground ml-4">Request Tow Service</h1>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-[#FFF4ED] border-l-4 border-[#FF6B00] px-6 py-4 mx-6 mt-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#FF6B00] mt-0.5" aria-hidden="true" />
            <div>
              <p className="text-sm text-foreground">Emergency Service Active</p>
              <p className="text-xs text-muted-foreground mt-1">
                A tow truck will be dispatched immediately upon confirmation
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex-1 px-6 py-6">
          <div className="space-y-6">
            {/* Current Location */}
            <div>
              <label htmlFor="location" className="block text-sm mb-2 text-foreground">
                Current Location
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <input
                  type="text"
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Enter your location or use GPS"
                  className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors"
                  required
                  aria-required="true"
                />
              </div>
              <button
                type="button"
                className="text-sm text-[#FF6B00] hover:underline mt-2"
              >
                Use Current Location
              </button>
            </div>

            {/* Vehicle Type */}
            <div>
              <label className="block text-sm mb-3 text-foreground">
                Vehicle Type
              </label>
              <div className="grid grid-cols-2 gap-3">
                {vehicleTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setFormData({ ...formData, vehicleType: type })}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      formData.vehicleType === type
                        ? "border-[#FF6B00] bg-[#FFF4ED] text-foreground"
                        : "border-border bg-white text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    <Car className="w-6 h-6 mx-auto mb-2" aria-hidden="true" />
                    <span className="text-sm">{type}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Issue Type */}
            <div>
              <label className="block text-sm mb-3 text-foreground">
                What's the issue?
              </label>
              <div className="grid grid-cols-2 gap-3">
                {commonIssues.map((issue) => (
                  <button
                    key={issue}
                    type="button"
                    onClick={() => setFormData({ ...formData, issue })}
                    className={`p-3 rounded-xl border-2 transition-all text-sm ${
                      formData.issue === issue
                        ? "border-[#FF6B00] bg-[#FFF4ED] text-foreground"
                        : "border-border bg-white text-muted-foreground hover:border-muted-foreground"
                    }`}
                  >
                    {issue}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm mb-2 text-foreground">
                Additional Notes (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" aria-hidden="true" />
                <textarea
                  id="notes"
                  value={formData.additionalNotes}
                  onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                  placeholder="Any additional details..."
                  rows={4}
                  className="w-full pl-12 pr-4 py-4 bg-input-background rounded-xl border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="sticky bottom-0 bg-white pt-6 pb-6 -mx-6 px-6 border-t border-border mt-6">
            <button
              type="submit"
              disabled={!formData.location || !formData.vehicleType || !formData.issue}
              className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Request Tow Service Now
            </button>
            <p className="text-xs text-center text-muted-foreground mt-3">
              Estimated wait time: 10-20 minutes
            </p>
          </div>
        </form>
      </div>
    </MobileContainer>
  );
}
