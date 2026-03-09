import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { SplashScreen } from "./screens/SplashScreen";
import { OnboardingScreen } from "./screens/OnboardingScreen";
import { LoginScreen } from "./screens/LoginScreen";
import { SignupScreen } from "./screens/SignupScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { TowRequestScreen } from "./screens/TowRequestScreen";
import { TrackingScreen } from "./screens/TrackingScreen";
import { PlansScreen } from "./screens/PlansScreen";
import { PaymentScreen } from "./screens/PaymentScreen";
import { SuccessScreen } from "./screens/SuccessScreen";
import { ProfileScreen } from "./screens/ProfileScreen";
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
        Component: HomeScreen,
      },
      {
        path: "request",
        Component: TowRequestScreen,
      },
      {
        path: "tracking",
        Component: TrackingScreen,
      },
      {
        path: "chat",
        Component: ChatScreen,
      },
      {
        path: "plans",
        Component: PlansScreen,
      },
      {
        path: "payment",
        Component: PaymentScreen,
      },
      {
        path: "success",
        Component: SuccessScreen,
      },
      {
        path: "profile",
        Component: ProfileScreen,
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