import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-12 md:space-y-20"> {/* Adjusted spacing */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-secondary">Contact Us</h1> {/* Responsive heading */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-2 sm:px-0"> {/* Responsive text, padding */}
          We'd love to hear from you! Whether it's feedback, inquiries, or franchise questions, get in touch with us.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8"> {/* Default to 1 col, adjust gap */}
        {/* Contact Info Card */}
        <Card className="lg:col-span-1 card-hover-effect">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl sm:text-2xl font-heading text-primary">Get In Touch</CardTitle> {/* Responsive title */}
            <CardDescription className="text-sm sm:text-base">Reach out through any of the channels below.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="space-y-5 sm:space-y-6"> {/* Responsive spacing */}
            <div className="flex items-start gap-3 sm:gap-4"> {/* Responsive gap */}
              <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" /> {/* Responsive size/margin */}
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">Head Office</h4> {/* Responsive font size */}
                <p className="text-xs sm:text-sm text-muted-foreground"> {/* Responsive text size */}
                  [Your Full Head Office Address], <br />
                  Pune, Maharashtra, India <br/>
                  <Link href="/store-locator" className="text-accent hover:underline text-xs sm:text-sm font-medium"> {/* Responsive font size */}
                    Find other locations
                  </Link>
                </p>
              </div>
            </div>
             <div className="flex items-start gap-3 sm:gap-4">
              <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">Phone</h4>
                <a href="tel:+91XXXXXXXXXX" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors block">
                  +91 [Your Contact Number]
                </a>
                 <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">(Franchise inquiries: <a href="tel:+91YYYYYYYYYY" className="hover:text-primary transition-colors">[Franchise Contact Number]</a>)</p>
              </div>
            </div>
             <div className="flex items-start gap-3 sm:gap-4">
              <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-base sm:text-lg mb-0.5 sm:mb-1">Email</h4>
                <a href="mailto:info@ganeshbhel.com" className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors break-all block">
                  info@ganeshbhel.com
                </a>
                 <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">(Franchise: <a href="mailto:franchise@ganeshbhel.com" className="hover:text-primary transition-colors">franchise@ganeshbhel.com</a>)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="lg:col-span-2 card-hover-effect">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl sm:text-2xl font-heading text-primary">Send Us a Message</CardTitle> {/* Responsive title */}
            <CardDescription className="text-sm sm:text-base">Fill out the form and we'll get back to you shortly.</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent>
            {/* TODO: Implement Server Action */}
            <form className="space-y-4 sm:space-y-5"> {/* Responsive spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"> {/* Responsive gap */}
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="contact-name" className="text-sm sm:text-base">Full Name</Label> {/* Responsive label size */}
                  <Input id="contact-name" placeholder="Your Name" required />
                </div>
                <div className="space-y-1.5 sm:space-y-2">
                  <Label htmlFor="contact-email" className="text-sm sm:text-base">Email Address</Label>
                  <Input id="contact-email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="contact-subject" className="text-sm sm:text-base">Subject</Label>
                <Input id="contact-subject" placeholder="Reason for contacting" required />
              </div>
              <div className="space-y-1.5 sm:space-y-2">
                <Label htmlFor="contact-message" className="text-sm sm:text-base">Your Message</Label>
                <Textarea id="contact-message" placeholder="Type your message here..." required rows={4} className="min-h-[100px] sm:min-h-[120px]" /> {/* Adjusted rows and min-height */}
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base" disabled> {/* Ensure text size is appropriate */}
                Send Message (Connect Backend)
              </Button>
            </form>
          </CardContent>
        </Card>
      </section>

        {/* Map Placeholder */}
       <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 md:mb-8 font-heading text-primary">Our Head Office Location</h2> {/* Responsive heading and margin */}
            <div className="w-full h-[250px] sm:h-[350px] md:h-[450px] bg-muted/50 rounded-lg shadow-md flex items-center justify-center text-muted-foreground overflow-hidden relative"> {/* Responsive height */}
               <Image
                   src="https://picsum.photos/seed/pune-map/1000/500"
                   alt="Map showing Head Office location placeholder"
                   layout="fill" // Use layout="fill" for better responsiveness
                   objectFit="cover"
                   className="opacity-50"
                   data-ai-hint="city map pune india"
               />
               <p className="absolute text-base sm:text-lg font-semibold text-foreground/80 bg-background/70 px-3 py-1.5 sm:px-4 sm:py-2 rounded">Map Integration Coming Soon!</p> {/* Responsive text/padding */}
               {/* TODO: Embed actual map */}
            </div>
       </section>
    </div>
  );
}
