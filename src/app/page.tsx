import { ProductCarousel } from '@/components/product-carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, ShoppingCart, Utensils, MapPin } from 'lucide-react'; // Import relevant icons

// Corrected StoreIcon import path if necessary, assuming it's a custom icon
// import { Store as StoreIcon } from 'lucide-react'; // If using Lucide
// If Store is a custom SVG or component, import it correctly:
// import StoreIcon from '@/components/icons/store'; // Example custom icon path

export default function Home() {
  const flagshipProducts = [
    { id: 1, name: 'Classic Bhel Puri', imageUrl: '/images/bhel-puri.jpg', description: 'The original taste of Pune street food.', dataAiHint: 'bhel puri indian street food bowl delicious' },
    { id: 2, name: 'Spicy Pani Puri', imageUrl: '/images/pani-puri.jpg', description: 'Crispy puris filled with tangy water and spices.', dataAiHint: 'pani puri golgappa indian street food plate close up' },
    { id: 3, name: 'Cheese Sev Puri', imageUrl: '/images/sev-puri.jpg', description: 'A cheesy, modern twist on a classic chaat.', dataAiHint: 'sev puri cheese indian street food delicious' },
    { id: 4, name: 'Refreshing Dahi Puri', imageUrl: '/images/dahi-puri.jpg', description: 'Cool yogurt meets crispy puris & sweet chutney.', dataAiHint: 'dahi puri indian street food yogurt snack refreshing' },
  ];

  // Inline SVG for Store icon if not available in lucide-react
  const StoreIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M3 21h18" />
      <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
      <path d="M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
      <path d="M7 10h.01" />
      <path d="M17 10h.01" />
    </svg>
  );


  return (
    <div className="space-y-16 md:space-y-24"> {/* Increased spacing */}
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[75vh] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl border border-primary/10"> {/* Adjusted height, added subtle border */}
         <Image
            src="https://picsum.photos/seed/ganesh-hero-2/1200/800" // Changed seed for variation
            alt="Ganesh Bhel Hero Background"
            layout="fill"
            objectFit="cover"
            quality={85}
            className="absolute inset-0 z-0 opacity-30 dark:opacity-25" // Slightly adjusted opacity
            data-ai-hint="indian street food vibrant colorful festive background blur"
            priority // Prioritize loading hero image
          />
           {/* Enhanced Gradient Overlay */}
           <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent dark:from-background dark:via-background/80 dark:to-transparent z-0"></div>
          <div className="relative z-10 p-4 sm:p-8 max-w-4xl"> {/* Increased max-width */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-secondary mb-5 md:mb-7 leading-tight drop-shadow-md"> {/* Responsive heading size, leading, shadow */}
                Taste the Tradition,<br className="hidden sm:block"/> Experience the Innovation
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/90 mb-8 md:mb-10 max-w-2xl mx-auto"> {/* Responsive text size */}
                Since 1978, Ganesh Bhel has been serving authentic Pune street food with a commitment to quality and hygiene.
              </p>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg md:text-xl rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                 <Link href="/menu" className="flex items-center">
                    Explore Our Menu <Utensils className="ml-2 h-5 w-5 md:h-6 md:w-6" />
                 </Link>
              </Button>
          </div>
      </section>

      {/* Product Carousel */}
      <section>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 md:mb-12 font-heading text-primary drop-shadow-sm">Our Signature Delights</h2> {/* Responsive heading size, added drop shadow */}
        <ProductCarousel products={flagshipProducts} />
      </section>

      {/* Brand Story Intro */}
      <section className="text-center p-8 md:p-12 bg-gradient-to-br from-muted/40 to-muted/70 rounded-lg shadow-inner border border-border/30"> {/* Adjusted padding, gradient, border */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 md:mb-6 font-heading text-secondary drop-shadow-sm">Our Journey Since 1978</h2> {/* Responsive heading size */}
        <p className="text-lg md:text-xl text-foreground/80 mb-8 md:mb-10 max-w-3xl mx-auto leading-relaxed"> {/* Responsive text size, leading */}
          From a humble street cart to a beloved brand, Ganesh Bhel pioneered "Pani Puri" and continues to innovate while preserving authentic flavors. Discover our story of passion, quality, and community.
        </p>
        <Button variant="outline" asChild className="rounded-full px-8 py-3 border-primary text-primary hover:bg-primary/10 hover:text-primary hover:scale-105 transition-transform duration-200 text-base md:text-lg shadow-sm">
           <Link href="/about" className="flex items-center">
                Read Our Full Story <ArrowRight className="ml-2 h-5 w-5"/>
           </Link>
        </Button>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 text-center"> {/* Adjusted gap */}
        <Link href="/order" className="block p-6 md:p-8 bg-card rounded-lg card-hover-effect group border border-transparent hover:border-accent transition-all duration-300">
          {/* Wrap content in a div */}
          <div>
            <ShoppingCart className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-4 group-hover:text-accent transition-colors duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 font-heading text-primary group-hover:text-accent transition-colors duration-300">Order Online</h3> {/* Responsive heading size */}
            <p className="text-sm md:text-base text-foreground/70 mb-3 md:mb-4">Get your favorite chaats delivered to your doorstep.</p> {/* Responsive text size */}
            <span className="text-accent font-medium group-hover:underline flex items-center justify-center text-sm md:text-base">
              Order Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
        <Link href="/franchise" className="block p-6 md:p-8 bg-card rounded-lg card-hover-effect group border border-transparent hover:border-accent transition-all duration-300">
          {/* Wrap content in a div */}
          <div>
             <StoreIcon className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-4 group-hover:text-accent transition-colors duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 font-heading text-primary group-hover:text-accent transition-colors duration-300">Franchise With Us</h3> {/* Responsive heading size */}
            <p className="text-sm md:text-base text-foreground/70 mb-3 md:mb-4">Join the Ganesh Bhel family and start your own success story.</p> {/* Responsive text size */}
             <span className="text-accent font-medium group-hover:underline flex items-center justify-center text-sm md:text-base">
              Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
        <Link href="/store-locator" className="block p-6 md:p-8 bg-card rounded-lg card-hover-effect group border border-transparent hover:border-accent transition-all duration-300">
          {/* Wrap content in a div */}
          <div>
            <MapPin className="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-secondary mb-4 group-hover:text-accent transition-colors duration-300" />
            <h3 className="text-xl md:text-2xl font-semibold mb-2 md:mb-3 font-heading text-primary group-hover:text-accent transition-colors duration-300">Find a Store</h3> {/* Responsive heading size */}
            <p className="text-sm md:text-base text-foreground/70 mb-3 md:mb-4">Locate the nearest Ganesh Bhel outlet.</p> {/* Responsive text size */}
             <span className="text-accent font-medium group-hover:underline flex items-center justify-center text-sm md:text-base">
              Find Locations <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </section>
    </div>
  );
}
