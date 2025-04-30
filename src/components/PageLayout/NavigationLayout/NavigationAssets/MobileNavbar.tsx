"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import DevProfile from "@/Components/DevInfo/MenuProfile";
import ThemeChanger from "@/Components/ThemeChanger/ThemeChanger";
import NavLinks from "@/Components/PageLayout/NavigationLayout/NavigationAssets/NavigationLinks";
import DevSocials from "@/Components/DevInfo/MenuSocials";

const SandwichButton = ({
  isOpen,
  toggleMenu,
}: {
  isOpen: boolean;
  toggleMenu: () => void;
}) => {
  return (
    <button
      onClick={toggleMenu}
      className="relative w-8 h-8 flex items-center justify-center z-50"
    >
      <motion.span
        className="absolute h-[1px] w-5 bg-[var(--text-primary)]"
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? 0 : -4,
        }}
        transition={{ duration: 0.01 }}
      />
      <motion.span
        className="absolute h-[1px] w-5 bg-[var(--text-primary)]"
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 0 : 4,
        }}
        transition={{ duration: 0.01 }}
      />
    </button>
  );
};

const MobileNavbar = memo(
  ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
    return (
      <div className="lg:hidden fixed top-0 left-0 right-0 bg-[var(--bg-primary)] border-b-2 border-[var(--border-color)] z-50 flex items-center justify-between px-6 py-2">
        <div className="scale-[0.85] origin-left mt-4 mb-4 flex items-center justify-between w-full">
          <DevProfile />
          <ThemeChanger />
        </div>
        <SandwichButton isOpen={isOpen} toggleMenu={toggleMenu} />
      </div>
    );
  }
);

const MobileMenu = memo(
  ({
    pathname,
    setIsOpen,
  }: {
    pathname: string;
    setIsOpen: (value: boolean) => void;
  }) => {
    return (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="lg:hidden fixed top-14 left-0 right-0 bg-[var(--bg-primary)] border-b-2 border-gray-200 z-40 overflow-hidden flex flex-col p-4 space-y-4"
      >
        <div className="pl-[25px] pb-[90px] pt-[56px]">
          <div className="flex flex-col [&>*]:py-[24px]">
            <NavLinks pathname={pathname} setIsOpen={setIsOpen} />
          </div>
        </div>
        <div className="mt-auto pt-3 border-t-2 border-[var(--border-color)]">
          <div className="pt-3">
            <DevSocials />
          </div>
        </div>
      </motion.div>
    );
  }
);

MobileNavbar.displayName = "MobileNavbar";
MobileMenu.displayName = "MobileMenu";

export { MobileNavbar, MobileMenu };
