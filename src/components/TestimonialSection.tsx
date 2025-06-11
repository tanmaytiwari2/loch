import React, { useRef, useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";

interface Testimonial {
  name: string;
  position: string;
  quote: string;
}

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

export const TestimonialSection: React.FC<TestimonialSectionProps> = ({
  testimonials,
}) => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [hasDragged, setHasDragged] = useState(false);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
      carouselRef.current.style.cursor = "grabbing";
    }
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setHasDragged(false);
    if (carouselRef.current) {
      carouselRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // Adjust scroll speed
    carouselRef.current.scrollLeft = scrollLeft - walk;
    if (Math.abs(walk) > 5) {
      setHasDragged(true);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    if (carouselRef.current) {
      if (hasDragged) {
        setHasDragged(false); // Reset for next click
        return;
      }
      const target = e.currentTarget as HTMLDivElement;
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div className="relative z-10 w-full flex flex-col items-start mb-16 lg:flex-row lg:items-center lg:justify-start lg:gap-x-12 ">
      <div className="flex flex-col  w-full lg:flex-1">
        <div className=" px-8 lg:px-16">
          <div className="w-full font-medium text-[25px] leading-[1.2] text-background-f2f2f2 text-center lg:text-right mb-6">
            Testimonials
          </div>
          <Separator className="w-full h-px mb-8 mx-auto" />
        </div>
        <div className="flex justify-between flex-wrap-reverse lg:flex-nowrap m-0">
          <div className="lg:flex-shrink-0 lg:w-20 lg:h-20 flex justify-center items-center mb-6 lg:mb-0 self-end mr-6 ml-8">
            <img className="w-12 h-12" alt="Vector" src="/vector2.svg" />
          </div>
          <div
            className="w-full flex flex-row justify-start gap-x-6 overflow-x-auto overflow-y-hidden pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab px-8 lg:px-0"
            ref={carouselRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 md:min-w-[300px] md:max-w-[420px] h-[136px] h-[180px] max-w-[280px] md:max-h-[160px]"
                onClick={handleClick}
              >
                <Card className="flex flex-col h-full p-6 bg-white rounded-xl shadow items-start justify-between">
                  <CardContent className="p-0 flex flex-col gap-2 w-full">
                    <div className="flex flex-row items-center gap-2">
                      <span className="font-semibold text-[#181919] text-base">
                        {testimonial.name}
                      </span>
                      <span className="text-gray-400 text-sm">
                        {testimonial.position}
                      </span>
                    </div>
                    <div className="font-medium text-[16px] leading-[1.2] text-[#1D2129] w-full">
                      {testimonial.quote}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
