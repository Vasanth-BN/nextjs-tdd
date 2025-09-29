"use client";

import { FerrariBackground } from "@/assets/images";
import { BRAND_CONST, IMAGE_CONST } from "@/constants/appConstants";
import Image from "next/image";

export default function Brands() {
  return (
    <>
      <Image
        src={FerrariBackground}
        alt={IMAGE_CONST.FERRARI_ALT_LABEL}
        objectFit="cover"
        className="pl-60 -z-10"
        fill
      />
      <div className="text-lg font-bold ml-4 mt-0">
        {BRAND_CONST.HEADER_BRAND}
      </div>
    </>
  );
}
