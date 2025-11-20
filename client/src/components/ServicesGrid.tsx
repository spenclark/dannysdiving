import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { services } from "@shared/services";
import { Link } from "wouter";

export default function ServicesGrid() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Diving Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional diving solutions for commercial and private vessels in Victoria BC and Vancouver Island
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              <Card className="hover-elevate active-elevate-2 overflow-hidden cursor-pointer h-full" data-testid={`card-service-${service.slug}`}>
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader className="space-y-2">
                  <CardTitle className="text-2xl">{service.title.replace(' Victoria BC', '')}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description.split('.')[0] + '.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-primary font-medium group">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
