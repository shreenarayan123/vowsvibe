import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

const GiftsSection = () => {
  return (
    <div className="w-full font-['Montserrat']">
      <h2 className="text-[#2d2d2d] text-center font-semibold text-[42px] leading-none mb-10 max-lg:text-[32px] max-sm:text-[28px] max-sm:mb-[30px]">
        Top picks for you
      </h2>

      <div className="flex items-center gap-[15px] justify-center flex-wrap w-full max-lg:gap-[10px]">
        {/* Left Arrow */}
        <button className="bg-[#f6f5f2] border-none rounded-full w-[58px] h-[58px] flex items-center justify-center cursor-pointer flex-shrink-0 min-h-[58px] relative">
          <ChevronLeft className="text-[#2d2d2d]" size={33} />
        </button>

        {/* Product Card 1 */}
        <div className="bg-white rounded-none min-w-[240px] w-[312px] pt-[25px] px-[1px] max-lg:min-w-[280px] max-lg:w-full max-lg:max-w-[312px] max-sm:min-w-[240px]">
          <div className="flex w-full items-stretch gap-5 justify-between mb-[263px] max-lg:mb-10">
            <div className="rounded-[0px_18px_18px_0px] bg-[#a40303] flex min-h-[27px] items-center gap-[10px] text-white whitespace-nowrap justify-center py-1 px-[9px] font-medium text-base max-lg:whitespace-normal">
              BestSeller
            </div>
            <div className="bg-white rounded-full flex min-h-[40px] w-10 h-10 items-center gap-[10px] justify-center cursor-pointer">
              <Heart className="text-[#2d2d2d]" size={20} />
            </div>
          </div>

          <div className="w-full font-['Montserrat']">
            <div className="text-[#2d2d2d] text-base font-medium mb-[5px]">
              Rose Gold Earrings with alloy
            </div>
            <div className="flex w-full items-center gap-[14px] justify-start mb-[5px]">
              <span className="text-[#2d2d2d] text-[22px] font-semibold">
                ₹ 1999
              </span>
              <span className="text-[#878b94] text-base font-medium line-through">
                ₹ 2999
              </span>
            </div>
            <div className="flex w-24 flex-col items-start text-[10px] text-[#2d2d2d] font-medium whitespace-nowrap justify-center py-[1px] px-[31px] max-lg:px-5 max-sm:whitespace-normal">
              (4)
            </div>
          </div>

          <button className="bg-[#ca8787] flex mt-3 min-h-[51px] items-center gap-[10px] text-[#f6f5f2] justify-center py-[15px] px-[84px] font-medium text-lg border-none cursor-pointer w-full hover:bg-[#b67373] max-lg:px-5 max-sm:py-3 max-sm:px-5 max-sm:text-base">
            Add to Cart
          </button>
        </div>

        {/* Product Card 2 */}
        <div className="bg-white rounded-none min-w-[240px] w-[312px] pt-[25px] px-[1px] max-lg:min-w-[280px] max-lg:w-full max-lg:max-w-[312px] max-sm:min-w-[240px]">
          <div className="flex w-full items-stretch gap-5 justify-between mb-[263px] max-lg:mb-10">
            <div className="rounded-[0px_18px_18px_0px] bg-[#a40303] flex min-h-[27px] items-center gap-[10px] text-white whitespace-nowrap justify-center py-1 px-[9px] font-medium text-base max-lg:whitespace-normal">
              BestSeller
            </div>
            <div className="bg-white rounded-full flex min-h-[40px] w-10 h-10 items-center gap-[10px] justify-center cursor-pointer">
              <Heart className="text-[#2d2d2d]" size={20} />
            </div>
          </div>

          <div className="w-full font-['Montserrat']">
            <div className="text-[#2d2d2d] text-base font-medium mb-[5px]">
              Rose Gold Earrings with alloy
            </div>
            <div className="flex w-full items-center gap-[14px] justify-start mb-[5px]">
              <span className="text-[#2d2d2d] text-[22px] font-semibold">
                ₹ 1999
              </span>
              <span className="text-[#878b94] text-base font-medium line-through">
                ₹ 2999
              </span>
            </div>
            <div className="flex w-24 flex-col items-start text-[10px] text-[#2d2d2d] font-medium whitespace-nowrap justify-center py-[1px] px-[31px] max-lg:px-5 max-sm:whitespace-normal">
              (4)
            </div>
          </div>

          <button className="bg-[#ca8787] flex mt-3 min-h-[51px] items-center gap-[10px] text-[#f6f5f2] justify-center py-[15px] px-[84px] font-medium text-lg border-none cursor-pointer w-full hover:bg-[#b67373] max-lg:px-5 max-sm:py-3 max-sm:px-5 max-sm:text-base">
            Add to Cart
          </button>
        </div>

        {/* Product Card 3 */}
        <div className="bg-white rounded-none min-w-[240px] w-[312px] pt-[25px] px-[1px] max-lg:min-w-[280px] max-lg:w-full max-lg:max-w-[312px] max-sm:min-w-[240px]">
          <div className="flex w-full items-stretch gap-5 justify-between mb-[263px] max-lg:mb-10">
            <div className="rounded-[0px_18px_18px_0px] bg-[#a40303] flex min-h-[27px] items-center gap-[10px] text-white whitespace-nowrap justify-center py-1 px-[9px] font-medium text-base max-lg:whitespace-normal">
              BestSeller
            </div>
            <div className="bg-white rounded-full flex min-h-[40px] w-10 h-10 items-center gap-[10px] justify-center cursor-pointer">
              <Heart className="text-[#2d2d2d]" size={20} />
            </div>
          </div>

          <div className="w-full font-['Montserrat']">
            <div className="text-[#2d2d2d] text-base font-medium mb-[5px]">
              Rose Gold Earrings with alloy
            </div>
            <div className="flex w-full items-center gap-[14px] justify-start mb-[5px]">
              <span className="text-[#2d2d2d] text-[22px] font-semibold">
                ₹ 1999
              </span>
              <span className="text-[#878b94] text-base font-medium line-through">
                ₹ 2999
              </span>
            </div>
            <div className="flex w-24 flex-col items-start text-[10px] text-[#2d2d2d] font-medium whitespace-nowrap justify-center py-[1px] px-[31px] max-lg:px-5 max-sm:whitespace-normal">
              (4)
            </div>
          </div>

          <button className="bg-[#ca8787] flex mt-3 min-h-[51px] items-center gap-[10px] text-[#f6f5f2] justify-center py-[15px] px-[84px] font-medium text-lg border-none cursor-pointer w-full hover:bg-[#b67373] max-lg:px-5 max-sm:py-3 max-sm:px-5 max-sm:text-base">
            Add to Cart
          </button>
        </div>

        {/* Product Card 4 */}
        <div className="bg-white rounded-none min-w-[240px] w-[312px] pt-[25px] px-[1px] max-lg:min-w-[280px] max-lg:w-full max-lg:max-w-[312px] max-sm:min-w-[240px]">
          <div className="flex w-full items-stretch gap-5 justify-between mb-[263px] max-lg:mb-10">
            <div className="rounded-[0px_18px_18px_0px] bg-[#a40303] flex min-h-[27px] items-center gap-[10px] text-white whitespace-nowrap justify-center py-1 px-[9px] font-medium text-base max-lg:whitespace-normal">
              BestSeller
            </div>
            <div className="bg-white rounded-full flex min-h-[40px] w-10 h-10 items-center gap-[10px] justify-center cursor-pointer">
              <Heart className="text-[#2d2d2d]" size={20} />
            </div>
          </div>

          <div className="w-full font-['Montserrat']">
            <div className="text-[#2d2d2d] text-base font-medium mb-[5px]">
              Rose Gold Earrings with alloy
            </div>
            <div className="flex w-full items-center gap-[14px] justify-start mb-[5px]">
              <span className="text-[#2d2d2d] text-[22px] font-semibold">
                ₹ 1999
              </span>
              <span className="text-[#878b94] text-base font-medium line-through">
                ₹ 2999
              </span>
            </div>
            <div className="flex w-24 flex-col items-start text-[10px] text-[#2d2d2d] font-medium whitespace-nowrap justify-center py-[1px] px-[31px] max-lg:px-5 max-sm:whitespace-normal">
              (4)
            </div>
          </div>

          <button className="bg-[#ca8787] flex mt-3 min-h-[51px] items-center gap-[10px] text-[#f6f5f2] justify-center py-[15px] px-[84px] font-medium text-lg border-none cursor-pointer w-full hover:bg-[#b67373] max-lg:px-5 max-sm:py-3 max-sm:px-5 max-sm:text-base">
            Add to Cart
          </button>
        </div>

        {/* Right Arrow */}
        <button className="bg-[#f6f5f2] border-none rounded-full w-[58px] h-[58px] flex flex-col items-center justify-center cursor-pointer flex-shrink-0 min-h-[58px]">
          <ChevronRight className="text-[#2d2d2d]" size={33} />
        </button>
      </div>
    </div>
  );
};

export default GiftsSection;
