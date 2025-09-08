import { Star } from "lucide-react";

const ProductDetailInfo = () => {
  return (
    <div className="max-w-[626px] font-['Montserrat'] max-lg:max-w-full">
      <div className="w-full max-lg:max-w-full">
        <div className="w-full text-[32px] max-lg:max-w-full">
          <h1 className="text-[#2d2d2d] font-medium m-0 text-[32px] max-lg:max-w-full">
            Gold-Plated Pearls Necklace
          </h1>
          <p className="text-[#878b94] font-semibold mt-2 mb-0 text-[32px] max-lg:max-w-full">
            Made with 925 Silver
          </p>
        </div>

        <div className="mt-4 w-[595px] max-w-full">
          <div className="flex w-full items-center gap-[18px] justify-start max-lg:max-w-full">
            <div className="bg-[#388e3c] flex min-h-[28px] items-center text-lg text-white font-medium justify-center w-[60px] py-[3px] px-[2px_2px_3px_3px] gap-2">
              <span className="flex-shrink-0">4.1</span>
              <Star className="flex-shrink-0" size={15} fill="white" />
            </div>
            <span className="text-[#2d2d2d] text-2xl font-semibold text-center flex-shrink-0">
              (23)
            </span>
          </div>

          <div className="flex mt-2 w-full items-center gap-[18px] font-semibold justify-start flex-wrap max-lg:max-w-full">
            <span className="text-[#2d2d2d] text-[42px] flex-shrink-0">
              ₹ 1,600
            </span>
            <span className="text-[#878b94] text-lg line-through flex-shrink-0">
              ₹ 2,000
            </span>
            <span className="text-[#388e3c] text-2xl flex-shrink-0">
              (20% off)
            </span>
          </div>
        </div>
      </div>

      <div className="md:mt-8  mt-4 w-full text-[#2d2d2d] font-medium max-lg:max-w-full">
        <div className="flex w-full items-center gap-[10px] md:gap-[40px_54px] text-xl justify-start flex-wrap max-lg:max-w-full">
          <div className="flex min-w-[240px] items-center gap-[10px] justify-center">
            <span className="flex items-center gap-[10px]">
              <img
                src="/assets/easy-30-days-return.png"
                height={"50px"}
                width={"50px"}
                alt="Easy 30 Day Return"
              />{" "}
              Easy 30 Day Return
            </span>
          </div>
          <div className="flex min-w-[240px] items-center gap-[10px] justify-center">
            <span className="flex items-center gap-[10px]">
              <img
                src="/assets/925-silver.png"
                height={"50px"}
                width={"50px"}
                alt="925 Silver Plating"
              />{" "}
              925 Silver Plating
            </span>
          </div>
        </div>
        <div className="flex w-full mt-3 md:mt-4 items-center gap-[10px] md:gap-[40px_54px] text-xl justify-start flex-wrap max-lg:max-w-full">
          <div className="flex min-w-[240px] items-center gap-[10px] justify-center">
            <span className="flex items-center gap-[10px]">
              <img
                src="/assets/6-months-warranty.png"
                height={"50px"}
                width={"50px"}
                alt="6 Month Warranty"
              />{" "}
              6- Month Warranty
            </span>
          </div>
          <div className="flex min-w-[240px] items-center gap-[10px] justify-start">
            <span className="flex items-center gap-[10px]">
              <img
                src="/assets/premium-gold.png"
                height={"50px"}
                width={"50px"}
                alt="Premium"
              />{" "}
              Premium Gold
            </span>
          </div>
        </div>
      </div>

      <div className="flex mt-8 w-[556px] max-w-full items-center gap-[11px] text-xl font-bold justify-start flex-wrap">
        <button className="shadow-[0px_6px_18px_rgba(255,60,84,0.14)] flex min-w-[240px] min-h-[70px] items-center gap-[10px] text-[#ff8f9d] justify-center flex-1 py-0 px-8 border border-[#ff8f9d] bg-transparent cursor-pointer font-inherit max-lg:px-5">
          ADD TO CART
        </button>
        <button className="bg-[#ff8f9d] shadow-[0px_6px_18px_rgba(255,60,84,0.14)] flex min-w-[240px] min-h-[70px] items-center gap-[10px] text-white justify-center flex-1 py-0 px-8 border-none cursor-pointer font-inherit max-lg:px-5">
          BUY NOW
        </button>
      </div>

      <div className="mt-8 w-[555px] max-w-full">
        <h3 className="text-[#2d2d2d] text-xl font-semibold m-0 mb-3 max-lg:max-w-full">
          Estimated Delivery Time
        </h3>
        <div className="bg-white flex mt-3 min-h-[70px] w-full flex-col items-stretch text-lg justify-center py-6 px-[14px] border border-[#878b94] max-lg:max-w-full">
          <div className="flex w-full items-center gap-[40px_100px] justify-between flex-wrap max-lg:max-w-full">
            <span className="text-[#878b94] font-medium flex-shrink-0">
              Enter Pincode
            </span>
            <span className="text-[#ff8f9d] font-semibold flex-shrink-0 cursor-pointer">
              Check
            </span>
          </div>
        </div>
      </div>

      <div className="mt-8 w-[555px] max-w-full">
        <div className="flex w-full items-center justify-between max-lg:max-w-full">
          <div className="flex min-w-[240px] w-full flex-col items-stretch flex-1 py-[1px] max-lg:max-w-full">
            <div className="flex items-center gap-4 justify-start">
              <span className="text-black text-xl font-semibold flex-1">
                Offers
              </span>
              <span className="text-[#878b94] text-lg font-normal">
                2 available
              </span>
            </div>
          </div>
          <span className="text-[#ff8f9d] text-lg font-semibold cursor-pointer z-10 -mt-[23px] max-lg:mr-[10px]">
            Check
          </span>
        </div>
        <p className="text-[#2d2d2d] text-lg font-medium mt-3 mb-0 max-lg:max-w-full">
          Coupon can be applied at checkout
        </p>
      </div>

      <div className="min-h-[1px] mt-8 w-full border border-[#ff8f9d] max-lg:max-w-full"></div>

      <div className="flex mt-8 w-full flex-col items-stretch font-semibold justify-center max-lg:max-w-full">
        <h3 className="text-[#2d2d2d] text-xl font-semibold">
          Product Decsription
        </h3>
        <div className="flex mt-3 w-full flex-col items-stretch text-lg text-[#2d2d2d] justify-center max-lg:max-w-full">
          <div className="w-full max-lg:max-w-full">
            <div className="flex items-center gap-[14px] justify-start flex-wrap">
              <img
                src="/assets/received.png"
                height={"20px"}
                width={"20px"}
                alt="Received"
              />
              <span className="flex-shrink-0 w-[328px]">
                Material:{" "}
                <span className="font-medium text-[#878b94]">
                  925 Sterling Silver
                </span>
              </span>
            </div>
          </div>
          <div className="w-full mt-2 max-lg:max-w-full">
            <div className="flex items-center gap-[14px] justify-start flex-wrap">
              <img
                src="/assets/received.png"
                height={"20px"}
                width={"20px"}
                alt="Received"
              />
              <span className="flex-shrink-0 w-[328px]">
                Plating:{" "}
                <span className="font-medium text-[#878b94]">18K Gold</span>
              </span>
            </div>
          </div>
          <div className="w-full mt-2 max-lg:max-w-full">
            <div className="flex items-center gap-[14px] justify-start flex-wrap">
              <img
                src="/assets/received.png"
                height={"20px"}
                width={"20px"}
                alt="Received"
              />
              <span className="flex-shrink-0 w-[328px]">
                Weight:{" "}
                <span className="font-medium text-[#878b94]">10grams</span>
              </span>
            </div>
          </div>
          <div className="w-full mt-2 max-lg:max-w-full">
            <div className="flex items-center gap-[14px] justify-start flex-wrap">
              <img
                src="/assets/received.png"
                height={"20px"}
                width={"20px"}
                alt="Received"
              />
              <span className="flex-shrink-0 w-[328px]">
                Stone Type:{" "}
                <span className="font-medium text-[#878b94]">
                  Premium Jerkin
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-8 w-full flex-col items-stretch justify-center max-lg:max-w-full">
        <h3 className="text-[#2d2d2d] text-xl font-semibold">Shipping</h3>
        <div className="flex mt-3 w-full flex-col items-stretch text-lg text-[#878b94] font-medium justify-center max-lg:max-w-full">
          <div className="w-full max-lg:max-w-full">
            <div className="flex items-center gap-[14px] justify-start flex-wrap">
              <span className="flex-shrink-0 w-[328px]">
                Get it by{" "}
                <span className="font-semibold text-[#ff8f9d]">25 Sept</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="min-h-[1px] mt-[22px] w-full border border-[#ff8f9d] max-lg:max-w-full"></div>

      <div className="mt-[22px] max-lg:max-w-full max-lg:mr-[2px]">
        <h2 className="my-[22px] w-full text-[#2d2d2d] font-semibold text-xl font-['Montserrat'] max-lg:max-w-full">
          Customer Ratings
        </h2>

        <div className="flex mt-[22px] w-full flex-col items-start justify-start max-lg:max-w-full">
          <div className="flex w-[223px] max-w-full flex-col items-stretch justify-center">
            <h4 className="flex w-full items-center gap-[6px] text-[#2d2d2d] whitespace-nowrap justify-start font-medium text-xl font-['Montserrat'] m-0 max-lg:whitespace-normal">
              <img src="/assets/profile-circle.png" alt="profile" height={"29px"} width={"29px"} />
              Anu
            </h4>
            <p className="text-[#878b94] mt-[10px] mb-0 font-medium text-sm font-['Montserrat']">
              15/08/24
            </p>
          </div>
          <p className="text-[#2d2d2d] self-stretch mt-[18px] mb-0 font-normal text-lg font-['Montserrat'] max-lg:max-w-full">
            Such a gorgeous necklace. Got many compliments as well. Absolutely
            loved it
          </p>
          <div className="flex mt-[18px] w-[316px] max-w-full items-start gap-3 justify-start">
            <div className="bg-[#d9d9d9] flex w-[152px] flex-shrink-0 h-[152px]"></div>
            <div className="bg-[#d9d9d9] flex w-[152px] flex-shrink-0 h-[152px]"></div>
          </div>
        </div>

        <div className="min-h-[1px] mt-[22px] w-full border border-[#ff8f9d] max-lg:max-w-full"></div>

        <div className="flex mt-[22px] w-full flex-col items-start justify-start max-lg:max-w-full">
          <div className="flex w-[223px] max-w-full flex-col items-stretch justify-center">
            <h4 className="flex w-full items-center gap-[6px] text-[#2d2d2d] whitespace-nowrap justify-start font-medium text-xl font-['Montserrat'] m-0 max-lg:whitespace-normal">
              <img src="/assets/profile-circle.png" alt="profile" height={"29px"} width={"29px"} />
              Anu
            </h4>
            <p className="text-[#878b94] mt-[10px] mb-0 font-medium text-sm font-['Montserrat']">
              15/08/24
            </p>
          </div>
          <p className="text-[#2d2d2d] self-stretch mt-[18px] mb-0 font-normal text-lg font-['Montserrat'] max-lg:max-w-full">
            Looks beautiful 😻❤️❤️❤️ Go for it girls 😍💝💐 the quality is good
            ..
          </p>
          <div className="flex mt-[18px] w-[316px] max-w-full items-start gap-3 justify-start">
            <div className="bg-[#d9d9d9] flex w-[152px] flex-shrink-0 h-[152px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailInfo;
