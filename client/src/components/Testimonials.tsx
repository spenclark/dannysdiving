import { Card, CardContent } from "@/components/ui/card";
import { Star, ExternalLink } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Stuart Dahlgren",
    rating: 5,
    text: "Danny is very friendly and responds quickly. Pricing is very reasonable, and he provides a video of the before and after.",
    source: "Google",
  },
  {
    name: "Chris and Anne Daley",
    rating: 5,
    text: "Prompt and personably. Fair pricing and accurate time keeping. Took great video of before and after. I will definitely use Danny the next time.",
    source: "Google",
  },
  {
    name: "Thorsten Hoefling",
    rating: 5,
    text: "Danny cleaned the hull of our boat twice and changed the zincs in the water. He will send you a video of the finished work. Super friendly guy, will definitely ask for his services again!",
    source: "Google",
  },
  {
    name: "John Bain",
    rating: 5,
    text: "Danny did a great job replacing zincs, bottom scrub AND provided video of the job!",
    source: "Google",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="hover-elevate"
              data-testid={`testimonial-${index}`}
            >
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <SiGoogle className="w-5 h-5 text-muted-foreground" aria-label="Google review" />
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            data-testid="button-google-reviews"
          >
            <a
              href="https://share.google/jPX1F6I1wnMGh4LCa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <SiGoogle className="w-5 h-5" />
              <span>Read More Reviews on Google</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
