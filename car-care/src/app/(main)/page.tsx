import { HomeBackground } from "@/assets/images";
import Image from "next/image";
import React from "react";

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
