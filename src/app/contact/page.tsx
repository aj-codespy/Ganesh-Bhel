import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Contact Us</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear from you! Whether it's feedback, inquiries, or franchise questions, get in touch with us.
        </p>
      </section>

      <section className="grid lg:grid-cols-3 gap-8"> {/* Keep 3 columns, adjust gap */}
        {/* Contact Info Card */}
        <Card className="lg:col-span-1 card-hover-effect"> {/* Applied hover effect */}
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">Get In Touch</CardTitle>
            <CardDescription>Reach out through any of the channels below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6"> {/* Increased spacing */}
            <div className="flex items-start gap-4"> {/* Increased gap */}
              <MapPin className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" /> {/* Adjusted size/margin */}
              <div>
                <h4 className="font-semibold text-lg mb-1">Head Office</h4> {/* Increased font size */}
                <p className="text-sm text-muted-foreground">
                  [Your Full Head Office Address], <br />
                  Pune, Maharashtra, India <br/>
                  <Link href="/store-locator" className="text-accent hover:underline text-sm font-medium"> {/* Increased font size */}
                    Find other locations
                  </Link>
                </p>
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Phone className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Phone</h4>
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-primary transition-colors block"> {/* Made block */}
                  +91 [Your Contact Number] {/* Replace */}
                </a>
                 <p className="text-xs text-muted-foreground mt-1">(Franchise inquiries: <a href="tel:+91YYYYYYYYYY" className="hover:text-primary transition-colors">[Franchise Contact Number]</a>)</p> {/* Added link */}
              </div>
            </div>
             <div className="flex items-start gap-4">
              <Mail className="h-6 w-6 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-lg mb-1">Email</h4>
                <a href="mailto:info@ganeshbhel.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all block">
                  info@ganeshbhel.com {/* Replace */}
                </a>
                 <p className="text-xs text-muted-foreground mt-1">(Franchise: <a href="mailto:franchise@ganeshbhel.com" className="hover:text-primary transition-colors">franchise@ganeshbhel.com</a>)</p> {/* Added link */}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="lg:col-span-2 card-hover-effect"> {/* Applied hover effect */}
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* TODO: Implement Server Action */}
            <form className="space-y-5"> {/* Increased spacing */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> {/* Increased gap */}
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-base">Full Name</Label> {/* Increased label size */}
                  <Input id="contact-name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-base">Email Address</Label>
                  <Input id="contact-email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject" className="text-base">Subject</Label>
                <Input id="contact-subject" placeholder="Reason for contacting" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message" className="text-base">Your Message</Label>
                <Textarea id="contact-message" placeholder="Type your message here..." required rows={5} />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300" disabled>
                Send Message (Connect Backend)
              </Button>
                {/* <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300">Send Message</Button> */}
            </form>
          </CardContent>
        </Card>
      </section>

        {/* Map Placeholder */}
       <section>
            <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Our Head Office Location</h2> {/* Increased margin */}
            <div className="w-full h-[350px] md:h-[450px] bg-muted/50 rounded-lg shadow-md flex items-center justify-center text-muted-foreground overflow-hidden"> {/* Adjusted bg, increased height */}
              {/* Placeholder map image */}
               <Image
                   src="https://picsum.photos/seed/pune-map/1000/500"
                   alt="Map showing Head Office location placeholder"
                   width={1000}
                   height={500}
                   className="object-cover w-full h-full opacity-50"
                   data-ai-hint="city map pune india"
               />
               <p className="absolute text-lg font-semibold text-foreground/80 bg-background/70 px-4 py-2 rounded">Map Integration Coming Soon!</p>
               {/* TODO: Embed actual map */}
            </div>
       </section>
    </div>
  );
}
