/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import FormProvider from "@/components/builder/hook-form";

import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { OverviewSchema } from "../schema/OverviewSchema";
import ContainerEdit from "./ContainerEdit";
import useStore from "@/app/(store)/store";
import { useEffect } from "react";
const FormHandle = ({ data }: { data: any }) => {
  const { setValuesForm, currentKey } = useStore((state) => state);
  const methods = useForm({
    resolver: yupResolver(OverviewSchema),
    defaultValues: data,
  });
  const {
    watch,
    handleSubmit,
    formState: { dirtyFields, errors, isSubmitting },
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
    <div className="w-[50vw] flex-shrink-0 h-screen sticky top-0 left-0 pt-[2rem]">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        {currentKey && <ContainerEdit />}
        <Stack alignItems="flex-end" sx={{ mt: 3 }}>
          <LoadingButton
            type="submit"
            variant="contained"
            loading={isSubmitting}
          >
            Save changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </div>
  );
};

export default FormHandle;
