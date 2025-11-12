import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isHomePage = window.location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section: string) => {
    console.log(`Navigate to: ${section}`);
    setIsMobileMenuOpen(false);
    if (section === 'videos') {
      window.location.href = '/videos';
    } else if (section === 'services') {
      if (window.location.pathname === '/') {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#services';
      }
    } else if (section === 'testimonials') {
      if (window.location.pathname === '/') {
        document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#testimonials';
      }
    } else if (section === 'contact') {
      if (window.location.pathname === '/' || window.location.pathname.startsWith('/services/')) {
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = '/#contact-form';
      }
    }
  };

  const handleCallNow = () => {
    window.location.href = 'tel:+17785354506';
  };

  const shouldUseDarkText = isScrolled || !isHomePage;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        shouldUseDarkText ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">DD</span>
            </div>
            <div>
              <h1 className={`font-bold text-lg leading-tight ${shouldUseDarkText ? 'text-foreground' : 'text-white'}`}>
                Danny's Diving
              </h1>
              <p className={`text-xs ${shouldUseDarkText ? 'text-muted-foreground' : 'text-gray-300'}`}>
                Professional Services
              </p>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-8">
            <button 
              onClick={() => handleNavClick('services')}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                shouldUseDarkText ? 'text-foreground' : 'text-white'
              }`}
              data-testid="nav-services"
            >
              Services
            </button>
            <button 
              onClick={() => handleNavClick('videos')}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                shouldUseDarkText ? 'text-foreground' : 'text-white'
              }`}
              data-testid="nav-videos"
            >
              Recent Work
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                shouldUseDarkText ? 'text-foreground' : 'text-white'
              }`}
              data-testid="nav-testimonials"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('contact')}
              className={`text-sm font-medium hover:text-primary transition-colors ${
                shouldUseDarkText ? 'text-foreground' : 'text-white'
              }`}
              data-testid="nav-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button 
              variant={shouldUseDarkText ? "default" : "secondary"}
              size="default"
              onClick={handleCallNow}
              className="hidden md:flex"
              data-testid="button-header-call"
            >
              <Phone className="w-4 h-4 mr-2" />
              (778) 535-4506
            </Button>

            <button
              className={`lg:hidden ${shouldUseDarkText ? 'text-foreground' : 'text-white'}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <button 
                onClick={() => handleNavClick('services')}
                className="text-left py-2 hover:text-primary transition-colors"
                data-testid="mobile-nav-services"
              >
                Services
              </button>
              <button 
                onClick={() => handleNavClick('videos')}
                className="text-left py-2 hover:text-primary transition-colors"
                data-testid="mobile-nav-videos"
              >
                Recent Work
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className="text-left py-2 hover:text-primary transition-colors"
                data-testid="mobile-nav-testimonials"
              >
                Testimonials
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="text-left py-2 hover:text-primary transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
              <Button 
                variant="default"
                className="w-full"
                onClick={handleCallNow}
                data-testid="button-mobile-call"
              >
                <Phone className="w-4 h-4 mr-2" />
                (778) 535-4506
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
