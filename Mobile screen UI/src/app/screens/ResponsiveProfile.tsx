import { useIsMobile } from "@/app/components/ui/use-mobile";
import { ProfileScreen } from "./ProfileScreen";
import { DesktopProfilePage } from "./DesktopProfilePage";

export function ResponsiveProfile() {
  const isMobile = useIsMobile();

  return isMobile ? <ProfileScreen /> : <DesktopProfilePage />;
}

