import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Quote Request Received!",
          description: "We'll contact you within 24 hours to discuss your diving needs.",
        });
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      } else {
        toast({
          title: "Error",
          description: result.message || "Failed to submit request. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Failed to submit form:', error);
      toast({
        title: "Error",
        description: "Failed to submit request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact-form" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Request a Quote</h2>
          <p className="text-lg text-muted-foreground">
            Get in touch for professional diving services in Victoria BC and Vancouver Island
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Send Us a Message</CardTitle>
              <CardDescription>Fill out the form and we'll get back to you within 24 hours</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      placeholder="John Smith"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      placeholder="(778) 535-4506"
                      data-testid="input-phone"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="john@example.com"
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Needed</Label>
                  <Select value={formData.service} onValueChange={(value) => handleChange('service', value)}>
                    <SelectTrigger id="service" data-testid="select-service">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hull-cleaning">Hull Cleaning</SelectItem>
                      <SelectItem value="underwater-inspections">Underwater Inspections</SelectItem>
                      <SelectItem value="zinc-changes">Zinc Anode Replacement</SelectItem>
                      <SelectItem value="mooring-services">Mooring Services</SelectItem>
                      <SelectItem value="lost-item-retrieval">Lost Item Retrieval</SelectItem>
                      <SelectItem value="commercial-diving">Commercial Diving</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message / Details</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Tell us about your vessel and diving needs..."
                    className="min-h-32"
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} data-testid="button-submit-quote">
                  {isSubmitting ? "Submitting..." : "Request Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+17785354506" className="text-muted-foreground hover:text-primary">(778) 535-4506</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:dannysdivingservices@gmail.com" className="text-muted-foreground hover:text-primary">dannysdivingservices@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Service Area</p>
                    <p className="text-muted-foreground">Victoria BC & Vancouver Island</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-muted-foreground">Mon-Sat: 7:00 AM - 6:00 PM</p>
                    <p className="text-muted-foreground">Emergency services available</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="font-bold text-lg mb-2">Emergency Services Available</h3>
                <p className="text-sm opacity-90 mb-4">
                  Need urgent diving services? We offer 24/7 emergency response for critical marine situations.
                </p>
                <Button variant="secondary" size="sm" className="w-full" data-testid="button-emergency">
                  Call Emergency Line
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
