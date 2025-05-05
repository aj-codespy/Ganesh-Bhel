import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu, X, ChevronRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/75"> {/* Slightly increased opacity and blur */}
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6"> {/* Responsive padding */}
        <Link href="/" className="flex items-center space-x-2 group" aria-label="Ganesh Bhel Home"> {/* Added group and aria-label */}
           {/* Removed the wrapping div, SVG and Span are direct children of Link */}
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:scale-110 transition-transform duration-200"> {/* Responsive size + hover effect */}
             <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/> {/* Example Icon */}
           </svg>
           <span className="font-bold text-base sm:text-lg md:text-xl font-heading text-primary group-hover:text-accent transition-colors duration-200">Ganesh Bhel</span> {/* Responsive size + hover effect */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-x-5 lg:gap-x-7"> {/* Adjusted gap */}
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary relative group/nav" // Added relative positioning for potential underline effect
            >
              <span>{item.label}</span>
              {/* Optional: Add an underline effect on hover */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/nav:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-accent/50"> {/* Rounded button + hover effect */}
                <Menu className="h-5 w-5 sm:h-6 sm:w-6" /> {/* Responsive icon */}
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] sm:w-[280px] p-0 flex flex-col bg-sidebar text-sidebar-foreground"> {/* Use sidebar colors */}
               <SheetHeader className="p-4 border-b border-sidebar-border flex flex-row items-center justify-between space-y-0"> {/* Use sidebar border */}
                 <SheetTitle className="flex items-center space-x-2">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6 text-sidebar-primary"> {/* Use sidebar primary */}
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
                     </svg>
                     <span className="font-bold text-lg font-heading text-sidebar-primary">Ganesh Bhel</span>
                 </SheetTitle>
                 <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full h-7 w-7 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"> {/* Use sidebar accent */}
                        <X className="h-4 w-4 text-muted-foreground" />
                        <span className="sr-only">Close</span>
                    </Button>
                </SheetClose>
               </SheetHeader>
              <nav className="flex-1 overflow-y-auto grid gap-1 p-4 text-base font-medium mt-2"> {/* Adjusted gap, padding, enabled scroll */}
                {navItems.map((item, index) => (
                  <React.Fragment key={item.href}>
                     <SheetClose asChild> {/* Close sheet on link click */}
                       <Link
                         href={item.href}
                         className="flex items-center justify-between rounded-md px-3 py-2.5 text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" // Use sidebar colors
                       >
                          {/* Wrap content in a single span to satisfy asChild */}
                          <span className="flex items-center justify-between w-full">
                            {item.label}
                            <ChevronRight className="h-4 w-4 text-muted-foreground" />
                          </span>
                       </Link>
                     </SheetClose>
                     {index < navItems.length - 1 && <Separator className="my-1 bg-sidebar-border/50"/>} {/* Use sidebar border */}
                  </React.Fragment>
                ))}
              </nav>
               {/* Optional: Add footer in mobile menu */}
                <div className="p-4 border-t border-sidebar-border mt-auto">
                   <p className="text-xs text-sidebar-foreground/70 text-center">© {new Date().getFullYear()} Ganesh Bhel</p>
               </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
