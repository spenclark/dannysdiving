import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Meet Your Diver</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Internationally trained commercial diver serving Victoria and Vancouver Island
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 border-4 border-primary/20">
                <AvatarImage 
                  src="" 
                  alt="Daniel Garcia - Professional Commercial Diver"
                  className="object-cover"
                  data-testid="img-about-profile"
                />
                <AvatarFallback className="text-6xl bg-primary/10 text-primary">DG</AvatarFallback>
              </Avatar>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
                3+ Years Experience
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-2" data-testid="text-about-name">Daniel Garcia</h3>
              <p className="text-primary font-medium text-lg">Professional Commercial Diver</p>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p data-testid="text-about-bio">
                My name is Daniel Garcia. I was born in Peru and grew up in beautiful British Columbia. 
                My passion for diving took me across the world to Spain, where I studied and earned my 
                certification as a commercial diver.
              </p>
              <p>
                My career has taken me from Europe's largest aquariums to offshore drilling rigs, 
                giving me hands-on experience across every sector of the diving industry. From delicate 
                underwater maintenance work to heavy industrial operations, I've done it all.
              </p>
              <p>
                Now I'm proud to bring that international expertise home to Victoria, providing 
                professional, reliable diving services to boat owners and marinas throughout 
                Vancouver Island.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={() => window.location.href = 'tel:+17785354506'}
                data-testid="button-about-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                (778) 535-4506
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => window.location.href = 'mailto:dannysdivingservices@gmail.com'}
                data-testid="button-about-email"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </div>

            <div className="flex items-center gap-2 text-muted-foreground pt-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span>Serving Victoria, BC & Vancouver Island</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
