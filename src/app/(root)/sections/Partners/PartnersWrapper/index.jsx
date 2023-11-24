import PartnersBrand from "@/components/shared/PartnersBrand";
import React from "react";

const PartnersWrapper = () => {
  return (
    <div className="flex justify-center mx-auto w-[750px] mt-20 items-center">
      <div className="w-[2000px] mr-10">
        <PartnersBrand />
      </div>
      <div className="mr-10">
        <PartnersBrand variant="oracle" />
      </div>
      <div className="">
        <PartnersBrand variant="notredame" />
      </div>
    </div>
  );
};

export default PartnersWrapper;
