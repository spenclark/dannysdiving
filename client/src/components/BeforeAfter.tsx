import { useState } from "react";
import { Video } from "lucide-react";
import beforeAfterImg from "@assets/stock_images/boat_hull_before_aft_522613ec.jpg";

export default function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const touch = e.touches[0];
    handleMove(touch.clientX, rect);
  };

  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            See The Difference Professional Hull Cleaning Makes
          </h2>
          <p className="text-lg text-muted-foreground">
            Drag the slider to compare before and after results
          </p>
        </div>

        <div 
          className="relative w-full aspect-video rounded-md overflow-hidden select-none cursor-ew-resize"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleMouseDown}
          onTouchEnd={handleMouseUp}
          onTouchMove={handleTouchMove}
          data-testid="before-after-slider"
        >
          <img 
            src={beforeAfterImg} 
            alt="Hull cleaning comparison"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div 
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPosition}%` }}
          >
            <img 
              src={beforeAfterImg} 
              alt="After hull cleaning"
              className="absolute inset-0 w-full h-full object-cover brightness-110"
              style={{ width: `${(100 / sliderPosition) * 100}%` }}
            />
          </div>

          <div 
            className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
              <div className="flex gap-1">
                <div className="w-0.5 h-4 bg-gray-600" />
                <div className="w-0.5 h-4 bg-gray-600" />
              </div>
            </div>
          </div>

          <div className="absolute top-4 left-4 bg-black/60 text-white px-4 py-2 rounded-md text-sm font-semibold">
            Before
          </div>
          <div className="absolute top-4 right-4 bg-black/60 text-white px-4 py-2 rounded-md text-sm font-semibold">
            After
          </div>
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
