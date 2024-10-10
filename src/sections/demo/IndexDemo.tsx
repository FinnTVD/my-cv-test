/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import EditorBuilder from "@/components/builder/editor/EditorBuilder";
import GenerateBuilderEdit from "@/components/builder/GenerateBuilderEdit";
import ImageBuilder from "@/components/builder/image/ImageBuilder";
import TextBuilder from "@/components/builder/text/TextBuilder";
import { Button } from "@/components/ui/button";
import { description } from "@/lib/dataFake";
import { DemoSchema } from "@/templates/DemoSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";

const IndexDemo = () => {
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

  const methods = useForm({
    resolver: yupResolver(DemoSchema),
    defaultValues: {
      title: "Trinh Van Duc",
      description: description,
      background: {
        src: "https://placehold.co/1200x600",
        alt: "1200x600",
      },
      categories: [
        {
          name: "",
          icon: {
            src: "",
            alt: "",
          },
        },
      ],
    },
  });
  const {
    watch,
    setValue,
    formState: { dirtyFields, errors },
  } = methods;

  const values = watch();
  console.log("🚀 ~ IndexDemo ~ values:", values);

  const [currentType, setCurrentType] = useState<
    "text" | "editor" | "image" | ""
  >();
  const [currentKey, setCurrentKey] = useState("");
  const [currentData, setCurrentData] = useState();

  const handelClickTest = () => {
    setValue("title", "Trinh Van Duc1", { shouldDirty: true });
  };
  return (
    <div className="w-full flex relative">
      <div className="w-[30vw] flex-shrink-0 h-screen sticky top-0 left-0">
        <GenerateBuilderEdit
          currentData={currentData}
          currentKey={currentKey}
          currentType={currentType!}
          setForm={setForm}
          form={form}
        />
      </div>
      <div className="w-[70vw] flex-shrink-0 border border-solid border-green-200">
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
        <Button onClick={handelClickTest}>test</Button>
      </div>
    </div>
  );
};

export default IndexDemo;
