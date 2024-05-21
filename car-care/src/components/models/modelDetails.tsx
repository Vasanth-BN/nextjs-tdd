import { COMMON_CONST } from "@/constants/appConstants";

export type ModelDetailsProps = {
  id: string | number;
};

export default function ModelDetails(props: ModelDetailsProps) {
  return (
    <>
      <div className="App">
        <div className="p-3 text-lg font-semibold">{`${COMMON_CONST.HEADER_SELECTED_MODEL}${props.id}`}</div>
      </div>
    </>
  );
}
