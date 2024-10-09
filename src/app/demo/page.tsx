"use client";

import EditorBuilder from "@/components/builder/editor/EditorBuilder";
import GenerateBuilderEdit from "@/components/builder/GenerateBuilderEdit";
import ImageBuilder from "@/components/builder/image/ImageBuilder";
import TextBuilder from "@/components/builder/text/TextBuilder";
import { description } from "@/lib/dataFake";
import { useState } from "react";

const Page = () => {
  const [form, setForm] = useState({
    banner: {
      title: "Trinh Van Duc",
      description: description,
      background: {
        src: "https://placehold.co/1200x600",
        alt: "1200x600",
      },
    },
  });
  const [currentType, setCurrentType] = useState<
    "text" | "editor" | "image" | ""
  >();
  const [currentKey, setCurrentKey] = useState("");
  console.log("🚀 ~ Page ~ currentKey:", currentKey);
  const [currentData, setCurrentData] = useState();

  console.log("🚀 ~ Page ~ form:", form);
  return (
    <div className="w-full flex relative">
      <div className="w-[40%] h-screen sticky top-0 left-0">
        <GenerateBuilderEdit
          currentData={currentData}
          currentKey={currentKey}
          currentType={currentType!}
          setForm={setForm}
          form={form}
        />
      </div>
      <div className="w-[60%] border border-solid border-green-200">
        <TextBuilder
          data={form.banner.title}
          name="form.banner.title"
          setCurrentType={setCurrentType}
          setCurrentKey={setCurrentKey}
          setCurrentData={setCurrentData}
        />
        <EditorBuilder
          data={form.banner.description}
          name="form.banner.description"
          setCurrentType={setCurrentType}
          setCurrentKey={setCurrentKey}
          setCurrentData={setCurrentData}
        />
        <ImageBuilder
          data={form.banner.background}
          name="form.banner.background"
          setCurrentType={setCurrentType}
          setCurrentKey={setCurrentKey}
          setCurrentData={setCurrentData}
        />
      </div>
    </div>
  );
};

export default Page;
