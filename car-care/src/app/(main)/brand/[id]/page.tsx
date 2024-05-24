import React from "react";
import BrandDetails from "./components/brandDetails";
import { getBrandByIdService } from "../service/brandService";

export default async function BrandDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const brand = await getBrandByIdService(params.id);
  return <BrandDetails brand={brand} />;
}
