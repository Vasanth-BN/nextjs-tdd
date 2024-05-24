"use client";

import { COMMON_CONST } from "@/constants/appConstants";
import { BrandState } from "@/types/brand";
import { ModelState } from "@/types/model";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export type BrandDetailsProps = {
  brand: BrandState;
};

export default function BrandDetails({ brand }: BrandDetailsProps) {
  const [isModelVisible, toggleModelVisible] = useState(false);
  const path = usePathname();
  return (
    <>
      <Image
        src={brand.brandBg.src}
        alt={brand.brandBg.altText}
        objectFit="cover"
        className="pl-60 -z-10"
        fill
      />
      <div className="flex flex-col space-y-3 m-5 mt-0 px-2 w-fit ">
        <div className="flex mt-5 w-fit space-x-1 items-center">
          <Image
            src={brand.brandLogo.src}
            alt={brand.brandLogo.altText}
            width={25}
            height={25}
          />
          <div
            onClick={() => toggleModelVisible(!isModelVisible)}
            className="text-lg font-medium text-ellipsis border-primary-foreground hover:bg-yellow-50 hover:text-primary hover:delay-150 duration-100 hover:ease-in hover:translate-x-2 hover:cursor-pointer"
          >
            {`${COMMON_CONST.HEADER_VIEW_MODELS}${brand.brandName}`}
          </div>
        </div>
        {isModelVisible &&
          brand.models.map((model: ModelState, modelIndex: number) => {
            return (
              <>
                <Link
                  href={`${path}/${model.modelId}`}
                  className="pl-5 transition-all ease-in-out delay-100 hover:cursor-pointer"
                  key={modelIndex}
                >
                  {model.modelName}
                </Link>
              </>
            );
          })}
      </div>
    </>
  );
}
