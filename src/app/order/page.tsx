import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Store as StoreIcon } from "lucide-react";
import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Order Online</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Get your favorite Ganesh Bhel delights delivered to your doorstep or pick them up from a nearby store.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <Card className="text-center shadow-lg subtle-hover-grow border border-transparent hover:border-primary transition-all">
          <CardHeader>
             <Truck className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl font-heading">Home Delivery</CardTitle>
             <CardDescription>Order through our partners</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Craving chaat at home? Order now through Zomato or Swiggy for fast and convenient delivery.</p>
            <div className="flex justify-center gap-4">
                <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    {/* Replace with actual Zomato link */}
                    <Link href="https://www.zomato.com/pune/ganesh-bhel-fc-road" target="_blank" rel="noopener noreferrer">Order on Zomato</Link>
                </Button>
                <Button asChild variant="outline">
                     {/* Replace with actual Swiggy link */}
                    <Link href="https://www.swiggy.com/restaurants/ganesh-bhel-fc-road-shivaji-nagar-pune-18393" target="_blank" rel="noopener noreferrer">Order on Swiggy</Link>
                </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center shadow-lg subtle-hover-grow border border-transparent hover:border-primary transition-all">
          <CardHeader>
            <StoreIcon className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-2xl font-heading">Store Pickup</CardTitle>
             <CardDescription>Order ahead and collect</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>Prefer to pick up your order? Find your nearest store and place your order for collection.</p>
            <Button asChild variant="secondary">
              <Link href="/store-locator">Find a Store</Link>
            </Button>
             {/* Potentially add a direct "Order for Pickup" link/system here if available */}
          </CardContent>
        </Card>
      </section>

       <section className="text-center p-8 bg-muted/30 rounded-lg shadow">
        <h2 className="text-3xl font-bold mb-4 font-heading text-primary">Packaged Products</h2>
        <div className="flex justify-center mb-4">
            <Package className="h-10 w-10 text-primary" />
        </div>
        <p className="text-lg text-foreground/80 mb-6 max-w-2xl mx-auto">
          Enjoy the taste of Ganesh Bhel anywhere! Explore our range of packaged snacks available for purchase online and in stores. Perfect for gifting or stocking your pantry.
        </p>
        <Button variant="outline" disabled>
          Shop Packaged Goods (Coming Soon)
        </Button>
         {/* Replace disabled button with actual link when e-commerce is ready */}
         {/*
         <Button asChild variant="outline">
             <Link href="/shop">Shop Packaged Goods</Link>
         </Button>
         */}
      </section>
    </div>
  );
}
