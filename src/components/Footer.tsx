import SocialIcons from "../assets/social-icons.png";
const Footer = () => {
  return (
    <footer className="font-['Montserrat']">
      <div className="bg-[rgba(225,225,225,0.68)] flex w-full pt-[70px] flex-col items-stretch">
        <div className="min-h-[1px] w-full border border-[#a40303]" />

        <div className="self-center mt-[34px] w-full max-w-[1296px] text-base max-lg:max-w-full px-10 md:px-0">
          <div className="md:flex md:items-start grid grid-cols-2 gap-[40px_131px] justify-center flex-wrap max-lg:max-w-full">
            <div className="flex flex-col items-stretch w-[156px]">
              <div className="text-[#a40303] font-semibold">Quick Links</div>
              <div className="text-[#2d2d2d] font-medium mt-4 leading-relaxed">
                Customer Reviews
                <br />
                <br />
                Our Blogs
                <br />
                <br />
                Store Locator
                <br />
                <br />
                Jewellery Care
                <br />
                <br />
                Join Us
              </div>
            </div>

            <div className="flex flex-col items-stretch w-[201px]">
              <div className="text-[#a40303] font-semibold">Details</div>
              <div className="text-[#2d2d2d] font-medium mt-4 leading-relaxed">
                Shipping & Returns
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                International Shipping
                <br />
                <br />
                FAQ's and Support
                <br />
                <br />
                Terms of Service
              </div>
            </div>

            <div className="md:flex hidden flex-col items-stretch w-[201px]">
              <div className="text-[#a40303] font-semibold">Details</div>
              <div className="text-[#2d2d2d] font-medium mt-4 leading-relaxed">
                Shipping & Returns
                <br />
                <br />
                Privacy Policy
                <br />
                <br />
                International Shipping
                <br />
                <br />
                FAQ's and Support
                <br />
                <br />
                Terms of Service
              </div>
            </div>

            <div className="flex flex-col items-stretch min-w-[240px] w-[343px]">
              <div className="text-[#a40303] font-semibold">Contact Us</div>
              <div className="text-[#2d2d2d] font-medium mt-4 leading-relaxed">
                Elegant JewelsSF-11, Ansal Fortune Arcade, K Block, K-27, Sector
                18, Noida, Uttar Pradesh 201301
                <br />
                <br />
                For any suggestions, queries or complaints please contact us:
                <br />
                <br />
                Elegantjewel Private Limited
                <br />
                <br />
                contact@elegantjewels.com
                <br />
                <br />
                +1 (555) 123-4567
                <br />
                <br />
              </div>
            </div>
          </div>

          <div className="flex w-[137px] max-w-full items-start gap-[40px_117px] text-[#2d2d2d] font-medium justify-start">
            <div className="w-[137px] pb-11 text-[#2d2d2d] flex flex-col items-center gap-[20px]">
              Our Social Links:
              <img src={SocialIcons} alt="Social Icons" />
            </div>
          </div>
        </div>

        <div className="bg-[#ca8787] flex mt-[116px] w-full flex-col items-start text-sm text-white font-medium justify-center py-[13px] px-[70px] max-lg:mt-10 max-lg:px-5">
          <div>© 2024 Elegant Jewels. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
