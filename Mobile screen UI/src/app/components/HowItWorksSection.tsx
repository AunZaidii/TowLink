import { ImageWithFallback } from "./figma/ImageWithFallback";
import { FileText, Phone, Wrench, Truck } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function HowItWorksSection() {
  const steps: Step[] = [
    {
      icon: <FileText className="w-12 h-12 text-[#FF6B00]" />,
      title: "Register Your Vehicle",
      description: "Add your vehicle details and choose a plan.",
    },
    {
      icon: <Phone className="w-12 h-12 text-[#FF6B00]" />,
      title: "Emergency Call",
      description: "Contact us 24/7 when you need assistance.",
    },
    {
      icon: <Wrench className="w-12 h-12 text-[#FF6B00]" />,
      title: "We Handle Everything",
      description: "Towing, repairs, and workshop coordination.",
    },
    {
      icon: <Truck className="w-12 h-12 text-[#FF6B00]" />,
      title: "Safe Delivery",
      description: "Your vehicle delivered back to your doorstep.",
    },
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-3xl text-center mb-8 text-foreground">How TowLink Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="bg-[#FFF4ED] w-16 h-16 rounded-lg flex items-center justify-center mb-4">
              {step.icon}
            </div>
            <h3 className="text-lg mb-2 text-foreground">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
