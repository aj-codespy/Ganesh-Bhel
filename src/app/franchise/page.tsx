import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { CheckCircle, TrendingUp, Handshake, Users, ArrowRight } from "lucide-react";

export default function FranchisePage() {
  return (
    <div className="space-y-12 md:space-y-20"> {/* Adjusted base spacing */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-secondary">Become a Franchise Partner</h1> {/* Responsive heading */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-3xl mx-auto px-2 sm:px-0"> {/* Responsive text, padding */}
          Join the legacy of Ganesh Bhel! Partner with a trusted, ISO-certified brand with over 40 years of experience in delighting customers with authentic Indian street food.
        </p>
      </section>

       <section className="relative h-[40vh] sm:h-[45vh] rounded-lg overflow-hidden shadow-xl"> {/* Responsive height */}
         <Image
            src="https://picsum.photos/1200/500"
            alt="Ganesh Bhel Franchise Opportunity"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="absolute inset-0 z-0"
            data-ai-hint="modern indian restaurant interior bright franchise clean"
            priority
          />
           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent z-0"></div>
          <div className="relative z-10 flex items-center justify-start h-full p-6 sm:p-10 md:p-16 text-background"> {/* Responsive padding */}
             <div className="max-w-md lg:max-w-lg"> {/* Adjusted max-width */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading mb-2 sm:mb-3">Your Opportunity Awaits</h2> {/* Responsive heading */}
                <p className="text-base sm:text-lg md:text-xl">Leverage our established brand, proven business model, and comprehensive support system.</p> {/* Responsive text */}
                 <Button size="lg" variant="outline" className="mt-4 sm:mt-6 bg-transparent border-background text-background hover:bg-background hover:text-foreground rounded-full px-5 py-2 sm:px-6 text-sm sm:text-base"> {/* Responsive size/padding/text - Removed asChild */}
                   <span className="flex items-center"> {/* Wrap content */}
                     Learn More Below <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5"/> {/* Responsive icon */}
                   </span>
                 </Button>
             </div>
          </div>
      </section>

      <section>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 md:mb-10 font-heading text-primary">Why Partner with Ganesh Bhel?</h2> {/* Responsive heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"> {/* Adjusted gap */}
          <Card className="text-center p-4 sm:p-6 card-hover-effect bg-card/80 backdrop-blur-sm border-primary/20"> {/* Responsive padding, added style */}
             <CheckCircle className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4" /> {/* Responsive size */}
            <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Proven Brand</h3> {/* Responsive size */}
            <p className="text-xs sm:text-sm text-muted-foreground">40+ years of trust and recognition.</p> {/* Responsive text */}
          </Card>
          <Card className="text-center p-4 sm:p-6 card-hover-effect bg-card/80 backdrop-blur-sm border-primary/20">
            <TrendingUp className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Growth Potential</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Tap into the booming street food market.</p>
          </Card>
          <Card className="text-center p-4 sm:p-6 card-hover-effect bg-card/80 backdrop-blur-sm border-primary/20">
             <Handshake className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Comprehensive Support</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Training, marketing, and operational guidance.</p>
          </Card>
           <Card className="text-center p-4 sm:p-6 card-hover-effect bg-card/80 backdrop-blur-sm border-primary/20">
             <Users className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-3 sm:mb-4" />
            <h3 className="text-lg sm:text-xl font-semibold mb-1.5 sm:mb-2">Strong Network</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Join a community of successful franchisees.</p>
          </Card>
        </div>
      </section>

       <section className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 items-start"> {/* Default 1 col, adjusted gap */}
        {/* Franchise Models & Investment */}
         <Card className="md:col-span-2 card-hover-effect bg-card/80 backdrop-blur-sm border-primary/20">
             <CardHeader className="pb-4">
                 <CardTitle className="text-xl sm:text-2xl font-heading text-primary">Franchise Models</CardTitle> {/* Responsive title */}
                 <CardDescription className="text-sm sm:text-base">Choose the model that fits your vision.</CardDescription> {/* Responsive description */}
             </CardHeader>
             <CardContent className="space-y-5 sm:space-y-6"> {/* Responsive spacing */}
                 <div>
                     <h4 className="font-semibold text-base sm:text-lg mb-1 text-foreground">Kiosk Model</h4> {/* Responsive text */}
                     <p className="text-xs sm:text-sm text-muted-foreground">Ideal for high-footfall areas like malls and multiplexes. Lower initial investment.</p> {/* Responsive text */}
                     <p className="text-sm sm:text-base font-medium text-accent mt-1.5 sm:mt-2">Est. Investment: ₹10-15 Lakhs*</p> {/* Responsive text */}
                 </div>
                 <hr className="border-border/50"/>
                 <div>
                     <h4 className="font-semibold text-base sm:text-lg mb-1 text-foreground">Cafe Model</h4>
                     <p className="text-xs sm:text-sm text-muted-foreground">A small-format cafe offering a wider menu and seating. Suitable for standalone locations.</p>
                     <p className="text-sm sm:text-base font-medium text-accent mt-1.5 sm:mt-2">Est. Investment: ₹20-30 Lakhs*</p>
                 </div>
                  <p className="text-[11px] sm:text-xs text-muted-foreground/80 pt-1 sm:pt-2">*Investment figures are indicative and may vary based on location and other factors. Detailed breakdown available upon inquiry.</p>
             </CardContent>
         </Card>

        {/* Application Form */}
         <Card className="md:col-span-3 card-hover-effect bg-card/80 backdrop-blur-sm border-primary/20">
           <CardHeader className="pb-4">
             <CardTitle className="text-xl sm:text-2xl font-heading text-primary">Inquire Now</CardTitle> {/* Responsive title */}
             <CardDescription className="text-sm sm:text-base">Fill out the form below to express your interest. We'll be in touch!</CardDescription> {/* Responsive description */}
           </CardHeader>
           <CardContent>
             {/* TODO: Implement Server Action */}
             <form className="space-y-4 sm:space-y-5"> {/* Responsive spacing */}
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5"> {/* Responsive gap */}
                 <div className="space-y-1.5 sm:space-y-2">
                   <Label htmlFor="name" className="text-sm sm:text-base">Full Name</Label> {/* Responsive label */}
                   <Input id="name" placeholder="Your Name" required />
                 </div>
                 <div className="space-y-1.5 sm:space-y-2">
                   <Label htmlFor="email" className="text-sm sm:text-base">Email Address</Label>
                   <Input id="email" type="email" placeholder="your.email@example.com" required />
                 </div>
               </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                 <div className="space-y-1.5 sm:space-y-2">
                   <Label htmlFor="phone" className="text-sm sm:text-base">Phone Number</Label>
                   <Input id="phone" type="tel" placeholder="+91 XXXXXXXXXX" required />
                 </div>
                  <div className="space-y-1.5 sm:space-y-2">
                   <Label htmlFor="location" className="text-sm sm:text-base">Preferred Location(s)</Label>
                   <Input id="location" placeholder="City, State" required />
                 </div>
                 </div>
               <div className="space-y-1.5 sm:space-y-2">
                 <Label htmlFor="message" className="text-sm sm:text-base">Your Message (Optional)</Label>
                 <Textarea id="message" placeholder="Tell us a bit about your background or ask any questions..." className="min-h-[80px] sm:min-h-[100px]" /> {/* Adjusted min height */}
               </div>
               <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full shadow-md hover:shadow-lg transition-all duration-300 text-base" disabled>
                   Submit Inquiry (Connect Backend)
               </Button>
             </form>
           </CardContent>
         </Card>
       </section>

      {/* Testimonials Placeholder */}
       <section className="text-center py-8 md:py-10 bg-muted/50 rounded-lg shadow-inner"> {/* Adjusted padding */}
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 font-heading text-primary">Hear from Our Partners</h2> {/* Responsive heading */}
             <div className="max-w-2xl mx-auto px-4 sm:px-0"> {/* Added padding */}
                <blockquote className="italic text-base sm:text-lg text-foreground/80 mb-3 sm:mb-4"> {/* Responsive text */}
                    "Partnering with Ganesh Bhel was the best decision for my entrepreneurial journey. The brand recognition and support system are unparalleled."
                </blockquote>
                <p className="font-semibold text-sm sm:text-base">- Successful Franchisee (Name Placeholder)</p> {/* Responsive text */}
             </div>
        </section>
    </div>
  );
}
