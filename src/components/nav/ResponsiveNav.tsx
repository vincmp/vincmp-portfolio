"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import DevProfile from "@/components/vincmp/MenuProfile";
import SocialMidia from "@/components/vincmp/MenuSocials";
import NavLinks from "@/components/nav/NavLinks";

export default function ResponsiveNav() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <MobileNavbar isOpen={isOpen} toggleMenu={() => setIsOpen(!isOpen)} />
      <AnimatePresence>
        {isOpen && <MobileMenu pathname={pathname} setIsOpen={setIsOpen} />}
      </AnimatePresence>
      <DesktopSidebar pathname={pathname} />
    </>
  );
}

function MobileNavbar({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <div className="lg:hidden fixed top-0 left-0 right-0 bg-white border-b-2 border-[#E6E6E6] z-50 flex items-center justify-between px-6 py-2">
      <div className="scale-[0.85] origin-left mt-4 mb-4">
        <DevProfile />
      </div>
      <button onClick={toggleMenu} className="focus:outline-none">
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>
    </div>
  );
}

function MobileMenu({
  pathname,
  setIsOpen,
}: {
  pathname: string;
  setIsOpen: (value: boolean) => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="lg:hidden fixed top-14 left-0 right-0 bg-white border-b-2 border-gray-200 z-40 overflow-hidden flex flex-col p-4 space-y-4"
    >
      <div className="pl-[25px] pb-[90px] pt-[56px]">
        <div className="flex flex-col [&>*]:py-[24px]">
          <NavLinks pathname={pathname} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="mt-auto pt-3 border-t-2 border-[#E6E6E6]">
        <div className="pt-3">
          <SocialMidia />
        </div>
      </div>
    </motion.div>
  );
}

function DesktopSidebar({ pathname }: { pathname: string }) {
  return (
    <aside className="hidden lg:flex lg:flex-col lg:fixed lg:top-0 lg:left-0 lg:h-full lg:w-80 bg-white border-r border-[#E6E6E6] p-6 z-40">
      <div className="mt-6">
        <DevProfile />
        <div className="border-b-2 border-[#E6E6E6] mt-12" />
      </div>
      <nav className="flex flex-col mt-6">
        <NavLinks pathname={pathname} />
      </nav>
      <div className="mt-auto pt-6 border-t-2 border-[#E6E6E6]">
        <div className="mt-6 mb-6">
          <SocialMidia />
        </div>
      </div>
    </aside>
  );
}
