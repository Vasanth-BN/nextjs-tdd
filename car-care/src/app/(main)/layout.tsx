"use client";

import { usePathname } from "next/navigation";
import { SidePanel } from "../../components/sidePanel/sidePanel";

export default function PrivateRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const path = usePathname();

  return (
    <>
      <SidePanel />
      <div className="h-full w-full">{children}</div>
    </>
  );
}
