import { useIsMobile } from "@/app/components/ui/use-mobile";
import { TrackingScreen } from "./TrackingScreen";
import { DesktopTrackingPage } from "./DesktopTrackingPage";

export function ResponsiveTracking() {
  const isMobile = useIsMobile();

  return isMobile ? <TrackingScreen /> : <DesktopTrackingPage />;
}

