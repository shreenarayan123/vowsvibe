"use client";
import { Plus } from "lucide-react";

export default function SidebarMenu({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  const menuItems = [
    { icon: <Plus size={16} color="white" />, label: "Add Account" },
    {
      icon: <img src="/assets/receiveditem.png" alt="arrow" width={16} height={16} />,
      label: "Gold jewellery",
    },
    {
      icon: <img src="/assets/receiveditem.png" alt="arrow" width={16} height={16} />,
      label: "Silver Jewellery",
    },
    {
      icon: <img src="/assets/receiveditem.png" alt="arrow" width={16} height={16} />,
      label: "Trending Collection",
    },
    {
      icon: <img src="/assets/receiveditem.png" alt="arrow" width={16} height={16} />,
      label: "Gifts",
    },
    {
      icon: <img src="/assets/receiveditem.png" alt="arrow" width={16} height={16} />,
      label: "Shop by Occasion",
    },
  ];

  return (
    <div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-[932px] w-[308px] bg-[#c28383] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="mx-auto mt-[25px] w-[275px]">
          {menuItems.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 w-[275px] h-[50px] bg-transparent 
                         border-b border-white/60 px-[12px] py-[10px]"
            >
              <div className="p-[5px]">{item.icon}</div>
              <span className="text-white font-medium text-[14px]">
                {item.label}
              </span>
            </div>
          ))}
          <div className="flex items-center gap-3 w-[275px] h-[50px] bg-white mt-3 px-[12px] py-[10px]">
            <div className="p-[5px]">
              <img src="/assets/user-tick.png" alt="user" width={16} height={16} />
            </div>
            <span className="text-[#2d2d2d] font-medium text-[14px]">
              Login / SignUp
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
