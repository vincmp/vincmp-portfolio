"use client";

import { GitHub } from "@/components/DeveloperProfile/DeveloperSocialMedia/GitHub";
import { Linkedin } from "@/components/DeveloperProfile/DeveloperSocialMedia/Linkedin";
import { X } from "@/components/DeveloperProfile/DeveloperSocialMedia/X";

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
