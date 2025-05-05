import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { CheckCircle, TrendingUp, Handshake, Users, ArrowRight } from "lucide-react"; // Added ArrowRight

export default function FranchisePage() {
  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Become a Franchise Partner</h1>
        <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
          Join the legacy of Ganesh Bhel! Partner with a trusted, ISO-certified brand with over 40 years of experience in delighting customers with authentic Indian street food.
        </p>
      </section>

       <section className="relative h-[45vh] rounded-lg overflow-hidden shadow-xl"> {/* Increased height, shadow */}
         <Image
            src="https://picsum.photos/1200/500" // Adjusted aspect ratio slightly
            alt="Ganesh Bhel Franchise Opportunity"
            layout="fill"
            objectFit="cover"
            quality={80} // Adjusted quality
            className="absolute inset-0 z-0"
            data-ai-hint="modern indian restaurant interior bright franchise clean"
          />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0"></div> {/* Changed gradient direction */}
          <div className="relative z-10 flex items-center justify-start h-full p-10 md:p-16 text-background"> {/* Centered content vertically */}
             <div className="max-w-lg"> {/* Adjusted max-width */}
                <h2 className="text-3xl md:text-4xl font-bold font-heading mb-3">Your Opportunity Awaits</h2>
                <p className="text-lg md:text-xl">Leverage our established brand, proven business model, and comprehensive support system.</p>
                 <Button size="lg" variant="outline" className="mt-6 bg-transparent border-background text-background hover:bg-background hover:text-foreground rounded-full px-6 py-2">
                   Learn More Below <ArrowRight className="ml-2 h-5 w-5"/>
                 </Button>
             </div>
          </div>
      </section>

      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-heading text-primary">Why Partner with Ganesh Bhel?</h2> {/* Adjusted margin/size */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Adjusted gap/breakpoints */}
          <Card className="text-center p-6 card-hover-effect"> {/* Increased padding, applied hover effect */}
             <CheckCircle className="mx-auto h-12 w-12 text-secondary mb-4" /> {/* Increased size/margin */}
            <h3 className="text-xl font-semibold mb-2">Proven Brand</h3> {/* Increased size/margin */}
            <p className="text-sm text-muted-foreground">40+ years of trust and recognition.</p>
          </Card>
          <Card className="text-center p-6 card-hover-effect">
            <TrendingUp className="mx-auto h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Growth Potential</h3>
            <p className="text-sm text-muted-foreground">Tap into the booming street food market.</p>
          </Card>
          <Card className="text-center p-6 card-hover-effect">
             <Handshake className="mx-auto h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Comprehensive Support</h3>
            <p className="text-sm text-muted-foreground">Training, marketing, and operational guidance.</p>
          </Card>
           <Card className="text-center p-6 card-hover-effect">
             <Users className="mx-auto h-12 w-12 text-secondary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Strong Network</h3>
            <p className="text-sm text-muted-foreground">Join a community of successful franchisees.</p>
          </Card>
        </div>
      </section>

       <section className="grid md:grid-cols-5 gap-8 items-start"> {/* Changed to 5 columns, align start */}
        {/* Franchise Models & Investment */}
         <Card className="md:col-span-2 card-hover-effect"> {/* Span 2 cols */}
             <CardHeader>
                 <CardTitle className="text-2xl font-heading text-primary">Franchise Models</CardTitle>
                 <CardDescription>Choose the model that fits your vision.</CardDescription>
             </CardHeader>
             <CardContent className="space-y-6"> {/* Increased spacing */}
                 <div>
                     <h4 className="font-semibold text-lg mb-1 text-foreground">Kiosk Model</h4> {/* Adjusted color */}
                     <p className="text-sm text-muted-foreground">Ideal for high-footfall areas like malls and multiplexes. Lower initial investment.</p>
                     <p className="text-base font-medium text-accent mt-2">Est. Investment: ₹10-15 Lakhs*</p> {/* Increased size */}
                 </div>
                 <hr className="border-border/50"/> {/* Softer separator */}
                 <div>
                     <h4 className="font-semibold text-lg mb-1 text-foreground">Cafe Model</h4>
                     <p className="text-sm text-muted-foreground">A small-format cafe offering a wider menu and seating. Suitable for standalone locations.</p>
                     <p className="text-base font-medium text-accent mt-2">Est. Investment: ₹20-30 Lakhs*</p>
                 </div>
                  <p className="text-xs text-muted-foreground/80 pt-2">*Investment figures are indicative and may vary based on location and other factors. Detailed breakdown available upon inquiry.</p>
             </CardContent>
         </Card>

        {/* Application Form */}
         <Card className="md:col-span-3 card-hover-effect"> {/* Span 3 cols */}
           <CardHeader>
             <CardTitle className="text-2xl font-heading text-primary">Inquire Now</CardTitle>
             <CardDescription>Fill out the form below to express your interest. We'll be in touch!</CardDescription>
           </CardHeader>
           <CardContent>
             {/* TODO: Implement Server Action */}
             <form className="space-y-5"> {/* Increased spacing */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-5"> {/* Increased gap */}
                 <div className="space-y-2">
                   <Label htmlFor="name" className="text-base">Full Name</Label> {/* Increased label size */}
                   <Input id="name" placeholder="Your Name" required />
                 </div>
                 <div className="space-y-2">
                   <Label htmlFor="email" className="text-base">Email Address</Label>
                   <Input id="email" type="email" placeholder="your.email@example.com" required />
                 </div>
               </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                 <div className="space-y-2">
                   <Label htmlFor="phone" className="text-base">Phone Number</Label>
                   <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" required />
                 </div>
                  <div className="space-y-2">
                   <Label htmlFor="location" className="text-base">Preferred Location(s)</Label>
                   <Input id="location" placeholder="City, State" required />
                 </div>
                 </div>
               <div className="space-y-2">
                 <Label htmlFor="message" className="text-base">Your Message (Optional)</Label>
                 <Textarea id="message" placeholder="Tell us a bit about your background or ask any questions..." /> {/* Updated placeholder */}
               </div>
               <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300" disabled>
                   Submit Inquiry (Connect Backend)
               </Button>
                 {/* <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300">Submit Inquiry</Button> */}
             </form>
           </CardContent>
         </Card>
       </section>

      {/* Testimonials Placeholder */}
       <section className="text-center py-10 bg-muted/50 rounded-lg shadow-inner"> {/* Added bg and padding */}
            <h2 className="text-3xl font-bold mb-6 font-heading text-primary">Hear from Our Partners</h2>
             <div className="max-w-2xl mx-auto">
                <blockquote className="italic text-lg text-foreground/80 mb-4">
                    "Partnering with Ganesh Bhel was the best decision for my entrepreneurial journey. The brand recognition and support system are unparalleled."
                </blockquote>
                <p className="font-semibold">- Successful Franchisee (Name Placeholder)</p>
             </div>
            {/* Add more testimonials or a carousel here */}
        </section>
    </div>
  );
}
