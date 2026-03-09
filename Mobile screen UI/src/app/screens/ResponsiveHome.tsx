import { useIsMobile } from "@/app/components/ui/use-mobile";
import { HomeScreen } from "./HomeScreen";
import { DesktopHomePage } from "./DesktopHomePage";

export function ResponsiveHome() {
  const isMobile = useIsMobile();

  return isMobile ? <HomeScreen /> : <DesktopHomePage />;
}

