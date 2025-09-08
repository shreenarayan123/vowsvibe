import { ChevronRight } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

const InputDesign = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    { label: "Jewellery", href: "/jewellery" },
    { label: "Gifts", href: "/gifts" },
    { label: "Necklace", href: "/necklace" },
    { label: "Chains", href: "/chains" },
    { label: "Shining Diva...", href: "/shining-diva" },
  ];

  return (
    <div className="md:flex  hidden items-center gap-2 py-5 max-w-[1200px] mx-auto flex-wrap font-['Montserrat'] max-lg:px-5 max-lg:py-4 max-lg:gap-1.5 max-sm:px-4 max-sm:py-3 max-sm:gap-1 max-sm:overflow-x-auto max-sm:whitespace-nowrap max-sm:scrollbar-none max-sm:flex-nowrap">
      {breadcrumbItems.map((item, index) => (
        <div key={index} className="flex items-center gap-1 flex-shrink-0">
          {item.href ? (
            <a
              href={item.href}
              className="text-[#878B94] text-base font-normal hover:text-[#6b7280] transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[#878B94] text-base font-normal">
              {item.label}
            </span>
          )}

          {index < breadcrumbItems.length - 1 && (
            <ChevronRight
              className="text-[#878B94] ml-1"
              size={16}
              strokeWidth={1.5}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default InputDesign;
