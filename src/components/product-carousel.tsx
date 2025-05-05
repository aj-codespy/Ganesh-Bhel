'use client';

import * as React from "react"
import Image from "next/image"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface Product {
  id: number;
  name: string;
  imageUrl: string; // Keeping placeholder for now
  description: string;
  dataAiHint: string;
}

interface ProductCarouselProps {
  products: Product[];
}

export function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto" // Increased max-width slightly
    >
      <CarouselContent className="-ml-4"> {/* Ensure negative margin matches item padding */}
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3 pl-4"> {/* Added padding-left */}
            <div className="p-1 h-full"> {/* Ensure div takes full height for consistent alignment */}
              <Card className="overflow-hidden card-hover-effect h-full flex flex-col group"> {/* Applied new hover effect, full height, flex column */}
                <CardContent className="flex flex-col items-center justify-start p-0 flex-grow"> {/* Adjusted flex properties */}
                  <div className="relative w-full h-52"> {/* Increased height slightly */}
                     <Image
                        // Use placeholder images
                        src={`https://picsum.photos/seed/${product.id}/400/300`}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={product.dataAiHint}
                      />
                  </div>
                  <div className="p-4 text-center mt-auto w-full"> {/* Pushed text to bottom */}
                    <h3 className="text-lg font-semibold font-heading text-primary">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-60px] top-1/2 -translate-y-1/2 hidden xl:inline-flex bg-background/80 hover:bg-accent text-accent-foreground hover:text-accent-foreground" /> {/* Adjusted position and styling */}
      <CarouselNext className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden xl:inline-flex bg-background/80 hover:bg-accent text-accent-foreground hover:text-accent-foreground" /> {/* Adjusted position and styling */}
    </Carousel>
  )
}
