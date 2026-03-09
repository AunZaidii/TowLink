import { useIsMobile } from "@/app/components/ui/use-mobile";
import { SuccessScreen } from "./SuccessScreen";
import { DesktopSuccessPage } from "./DesktopSuccessPage";

export function ResponsiveSuccess() {
  const isMobile = useIsMobile();

  return isMobile ? <SuccessScreen /> : <DesktopSuccessPage />;
}

