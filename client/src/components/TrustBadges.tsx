import { Shield, Award, Video, Clock } from "lucide-react";

const badges = [
  {
    icon: Shield,
    title: "Fully Insured",
    description: "$2M Liability Coverage"
  },
  {
    icon: Award,
    title: "Professional Commercial Diver",
    description: "Internationally Trained"
  },
  {
    icon: Video,
    title: "Video Documentation",
    description: "Every Job Recorded"
  },
  {
    icon: Clock,
    title: "3+ Years Experience",
    description: "Trusted by 50+ Clients"
  }
];

export default function TrustBadges() {
  return (
    <section className="py-12 bg-card">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6"
                data-testid={`badge-${badge.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="font-semibold text-lg mb-1">{badge.title}</div>
                <p className="text-sm text-muted-foreground">{badge.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
