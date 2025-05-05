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
} from "@/components/ui/carousel" // Assuming shadcn Carousel components exist

interface Product {
  id: number;
  name: string;
  imageUrl: string; // Use placeholder generator for now
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
      className="w-full max-w-4xl mx-auto"
    >
      <CarouselContent>
        {products.map((product) => (
          <CarouselItem key={product.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card className="overflow-hidden subtle-hover-grow shadow-md border-secondary/20">
                <CardContent className="flex flex-col items-center justify-center p-0">
                  <div className="relative w-full h-48">
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
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold font-heading text-primary">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{product.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
      <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
    </Carousel>
  )
}

// Ensure you have installed and setup shadcn carousel:
// npx shadcn-ui@latest add carousel
