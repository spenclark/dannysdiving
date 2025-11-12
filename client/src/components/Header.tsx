import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { services } from "@shared/services";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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
    setIsMobileServicesOpen(false);
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`text-sm font-medium bg-transparent hover:bg-transparent data-[state=open]:bg-transparent ${
                      shouldUseDarkText ? 'text-foreground hover:text-primary' : 'text-white hover:text-primary'
                    }`}
                    data-testid="nav-services-trigger"
                  >
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {services.map((service) => (
                        <li key={service.slug}>
                          <NavigationMenuLink asChild>
                            <a
                              href={`/services/${service.slug}`}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              data-testid={`nav-service-${service.slug}`}
                            >
                              <div className="text-sm font-medium leading-none">{service.title.replace(' Victoria BC', '')}</div>
                              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                {service.description.substring(0, 100)}...
                              </p>
                            </a>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                if (isMobileMenuOpen) {
                  setIsMobileServicesOpen(false);
                }
              }}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t bg-background">
            <nav className="flex flex-col gap-4">
              <div>
                <button 
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="flex items-center justify-between w-full text-left py-2 hover:text-primary transition-colors"
                  data-testid="mobile-nav-services-trigger"
                >
                  <span>Services</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="ml-4 mt-2 flex flex-col gap-2">
                    {services.map((service) => (
                      <a
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="text-sm py-2 text-muted-foreground hover:text-primary transition-colors"
                        data-testid={`mobile-nav-service-${service.slug}`}
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobileServicesOpen(false);
                        }}
                      >
                        {service.title.replace(' Victoria BC', '')}
                      </a>
                    ))}
                  </div>
                )}
              </div>
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
