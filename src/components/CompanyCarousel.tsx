"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

const companies = [
    "FlutterFlow", "S&P Solutions", "beezion", "SEINHSA",
    "nexcay", "MEGA Industria", "Sergy Car", "Copper App"
];

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
                        <Card className="bg-transparent border-white/20">
                            <CardContent className="p-4">
                                <div className="h-16 flex items-center justify-center">
                                    <span className="text-white/80 font-medium">{company}</span>
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious aria-label="Empresa anterior" />
            <CarouselNext aria-label="Siguiente empresa" />
        </Carousel>
    );
} 