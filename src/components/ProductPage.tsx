import ProductDetailInfo from "./ProductDetailInfo";
import TrendingSection from "./TrendingSection";
import Footer from "./Footer";
import GiftsSection from "./GiftsSection";
import Header from "./Header";
import InputDesign from "./InputDesign";
import ImageSection from "./ImageSection";
import { ArrowLeft } from "lucide-react";

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className=" lg:block">
        <Header />
        <div className="w-full">
          <div className="max-w-7xl mx-auto  py-8 gap-8 md:flex block">
            <div className="md:flex-1 md:max-w-2xl md:block hidden">
              <InputDesign />
              <div className="bg-gray-50 rounded-lg p-6">

                <ImageSection />
              </div>
            </div>
            <div className="px-4 lg:px-0 md:hidden block">
              <div className="flex  w-full max-w-[382px] items-start gap-2 text-[#2d2d2d] justify-start font-semibold text-lg">
                <ArrowLeft />
                <h1 className="m-0 text-lg font-semibold">Product Details</h1>
              </div>

              {/* Product Image Section */}
              <div className="flex mt-[18px] w-full  flex-col items-center justify-center">
                <div className="flex min-h-[363px] w-full bg-[#f0f0f0]"></div>
                <div className="flex mt-[18px] items-center gap-[6px] justify-center">
                  <div className="bg-[#d9d9d9] rounded-full flex w-2 h-2"></div>
                  <div className="bg-[#ff8f9d] rounded-full flex w-[11px] h-[11px]"></div>
                  <div className="bg-[#d9d9d9] rounded-full flex w-2 h-2"></div>
                  <div className="bg-[#d9d9d9] rounded-full flex w-2 h-2"></div>
                  <div className="bg-[#d9d9d9] rounded-full flex w-2 h-2"></div>
                </div>
              </div>
            </div>

            <div className="flex-1 max-w-2xl px-10 md:px-0">
              <ProductDetailInfo />
            </div>
          </div>
          <div className="w-full py-12 bg-gray-50">
            <TrendingSection />
          </div>

          <div className="w-full py-12 bg-gray-50 hidden md:block">
            <GiftsSection />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
