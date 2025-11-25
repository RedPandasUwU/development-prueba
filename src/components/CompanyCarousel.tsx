"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { companies } from "@/lib/data";

export default function CompanyCarousel() {
    const plugin = useRef(
        Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
    );

    return (
        <Carousel
            className="w-full max-w-6xl mx-auto"
            plugins={[plugin.current]}
        >
            <CarouselContent>
                {companies.map((company, index) => (
                    <CarouselItem key={index} className="md:basis-1/4 lg:basis-1/6">
                        <Card className="bg-transparent border-white/20 hover:bg-white/5 transition-colors cursor-pointer">
                            <CardContent className="p-4">
                                <div className="h-16 flex items-center justify-center">
                                    <Image
                                        src={company.logo}
                                        alt={company.name}
                                        width={100}
                                        height={40}
                                        className="object-contain"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Empresa anterior" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white disabled:opacity-50" />
            <CarouselNext aria-label="Siguiente empresa" className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:text-white disabled:opacity-50" />
        </Carousel>
    );
}