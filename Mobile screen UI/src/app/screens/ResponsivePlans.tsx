import { useIsMobile } from "@/app/components/ui/use-mobile";
import { PlansScreen } from "./PlansScreen";
import { DesktopPlansPage } from "./DesktopPlansPage";

export function ResponsivePlans() {
  const isMobile = useIsMobile();

  return isMobile ? <PlansScreen /> : <DesktopPlansPage />;
}

