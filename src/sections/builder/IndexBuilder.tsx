"use client";

import FormProvider, {
  RHFEditor,
  RHFTextField,
  RHFUpload,
} from "@/components/builder/hook-form";
import { description } from "@/lib/dataFake";
import { DemoSchema } from "@/templates/DemoSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback } from "react";
import { useForm } from "react-hook-form";

const IndexBuilder = () => {
  const methods = useForm({
    resolver: yupResolver(DemoSchema),
    defaultValues: {
      title: "Trinh Van Duc",
      description: description,
      background: "",
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
    handleSubmit,
    formState: { dirtyFields, errors },
  } = methods;

  const values = watch();
  console.log("🚀 ~ IndexDemo ~ values:", values);

  const onSubmit = async (formData: any) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
    try {
    } catch (error) {}
  };
  const handleDrop = useCallback(
    (acceptedFiles: File[]) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue("background", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue("background", null);
  }, [setValue]);
  return (
    <div className="w-full flex relative">
      <div className="w-[50vw] flex-shrink-0 h-screen sticky top-0 left-0 pt-[2rem]">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <RHFTextField name="title" label={"title"} />
          <RHFEditor simple name="description" sx={{ height: 200 }} />
          <RHFUpload
            name="background"
            maxSize={3145728}
            onDrop={handleDrop}
            onDelete={handleRemoveFile}
          />
        </FormProvider>
      </div>
      <div className="w-[50vw] flex-shrink-0 border border-solid border-green-200">
        {/* <TextBuilder
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
        <Button onClick={handelClickTest}>test</Button> */}
      </div>
    </div>
  );
};

export default IndexBuilder;
