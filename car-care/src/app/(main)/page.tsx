"use client";

import { HomeBackground } from "@/assets/images";
import Image from "next/image";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { APP_ROUTES } from "@/constants/appRoutes";

export default function HomePage() {
  return (
    <>
      <Link href={APP_ROUTES.BRAND}>
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
