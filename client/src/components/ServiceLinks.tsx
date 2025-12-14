import { Link } from "wouter";

const serviceLinks = [
  {
    href: "/services/hull-cleaning",
    text: "Hull Cleaning for Commercial & Private Vessels"
  },
  {
    href: "/services/underwater-inspections",
    text: "Underwater Inspections & Damage Assessment"
  },
  {
    href: "/services/zinc-changes",
    text: "Zinc Anode Replacement & Corrosion Prevention"
  },
  {
    href: "/services/mooring-services",
    text: "Mooring Inspection, Maintenance & Installation"
  },
  {
    href: "/services/lost-item-retrieval",
    text: "Underwater Recovery & Lost Item Retrieval"
  },
  {
    href: "/services/commercial-diving",
    text: "Commercial Diving & Marine Infrastructure"
  }
];

export default function ServiceLinks() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
          Commercial Diving Services in Victoria
        </h2>
        <nav aria-label="Diving services">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block p-3 md:p-4 rounded-md border border-border hover-elevate transition-colors text-foreground hover:text-primary"
                  data-testid={`link-service-${link.href.split('/').pop()}`}
                >
                  {link.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
