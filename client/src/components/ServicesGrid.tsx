import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hullCleaningImg from "@assets/stock_images/professional_commerc_fe47fda8.jpg";
import inspectionImg from "@assets/stock_images/underwater_boat_hull_a2ba17a3.jpg";
import zincImg from "@assets/stock_images/professional_commerc_90fd6021.jpg";
import mooringImg from "@assets/stock_images/underwater_boat_hull_5ed3bff6.jpg";
import retrievalImg from "@assets/stock_images/commercial_diver_oce_e582419b.jpg";
import commercialImg from "@assets/stock_images/commercial_diver_oce_4aae3a08.jpg";

const services = [
  {
    title: "Hull Cleaning",
    description: "Professional underwater hull cleaning to improve performance and fuel efficiency. Remove barnacles, algae, and marine growth.",
    image: hullCleaningImg,
    slug: "hull-cleaning"
  },
  {
    title: "Underwater Inspections",
    description: "Comprehensive underwater inspections of hulls, propellers, rudders, and through-hulls. Detailed reports provided.",
    image: inspectionImg,
    slug: "underwater-inspections"
  },
  {
    title: "Zinc Anode Replacement",
    description: "Professional zinc anode inspection and replacement to protect your vessel from corrosion and extend its lifespan.",
    image: zincImg,
    slug: "zinc-changes"
  },
  {
    title: "Mooring Services",
    description: "Expert mooring inspection, maintenance, and installation. Ensure your vessel stays secure in all conditions.",
    image: mooringImg,
    slug: "mooring-services"
  },
  {
    title: "Lost Item Retrieval",
    description: "Underwater search and recovery services. Recover valuable items, tools, and equipment from the ocean floor.",
    image: retrievalImg,
    slug: "lost-item-retrieval"
  },
  {
    title: "Commercial Diving",
    description: "Licensed commercial diving services for marine construction, inspections, and specialized underwater projects.",
    image: commercialImg,
    slug: "commercial-diving"
  }
];

export default function ServicesGrid() {
  const handleLearnMore = (slug: string) => {
    console.log(`Navigate to service: ${slug}`);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our Diving Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional diving solutions for commercial and private vessels in Victoria BC and Vancouver Island
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.slug} className="hover-elevate overflow-hidden" data-testid={`card-service-${service.slug}`}>
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl">{service.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button 
                  variant="ghost" 
                  className="w-full justify-between group"
                  onClick={() => handleLearnMore(service.slug)}
                  data-testid={`button-learn-more-${service.slug}`}
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
