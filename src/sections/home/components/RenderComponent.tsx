"use client";

import {
  RHFEditor,
  RHFRepeater,
  RHFTextField,
} from "@/components/builder/hook-form";

import { deepClone, resetKeysInObject } from "../utils";
// import RHFEditor from "@/components/builder/hook-form/rhf-editor";

const RenderComponent = ({
  data,
  currentKey,
}: {
  data: any;
  currentKey: string;
}) => {
  console.log("🚀 ~ data:", data);
  //NOTE - TEXT
  if (data?.type === "text") {
    return (
      <RHFTextField
        name={`${currentKey}.value`}
        value={data?.value}
        multiline
        rows={6}
      />
    );
  }
  //NOTE - EDITOR
  if (data?.type === "editor") {
    const name = `${currentKey}.value`;

    return <RHFEditor simple name={name} id={name.replaceAll(".", "_")} />;
  }
  //NOTE - ARRAY
  if (data?.type === "array") {
    const dataClone = deepClone(data?.value?.[0]);
    const child = resetKeysInObject(dataClone);

    return <RHFRepeater name={`${currentKey}.value`} child={child} />;
  }
  return <div></div>;
};

export default RenderComponent;
