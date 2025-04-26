import React from "react";
import Image from "next/image";

const DevProfile = () => {
  return (
    <div>
      <a href="/" className="flex items-center gap-3">
        <div className="block">
          <Image
            src="/assets/images/vincmp.jpg"
            alt="profile-pic"
            className="h-[68px] w-[68px] rounded-md"
            width={68}
            height={68}
          />
        </div>
        <div className="flex flex-col space-y-0.5">
          <p className="dev-name">Vicente M</p>
          <p className="dev-desc leading-tight">
            Desenvolvedor
            <br />
            WEB e Back-End!
          </p>
        </div>
      </a>
    </div>
  );
};

export default DevProfile;
