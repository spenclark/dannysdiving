import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">DD</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Danny's Diving Services</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Professional commercial diving services in Victoria BC and Vancouver Island. Licensed, insured, and trusted by boat owners for over 15 years.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Hull Cleaning</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Underwater Inspections</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Zinc Anode Replacement</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Mooring Services</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Lost Item Retrieval</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Commercial Diving</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="tel:+12505551234" className="text-muted-foreground hover:text-primary transition-colors">
                  (250) 555-1234
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <a href="mailto:danny@dannydiver.com" className="text-muted-foreground hover:text-primary transition-colors">
                  danny@dannydiver.com
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
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
