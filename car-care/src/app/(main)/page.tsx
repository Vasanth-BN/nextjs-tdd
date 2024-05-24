import { HomeBackground } from "@/assets/images";
import { APP_ROUTES } from "@/constants/appRoutes";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Link href={`${APP_ROUTES.BRAND}`}>
        <p></p>
        <Image
          src={HomeBackground}
          placeholder="blur"
          fill
          sizes="100vw"
          style={{
            objectFit: "cover",
            zIndex: -1,
          }}
          alt="Home Background Image"
        />
      </Link>
    </>
  );
}
