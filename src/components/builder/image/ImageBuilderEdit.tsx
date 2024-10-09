/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import { mergeDeep, stringToNestedObject } from "@/lib/builder";
import Image from "next/image";
import { useState } from "react";

const ImageBuilderEdit = ({
  currentKey,
  currentData,
  setForm,
  form,
}: {
  currentKey: string;
  currentData: any;
  setForm: (value: any) => void;
  form: any;
}) => {
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const handleChange = (src: string, name: string) => {
    const result1 = stringToNestedObject(`${currentKey}.src`, src);
    mergeDeep(form, result1.form);

    const result = stringToNestedObject(`${currentKey}.alt`, name);
    mergeDeep(form, result.form);

    const originalObj = { ...form };
    // Cập nhật object ban đầu
    return setForm(Object.assign({}, originalObj));
  };
  const handleUpLoadFile = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string); // Cập nhật URL của ảnh
        handleChange(reader.result as string, file?.name);
      };

      reader.readAsDataURL(file); // Đọc file dưới dạng URL
    }
  };
  return (
    <div>
      <input type="file" onChange={handleUpLoadFile} accept="image/*" />
      {previewImage && (
        <div className="w-[20rem] h-[16rem]">
          <Image
            src={previewImage || currentData}
            alt="image"
            width={600}
            height={400}
            className="size-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ImageBuilderEdit;
