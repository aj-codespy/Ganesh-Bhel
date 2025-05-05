import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { CheckCircle, TrendingUp, Handshake, Users } from "lucide-react";

export default function FranchisePage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Become a Franchise Partner</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Join the legacy of Ganesh Bhel! Partner with a trusted, ISO-certified brand with over 40 years of experience in delighting customers with authentic Indian street food.
        </p>
      </section>

       <section className="relative h-[40vh] rounded-lg overflow-hidden shadow-lg">
         <Image
            src="https://picsum.photos/1200/400"
            alt="Ganesh Bhel Franchise Opportunity"
            layout="fill"
            objectFit="cover"
            quality={75}
            className="absolute inset-0 z-0 opacity-80"
            data-ai-hint="modern indian restaurant interior bright franchise"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-0"></div>
          <div className="relative z-10 flex items-end justify-start h-full p-8 text-background">
             <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-2">Your Opportunity Awaits</h2>
                <p className="text-lg">Leverage our established brand, proven business model, and comprehensive support system.</p>
             </div>
          </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-primary">Why Partner with Ganesh Bhel?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="text-center p-4 shadow subtle-hover-grow border-secondary/10">
             <CheckCircle className="mx-auto h-10 w-10 text-secondary mb-3" />
            <h3 className="text-lg font-semibold mb-1">Proven Brand</h3>
            <p className="text-sm text-muted-foreground">40+ years of trust and recognition.</p>
          </Card>
          <Card className="text-center p-4 shadow subtle-hover-grow border-secondary/10">
            <TrendingUp className="mx-auto h-10 w-10 text-secondary mb-3" />
            <h3 className="text-lg font-semibold mb-1">Growth Potential</h3>
            <p className="text-sm text-muted-foreground">Tap into the booming street food market.</p>
          </Card>
          <Card className="text-center p-4 shadow subtle-hover-grow border-secondary/10">
             <Handshake className="mx-auto h-10 w-10 text-secondary mb-3" />
            <h3 className="text-lg font-semibold mb-1">Comprehensive Support</h3>
            <p className="text-sm text-muted-foreground">Training, marketing, and operational guidance.</p>
          </Card>
           <Card className="text-center p-4 shadow subtle-hover-grow border-secondary/10">
             <Users className="mx-auto h-10 w-10 text-secondary mb-3" />
            <h3 className="text-lg font-semibold mb-1">Strong Network</h3>
            <p className="text-sm text-muted-foreground">Join a community of successful franchisees.</p>
          </Card>
        </div>
      </section>

       <section className="grid md:grid-cols-2 gap-8">
        {/* Franchise Models & Investment */}
         <Card className="shadow-lg">
             <CardHeader>
                 <CardTitle className="text-2xl font-heading text-primary">Franchise Models & Investment</CardTitle>
                 <CardDescription>Choose the model that fits your vision.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-4">
                 <div>
                     <h4 className="font-semibold text-lg mb-1">Kiosk Model</h4>
                     <p className="text-sm text-muted-foreground">Ideal for high-footfall areas like malls and multiplexes. Lower initial investment.</p>
                     <p className="text-sm font-medium mt-1">Estimated Investment: ₹10-15 Lakhs*</p>
                 </div>
                 <hr/>
                 <div>
                     <h4 className="font-semibold text-lg mb-1">Cafe Model</h4>
                     <p className="text-sm text-muted-foreground">A small-format cafe offering a wider menu and seating. Suitable for standalone locations.</p>
                     <p className="text-sm font-medium mt-1">Estimated Investment: ₹20-30 Lakhs*</p>
                 </div>
                  <p className="text-xs text-muted-foreground">*Investment figures are indicative and may vary based on location and other factors. Detailed breakdown available upon inquiry.</p>
             </CardContent>
         </Card>

        {/* Application Form */}
         <Card className="shadow-lg">
           <CardHeader>
             <CardTitle className="text-2xl font-heading text-primary">Inquire Now</CardTitle>
             <CardDescription>Fill out the form below to express your interest.</CardDescription>
           </CardHeader>
           <CardContent>
             {/* TODO: Implement Server Action for form submission */}
             <form className="space-y-4">
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label htmlFor="name">Full Name</Label>
                   <Input id="name" placeholder="Your Name" required />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="email">Email Address</Label>
                   <Input id="email" type="email" placeholder="your.email@example.com" required />
                 </div>
               </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 <div className="space-y-2">
                   <Label htmlFor="phone">Phone Number</Label>
                   <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" required />
                 </div>
                  <div className="space-y-2">
                   <Label htmlFor="location">Preferred Location(s)</Label>
                   <Input id="location" placeholder="City, State" required />
                 </div>
                 </div>
               <div className="space-y-2">
                 <Label htmlFor="message">Your Message (Optional)</Label>
                 <Textarea id="message" placeholder="Tell us a bit about your interest or ask any questions." />
               </div>
               <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" disabled>
                   Submit Inquiry (Connect Backend)
               </Button>
                 {/* Replace disabled button */}
                 {/* <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Submit Inquiry</Button> */}
             </form>
           </CardContent>
         </Card>
       </section>

      {/* Testimonials Placeholder */}
       <section className="text-center">
            <h2 className="text-3xl font-bold mb-6 font-heading text-primary">Hear from Our Partners</h2>
            <p className="text-muted-foreground italic">Franchisee testimonials coming soon!</p>
            {/* Add testimonials component here when available */}
        </section>
    </div>
  );
}
