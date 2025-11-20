import { useEffect } from "react";
import Header from "@/components/Header";
import VideoGallery from "@/components/VideoGallery";
import BeforeAfterVideo from "@/components/BeforeAfterVideo";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone } from "lucide-react";

export default function Videos() {
  useEffect(() => {
    document.title = "Hull Cleaning Before & After Videos | Danny's Diving Services Victoria BC";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Watch before and after videos of our professional hull cleaning in Victoria BC. See dramatic results from our certified commercial divers. Every underwater job documented on video. Call (778) 535-4506");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://dannysdiving.com/videos');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.remove();
    }
  }, []);

  const handleBackHome = () => {
    console.log('Navigate to home');
    window.location.href = '/';
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+17785354506';
  };

  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8">
          <Button 
            variant="ghost" 
            onClick={handleBackHome}
            className="mb-6"
            data-testid="button-back-home"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
        
        <BeforeAfterVideo />
        
        <VideoGallery />
        
        <section className="py-16 bg-card">
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to See Your Boat's Transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Every job is documented on video so you can see exactly what we did. Get a free quote today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                onClick={handleCallNow}
                data-testid="button-videos-cta-call"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (778) 535-4506
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={scrollToContact}
                data-testid="button-videos-cta-quote"
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
