"use client";

import {
  RHFEditor,
  RHFRepeater,
  RHFTextField,
} from "@/components/builder/hook-form";

import { deepClone, resetKeysInObject } from "../utils";
import { RHFImage } from "@/components/builder/hook-form/rhf-image";

const RenderComponent = ({
  data,
  currentKey,
}: {
  data: any;
  currentKey: string;
}) => {
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
  //NOTE - IMAGE
  if (data?.type === "image") {
    const name = `${currentKey}.value`;

    return <RHFImage sx={{ my: 3 }} name={name} />;
  }
  //NOTE - GALLERY
  if (data?.type === "gallery") {
    const name = `${currentKey}.value`;

    return (
      <RHFImage
        sx={{ my: 3 }}
        multiple
        thumbnail
        name={name}
        // onRemove={handleRemoveFile}
        // onRemoveAll={() => setValue(name, [], { shouldValidate: true })}
        // onOpen={chooseFiles.onTrue}
      />
    );
  }
  // return <div></div>;
};

export default RenderComponent;
