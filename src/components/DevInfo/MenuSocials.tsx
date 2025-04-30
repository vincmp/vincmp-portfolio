"use client";

import { GitHub } from "@/components/DevInfo/DevSocialIcons/GitHub";
import { Linkedin } from "@/components/DevInfo/DevSocialIcons/Linkedin";
import { X } from "@/components/DevInfo/DevSocialIcons/X";

const MenuSocialMidia = ({ isExpanded = true }: { isExpanded?: boolean }) => {
  return (
    <div className="flex justify-evenly items-center gap-4 w-full h-full">
      <GitHub />
      {isExpanded && (
        <>
          <Linkedin />
          <X />
        </>
      )}
    </div>
  );
};

export default MenuSocialMidia;
