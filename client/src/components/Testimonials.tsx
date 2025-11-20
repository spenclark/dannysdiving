import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

// todo: remove mock functionality
const testimonials = [
  {
    name: "Captain Mike Richardson",
    vessel: "M/V Ocean Spirit",
    rating: 5,
    text: "Danny did an exceptional job cleaning our 45-foot sailboat hull. The difference in performance was immediately noticeable. Professional, punctual, and thorough.",
  },
  {
    name: "Sarah Thompson",
    vessel: "Island Princess",
    rating: 5,
    text: "Outstanding underwater inspection service. Danny provided a detailed report with photos and recommendations. Found issues we didn't know existed. Highly recommend!",
  },
  {
    name: "Pacific Marina Management",
    vessel: "Commercial Client",
    rating: 5,
    text: "We've used Danny's services for multiple vessels. Always reliable, professional, and competitively priced. Our go-to diver for all marine maintenance.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by boat owners and commercial clients across Victoria BC
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-base leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.vessel}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
