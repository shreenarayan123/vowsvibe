import { Heart } from "lucide-react";

export default function ProductGrid() {
  const products = Array(6).fill({
    title: "Rose Gold Earrings with alloy",
    price: "₹ 1999",
    oldPrice: "₹ 2999",
    rating: "(4)",
    bestseller: true,
  });

  return (
    <div>
      {/* Desktop View */}
      <div className="hidden lg:grid grid-cols-4 gap-5">
        {products.slice(0, 4).map((product, i) => (
          <div
            key={i}
            className="bg-white rounded-none min-w-[240px] w-[312px] pt-[25px] px-[1px] 
                       shadow-[0_2px_8px_rgba(0,0,0,0.1)] font-['Montserrat']"
          >
            {/* Ribbon + Heart */}
            <div className="flex w-full items-stretch gap-5 justify-between mb-[263px]">
              {product.bestseller && (
                <div
                  className="rounded-[0px_18px_18px_0px] bg-[#a40303] flex min-h-[27px] 
                                items-center text-white justify-center py-1 px-[9px] 
                                font-medium text-base"
                >
                  BestSeller
                </div>
              )}
              <div
                className="bg-white rounded-full flex items-center justify-center cursor-pointer
                              min-h-[40px] w-10 h-10"
              >
                <Heart className="text-[#2d2d2d]" size={20} />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="text-[#2d2d2d] text-base font-medium mb-[5px]">
                {product.title}
              </div>
              <div className="flex items-center gap-[14px] mb-[5px]">
                <span className="text-[#2d2d2d] text-[22px] font-semibold">
                  {product.price}
                </span>
                <span className="text-[#878b94] text-base font-medium line-through">
                  {product.oldPrice}
                </span>
              </div>
              <div className="flex w-24 text-[10px] text-[#2d2d2d] font-medium py-[1px] px-[31px]">
                {product.rating}
              </div>
            </div>

            {/* Button */}
            <button
              className="bg-[#ca8787] mt-3 min-h-[51px] text-[#f6f5f2] 
                               py-[15px] px-[84px] font-medium text-lg w-full 
                               hover:bg-[#b67373]"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="grid grid-cols-2 gap-2 lg:hidden mt-5">
        {products.map((product, i) => (
          <div
            key={i}
            className="w-[187px] bg-white pt-[15px] font-['Montserrat']"
          >
            {/* Ribbon + Heart */}
            <div className="flex w-full items-stretch gap-2 mb-[166px]">
              {i % 2 === 0 && (
                <div
                  className="rounded-[0px_18px_18px_0px] bg-[#a40303] flex min-h-[17px] 
                    items-center text-white justify-center py-1 px-[9px] 
                    font-medium text-[8px]"
                >
                  BestSeller
                </div>
              )}
              <div className="rounded-[12px] bg-white flex w-[23px] h-[23px] items-center justify-center ml-auto">
                <Heart size={15} />
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="text-[#2d2d2d] text-[10px] font-medium">
                {product.title}
              </div>
              <div className="flex items-center gap-[14px]">
                <span className="text-[#2d2d2d] text-base font-semibold">
                  {product.price}
                </span>
                <span className="text-[#878b94] text-[10px] font-medium line-through">
                  {product.oldPrice}
                </span>
              </div>
              <div className="text-[6px] text-[#2d2d2d] font-medium py-[1px] px-[19px]">
                {product.rating}
              </div>
            </div>

            {/* Button */}
            <button
              className="bg-[#ca8787] mt-[7px] min-h-8 text-[#f6f5f2] 
                               py-2 px-[49px] font-medium text-sm w-full"
            >
              Move to Bag
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
