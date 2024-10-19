"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Iconify from "./iconify";
import RenderComponent from "@/sections/home/components/RenderComponent";

export default function RHFRepeaterClone({
  name,
  child,
}: {
  name: string;
  child: any;
}) {
  const { control, getValues } = useFormContext();

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

  console.log("getValues(`${name}[${index}]`)", getValues(`${name}`));

  return (
    <Box sx={{ p: 3 }}>
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
              <RenderComponent
                data={getValues(`${name}[${index}]`)}
                currentKey={`${name}[${index}]`}
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
