"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import DesktopSidebar from "@/Components/PageLayout/NavigationLayout/NavigationAssets/DesktopSidebar";
import {
  MobileNavbar,
  MobileMenu,
} from "@/Components/PageLayout/NavigationLayout/NavigationAssets/MobileNavbar";

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
