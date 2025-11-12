import Header from "@/components/Header";
import VideoGallery from "@/components/VideoGallery";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Videos() {
  const handleBackHome = () => {
    console.log('Navigate to home');
    window.location.href = '/';
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
        <VideoGallery />
      </main>
      <Footer />
    </div>
  );
}
