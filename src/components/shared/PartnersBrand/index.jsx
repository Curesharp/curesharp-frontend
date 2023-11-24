import React from "react";
import FiapBrand from "@/assets/brand/fiap-logo.svg";
import OracleBrand from "@/assets/brand/oracle_logo.png";
import NotredameBrand from "@/assets/brand/notredame-intermedica-logo.png";
import Image from "next/image";

const PartnersBrand = ({ variant }) => {
  let BrandPath;

  switch (variant) {
    case "oracle":
      BrandPath = OracleBrand;
      break;
    case "notredame":
      BrandPath = NotredameBrand;
      break;
    default:
      BrandPath = FiapBrand;
      break;
  }

  return <Image className="w-full" src={BrandPath} />;
};

export default PartnersBrand;
