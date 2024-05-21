import { NAV_LINKS } from "@/components/sidePanel/navBar";
import { NAV_BAR_CONST } from "@/constants/appConstants";
import { APP_ROUTES } from "@/constants/appRoutes";
import Image from "next/image";
import Link from "next/link";
import logoCar from "../../assets/images/logo-car.svg";

export const SidePanel = () => {
  return (
    <>
      <div className="fixed z-50 flex flex-col space-y-3 h-full w-60 bg-primary-foreground pl-2 pt-2 pr-24.5 shadow-md max-xl:pr-11 max-lg:px-4">
        <div className=" flex h-fit w-full space-x-2 align-top pt-0 justify-between">
          <Link href={APP_ROUTES.ROOT}>
            <Image
              src={logoCar}
              alt={NAV_BAR_CONST.BRAND_LOGO_ALT_LABEL}
              className="h-12 w-48"
              width={NAV_BAR_CONST.BRAND_LOGO_WIDTH}
              height={NAV_BAR_CONST.BRAND_LOGO_HEIGHT}
              priority
            />
          </Link>
        </div>
        <div className="border border-b border-primary mr-4 mb-5 w-full" />
        <ul className=" flex flex-col h-fit w-full align-top pt-0 justify-between">
          {NAV_LINKS.map((link) => {
            return (
              <li
                key={link.href}
                className="relative flex h-full w-full items-center justify-center"
              >
                <Link href={link.href}>
                  <p className="font-medium text-primary">{link.label}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
