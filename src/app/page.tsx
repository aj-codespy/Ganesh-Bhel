import { ProductCarousel } from '@/components/product-carousel';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const flagshipProducts = [
    { id: 1, name: 'Classic Bhel Puri', imageUrl: '/images/bhel-puri.jpg', description: 'The original taste of Pune street food.', dataAiHint: 'bhel puri indian street food' },
    { id: 2, name: 'Spicy Pani Puri', imageUrl: '/images/pani-puri.jpg', description: 'Crispy puris filled with tangy water and spices.', dataAiHint: 'pani puri golgappa indian street food' },
    { id: 3, name: 'Fusion Sev Puri', imageUrl: '/images/sev-puri.jpg', description: 'A modern twist on a classic chaat.', dataAiHint: 'sev puri indian street food' },
    { id: 4, name: 'Dahi Puri', imageUrl: '/images/dahi-puri.jpg', description: 'Cool yogurt meets crispy puris.', dataAiHint: 'dahi puri indian street food' },
  ];

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center text-center rounded-lg overflow-hidden shadow-lg">
         <Image
            src="https://picsum.photos/1200/800"
            alt="Ganesh Bhel Hero Background"
            layout="fill"
            objectFit="cover"
            quality={80}
            className="absolute inset-0 z-0 opacity-30"
            data-ai-hint="indian street food stall festive"
          />
          <div className="relative z-10 p-8 bg-background/70 rounded-md max-w-3xl backdrop-blur-sm">
              <h1 className="text-4xl md:text-6xl font-bold font-heading text-secondary mb-4">
                Taste the Tradition, Experience the Innovation
              </h1>
              <p className="text-lg md:text-xl text-foreground/80 mb-6">
                Since 1978, Ganesh Bhel has been serving authentic Pune street food with a commitment to quality and hygiene.
              </p>
              <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/menu">Explore Our Menu</Link>
              </Button>
          </div>
      </section>

      {/* Product Carousel */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 font-heading text-secondary">Our Signature Delights</h2>
        <ProductCarousel products={flagshipProducts} />
      </section>

      {/* Brand Story Intro */}
      <section className="text-center p-8 bg-muted/50 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4 font-heading text-secondary">Our Journey Since 1978</h2>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          From a humble street cart to a beloved brand, Ganesh Bhel pioneered "Pani Puri" and continues to innovate while preserving authentic flavors. Discover our story of passion, quality, and community.
        </p>
        <Button variant="outline" asChild>
          <Link href="/about">Read Our Full Story</Link>
        </Button>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <Link href="/order" className="block p-6 bg-card rounded-lg shadow-md subtle-hover-grow border border-transparent hover:border-primary transition-colors">
          <h3 className="text-2xl font-semibold mb-2 font-heading text-primary">Order Online</h3>
          <p className="text-foreground/70">Get your favorite chaats delivered to your doorstep.</p>
        </Link>
        <Link href="/franchise" className="block p-6 bg-card rounded-lg shadow-md subtle-hover-grow border border-transparent hover:border-primary transition-colors">
          <h3 className="text-2xl font-semibold mb-2 font-heading text-primary">Franchise With Us</h3>
          <p className="text-foreground/70">Join the Ganesh Bhel family and start your own success story.</p>
        </Link>
        <Link href="/store-locator" className="block p-6 bg-card rounded-lg shadow-md subtle-hover-grow border border-transparent hover:border-primary transition-colors">
          <h3 className="text-2xl font-semibold mb-2 font-heading text-primary">Find a Store</h3>
          <p className="text-foreground/70">Locate the nearest Ganesh Bhel outlet.</p>
        </Link>
      </section>
    </div>
  );
}
