import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Store as StoreIcon, ArrowRight } from "lucide-react"; // Added ArrowRight
import Link from "next/link";

export default function OrderPage() {
  return (
    <div className="space-y-12 md:space-y-20"> {/* Adjusted base spacing */}
      <section className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 font-heading text-secondary">Order Online</h1> {/* Responsive heading */}
        <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto px-2 sm:px-0"> {/* Responsive text, padding */}
          Get your favorite Ganesh Bhel delights delivered to your doorstep or pick them up from a nearby store.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"> {/* Default 1 col, adjusted gap */}
        <Card className="text-center card-hover-effect flex flex-col">
          <CardHeader className="pb-3 sm:pb-4"> {/* Responsive padding */}
             <Truck className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-primary mb-3 sm:mb-4" /> {/* Responsive size */}
            <CardTitle className="text-xl sm:text-2xl font-heading">Home Delivery</CardTitle> {/* Responsive title */}
             <CardDescription className="text-sm sm:text-base">Order through our delivery partners</CardDescription> {/* Responsive description */}
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-5 flex-grow flex flex-col justify-center items-center p-4 sm:p-6"> {/* Responsive spacing/padding */}
            <p className="text-sm sm:text-base text-foreground/80 max-w-sm">Craving chaat at home? Order now through Zomato or Swiggy for fast and convenient delivery right to you.</p> {/* Responsive text */}
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 w-full max-w-xs"> {/* Adjusted gap */}
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full flex-1 shadow-md hover:shadow-lg transition-all text-sm sm:text-base py-2.5 sm:py-3"> {/* Responsive text/padding */}
                    {/* Replace with actual Zomato link */}
                    <Link href="https://www.zomato.com/pune/ganesh-bhel-fc-road" target="_blank" rel="noopener noreferrer">
                      <span>Order on Zomato</span> {/* Wrap content */}
                    </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full flex-1 shadow-md hover:shadow-lg transition-all text-sm sm:text-base py-2.5 sm:py-3"> {/* Responsive text/padding */}
                     {/* Replace with actual Swiggy link */}
                    <Link href="https://www.swiggy.com/restaurants/ganesh-bhel-fc-road-shivaji-nagar-pune-18393" target="_blank" rel="noopener noreferrer">
                      <span>Order on Swiggy</span> {/* Wrap content */}
                    </Link>
                </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="text-center card-hover-effect flex flex-col">
          <CardHeader className="pb-3 sm:pb-4">
            <StoreIcon className="mx-auto h-12 w-12 sm:h-14 sm:w-14 text-primary mb-3 sm:mb-4" />
            <CardTitle className="text-xl sm:text-2xl font-heading">Store Pickup</CardTitle>
             <CardDescription className="text-sm sm:text-base">Order ahead and collect at your convenience</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 sm:space-y-5 flex-grow flex flex-col justify-center items-center p-4 sm:p-6">
            <p className="text-sm sm:text-base text-foreground/80 max-w-sm">Prefer to pick up your order yourself? Find your nearest store, place your order online (coming soon!), or simply walk in.</p>
            <Button asChild size="lg" variant="secondary" className="rounded-full shadow-md hover:shadow-lg transition-all px-6 sm:px-8 text-sm sm:text-base py-2.5 sm:py-3"> {/* Responsive padding/text */}
              <Link href="/store-locator">
                 <span className="flex items-center"> {/* Wrap content */}
                    Find a Store <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5"/>
                 </span>
              </Link>
            </Button>
             <p className="text-xs text-muted-foreground pt-1 sm:pt-0">(Online ordering for pickup coming soon)</p> {/* Adjusted padding */}
          </CardContent>
        </Card>
      </section>

       <section className="text-center p-6 sm:p-10 bg-muted/50 rounded-lg shadow-inner"> {/* Responsive padding */}
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5 font-heading text-primary">Packaged Products</h2> {/* Responsive heading */}
        <div className="flex justify-center mb-4 sm:mb-5">
            <Package className="h-10 w-10 sm:h-12 sm:w-12 text-primary" /> {/* Responsive size */}
        </div>
        <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 max-w-2xl mx-auto"> {/* Responsive text/margin */}
          Enjoy the taste of Ganesh Bhel anywhere! Explore our range of packaged snacks available for purchase online and in stores. Perfect for gifting or stocking your pantry.
        </p>
        <Button variant="outline" disabled className="rounded-full px-6 py-2 text-sm sm:text-base"> {/* Responsive text */}
          Shop Packaged Goods (Coming Soon)
        </Button>
      </section>
    </div>
  );
}
