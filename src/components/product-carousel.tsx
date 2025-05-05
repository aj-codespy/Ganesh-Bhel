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
      className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto" // Responsive max-width
    >
      <CarouselContent className="-ml-4">
        {/* Adjusted basis for better mobile view */}
        {products.map((product) => (
          <CarouselItem key={product.id} className="basis-4/5 sm:basis-1/2 lg:basis-1/3 pl-4">
            <div className="p-1 h-full">
              <Card className="overflow-hidden card-hover-effect h-full flex flex-col group">
                <CardContent className="flex flex-col items-center justify-start p-0 flex-grow">
                  <div className="relative w-full h-44 sm:h-52"> {/* Responsive height */}
                     <Image
                        src={`https://picsum.photos/seed/${product.id}/400/300`}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 ease-in-out group-hover:scale-105"
                        data-ai-hint={product.dataAiHint}
                      />
                  </div>
                  <div className="p-3 sm:p-4 text-center mt-auto w-full"> {/* Responsive padding */}
                    <h3 className="text-base sm:text-lg font-semibold font-heading text-primary">{product.name}</h3> {/* Responsive text */}
                    <p className="text-xs sm:text-sm text-muted-foreground mt-1">{product.description}</p> {/* Responsive text */}
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* Hide buttons on smaller screens, adjust positioning */}
      <CarouselPrevious className="absolute left-[-10px] sm:left-[-50px] top-1/2 -translate-y-1/2 hidden sm:inline-flex bg-background/80 hover:bg-accent text-accent-foreground hover:text-accent-foreground h-8 w-8 sm:h-10 sm:w-10" />
      <CarouselNext className="absolute right-[-10px] sm:right-[-50px] top-1/2 -translate-y-1/2 hidden sm:inline-flex bg-background/80 hover:bg-accent text-accent-foreground hover:text-accent-foreground h-8 w-8 sm:h-10 sm:w-10" />
    </Carousel>
  )
}
