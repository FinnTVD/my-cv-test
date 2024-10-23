/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FormProvider from "@/components/builder/hook-form";

import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import useStore from "@/app/(store)/store";
import { useEffect } from "react";
import { OverviewSchema } from "./schema/OverviewSchema";
// import ContainerEdit from "./components/ContainerEdit";
import dynamic from "next/dynamic";
const ContainerEdit = dynamic(() => import("./components/ContainerEdit"), {
  ssr: false,
});
import ContainerContent from "./components/ContainerContent";
const ContainerFormProvider = ({ data }: { data: any }) => {
  const { setValuesForm, currentKey } = useStore((state) => state);
  const methods = useForm({
    resolver: yupResolver(OverviewSchema),
    defaultValues: data,
  });
  const {
    watch,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();
  console.log("🚀 ~ FormHandle ~ values:", values);

  useEffect(() => {
    setValuesForm(values || data);
  }, [JSON.stringify(values)]);

  const onSubmit = async (formData: any) => {
    console.log("🚀 ~ onSubmit ~ formData:", formData);
    try {
    } catch (error) {}
  };

  return (
    <main className="w-full flex relative">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full flex relative">
          <div className="w-[50vw] flex-shrink-0 h-screen sticky top-0 left-0 pt-[2rem] overflow-y-auto pb-[6rem]">
            {currentKey && <ContainerEdit />}

            <div className="fixed bottom-0 left-0 bg-gray-400 p-[1rem] flex justify-end w-[50vw] shadow-2xl">
              <LoadingButton
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Save changes
              </LoadingButton>
            </div>
          </div>
          <ContainerContent />
        </div>
      </FormProvider>
    </main>
  );
};

export default ContainerFormProvider;
