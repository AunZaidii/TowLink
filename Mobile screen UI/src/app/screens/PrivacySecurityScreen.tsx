import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, Lock, Eye, EyeOff, Bell, MapPin, Shield } from "lucide-react";
import { MobileContainer } from "../components/MobileContainer";
import { BottomNavigation } from "../components/BottomNavigation";

export function PrivacySecurityScreen() {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [privacySettings, setPrivacySettings] = useState({
    locationSharing: true,
    activityTracking: true,
    notifications: true,
    twoFactorAuth: false,
  });

  const handlePasswordChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match!");
      return;
    }
    setSuccessMessage("Password changed successfully!");
    setPasswordData({ currentPassword: "", newPassword: "", confirmPassword: "" });
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleToggleSetting = (setting: keyof typeof privacySettings) => {
    setPrivacySettings({
      ...privacySettings,
      [setting]: !privacySettings[setting],
    });
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
              <h1 className="text-xl text-foreground ml-4">Privacy & Security</h1>
            </div>
          </div>

          {/* Success Message */}
          {successMessage && (
            <div className="mx-6 mt-4 bg-[#16A34A] text-white px-4 py-3 rounded-xl">
              {successMessage}
            </div>
          )}

          {/* Change Password Section */}
          <div className="px-6 py-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFF4ED] p-2 rounded-lg">
                <Lock className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
              </div>
              <h2 className="text-lg text-foreground">Change Password</h2>
            </div>

            <form onSubmit={handlePasswordChange} className="space-y-4">
              <div>
                <label htmlFor="currentPassword" className="block text-sm mb-2 text-foreground">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showCurrentPassword ? "text" : "password"}
                    id="currentPassword"
                    value={passwordData.currentPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, currentPassword: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                    aria-label="Toggle password visibility"
                  >
                    {showCurrentPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="newPassword" className="block text-sm mb-2 text-foreground">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showNewPassword ? "text" : "password"}
                    id="newPassword"
                    value={passwordData.newPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, newPassword: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword(!showNewPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                    aria-label="Toggle password visibility"
                  >
                    {showNewPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm mb-2 text-foreground">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirmPassword"
                    value={passwordData.confirmPassword}
                    onChange={(e) =>
                      setPasswordData({ ...passwordData, confirmPassword: e.target.value })
                    }
                    className="w-full px-4 py-3 bg-[#F5F5F5] rounded-lg border-2 border-transparent focus:border-[#FF6B00] focus:outline-none transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1"
                    aria-label="Toggle password visibility"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF6B00] text-white py-4 rounded-xl hover:bg-[#FF7A1A] transition-colors shadow-lg"
              >
                Update Password
              </button>
            </form>
          </div>

          {/* Privacy Settings Section */}
          <div className="px-6 py-6 border-t-8 border-gray-100 pb-32">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#FFF4ED] p-2 rounded-lg">
                <Shield className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
              </div>
              <h2 className="text-lg text-foreground">Privacy Settings</h2>
            </div>

            <div className="space-y-4">
              {/* Location Sharing */}
              <div className="flex items-center justify-between bg-white border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFF4ED] p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Location Sharing</p>
                    <p className="text-xs text-muted-foreground">Share location with driver</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggleSetting("locationSharing")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    privacySettings.locationSharing ? "bg-[#FF6B00]" : "bg-gray-300"
                  }`}
                  aria-label="Toggle location sharing"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.locationSharing ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Activity Tracking */}
              <div className="flex items-center justify-between bg-white border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFF4ED] p-2 rounded-lg">
                    <Shield className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Activity Tracking</p>
                    <p className="text-xs text-muted-foreground">Track service history</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggleSetting("activityTracking")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    privacySettings.activityTracking ? "bg-[#FF6B00]" : "bg-gray-300"
                  }`}
                  aria-label="Toggle activity tracking"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.activityTracking ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between bg-white border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFF4ED] p-2 rounded-lg">
                    <Bell className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Push Notifications</p>
                    <p className="text-xs text-muted-foreground">Receive service updates</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggleSetting("notifications")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    privacySettings.notifications ? "bg-[#FF6B00]" : "bg-gray-300"
                  }`}
                  aria-label="Toggle notifications"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.notifications ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>

              {/* Two-Factor Authentication */}
              <div className="flex items-center justify-between bg-white border border-border rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="bg-[#FFF4ED] p-2 rounded-lg">
                    <Lock className="w-5 h-5 text-[#FF6B00]" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground">Two-Factor Authentication</p>
                    <p className="text-xs text-muted-foreground">Extra security for login</p>
                  </div>
                </div>
                <button
                  onClick={() => handleToggleSetting("twoFactorAuth")}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    privacySettings.twoFactorAuth ? "bg-[#FF6B00]" : "bg-gray-300"
                  }`}
                  aria-label="Toggle two-factor authentication"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      privacySettings.twoFactorAuth ? "translate-x-6" : "translate-x-0.5"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        <BottomNavigation />
      </div>
    </MobileContainer>
  );
}
