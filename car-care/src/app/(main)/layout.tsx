"use client";

import NavBar from "@/components/navBar/navBar";
import { usePathname } from "next/navigation";

export default function PrivateRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <>
      <NavBar />
      <div
        className={`${
          path === "/" && "app-padding-t app-padding-x app-padding-b"
        }`}
      >
        {children}
      </div>
    </>
  );
}
