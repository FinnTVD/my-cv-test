import { useFormContext, useFieldArray } from "react-hook-form";
import { useCallback } from "react";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
// components

import { RHFTextField, RHFUpload } from "@/components/builder/hook-form";
import Iconify from "@/components/builder/hook-form/iconify";
// ----------------------------------------------------------------------

export default function RHFRepeaterCategories({
  keyName,
  title,
  child,
}: {
  keyName: string;
  title: string;
  child: any;
}) {
  const { control, setValue } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: keyName,
  });

  const handleAdd = () => {
    append(child);
  };

  const handleRemove = (index: number) => {
    remove(index);
  };

  const handleDrop = useCallback(
    (acceptedFiles: File[], index: number) => {
      const file = acceptedFiles[0];

      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });

      if (file) {
        setValue(`categories[${index}].icon`, newFile, {
          shouldValidate: true,
        });
      }
    },
    [setValue]
  );

  const handleRemoveFile = useCallback(() => {
    setValue("background", null);
  }, [setValue]);
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h6" sx={{ color: "text.disabled", mb: 3 }}>
        {title}
      </Typography>

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
                name={`categories[${index}].name`}
                label="Item"
                InputLabelProps={{ shrink: true }}
              />
              <RHFUpload
                name={`categories[${index}].icon`}
                maxSize={3145728}
                onDrop={(e) => handleDrop(e, index)}
                onDelete={handleRemoveFile}
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
