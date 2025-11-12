import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";
import { useState } from "react";
import thumb1 from "@assets/stock_images/professional_commerc_fe47fda8.jpg";
import thumb2 from "@assets/stock_images/underwater_boat_hull_a2ba17a3.jpg";
import thumb3 from "@assets/stock_images/professional_commerc_90fd6021.jpg";
import thumb4 from "@assets/stock_images/underwater_boat_hull_5ed3bff6.jpg";
import thumb5 from "@assets/stock_images/commercial_diver_oce_e582419b.jpg";
import thumb6 from "@assets/stock_images/commercial_diver_oce_4aae3a08.jpg";
import thumb7 from "@assets/stock_images/boat_hull_before_aft_522613ec.jpg";
import thumb8 from "@assets/stock_images/underwater_boat_hull_6473b96e.jpg";
import thumb9 from "@assets/stock_images/professional_commerc_f42ae0a6.jpg";

// todo: remove mock functionality - replace with real video URLs
const videos = [
  {
    id: 1,
    title: "45ft Sailboat Hull Cleaning - Victoria Harbour",
    thumbnail: thumb1,
    duration: "3:24",
    date: "March 2025"
  },
  {
    id: 2,
    title: "Underwater Inspection - Motor Yacht",
    thumbnail: thumb2,
    duration: "5:12",
    date: "March 2025"
  },
  {
    id: 3,
    title: "Zinc Anode Replacement - Commercial Vessel",
    thumbnail: thumb3,
    duration: "4:45",
    date: "February 2025"
  },
  {
    id: 4,
    title: "Mooring Chain Inspection - Oak Bay Marina",
    thumbnail: thumb4,
    duration: "2:58",
    date: "February 2025"
  },
  {
    id: 5,
    title: "Propeller Cleaning & Inspection",
    thumbnail: thumb5,
    duration: "3:36",
    date: "January 2025"
  },
  {
    id: 6,
    title: "Lost Equipment Recovery - Deep Water",
    thumbnail: thumb6,
    duration: "6:22",
    date: "January 2025"
  },
  {
    id: 7,
    title: "Hull Cleaning Before/After Time-lapse",
    thumbnail: thumb7,
    duration: "2:15",
    date: "December 2024"
  },
  {
    id: 8,
    title: "Full Vessel Inspection - 60ft Trawler",
    thumbnail: thumb8,
    duration: "8:42",
    date: "December 2024"
  },
  {
    id: 9,
    title: "Barnacle Removal Demonstration",
    thumbnail: thumb9,
    duration: "4:18",
    date: "November 2024"
  }
];

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const handleVideoClick = (videoId: number) => {
    console.log(`Playing video: ${videoId}`);
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
                  src={video.thumbnail}
                  alt={video.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-16 h-16 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded z-20">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-base mb-1 line-clamp-2">{video.title}</h3>
                <p className="text-sm text-muted-foreground">{video.date}</p>
              </div>
            </Card>
          ))}
        </div>

        {selectedVideo && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedVideo(null)}
            data-testid="video-modal"
          >
            <div className="max-w-5xl w-full">
              <div className="relative aspect-video bg-black rounded-md overflow-hidden">
                <img 
                  src={videos.find(v => v.id === selectedVideo)?.thumbnail}
                  alt="Video preview"
                  className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-24 h-24 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 ml-2" fill="currentColor" />
                    </div>
                    <p className="text-xl font-semibold mb-2">{videos.find(v => v.id === selectedVideo)?.title}</p>
                    <p className="text-sm text-gray-300">Click anywhere to close</p>
                  </div>
                </div>
              </div>
              <p className="text-white text-center mt-4 text-sm">
                Note: Video embeds would be integrated here with your actual video hosting service
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
