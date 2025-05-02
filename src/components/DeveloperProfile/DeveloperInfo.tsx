import React from "react";
import Image from "next/image";

const DevProfile = ({ isExpanded = true }: { isExpanded?: boolean }) => {
  return (
    <div>
      <a href="/" className="flex items-center gap-3">
        <div className="block">
          <Image
            src="/assets/images/vincmp.jpg"
            alt="profile-pic"
            className={`rounded-md ${
              isExpanded ? "h-[68px] w-[68px]" : "h-[36px] w-[36px]"
            }`}
            width={isExpanded ? 68 : 36}
            height={isExpanded ? 68 : 36}
          />
        </div>
        {isExpanded && (
          <div className="flex flex-col space-y-0.5">
            <p className="dev-name">Vicente M</p>
            <p className="dev-desc leading-tight">
              Desenvolvedor
              <br />
              Full Stack
            </p>
          </div>
        )}
      </a>
    </div>
  );
};

export default DevProfile;
