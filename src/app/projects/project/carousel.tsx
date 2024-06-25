'use client';
import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import Image from 'next/image';

export function ProjectCarousel({ images }: { images: string[] }) {
  return (
    <Carousel
      opts={{
        align: 'start'
      }}
      className="relative m-16 mx-auto h-[calc(100vh-4rem)] w-full max-w-7xl"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index} className="h-screen bg-blue-600">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <Image
                    alt="project image"
                    src={image}
                    fill
                    objectFit="cover"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
