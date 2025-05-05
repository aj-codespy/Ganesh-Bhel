import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Contact Us</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          We'd love to hear from you! Whether it's feedback, inquiries, or franchise questions, get in touch with us.
        </p>
      </section>

      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Info Card */}
        <Card className="lg:col-span-1 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">Get In Touch</CardTitle>
            <CardDescription>Reach out through any of the channels below.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Head Office</h4>
                <p className="text-sm text-muted-foreground">
                  [Your Full Head Office Address], <br />
                  Pune, Maharashtra, India <br/>
                  <Link href="/store-locator" className="text-accent hover:underline text-xs">Find other locations</Link>
                </p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Phone</h4>
                <a href="tel:+91XXXXXXXXXX" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  +91 [Your Contact Number] {/* Replace with actual number */}
                </a>
                 <p className="text-xs text-muted-foreground">(Franchise inquiries: [Franchise Contact Number])</p>
              </div>
            </div>
             <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold">Email</h4>
                <a href="mailto:info@ganeshbhel.com" className="text-sm text-muted-foreground hover:text-primary transition-colors break-all">
                  info@ganeshbhel.com {/* Replace with actual email */}
                </a>
                 <p className="text-xs text-muted-foreground">(Franchise: franchise@ganeshbhel.com)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Form Card */}
        <Card className="lg:col-span-2 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-heading text-primary">Send Us a Message</CardTitle>
            <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
          </CardHeader>
          <CardContent>
            {/* TODO: Implement Server Action for form submission */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Full Name</Label>
                  <Input id="contact-name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email Address</Label>
                  <Input id="contact-email" type="email" placeholder="your.email@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-subject">Subject</Label>
                <Input id="contact-subject" placeholder="Reason for contacting" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="contact-message">Your Message</Label>
                <Textarea id="contact-message" placeholder="Type your message here..." required rows={5} />
              </div>
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled>
                Send Message (Connect Backend)
              </Button>
                {/* <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Send Message</Button> */}
            </form>
          </CardContent>
        </Card>
      </section>

        {/* Map Placeholder */}
       <section>
            <h2 className="text-3xl font-bold text-center mb-6 font-heading text-primary">Our Head Office Location</h2>
            <div className="w-full h-[300px] md:h-[400px] bg-muted rounded-lg shadow-md flex items-center justify-center text-muted-foreground">
              <p>Map showing Head Office location coming soon!</p>
               {/* TODO: Embed a map centered on the Head Office address */}
            </div>
       </section>
    </div>
  );
}
