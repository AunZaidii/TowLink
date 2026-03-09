import { useIsMobile } from "@/app/components/ui/use-mobile";
import { PaymentScreen } from "./PaymentScreen";
import { DesktopPaymentPage } from "./DesktopPaymentPage";

export function ResponsivePayment() {
  const isMobile = useIsMobile();

  return isMobile ? <PaymentScreen /> : <DesktopPaymentPage />;
}

