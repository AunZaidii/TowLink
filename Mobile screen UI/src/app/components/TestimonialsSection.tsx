import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  location: string;
  initials: string;
  rating: number;
  text: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: "Ahmed Hassan",
      location: "Karachi",
      initials: "AH",
      rating: 5,
      text: "TowLink saved me when my car broke down on the highway. Quick response and professional service!",
    },
    {
      name: "Sara Khan",
      location: "Lahore",
      initials: "SK",
      rating: 5,
      text: "Best subscription service! The peace of mind knowing help is just one call away is priceless.",
    },
    {
      name: "Ali Raza",
      location: "Islamabad",
      initials: "AR",
      rating: 5,
      text: "Professional team, transparent pricing, and excellent customer support. Highly recommended!",
    },
  ];

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl text-center mb-8 text-foreground">What Our Customers Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            {/* Star Rating */}
            <div className="flex gap-1 mb-4">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#FF6B00] text-[#FF6B00]"
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm text-muted-foreground italic mb-6">
              "{testimonial.text}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF6B00] rounded-full flex items-center justify-center">
                <span className="text-white font-semibold">{testimonial.initials}</span>
              </div>
              <div>
                <p className="text-sm text-foreground">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
