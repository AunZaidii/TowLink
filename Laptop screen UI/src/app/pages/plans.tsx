import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/components/ui/accordion';
import { CheckCircle2 } from 'lucide-react';

export function PlansPage() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const plans = [
    {
      id: 'basic',
      name: 'TowLink Basic',
      price: '2,999',
      tag: '',
      features: [
        'Basic towing service',
        'Up to 50km coverage',
        'Business hours support (9 AM - 6 PM)',
        'Standard workshop network',
      ],
    },
    {
      id: 'plus',
      name: 'TowLink Plus',
      price: '4,999',
      tag: 'Most Popular',
      features: [
        'Priority towing',
        'Extended distance coverage (up to 150km)',
        'Workshop coordination',
        'Home drop-off service',
        '24/7 customer support',
      ],
    },
    {
      id: 'premium',
      name: 'TowLink Premium',
      price: '7,999',
      tag: '',
      features: [
        'VIP priority service',
        'Unlimited distance coverage',
        'Premium workshop network',
        'Concierge service',
        '24/7 emergency hotline',
        'Replacement vehicle available',
      ],
    },
  ];

  const faqs = [
    {
      question: 'Are repair costs included?',
      answer: 'Repair costs are handled separately unless stated in your plan. TowLink covers towing and coordination services.',
    },
    {
      question: 'Can I change my plan later?',
      answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will take effect from the next billing cycle.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We currently cover all major cities in Pakistan including Karachi, Lahore, Islamabad, and surrounding areas. Coverage varies by plan.',
    },
    {
      question: 'How quickly can I get assistance?',
      answer: 'Response times vary by plan: Basic (48 hours), Plus (same day), Premium (within 30 minutes). All plans include 24/7 emergency contact.',
    },
    {
      question: 'Can I add multiple vehicles?',
      answer: 'Yes! You can add multiple vehicles to your subscription at a discounted rate. Contact our support team for multi-vehicle pricing.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="py-16 px-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto text-center">
          <h1 className="text-4xl font-semibold mb-4">Choose Your TowLink Plan</h1>
          <p className="text-base text-gray-600">Reliable breakdown recovery wherever you are.</p>
        </div>
      </section>

      {/* Plan Cards */}
      <section className="py-16 px-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex gap-8 justify-center">
            {plans.map((plan) => (
              <Card
                key={plan.id}
                className={`w-80 p-8 rounded-2xl hover:shadow-xl transition-all cursor-pointer relative ${
                  selectedPlan === plan.id ? 'border-orange-500 border-2' : ''
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.tag && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs px-4 py-1 rounded-full">
                    {plan.tag}
                  </div>
                )}
                <CardHeader className="p-0 mb-6">
                  <CardTitle className="text-[22px] font-semibold mb-4">{plan.name}</CardTitle>
                  <div className="text-2xl font-bold">
                    PKR {plan.price} <span className="text-sm font-normal text-gray-600">/ month</span>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="text-sm flex items-start gap-2 leading-[22px]">
                        <span className="text-orange-500">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/checkout" state={{ plan: plan.id }}>
                    <Button className="w-full rounded-lg bg-orange-500 hover:bg-orange-600">
                      Subscribe Now
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-20 bg-gray-50">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border">
                  <AccordionTrigger className="text-base font-semibold hover:no-underline py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm text-gray-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
