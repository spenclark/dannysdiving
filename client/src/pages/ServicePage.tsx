import { useEffect } from "react";
import { useRoute } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Phone, ArrowLeft, MapPin } from "lucide-react";
import { getServiceBySlug } from "@shared/services";
import { generateServiceSchema, generateFAQSchema } from "@/lib/schema";

export default function ServicePage() {
  const [, params] = useRoute("/services/:slug");
  const service = params?.slug ? getServiceBySlug(params.slug) : null;

  useEffect(() => {
    if (service) {
      document.title = `${service.title} - Underwater Barnacle Removal | Danny's Diving Services`;
      
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', service.metaDescription);
      }

      const ogImage = document.querySelector('meta[property="og:image"]') || document.createElement('meta');
      ogImage.setAttribute('property', 'og:image');
      ogImage.setAttribute('content', `https://dannysdiving.com${service.image}`);
      if (!document.querySelector('meta[property="og:image"]')) {
        document.head.appendChild(ogImage);
      }

      const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', `https://dannysdiving.com/services/${service.slug}`);
      if (!document.querySelector('link[rel="canonical"]')) {
        document.head.appendChild(canonicalLink);
      }

      const serviceSchemaScript = document.createElement('script');
      serviceSchemaScript.type = 'application/ld+json';
      serviceSchemaScript.id = 'service-schema';
      serviceSchemaScript.text = JSON.stringify(generateServiceSchema(service));
      document.head.appendChild(serviceSchemaScript);

      const faqSchemaScript = document.createElement('script');
      faqSchemaScript.type = 'application/ld+json';
      faqSchemaScript.id = 'faq-schema';
      faqSchemaScript.text = JSON.stringify(generateFAQSchema(service.faqs));
      document.head.appendChild(faqSchemaScript);

      return () => {
        const scripts = document.querySelectorAll('#service-schema, #faq-schema');
        scripts.forEach(script => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        });
      };
    }
  }, [service]);

  const handleCallNow = () => {
    window.location.href = 'tel:+17785354506';
  };

  const handleGetQuote = () => {
    if (service) {
      const subject = encodeURIComponent(`Quote Request: ${service.title.replace(' Victoria BC', '')}`);
      const body = encodeURIComponent(
        `I would like to request a quote for ${service.title.replace(' Victoria BC', '')} services.\n\n` +
        `Name: \n` +
        `Phone: \n` +
        `Email: \n` +
        `Vessel Details: \n` +
        `Additional Information: `
      );
      window.location.href = `mailto:dannysdivingservices@gmail.com?subject=${subject}&body=${body}`;
    }
  };

  const handleBackToServices = () => {
    window.location.href = '/#services';
  };

  if (!service) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-32 pb-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
            <p className="text-muted-foreground mb-8">The service you're looking for doesn't exist.</p>
            <Button onClick={handleBackToServices}>Back to Services</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary/10 via-background to-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <Button 
              variant="ghost" 
              onClick={handleBackToServices}
              className="mb-6"
              data-testid="button-back-services"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to All Services
            </Button>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  {service.h1Title || service.title}
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    onClick={handleCallNow}
                    data-testid="button-call-now"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (778) 535-4506
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    onClick={handleGetQuote}
                    data-testid="button-get-quote"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
              <div className="relative aspect-[4/3] rounded-md overflow-hidden shadow-xl">
                <img 
                  src={service.image}
                  alt={service.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-card">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Why Choose Our {service.title.replace(' Victoria BC', '')} Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <p className="text-base">{benefit}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Our Process</h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Professional, transparent service from start to finish
            </p>
            <div className="space-y-6">
              {service.process.map((step, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                        {index + 1}
                      </span>
                      {step.step}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground ml-13">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <div className="flex items-center justify-center gap-3 mb-8">
              <MapPin className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-center">Service Areas</h2>
            </div>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Proudly serving Victoria BC and Vancouver Island
            </p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {service.serviceAreas.map((area, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 p-3 rounded-md bg-background"
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{area}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Section (if exists) */}
        {service.comparisonSection && (
          <section className="py-16 bg-card">
            <div className="max-w-4xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                {service.comparisonSection.title}
              </h2>
              <p className="text-lg text-muted-foreground mb-12 text-center leading-relaxed">
                {service.comparisonSection.content}
              </p>
              <div className="space-y-6">
                {service.comparisonSection.differences.map((diff, index) => (
                  <Card key={index} className="border-l-4 border-l-primary">
                    <CardHeader>
                      <CardTitle className="text-xl">{diff.service}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="leading-relaxed">{diff.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Pricing Section */}
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Pricing</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {service.pricing}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleCallNow}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call for Quote: (778) 535-4506
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={handleGetQuote}
              >
                Request Free Quote
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Contact Danny's Diving Services today for professional {service.title.toLowerCase()} in Victoria BC and Vancouver Island.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                onClick={handleCallNow}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                onClick={handleGetQuote}
              >
                Get Free Quote
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
