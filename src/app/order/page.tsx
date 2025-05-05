import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Store as StoreIcon, ArrowRight } from "lucide-react"; // Added ArrowRight
import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="space-y-16 md:space-y-20"> {/* Increased spacing */}
      <section className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 font-heading text-secondary">Order Online</h1>
        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
          Get your favorite Ganesh Bhel delights delivered to your doorstep or pick them up from a nearby store.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8"> {/* Increased gap */}
        <Card className="text-center card-hover-effect flex flex-col"> {/* Applied hover effect, flex */}
          <CardHeader className="pb-4"> {/* Adjusted padding */}
             <Truck className="mx-auto h-14 w-14 text-primary mb-4" /> {/* Increased size */}
            <CardTitle className="text-2xl font-heading">Home Delivery</CardTitle>
             <CardDescription>Order through our delivery partners</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 flex-grow flex flex-col justify-center items-center"> {/* Increased spacing, flex grow center */}
            <p className="text-foreground/80 max-w-sm">Craving chaat at home? Order now through Zomato or Swiggy for fast and convenient delivery right to you.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 w-full max-w-xs"> {/* Stack on small screens */}
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full flex-1 shadow-md hover:shadow-lg transition-all"> {/* Zomato Color */}
                    {/* Replace with actual Zomato link */}
                    <Link href="https://www.zomato.com/pune/ganesh-bhel-fc-road" target="_blank" rel="noopener noreferrer">Order on Zomato</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full flex-1 shadow-md hover:shadow-lg transition-all"> {/* Swiggy Color */}
                     {/* Replace with actual Swiggy link */}
                    <Link href="https://www.swiggy.com/restaurants/ganesh-bhel-fc-road-shivaji-nagar-pune-18393" target="_blank" rel="noopener noreferrer">Order on Swiggy</Link>
                </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center card-hover-effect flex flex-col"> {/* Applied hover effect, flex */}
          <CardHeader className="pb-4">
            <StoreIcon className="mx-auto h-14 w-14 text-primary mb-4" />
            <CardTitle className="text-2xl font-heading">Store Pickup</CardTitle>
             <CardDescription>Order ahead and collect at your convenience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-5 flex-grow flex flex-col justify-center items-center">
            <p className="text-foreground/80 max-w-sm">Prefer to pick up your order yourself? Find your nearest store, place your order online (coming soon!), or simply walk in.</p>
            <Button asChild size="lg" variant="secondary" className="rounded-full shadow-md hover:shadow-lg transition-all px-8">
              <Link href="/store-locator" className="flex items-center">
                  Find a Store <ArrowRight className="ml-2 h-5 w-5"/>
              </Link>
            </Button>
             {/* Potentially add a direct "Order for Pickup" link/system here if available */}
             <p className="text-xs text-muted-foreground">(Online ordering for pickup coming soon)</p>
          </CardContent>
        </Card>
      </section>

       <section className="text-center p-10 bg-muted/50 rounded-lg shadow-inner"> {/* Adjusted padding/bg */}
        <h2 className="text-3xl font-bold mb-5 font-heading text-primary">Packaged Products</h2>
        <div className="flex justify-center mb-5">
            <Package className="h-12 w-12 text-primary" /> {/* Increased size */}
        </div>
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto"> {/* Increased margin */}
          Enjoy the taste of Ganesh Bhel anywhere! Explore our range of packaged snacks available for purchase online and in stores. Perfect for gifting or stocking your pantry.
        </p>
        <Button variant="outline" disabled className="rounded-full px-6 py-2">
          Shop Packaged Goods (Coming Soon)
        </Button>
         {/*
         <Button asChild variant="outline" className="rounded-full px-6 py-2">
             <Link href="/shop">Shop Packaged Goods</Link>
         </Button>
         */}
      </section>
    </div>
  );
}
