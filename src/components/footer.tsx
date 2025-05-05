import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react"; // Add social icons

export function Footer() {
  return (
    <footer className="py-6 sm:py-8 border-t bg-secondary text-secondary-foreground mt-12 md:mt-16"> {/* Adjusted padding/margin */}
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6"> {/* Adjusted gap */}
        <div className="flex items-center space-x-2 mb-4 md:mb-0"> {/* Added bottom margin on mobile */}
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5 sm:h-6 sm:w-6 text-secondary-foreground/80"> {/* Responsive size */}
               <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
            <span className="font-semibold font-heading text-base sm:text-lg">Ganesh Bhel</span> {/* Responsive size */}
        </div>
        <p className="text-center text-xs sm:text-sm leading-loose text-secondary-foreground/80 md:text-left order-last md:order-none"> {/* Responsive size, order */}
          &copy; {new Date().getFullYear()} Ganesh Bhel. All rights reserved.
           <span className="hidden md:inline mx-1">|</span> <br className="md:hidden"/>
          <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
        </p>
        <div className="flex items-center space-x-3 sm:space-x-4"> {/* Adjusted spacing */}
           <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
             <Facebook size={18} /> {/* Slightly smaller icons */}
           </Link>
            <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
             <Instagram size={18} />
           </Link>
            <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-secondary-foreground/70 hover:text-secondary-foreground transition-colors">
             <Twitter size={18} />
           </Link>
        </div>
      </div>
    </footer>
  );
}
