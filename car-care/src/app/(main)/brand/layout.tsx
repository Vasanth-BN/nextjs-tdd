import { SidePanel } from "./components/sidePanel";
import { getAllBrandService } from "./service/brandService";

export default async function PrivateRouteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const brands = await getAllBrandService();

  return (
    <>
      <SidePanel brands={brands} />
      <div className="ml-60 h-full w-full">{children}</div>
    </>
  );
}
