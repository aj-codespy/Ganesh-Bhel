import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'; // Added SheetHeader, SheetTitle
import { Menu, X } from 'lucide-react'; // Added X icon
import { Separator } from '@/components/ui/separator'; // Added Separator

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/menu', label: 'Menu' },
  { href: '/order', label: 'Order Online' },
  { href: '/franchise', label: 'Franchise' },
  { href: '/blog', label: 'Blog' },
  { href: '/store-locator', label: 'Store Locator' },
  { href: '/contact', label: 'Contact Us' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/90 backdrop-blur-md supports-[backdrop-filter]:bg-background/60"> {/* Adjusted alpha, added blur */}
      <div className="container flex h-16 items-center justify-between px-4 md:px-6"> {/* Standard padding */}
        <Link href="/" className="flex items-center space-x-2.5"> {/* Adjusted spacing */}
          {/* Placeholder Logo */}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7 md:h-8 md:w-8 text-primary"> {/* Slightly adjusted size */}
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/> {/* Example Icon */}
          </svg>
          <span className="font-bold text-lg md:text-xl font-heading text-primary">Ganesh Bhel</span> {/* Adjusted size */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-6 lg:gap-x-8"> {/* Adjusted gap */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary" // Hover to primary color
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] p-0"> {/* Set width, remove padding */}
               <SheetHeader className="p-4 border-b">
                 <SheetTitle className="flex items-center space-x-2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-primary">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                     </svg>
                     <span className="font-bold text-lg font-heading text-primary">Ganesh Bhel</span>
                 </SheetTitle>
               </SheetHeader>
              <nav className="grid gap-4 p-4 text-base font-medium mt-2"> {/* Adjusted gap/size */}
                {navItems.map((item, index) => (
                  <React.Fragment key={item.href}>
                     <Link
                       href={item.href}
                       className="flex items-center justify-between rounded-md px-3 py-2 text-foreground/80 transition-colors hover:bg-accent hover:text-accent-foreground"
                     >
                       {item.label}
                       <ChevronRight className="h-4 w-4 text-muted-foreground" />
                     </Link>
                     {index < navItems.length - 1 && <Separator className="my-1 bg-border/50"/>} {/* Add separator */}
                  </React.Fragment>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

// Added ChevronRight for mobile menu links - ensure it's imported or handle missing icon
import { ChevronRight } from 'lucide-react';
import * as React from 'react'; // Import React for Fragment
