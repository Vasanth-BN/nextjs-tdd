import { NAV_BAR_CONST } from "@/constants/appConstants";
import { APP_ROUTES } from "@/constants/appRoutes";
import logoCar from "../../assets/images/logo-car.svg";
import Image from "next/image";
import Link from "next/link";
const NavBar = () => {
  return (
    <header className="fixed z-40 flex h-20 w-full  items-center bg-white pl-6 pr-24.5 shadow-md max-xl:pr-11 max-lg:px-4">
      <nav className=" flex h-full w-full items-center justify-between">
        <Link href={APP_ROUTES.ROOT}>
          <Image
            src={logoCar}
            alt={NAV_BAR_CONST.BRAND_LOGO_ALT_LABEL}
            className="h-12 w-40"
            width={NAV_BAR_CONST.BRAND_LOGO_WIDTH}
            height={NAV_BAR_CONST.BRAND_LOGO_HEIGHT}
            priority
          />
        </Link>
      </nav>
      
    </header>
  );
};

export default NavBar;
