import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { CheckCircle2, Phone } from "lucide-react";

export function DesktopSuccessPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-20">
      <Card className="max-w-2xl w-full p-12 text-center">
        <CardContent className="p-0">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h1 className="text-3xl font-semibold mb-4">Welcome to TowLink</h1>

          <p className="text-base text-gray-600 mb-8 max-w-md mx-auto">
            Your subscription is active. Save our helpline number for
            emergencies.
          </p>

          <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
            <div className="flex items-center justify-center gap-3 mb-2">
              <Phone className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-gray-600">Emergency Helpline</span>
            </div>
            <div className="text-2xl font-bold text-orange-600">
              0800-TOWLINK
            </div>
            <div className="text-sm text-gray-600 mt-1">
              (0800-869-5465)
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-sm text-gray-600">
              You will receive a confirmation email shortly with your
              subscription details and emergency contact information.
            </p>

            <div className="flex gap-4 justify-center pt-4">
              <Button
                variant="outline"
                className="px-6"
                onClick={() => navigate("/home")}
              >
                Back to Home
              </Button>
              <Button
                className="bg-orange-500 hover:bg-orange-600 px-6"
                onClick={() => navigate("/profile")}
              >
                Add Another Vehicle
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

