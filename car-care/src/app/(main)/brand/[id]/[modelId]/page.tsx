import React from "react";

export default function ModelDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return <div>{params.id}</div>;
}
