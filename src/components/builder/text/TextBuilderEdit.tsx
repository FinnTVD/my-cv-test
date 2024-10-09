/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Textarea } from "@/components/ui/textarea";

const TextBuilderEdit = ({
  currentKey,
  currentData,
  setForm,
  form,
}: {
  currentKey: string;
  currentData: string;
  setForm: (value: any) => void;
  form: any;
}) => {
  return (
    <div className="w-full">
      <Textarea
        currentData={currentData}
        currentKey={currentKey}
        setForm={setForm}
        form={form}
      />
    </div>
  );
};

export default TextBuilderEdit;
