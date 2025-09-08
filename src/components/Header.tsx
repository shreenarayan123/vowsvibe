import { AlignJustify, ChevronDown } from "lucide-react";
import Frame from "../assets/Frame-47.png";
import { useState } from "react";
import SidebarMenu from "./SideBarMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full h-32 relative font-['Montserrat']">
      <SidebarMenu open={open} setOpen={setOpen} />
      {/* Offer Banner */}
      <div className="w-full h-[43px] absolute left-0 top-0">
        <div className="w-full h-[43px] absolute left-0 top-0 bg-[#ca8787]" />
        <div className="w-[580px] text-white absolute left-1/2 top-[13px] h-[17px] transform -translate-x-1/2 max-sm:w-[90%] max-sm:left-1/2 max-sm:text-xs max-sm:text-center text-sm font-normal">
          50% off on all items Only Limited Time Deal Offer ending in 03:34:15
        </div>
      </div>

      {/* Main Header */}
      <div className="flex w-full px-[126px] py-[22px] flex-col items-center gap-[10px] absolute left-0 top-[43px] h-[85px] box-border max-lg:px-[60px] max-sm:px-5 max-sm:py-[15px] max-sm:h-auto bg-[#faf9f6]">
        <div className="flex flex-row w-full max-w-[1293px] items-center justify-between md:justify-between relative max-lg:gap-5  max-sm:gap-[15px] max-sm:items-center">
          {/* Logo */}
          <div className="flex items-center md:gap-0 gap-6.5 text-[#2d2d2d] max-sm:text-2xl text-[30px] font-bold">
            <AlignJustify
              onClick={() => setOpen(true)}
              className="text-[#2d2d2d] block md:hidden cursor-pointer"
              size={30}
            />
            <span>LOGO</span>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex justify-center items-center gap-7 max-lg:gap-5 ">
            <div className="flex justify-center items-center gap-[3px]">
              <div className="text-[#4d4d4d] max-lg:text-[15px] text-base font-normal">
                Collections
              </div>
              <div className="flex w-[22px] h-[22px] justify-center items-center">
                <ChevronDown className="text-[#4d4d4d]" size={22} />
              </div>
            </div>
            <div className="flex justify-center items-center gap-[3px]">
              <div className="text-[#4d4d4d] max-lg:text-[15px] text-base font-normal">
                Categories
              </div>
              <div className="flex w-[22px] h-[22px] justify-center items-center">
                <ChevronDown className="text-[#4d4d4d]" size={22} />
              </div>
            </div>

            <div className="flex justify-center items-center gap-[3px]">
              <div className="text-[#4d4d4d] max-lg:text-[15px] text-base font-normal">
                Hot Picks
              </div>
            </div>
            <div className="flex justify-center items-center gap-[3px]">
              <div className="text-[#4d4d4d] max-lg:text-[15px] text-base font-normal">
                Gifts
              </div>
            </div>
            <div className="flex justify-center items-center gap-[3px]">
              <div className="text-[#4d4d4d] max-lg:text-[15px] text-base font-normal">
                Shop All
              </div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-[6px] max-lg:gap-1 max-sm:w-full max-sm:justify-center max-sm:gap-2">
            {/* Login Button */}
            <div className="flex w-[139px] h-10 px-[23px] justify-center items-center shadow-[0_0_6px_0_rgba(0,0,0,0.14)] box-border max-lg:w-[120px] max-lg:h-9 max-lg:px-[18px] max-sm:w-[100px] max-sm:h-[35px] max-sm:px-[15px] bg-[#ff8f9d] cursor-pointer hover:bg-[#e67e8c] transition-colors">
              <div className="text-white text-center max-lg:text-base max-sm:text-sm text-lg font-bold">
                LOGIN
              </div>
            </div>

            {/* Register Button */}
            <div className="flex h-10 px-[23px] justify-center items-center border border-[#ff8f9d] shadow-[0_0_6px_0_rgba(0,0,0,0.14)] box-border max-lg:h-9 max-lg:px-[18px] max-sm:h-[35px] max-sm:px-[15px] cursor-pointer hover:bg-[#ff8f9d]/10 transition-colors">
              <div className="text-[#ff8f9d] max-lg:text-base max-sm:text-sm text-lg font-bold">
                REGISTER
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <img
              src={Frame}
              width={"64px"}
              height={"24px"}
              alt="wishlist-bag"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
