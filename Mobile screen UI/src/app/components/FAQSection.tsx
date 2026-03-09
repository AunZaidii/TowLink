import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQ {
  question: string;
  answer: string;
}

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      question: "Are repair costs included?",
      answer:
        "Basic repair costs at our partner workshops are covered depending on your plan. Premium plans include more comprehensive coverage. Please check your plan details for specific inclusions.",
    },
    {
      question: "Can I change my plan later?",
      answer:
        "Yes, you can upgrade or downgrade your plan at any time. Changes will take effect from the next billing cycle. Any unused benefits from your current plan will be prorated.",
    },
    {
      question: "What areas do you cover?",
      answer:
        "We provide coverage across major cities in Pakistan including Karachi, Lahore, Islamabad, Rawalpindi, and surrounding areas. Coverage distance varies by plan.",
    },
    {
      question: "How quickly can I get assistance?",
      answer:
        "Our average response time is 15-20 minutes in urban areas. Premium plan subscribers receive priority service with even faster response times.",
    },
    {
      question: "Can I add multiple vehicles?",
      answer:
        "Yes, you can add multiple vehicles to your account. Each vehicle requires a separate subscription plan. Contact our support team for multi-vehicle discounts.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 px-6 bg-white">
      <h2 className="text-2xl text-center mb-6 text-foreground">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3 max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-border rounded-lg overflow-hidden"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-5 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
            >
              <span className="text-left text-sm text-foreground">
                {faq.question}
              </span>
              <ChevronDown
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
              />
            </button>
            {openIndex === index && (
              <div className="px-5 py-4 bg-gray-50 border-t border-border">
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
