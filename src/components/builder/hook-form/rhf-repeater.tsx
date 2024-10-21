"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import RHFTextField from "./rhf-text-field";
import Iconify from "./iconify";
import RenderComponent from "@/sections/home/components/RenderComponent";
import RHFRepeaterClone from "./rhf-repeater-clone";
import { deepClone, resetKeysInObject } from "@/sections/home/utils";
import useStore from "@/app/(store)/store";

export default function RHFRepeater({
  name,
  child,
}: {
  name: string;
  child: any;
}) {
  const { control, getValues } = useFormContext();
  const { setCurrentKeyChild } = useStore((state) => state);

  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const handleAdd = () => {
    append(child);
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  return (
    <Box sx={{ p: 3 }}>
      {fields.map((item, index) => (
        <Stack key={index}>
          {Array.from(Object.keys(child)).map((key, idx) => {
            if (Array.isArray(getValues(`${name}[${index}].${key}.value`))) {
              const dataClone = deepClone(
                getValues(`${name}[${index}].${key}.value`)?.[0]
              );
              return (
                <RHFRepeaterClone
                  key={idx}
                  name={`${name}[${index}].${key}.value`}
                  child={resetKeysInObject(dataClone)}
                />
              );
            } else {
              return (
                <RenderComponent
                  key={idx}
                  data={getValues(`${name}[${index}].${key}`)}
                  currentKey={`${name}[${index}].${key}`}
                />
              );
            }
          })}
        </Stack>
      ))}

      <Stack
        divider={<Divider flexItem sx={{ borderStyle: "dashed" }} />}
        spacing={1.5}
      >
        {fields.map((item, index) => (
          <Stack key={item.id} alignItems="flex-end" spacing={1.5}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={2}
              sx={{ width: 1 }}
            >
              <RHFTextField
                size="small"
                name={`${name}[${index}]`}
                label="Item"
                InputLabelProps={{ shrink: true }}
              />
            </Stack>

            <Button
              size="small"
              color="error"
              startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
              onClick={() => handleRemove(index)}
            >
              Remove
            </Button>
          </Stack>
        ))}
      </Stack>

      <Divider sx={{ my: 3, borderStyle: "dashed" }} />

      <Stack
        spacing={3}
        direction={{ xs: "column", md: "row" }}
        alignItems={{ xs: "flex-end", md: "center" }}
      >
        <Button
          size="small"
          color="primary"
          startIcon={<Iconify icon="mingcute:add-line" />}
          onClick={handleAdd}
          sx={{ flexShrink: 0 }}
        >
          Add Item
        </Button>
      </Stack>
    </Box>
  );
}
