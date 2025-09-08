import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductGrid from "./ProductGrid";

const TrendingSection: React.FC = () => {
  return (
    <div className="w-full font-['Montserrat']">
      <h2 className="text-[#2d2d2d] hidden md:block text-center font-semibold text-[42px] leading-none mb-10 max-lg:text-[32px] max-sm:text-[28px] max-sm:mb-[30px]">
        Similar to this
      </h2>
      <h2 className="text-[#2d2d2d] block md:hidden text-center font-semibold text-[42px] leading-none mb-10 max-lg:text-[32px] max-sm:text-[28px] max-sm:mb-[30px]">
        You might also like
      </h2>

      <div className="flex items-center gap-[15px] justify-center flex-wrap w-full max-lg:gap-[10px] max-md:flex-col max-md:gap-5">
        <button className="bg-[#f6f5f2] hidden  border-none rounded-full w-[58px] h-[58px] md:flex items-center justify-center cursor-pointer flex-shrink-0 min-h-[58px] max-md:order-2">
          <ChevronLeft className="text-[#2d2d2d]" size={33} />
        </button>
        <ProductGrid />

        <button className="bg-[#f6f5f2] border-none rounded-full w-[58px] h-[58px] hidden md:flex flex-col items-center justify-center cursor-pointer flex-shrink-0 min-h-[58px] max-md:order-2">
          <ChevronRight className="text-[#2d2d2d]" size={33} />
        </button>
      </div>
    </div>
  );
};

export default TrendingSection;
