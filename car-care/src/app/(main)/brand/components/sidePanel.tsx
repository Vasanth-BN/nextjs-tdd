import { SidePanelBg } from "@/assets/images";
import logoCar from "@/assets/images/logo-car.svg";
import { IMAGE_CONST, LOGO_CONST } from "@/constants/appConstants";
import { APP_ROUTES } from "@/constants/appRoutes";
import { BrandState } from "@/types/brand";
import Image from "next/image";
import Link from "next/link";

export type SidePanelProps = {
  brands: BrandState[];
};

export const SidePanel = ({ brands }: SidePanelProps) => {
  return (
    <>
      <div className="fixed z-50 flex flex-col space-y-3 h-full w-60 bg-primary-foreground pl-2 pt-2 pr-24.5 shadow-md max-xl:pr-11 max-lg:px-4">
        <div className=" flex h-fit w-full space-x-2 align-top pt-0 justify-between">
          <Image
            src={SidePanelBg}
            alt={IMAGE_CONST.SIDE_PANEL_ALT_LABEL}
            objectFit="cover"
            className="-z-10"
            fill
          />
          <Link href={APP_ROUTES.BRAND}>
            <Image
              src={logoCar}
              alt={LOGO_CONST.BRAND_LOGO_ALT_LABEL}
              width={LOGO_CONST.BRAND_LOGO_WIDTH}
              height={LOGO_CONST.BRAND_LOGO_HEIGHT}
              priority
            />
          </Link>
        </div>
        <div className="border border-b border-primary mr-4 mb-5 w-full" />
        <ul className=" flex flex-col h-fit w-full align-top pt-0 justify-between">
          {brands.map((link) => {
            return (
              <li
                key={link.id}
                className="relative flex h-full w-full items-center justify-start hover:cursor-pointer"
              >
                <Link href={`${APP_ROUTES.BRAND}/${link.brandName}`}>
                  <p className="font-medium text-primary">{link.brandName}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
