import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" data-testid="heading-privacy-policy">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12" data-testid="text-last-updated-privacy">
            Last updated: November 12, 2025
          </p>

          <div className="space-y-6">
            <Card data-testid="card-simple-terms">
              <CardHeader>
                <CardTitle data-testid="heading-simple-terms">Simple Terms</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We respect your privacy. This policy explains what information we collect and how we use it. 
                  We keep things simple and straightforward.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-info-collected">
              <CardHeader>
                <CardTitle data-testid="heading-info-collected">What Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>When you contact us for a quote, we collect:</p>
                <ul>
                  <li>Your name</li>
                  <li>Your phone number</li>
                  <li>Your email address</li>
                  <li>Information about the service you need</li>
                  <li>Any message you send us</li>
                </ul>
                <p>
                  We only collect information you voluntarily give us. We don't track you around the internet 
                  or use cookies to spy on your browsing.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-info-usage">
              <CardHeader>
                <CardTitle data-testid="heading-info-usage">How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>We use your information to:</p>
                <ul>
                  <li>Respond to your quote requests</li>
                  <li>Contact you about diving services</li>
                  <li>Send you information you requested</li>
                  <li>Improve our services</li>
                </ul>
                <p className="font-semibold">
                  We will never sell, rent, or share your personal information with third parties for their marketing purposes.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-email-communication">
              <CardHeader>
                <CardTitle data-testid="heading-email-communication">Email Communication</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  When you submit a quote request, your information is sent via email to our business address. 
                  We use standard email services (Gmail) to receive and respond to your inquiries.
                </p>
                <p>
                  Your email address is only used to respond to you. We don't send marketing emails unless 
                  you specifically request information about our services.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-data-security">
              <CardHeader>
                <CardTitle data-testid="heading-data-security">Data Security</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We take reasonable steps to protect your information. However, no internet transmission is 
                  100% secure. We recommend not including sensitive financial information in quote requests.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-your-rights">
              <CardHeader>
                <CardTitle data-testid="heading-your-rights">Your Rights</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>You have the right to:</p>
                <ul>
                  <li>Request a copy of the information we have about you</li>
                  <li>Ask us to delete your information</li>
                  <li>Correct any inaccurate information</li>
                  <li>Stop receiving communications from us</li>
                </ul>
                <p>
                  To exercise these rights, simply email us at dannysdivingservices@gmail.com or call (778) 535-4506.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-children-privacy">
              <CardHeader>
                <CardTitle data-testid="heading-children-privacy">Children's Privacy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Our services are for adults (18+). We don't knowingly collect information from children under 18.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-policy-changes">
              <CardHeader>
                <CardTitle data-testid="heading-policy-changes">Changes to This Policy</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  We may update this policy occasionally. When we do, we'll update the date at the top of this page. 
                  Major changes will be posted prominently on our website.
                </p>
              </CardContent>
            </Card>

            <Card data-testid="card-contact-us">
              <CardHeader>
                <CardTitle data-testid="heading-contact-us">Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>Questions about this privacy policy? Contact us:</p>
                <ul>
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
