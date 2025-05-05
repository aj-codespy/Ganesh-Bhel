import { ProductCarousel } from '@/components/product-carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'; // Import Card components if needed for link section
import { ArrowRight } from 'lucide-react'; // Icon for links

export default function Home() {
  const flagshipProducts = [
    { id: 1, name: 'Classic Bhel Puri', imageUrl: '/images/bhel-puri.jpg', description: 'The original taste of Pune street food.', dataAiHint: 'bhel puri indian street food' },
    { id: 2, name: 'Spicy Pani Puri', imageUrl: '/images/pani-puri.jpg', description: 'Crispy puris filled with tangy water and spices.', dataAiHint: 'pani puri golgappa indian street food' },
    { id: 3, name: 'Fusion Sev Puri', imageUrl: '/images/sev-puri.jpg', description: 'A modern twist on a classic chaat.', dataAiHint: 'sev puri indian street food' },
    { id: 4, name: 'Dahi Puri', imageUrl: '/images/dahi-puri.jpg', description: 'Cool yogurt meets crispy puris.', dataAiHint: 'dahi puri indian street food' },
  ];

  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-xl">
         <Image
            src="https://picsum.photos/1200/800"
            alt="Ganesh Bhel Hero Background"
            layout="fill"
            objectFit="cover"
            quality={85} // Slightly higher quality
            className="absolute inset-0 z-0 opacity-25 dark:opacity-20" // Reduced opacity for better text contrast
            data-ai-hint="indian street food stall festive vibrant colors"
          />
           <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background/80 dark:from-black/30 dark:via-black/60 dark:to-black/90 z-0"></div> {/* Added gradient overlay */}
          <div className="relative z-10 p-8 max-w-4xl"> {/* Increased max-width */}
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-secondary mb-6"> {/* Increased margin */}
                Taste the Tradition, Experience the Innovation
              </h1>
              <p className="text-lg md:text-xl text-foreground/85 mb-8"> {/* Slightly less muted text, increased margin */}
                Since 1978, Ganesh Bhel has been serving authentic Pune street food with a commitment to quality and hygiene.
              </p>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 text-lg rounded-full shadow-md hover:shadow-lg transition-all duration-300">
                <Link href="/menu">Explore Our Menu <ArrowRight className="ml-2 h-5 w-5" /></Link>
              </Button>
          </div>
      </section>

      {/* Product Carousel */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 font-heading text-primary">Our Signature Delights</h2> {/* Adjusted heading color */}
        <ProductCarousel products={flagshipProducts} />
      </section>

      {/* Brand Story Intro */}
      <section className="text-center p-10 bg-muted/60 rounded-lg shadow-inner"> {/* Adjusted padding and background */}
        <h2 className="text-3xl md:text-4xl font-bold mb-5 font-heading text-secondary">Our Journey Since 1978</h2>
        <p className="text-lg text-foreground/80 mb-8 max-w-3xl mx-auto"> {/* Increased max-width */}
          From a humble street cart to a beloved brand, Ganesh Bhel pioneered "Pani Puri" and continues to innovate while preserving authentic flavors. Discover our story of passion, quality, and community.
        </p>
        <Button variant="outline" asChild className="rounded-full px-6 py-2 border-primary text-primary hover:bg-primary/10 hover:text-primary">
          <Link href="/about">Read Our Full Story</Link>
        </Button>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center"> {/* Increased gap */}
        <Link href="/order" className="block p-8 bg-card rounded-lg card-hover-effect group"> {/* Increased padding, applied new hover effect */}
          <h3 className="text-2xl font-semibold mb-3 font-heading text-primary">Order Online</h3>
          <p className="text-foreground/70 mb-4">Get your favorite chaats delivered to your doorstep.</p>
          <span className="text-accent font-medium group-hover:underline flex items-center justify-center">
            Order Now <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
        <Link href="/franchise" className="block p-8 bg-card rounded-lg card-hover-effect group">
          <h3 className="text-2xl font-semibold mb-3 font-heading text-primary">Franchise With Us</h3>
          <p className="text-foreground/70 mb-4">Join the Ganesh Bhel family and start your own success story.</p>
           <span className="text-accent font-medium group-hover:underline flex items-center justify-center">
            Learn More <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
        <Link href="/store-locator" className="block p-8 bg-card rounded-lg card-hover-effect group">
          <h3 className="text-2xl font-semibold mb-3 font-heading text-primary">Find a Store</h3>
          <p className="text-foreground/70 mb-4">Locate the nearest Ganesh Bhel outlet.</p>
           <span className="text-accent font-medium group-hover:underline flex items-center justify-center">
            Find Locations <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </Link>
      </section>
    </div>
  );
}
