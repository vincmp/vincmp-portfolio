"use client";

import { GitHub } from "@/components/vincmp/icons/GitHub";
import { Linkedin } from "@/components/vincmp/icons/Linkedin";
import { X } from "@/components/vincmp/icons/X";

const MenuSocialMidia = () => {
  return (
    <div className="flex justify-evenly items-center gap-4 w-full h-full">
      <GitHub />
      <Linkedin />
      <X />
    </div>
  );
};

export default MenuSocialMidia;
