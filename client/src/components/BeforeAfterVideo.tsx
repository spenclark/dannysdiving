import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Play, Pause, Video } from "lucide-react";
import beforeVideo from "@assets/HullCleaningBefore_1763663836016.mp4";
import afterVideo from "@assets/HullCleaningAfter_1763663848002.mp4";
import beforePoster from "@assets/before_1763669755573.jpg";
import afterPoster from "@assets/After_1763669731989.jpg";
import logoImage from "@assets/PHOTO-2025-11-19-20-50-16_1763614659104.jpeg";

interface VideoPlayerProps {
  videoSrc: string;
  posterSrc: string;
  title: string;
  label: "Before" | "After";
  isVisible: boolean;
}

function VideoPlayer({ videoSrc, posterSrc, title, label, isVisible }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [hasPlayedOnce, setHasPlayedOnce] = useState(false);

  useEffect(() => {
    if (isVisible && !shouldLoad) {
      setShouldLoad(true);
    }
  }, [isVisible, shouldLoad]);

  useEffect(() => {
    const playVideo = async () => {
      if (shouldLoad && videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.log('Autoplay prevented, waiting for user interaction');
        }
      }
    };
    playVideo();
  }, [shouldLoad]);

  const togglePlay = async () => {
    if (!videoRef.current) return;
    
    if (!shouldLoad) {
      setShouldLoad(true);
      return;
    }
    
    if (videoRef.current.paused) {
      try {
        await videoRef.current.play();
      } catch (error) {
        console.error('Error playing video:', error);
      }
    } else {
      videoRef.current.pause();
    }
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);
  const handleVideoEnded = () => {
    setHasPlayedOnce(true);
    setIsPlaying(false);
  };
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePlay();
    }
  };

  return (
    <div className="relative group">
      <div className="absolute top-4 left-4 z-10">
        <div className="bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-md font-semibold">
          {label}
        </div>
      </div>
      
      <div className="relative aspect-video bg-muted overflow-hidden rounded-md">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          preload="metadata"
          poster={posterSrc}
          playsInline
          muted
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
          onEnded={handleVideoEnded}
          aria-label={`${label} hull cleaning video: ${title}`}
          data-testid={`video-${label.toLowerCase()}`}
        >
          <source src={videoSrc} type="video/mp4" />
          <track kind="captions" label="English" srcLang="en" />
        </video>
        
        <button
          onClick={togglePlay}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          aria-label={isPlaying ? `Pause ${label} hull cleaning video` : `Play ${label} hull cleaning video`}
          tabIndex={0}
          data-testid={`button-${label.toLowerCase()}-video-toggle`}
        >
          <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform pointer-events-none">
            {isPlaying ? (
              <Pause className="w-8 h-8 text-primary-foreground" fill="currentColor" aria-hidden="true" />
            ) : (
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" aria-hidden="true" />
            )}
          </div>
        </button>
      </div>
      
      <p className="mt-2 text-sm text-muted-foreground text-center">{title}</p>
    </div>
  );
}

export default function BeforeAfterVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (isVisible) return;

    const checkInitialVisibility = () => {
      if (!sectionRef.current) return false;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      return rect.top <= windowHeight + 200 && rect.bottom >= -200;
    };

    if (checkInitialVisibility()) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (observerRef.current && sectionRef.current) {
              observerRef.current.unobserve(sectionRef.current);
              observerRef.current.disconnect();
            }
          }
        });
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observerRef.current = observer;

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [isVisible]);

  useEffect(() => {
    const beforeVideoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Hull Cleaning Before - Professional Underwater Footage Victoria BC",
      "description": "Professional underwater video showing boat hull condition before cleaning service by Danny's Diving Services in Victoria BC. Watch the barnacles and marine growth on the hull before our certified commercial divers perform the cleaning. This video documents the typical condition of boat hulls requiring professional marine maintenance.",
      "thumbnailUrl": `${window.location.origin}${beforePoster}`,
      "uploadDate": "2025-11-20",
      "contentUrl": `${window.location.origin}${beforeVideo}`,
      "embedUrl": `${window.location.origin}/videos#before-after`,
      "duration": "PT30S",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Danny's Diving Services",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}${logoImage}`,
          "width": 512,
          "height": 512
        }
      },
      "keywords": "hull cleaning, boat maintenance, marine growth removal, barnacle removal, Victoria BC diving services, commercial diving, underwater cleaning"
    };

    const afterVideoSchema = {
      "@context": "https://schema.org",
      "@type": "VideoObject",
      "name": "Hull Cleaning After - Professional Results Victoria BC",
      "description": "Professional underwater video showing pristine boat hull after cleaning service by Danny's Diving Services in Victoria BC. See the dramatic difference our certified commercial divers achieve with expert hull cleaning. Clean hulls improve fuel efficiency and boat performance. Serving Victoria BC and Vancouver Island since 2021.",
      "thumbnailUrl": `${window.location.origin}${afterPoster}`,
      "uploadDate": "2025-11-20",
      "contentUrl": `${window.location.origin}${afterVideo}`,
      "embedUrl": `${window.location.origin}/videos#before-after`,
      "duration": "PT30S",
      "inLanguage": "en",
      "publisher": {
        "@type": "Organization",
        "name": "Danny's Diving Services",
        "logo": {
          "@type": "ImageObject",
          "url": `${window.location.origin}${logoImage}`,
          "width": 512,
          "height": 512
        }
      },
      "keywords": "hull cleaning results, clean boat hull, professional diving, marine maintenance, Victoria BC, commercial diving, underwater services"
    };

    const beforeScript = document.createElement("script");
    beforeScript.type = "application/ld+json";
    beforeScript.id = "before-video-schema";
    beforeScript.textContent = JSON.stringify(beforeVideoSchema);
    document.head.appendChild(beforeScript);

    const afterScript = document.createElement("script");
    afterScript.type = "application/ld+json";
    afterScript.id = "after-video-schema";
    afterScript.textContent = JSON.stringify(afterVideoSchema);
    document.head.appendChild(afterScript);

    return () => {
      const beforeSchemaEl = document.getElementById("before-video-schema");
      const afterSchemaEl = document.getElementById("after-video-schema");
      if (beforeSchemaEl) beforeSchemaEl.remove();
      if (afterSchemaEl) afterSchemaEl.remove();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 bg-card"
      id="before-after"
      data-testid="section-before-after"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hull Cleaning Before & After
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See the dramatic difference our professional hull cleaning service makes. 
            These underwater videos document actual results from our certified commercial divers in Victoria BC.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <Card className="p-4 md:p-6">
            <VideoPlayer
              videoSrc={beforeVideo}
              posterSrc={beforePoster}
              title="Hull covered with barnacles and marine growth"
              label="Before"
              isVisible={isVisible}
            />
          </Card>

          <Card className="p-4 md:p-6">
            <VideoPlayer
              videoSrc={afterVideo}
              posterSrc={afterPoster}
              title="Clean, smooth hull ready for optimal performance"
              label="After"
              isVisible={isVisible}
            />
          </Card>
        </div>

        <div className="mt-8 text-center">
          <a 
            href="/videos"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            data-testid="link-view-recent-work"
          >
            <Video className="w-5 h-5" />
            <span>Watch our recent work videos - every job is recorded</span>
          </a>
        </div>
      </div>
    </section>
  );
}
