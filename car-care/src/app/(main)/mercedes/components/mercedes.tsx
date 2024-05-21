"use client";

import { MercedesBackground } from "@/assets/images";
import {
  COMMON_CONST,
  IMAGE_CONST,
  mercedesModels,
} from "@/constants/appConstants";
import { APP_ROUTES } from "@/constants/appRoutes";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MercedesPage() {
  const [isModelVisible, toggleModelVisible] = useState(false);
  const router = useRouter();
  const pushNavigation = (id: string | number) => {
    router.push(`${APP_ROUTES.MERCEDES}/${id}`);
  };
  return (
    <>
      <div className="App">
        <Image
          src={MercedesBackground}
          alt={IMAGE_CONST.MERCEDES_ALT_TEXT}
          objectFit="cover"
          className="pl-60 -z-10"
          fill
        />
        <div
          onClick={() => toggleModelVisible(!isModelVisible)}
          className="text-lg font-medium m-5 px-2 w-fit text-ellipsis border-primary-foreground hover:bg-yellow-50 hover:text-primary hover:delay-150 duration-100 hover:ease-in hover:translate-x-2 hover:cursor-pointer"
        >
          {COMMON_CONST.HEADER_VIEW_MODELS}
        </div>
        {isModelVisible &&
          mercedesModels.map((model, index) => {
            return (
              <>
                <div
                  className="pl-5 transition-all ease-in-out delay-100 hover:cursor-pointer"
                  key={index}
                  onClick={() => pushNavigation(index)}
                >
                  {model}
                </div>
              </>
            );
          })}
      </div>
    </>
  );
}
