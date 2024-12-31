import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const images = [
  {
    url: "https://topnotch.rstopcoder.com/images/banners/rstopcoder-1910-1688306156.jpg",
  },
  {
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZXxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1722945683602-fa3b05086316?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1683147638125-fd31a506a429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1678566111481-8e275550b700?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fHdlYnNpdGV8ZW58MHx8MHx8fDA%3D",
  },
];

export function CarouselDemo() {
  return (
    <Carousel className="w-full h-screen flex">
      <CarouselContent className="flex-end h-full">
        {images.slice(0, 6).map((item, index) => (
          <CarouselItem key={index} className="h-full">
            <div className=" h-full">
              <Card className="h-full">
                <CardContent className="flex items-center justify-center  h-full">
                  <img
                    src={item.url}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-full"
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
