import { useNavigate } from "react-router";
import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import {
  CheckCircle2,
  Clock,
  Wrench,
  Calendar,
  Shield,
  MapPin,
  Award,
  CreditCard,
  Star,
} from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export function DesktopHomePage() {
  const navigate = useNavigate();

  const steps = [
    {
      icon: <CheckCircle2 className="w-12 h-12 text-orange-500" />,
      title: "Register Your Vehicle",
      description: "Add your vehicle details and choose a plan.",
      image:
        "https://images.unsplash.com/photo-1631540700964-6e292543024c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMGNoZWNrbGlzdCUyMHJlZ2lzdHJhdGlvbiUyMGZvcm18ZW58MXx8fHwxNzY4NjYxNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Clock className="w-12 h-12 text-orange-500" />,
      title: "Emergency Call",
      description: "Contact us 24/7 when you need assistance.",
      image:
        "https://images.unsplash.com/photo-1575259711652-42e26c56d354?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbWVyZ2VuY3klMjBwaG9uZSUyMGNhbGwlMjBoZWxwfGVufDF8fHx8MTc2ODY2MTM1MXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Wrench className="w-12 h-12 text-orange-500" />,
      title: "We Handle Everything",
      description: "Towing, repairs, and workshop coordination.",
      image:
        "https://images.unsplash.com/photo-1619642737579-a7474bee1044?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pYyUyMHdvcmtpbmclMjBjYXIlMjByZXBhaXJ8ZW58MXx8fHwxNzY4NjYxMzUxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      icon: <Calendar className="w-12 h-12 text-orange-500" />,
      title: "Safe Delivery",
      description: "Your vehicle delivered back to your doorstep.",
      image:
        "https://images.unsplash.com/photo-1742069029207-0aacf8fa4401?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbGF0YmVkJTIwdG93JTIwdHJ1Y2slMjBjYXJ8ZW58MXx8fHwxNzY4NjYxNzY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  const benefits = [
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      text: "24/7 Emergency Assistance",
    },
    {
      icon: <MapPin className="w-8 h-8 text-orange-500" />,
      text: "Door-to-Door Vehicle Handling",
    },
    {
      icon: <Award className="w-8 h-8 text-orange-500" />,
      text: "Trusted Repair Workshops",
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      text: "Monthly Subscription Ease",
    },
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      text: "Comprehensive Coverage",
    },
    {
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      text: "Professional Service",
    },
  ];

  const plans = [
    {
      name: "TowLink Basic",
      price: "2,999",
      features: [
        "Basic towing service",
        "Standard distance coverage",
        "Business hours support",
      ],
    },
    {
      name: "TowLink Plus",
      price: "4,999",
      features: [
        "Priority towing",
        "Extended distance",
        "Workshop coordination",
        "Home drop-off",
      ],
      popular: true,
    },
    {
      name: "TowLink Premium",
      price: "7,999",
      features: [
        "VIP priority service",
        "Unlimited distance",
        "Premium workshops",
        "Concierge service",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "Karachi",
      rating: 5,
      comment:
        "TowLink saved me when my car broke down on the highway. Quick response and professional service!",
      avatar: "AH",
    },
    {
      name: "Sara Khan",
      location: "Lahore",
      rating: 5,
      comment:
        "Best subscription service! The peace of mind knowing help is just one call away is priceless.",
      avatar: "SK",
    },
    {
      name: "Ali Raza",
      location: "Islamabad",
      rating: 5,
      comment:
        "Professional team, transparent pricing, and excellent customer support. Highly recommended!",
      avatar: "AR",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-[120px] px-20 min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1575270044165-0337433d0881?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3clMjB0cnVjayUyMHRvd2luZyUyMGJyb2tlbiUyMGNhcnxlbnwxfHx8fDE3Njg2NjE3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Tow truck towing car"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <div className="max-w-[560px]">
            <h1 className="text-5xl font-bold text-white">TowLink</h1>
            <h2 className="text-3xl font-semibold mt-3 text-white">
              One Call. Total Recovery.
            </h2>
            <p className="text-base mt-5 leading-relaxed text-white">
              When your vehicle breaks down, TowLink handles everything —
              towing, repairs, and safe delivery back to your home.
            </p>
            <div className="flex gap-4 mt-8">
              <Button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg">
                Subscribe Now
              </Button>
              <Button
                className="px-6 py-2 rounded-lg bg-white text-black hover:bg-gray-100 border-0"
                onClick={() => navigate("/plans")}
              >
                View Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            How TowLink Works
          </h2>
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="h-40 overflow-hidden">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose TowLink */}
      <section className="relative py-24 px-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1759142016096-a9d1a5ebcc09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwc2VydmljZSUyMGV4Y2VsbGVuY2V8ZW58MXx8fHwxNzY4NjYxMzUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Professional service"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/90"></div>
        </div>

        <div className="max-w-[1440px] mx-auto relative z-10">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Why Choose TowLink
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4">
                {benefit.icon}
                <span className="text-base">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Preview */}
      <section className="py-24 px-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            Flexible Subscription Plans
          </h2>
          <div className="flex gap-8 justify-center items-stretch">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="w-80 p-8 rounded-2xl hover:shadow-xl transition-shadow relative flex flex-col h-full"
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-xl font-semibold mb-4">
                    {plan.name}
                  </CardTitle>
                  <div className="text-2xl font-bold">
                    PKR {plan.price}{" "}
                    <span className="text-sm font-normal text-gray-600">
                      / month
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-0 flex flex-col flex-grow">
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm flex items-start gap-2"
                      >
                        <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full rounded-lg"
                    onClick={() => navigate("/plans")}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-20">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-orange-500 text-orange-500"
                      />
                    ))}
                  </div>
                  <p className="text-sm text-gray-700 mb-4 italic leading-relaxed">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-gray-600">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="bg-gray-900 text-white py-12 px-20"
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Wrench className="w-6 h-6 text-orange-500" />
                <span className="font-bold text-lg">TowLink</span>
              </div>
              <p className="text-sm text-gray-400">
                Your reliable 24/7 vehicle recovery partner across Pakistan.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <button
                    type="button"
                    onClick={() => navigate("/home")}
                    className="hover:text-orange-500"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => navigate("/plans")}
                    className="hover:text-orange-500"
                  >
                    Plans
                  </button>
                </li>
                <li>
                  <a
                    href="#how-it-works"
                    className="hover:text-orange-500"
                  >
                    How It Works
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Emergency: 0800-TOWLINK</li>
                <li>Email: support@towlink.pk</li>
                <li>Available 24/7</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Service Areas</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Karachi</li>
                <li>Lahore</li>
                <li>Islamabad</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 TowLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

