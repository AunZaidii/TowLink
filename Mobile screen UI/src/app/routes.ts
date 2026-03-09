import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { SplashScreen } from "./screens/SplashScreen";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { ResponsiveHome } from "./screens/ResponsiveHome";
import { TowRequestScreen } from "./screens/TowRequestScreen";
import { TrackingScreen } from "./screens/TrackingScreen";
import { PlansScreen } from "./screens/PlansScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { SuccessScreen } from "./screens/SuccessScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
import { ResponsivePlans } from "./screens/ResponsivePlans";
import { ResponsiveTracking } from "./screens/ResponsiveTracking";
import { ResponsiveProfile } from "./screens/ResponsiveProfile";
import { ResponsivePayment } from "./screens/ResponsivePayment";
import { ResponsiveSuccess } from "./screens/ResponsiveSuccess";
import { PersonalInfoScreen } from "./screens/PersonalInfoScreen";
import { PaymentMethodsScreen } from "./screens/PaymentMethodsScreen";
import { PrivacySecurityScreen } from "./screens/PrivacySecurityScreen";
import { ChatScreen } from "./screens/ChatScreen";
import { ErrorScreen } from "./screens/ErrorScreen";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: SplashScreen,
      },
      {
        path: "onboarding",
        Component: OnboardingScreen,
      },
      {
        path: "login",
        Component: LoginScreen,
      },
      {
        path: "signup",
        Component: SignupScreen,
      },
      {
        path: "home",
        Component: ResponsiveHome,
      },
      {
        path: "request",
        Component: TowRequestScreen,
      },
      {
        path: "tracking",
        Component: ResponsiveTracking,
      },
      {
        path: "chat",
        Component: ChatScreen,
      },
      {
        path: "plans",
        Component: ResponsivePlans,
      },
      {
        path: "payment",
        Component: ResponsivePayment,
      },
      {
        path: "success",
        Component: ResponsiveSuccess,
      },
      {
        path: "profile",
        Component: ResponsiveProfile,
      },
      {
        path: "profile/personal-info",
        Component: PersonalInfoScreen,
      },
      {
        path: "profile/payment",
        Component: PaymentMethodsScreen,
      },
      {
        path: "profile/security",
        Component: PrivacySecurityScreen,
      },
      {
        path: "error",
        Component: ErrorScreen,
      },
    ],
  },
]);