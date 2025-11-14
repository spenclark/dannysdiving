import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | Danny's Diving Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Terms of service for Danny's Diving Services in Victoria BC. Understand our service agreements and policies for diving services.");
    }

    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://dannysdiving.com/terms');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.remove();
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-terms-of-service">Terms of Service</h1>
          <p className="text-muted-foreground mb-12" data-testid="text-last-updated-terms">
            Last updated: November 12, 2025
          </p>

          <div className="space-y-6">
            <Card data-testid="card-agreement">
              <CardHeader>
                <CardTitle data-testid="heading-agreement">Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  By using Danny's Diving Services, you agree to these terms. If you don't agree, please don't use our services. 
                  We've written these in plain English to be fair and clear for everyone.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-services-provided">
              <CardHeader>
                <CardTitle data-testid="heading-services-provided">Services Provided</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We provide professional commercial diving services in Victoria BC and Vancouver Island, including:</p>
                <ul>
                  <li>Hull cleaning</li>
                  <li>Underwater inspections</li>
                  <li>Zinc anode replacement</li>
                  <li>Mooring services</li>
                  <li>Underwater recovery</li>
                  <li>Commercial diving projects</li>
                </ul>
                <p>
                  All services are performed by licensed, insured commercial divers following industry best practices and safety standards.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-quotes-pricing">
              <CardHeader>
                <CardTitle data-testid="heading-quotes-pricing">Quotes and Pricing</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  <strong>Quotes are estimates.</strong> Final pricing may vary based on actual conditions found during the job. 
                  We'll always communicate with you before proceeding if the scope or cost changes significantly from the estimate.
                </p>
                <p>
                  Factors that can affect final pricing:
                </p>
                <ul>
                  <li>Greater than expected marine growth or damage</li>
                  <li>Underwater visibility conditions</li>
                  <li>Additional work discovered during inspection</li>
                  <li>Equipment or parts needed</li>
                  <li>Weather or water conditions requiring extra time</li>
                </ul>
                <p>
                  We'll provide you with the best estimate possible, but underwater conditions can be unpredictable.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-payment-terms">
              <CardHeader>
                <CardTitle data-testid="heading-payment-terms">Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Payment is due upon completion of services unless other arrangements are made in advance. 
                  We accept cash, e-transfer, and credit cards.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-scheduling">
              <CardHeader>
                <CardTitle data-testid="heading-scheduling">Scheduling and Cancellations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  <strong>Weather dependent:</strong> Diving operations depend on safe weather and water conditions. 
                  We may need to reschedule if conditions are unsafe. There's no charge for weather-related rescheduling.
                </p>
                <p>
                  <strong>Customer cancellations:</strong> Please give us 24 hours notice if you need to cancel or reschedule. 
                  Late cancellations may incur a fee if we've already mobilized equipment or turned down other work.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-emergency-services">
              <CardHeader>
                <CardTitle data-testid="heading-emergency-services">Emergency Services</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We offer emergency diving services on a best-effort basis. Emergency response is subject to:
                </p>
                <ul>
                  <li>Diver availability</li>
                  <li>Weather and water conditions</li>
                  <li>Safety considerations</li>
                  <li>Location accessibility</li>
                </ul>
                <p>
                  Emergency services carry premium pricing due to the urgent nature and potential after-hours response.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-liability">
              <CardHeader>
                <CardTitle data-testid="heading-liability">Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  <strong>Our liability is limited to the amount you paid for services.</strong> We maintain $2M liability insurance 
                  and take all reasonable precautions, but diving involves inherent risks.
                </p>
                <p>We are not liable for:</p>
                <ul>
                  <li>Pre-existing damage we didn't cause</li>
                  <li>Conditions beyond our control (severe weather, extreme currents, poor visibility)</li>
                  <li>Problems we discover but didn't create (structural issues, corrosion, etc.)</li>
                  <li>Consequential damages (lost time, lost revenue, etc.)</li>
                </ul>
                <p>
                  We will document all work with video and photos to show the condition before and after our services.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-customer-responsibilities">
              <CardHeader>
                <CardTitle data-testid="heading-customer-responsibilities">Customer Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You agree to:</p>
                <ul>
                  <li>Provide accurate information about your vessel and requirements</li>
                  <li>Disclose any known hazards or special conditions</li>
                  <li>Ensure we have safe access to the work area</li>
                  <li>Have authority to authorize work on the vessel</li>
                  <li>Pay invoices promptly</li>
                </ul>
              </CardContent>
            </Card>

            <Card data-testid="card-warranty">
              <CardHeader>
                <CardTitle data-testid="heading-warranty">Warranty</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We guarantee our workmanship. If there's an issue with work we performed, contact us within 7 days 
                  and we'll make it right at no charge.
                </p>
                <p>
                  This warranty covers our work only. It doesn't cover new damage, normal wear and tear, or problems 
                  caused by factors outside our control.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-safety">
              <CardHeader>
                <CardTitle data-testid="heading-safety">Safety and Regulations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We operate in full compliance with WorkSafeBC regulations and commercial diving standards. 
                  Safety is our top priority for both our divers and your vessel.
                </p>
                <p>
                  We reserve the right to refuse or stop work if we determine conditions are unsafe or if requested 
                  work violates regulations.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-dispute-resolution">
              <CardHeader>
                <CardTitle data-testid="heading-dispute-resolution">Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  If there's a problem, let's talk it out first. Contact us directly and we'll work to resolve any issues fairly.
                </p>
                <p>
                  If we can't resolve a dispute through discussion, we agree to mediation before pursuing legal action. 
                  Any legal disputes will be handled in Victoria, BC courts under British Columbia law.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-terms-changes">
              <CardHeader>
                <CardTitle data-testid="heading-terms-changes">Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We may update these terms occasionally. When we do, we'll update the date at the top of this page. 
                  Continued use of our services means you accept the updated terms.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-contact-info">
              <CardHeader>
                <CardTitle data-testid="heading-contact-info">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Questions about these terms? Contact us:</p>
                <ul>
                  <li>Danny's Diving Services</li>
                  <li>Email: dannysdivingservices@gmail.com</li>
                  <li>Phone: (778) 535-4506</li>
                  <li>Service Area: Victoria BC & Vancouver Island</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
