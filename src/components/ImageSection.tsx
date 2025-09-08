const ImageSection = () => {
  return (
    <div className="flex w-[651px] flex-col items-start gap-[10px] h-[739px] font-['Montserrat']">
      {/* Main Image */}
      <div className="w-[651px] h-[619px] relative">
        <div className="w-[651px] h-[619px] absolute left-0 top-0 bg-[#f0f0f0]"></div>
      </div>

      {/* Navigation Controls */}
      <div className="flex w-[651px] items-center gap-3 relative">
        {/* Left Arrow */}
        <button className="flex w-[86px] h-[110px] p-[34px_37px] justify-center items-center gap-[10px] bg-transparent border-none cursor-pointer">
          <svg
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5 21L1 11L10.5 1"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Flexible Space */}
        <div className="h-[110px] flex-1"></div>

        {/* Video Thumbnail */}
        <div className="w-[104px] h-[110px] relative">
          <div className="w-[104px] h-[110px] absolute left-0 top-0 bg-[#f0f0f0]"></div>
          <div className="w-[104px] h-[110px] absolute left-0 top-0 bg-black/55"></div>
          <button className="absolute left-0 top-0 flex w-[104px] h-[110px] justify-center items-center bg-transparent border-none cursor-pointer">
            <div className="flex flex-col items-center justify-center">
              <svg
                width="34"
                height="34"
                viewBox="0 0 34 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="32"
                  height="32"
                  rx="8"
                  stroke="#F6F5F2"
                  strokeWidth="1.5"
                />
                <path
                  d="M14 11V23L24 17L14 11Z"
                  stroke="#F6F5F2"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </button>
        </div>

        {/* Empty Thumbnail 1 */}
        <div className="w-[104px] h-[110px] bg-[#f0f0f0]"></div>

        {/* Empty Thumbnail 2 */}
        <div className="w-[104px] h-[110px] bg-[#f0f0f0]"></div>

        {/* Right Arrow */}
        <button className="flex w-[86px] h-[110px] p-[38px_37px] justify-center items-center gap-[10px] bg-transparent border-none cursor-pointer">
          <svg
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.5 1L11 11L1.5 21"
              stroke="#2D2D2D"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageSection;
