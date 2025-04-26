"use client";

import { GitHub } from "@/components/DevDetails/DevSocialIcons/GitHub";
import { Linkedin } from "@/components/DevDetails/DevSocialIcons/Linkedin";
import { X } from "@/components/DevDetails/DevSocialIcons/X";

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
