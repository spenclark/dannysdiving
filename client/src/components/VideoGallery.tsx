import { Card } from "@/components/ui/card";
import { Play, X } from "lucide-react";
import { useState } from "react";

const videos = [
  {
    id: "1gaRg897ljE",
    title: "Hull Clean - Bayliner After",
    date: "2025"
  },
  {
    id: "kcvHC_N6e-U",
    title: "Hull Clean - Bayliner Before",
    date: "2025"
  },
  {
    id: "0H4JUd-fdoQ",
    title: "Hull Clean - Catamaran",
    date: "2025"
  },
  {
    id: "gtsiId2rd-A",
    title: "Hull Clean - Catamaran",
    date: "2025"
  },
  {
    id: "_IxxoYyr9EA",
    title: "Hull Clean - Hotfoot After",
    date: "2025"
  },
  {
    id: "BTGRZ86pwyM",
    title: "Hull Clean - Hotfoot Before",
    date: "2025"
  },
  {
    id: "oRVcdmAVrv0",
    title: "Race Clean - IC 37 After",
    date: "2025"
  },
  {
    id: "4Pc8Nd8hTwU",
    title: "Race Clean - IC 37 Before",
    date: "2025"
  },
  {
    id: "0X3ZNlc93vI",
    title: "Hull Clean - Moseying After",
    date: "2025"
  },
  {
    id: "ki0AJxZKpFM",
    title: "Hull Clean - Moseying Before",
    date: "2025"
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const handleVideoClick = (videoId: string) => {
    setSelectedVideo(videoId);
  };

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Recent Work Videos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We document every job with professional underwater video footage. See our work quality for yourself.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card 
              key={video.id} 
              className="overflow-hidden hover-elevate cursor-pointer group"
              onClick={() => handleVideoClick(video.id)}
              data-testid={`video-card-${video.id}`}
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                <img 
                  src={`https://img.youtube.com/vi/${video.id}/sddefault.jpg`}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {selectedVideo && (() => {
          const activeVideo = videos.find(v => v.id === selectedVideo);
          return (
            <div 
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
              data-testid="video-modal"
            >
              <div 
                className="max-w-5xl w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                  data-testid="button-close-modal"
                >
                  <X className="w-8 h-8" />
                </button>
                <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                    title={activeVideo?.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <p className="text-white text-center mt-4 text-sm">
                  {activeVideo?.title}
                </p>
              </div>
            </div>
          );
        })()}
      </div>
    </section>
  );
}
