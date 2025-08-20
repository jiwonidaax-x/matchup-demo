import React, { useState } from "react";

interface CarouselProps {
  items: React.ReactNode[];
}

export const Carousel: React.FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % items.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="overflow-hidden rounded-toss-lg border border-toss-neutral-gray_200">
        {items[current]}
      </div>
      <div className="absolute inset-0 flex justify-between items-center p-4">
        <button
          onClick={prev}
          className="bg-toss-primary-blue text-white px-3 py-2 rounded-toss-md hover:bg-toss-primary-blue_dark transition-colors shadow-toss-sm"
        >
          {"<"}
        </button>
        <button
          onClick={next}
          className="bg-toss-primary-blue text-white px-3 py-2 rounded-toss-md hover:bg-toss-primary-blue_dark transition-colors shadow-toss-sm"
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
