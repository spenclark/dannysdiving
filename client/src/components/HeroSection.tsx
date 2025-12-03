import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import heroImage from "@assets/stock_images/commercial_diver_oce_08019dc9.jpg";
import heroVideo from "@assets/HeroVideo_1763687681763.mp4";
import heroPoster from "@assets/hero-poster.webp";

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log("Autoplay prevented, waiting for user interaction");
      }
    };

    video.addEventListener("canplay", playVideo, { once: true });

    return () => {
      video.removeEventListener("canplay", playVideo);
    };
  }, []);

  const handleCallNow = () => {
    console.log("Call button clicked");
    window.location.href = "tel:+17785354506";
  };

  const handleGetQuote = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay={true}
        muted={true}
        loop={true}
        playsInline={true}
        preload="auto"
        poster={heroPoster}
        className="absolute inset-0 z-0 w-full h-full object-cover"
        aria-label="Underwater diving footage showcasing professional diving services"
      >
        <source src={heroVideo} type="video/mp4" />
        <track kind="captions" src="/captions/hero-video.vtt" srcLang="en" label="English" />
      </video>
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center text-white pt-20 pb-24 md:pt-28 md:pb-32">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight tracking-tight">
          <span className="block">Professional Diving Services</span>
          <span className="block mt-2 text-primary-foreground/90">in Victoria BC</span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed text-white/90" data-testid="text-hero-description">
          Expert hull cleaning, underwater inspections, and marine maintenance. 
          Serving boat owners across Victoria and Vancouver Island.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="text-lg md:text-xl px-6 md:px-8 py-6"
            onClick={handleCallNow}
            data-testid="button-hero-call"
          >
            <Phone className="mr-2 h-5 w-5 md:h-6 md:w-6" />
            (778) 535-4506
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg md:text-xl px-6 md:px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
            onClick={handleGetQuote}
            data-testid="button-hero-quote"
          >
            Get a Free Quote
          </Button>
        </div>
      </div>

      <div className="absolute z-10 bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </div>
      </div>
    </section>
  );
}
