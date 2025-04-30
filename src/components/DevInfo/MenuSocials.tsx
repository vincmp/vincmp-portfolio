"use client";

import { GitHub } from "@/Components/DevInfo/DevSocialIcons/GitHub";
import { Linkedin } from "@/Components/DevInfo/DevSocialIcons/Linkedin";
import { X } from "@/Components/DevInfo/DevSocialIcons/X";

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
