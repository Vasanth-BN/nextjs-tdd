import { FerrariBackground } from "@/assets/images";
import ModelDetails from "@/components/models/modelDetails";
import { IMAGE_CONST } from "@/constants/appConstants";
import Image from "next/image";

export default function FerrariModelsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <Image
        src={FerrariBackground}
        alt={IMAGE_CONST.FERRARI_ALT_TEXT}
        objectFit="cover"
        className="pl-60 -z-10"
        fill
      />
      <ModelDetails id={params.id} />
    </>
  );
}
