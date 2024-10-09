/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { CollapsibleBuilder } from "./components/CollapsibleBuilder";
import EditorBuilderEdit from "./editor/EditorBuilderEdit";
import ImageBuilderEdit from "./image/ImageBuilderEdit";
import TextBuilderEdit from "./text/TextBuilderEdit";

const GenerateBuilderEdit = ({
  currentData,
  currentKey,
  currentType,
  setForm,
  form,
}: {
  currentData: any;
  currentKey: string;
  currentType: "text" | "editor" | "image" | "";
  setForm: (value: any) => void;
  form: any;
}) => {
  return (
    <div className="w-full">
      {currentType === "text" && (
        <CollapsibleBuilder title="Text">
          <TextBuilderEdit
            currentData={currentData}
            currentKey={currentKey}
            setForm={setForm}
            form={form}
          />
        </CollapsibleBuilder>
      )}
      {currentType === "editor" && (
        <CollapsibleBuilder title="editor">
          <EditorBuilderEdit
            currentData={currentData}
            currentKey={currentKey}
            setForm={setForm}
            form={form}
          />
        </CollapsibleBuilder>
      )}
      {currentType === "image" && (
        <CollapsibleBuilder title="editor">
          <ImageBuilderEdit
            currentData={currentData}
            currentKey={currentKey}
            setForm={setForm}
            form={form}
          />
        </CollapsibleBuilder>
      )}
    </div>
  );
};

export default GenerateBuilderEdit;
