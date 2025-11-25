import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import logoImage from "@assets/PHOTO-2025-11-19-20-50-16_1763614659104.webp";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logoImage} 
                alt="Danny's Diving Services Logo" 
                className="w-10 h-10 rounded-md object-cover"
                width="40"
                height="40"
                loading="lazy"
                data-testid="img-footer-logo"
              />
              <div>
                <div className="font-bold text-lg">Danny's Diving Services</div>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Professional commercial diving services in Victoria BC and Vancouver Island. Insured and trusted by boat owners for over 3 years.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/people/Dannys-Diving-Services/61582809442381/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-facebook"
                aria-label="Visit our Facebook page"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a 
                href="https://www.instagram.com/dannysdivingservices" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                data-testid="link-instagram"
                aria-label="Visit our Instagram profile"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div>
            <div className="font-semibold mb-4">Our Services</div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/services/hull-cleaning" className="hover:text-primary transition-colors">Hull Cleaning</a></li>
              <li><a href="/services/underwater-inspections" className="hover:text-primary transition-colors">Underwater Inspections</a></li>
              <li><a href="/services/zinc-changes" className="hover:text-primary transition-colors">Zinc Anode Replacement</a></li>
              <li><a href="/services/mooring-services" className="hover:text-primary transition-colors">Mooring Services</a></li>
              <li><a href="/services/lost-item-retrieval" className="hover:text-primary transition-colors">Lost Item Retrieval</a></li>
              <li><a href="/services/commercial-diving" className="hover:text-primary transition-colors">Commercial Diving</a></li>
            </ul>
          </div>

          <div>
            <div className="font-semibold mb-4">Contact Us</div>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+17785354506" className="text-muted-foreground hover:text-primary transition-colors">
                  (778) 535-4506
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:dannysdivingservices@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  dannysdivingservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground">
                  Serving Victoria BC &<br />Vancouver Island
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {currentYear} Danny's Diving Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
