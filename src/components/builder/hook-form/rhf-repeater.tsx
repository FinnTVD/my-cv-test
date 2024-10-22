"use client";
import { useFormContext, useFieldArray } from "react-hook-form";
// @mui
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Iconify from "./iconify";
import RenderComponent from "@/sections/home/components/RenderComponent";
import RHFRepeaterClone from "./rhf-repeater-clone";
import { deepClone, resetKeysInObject } from "@/sections/home/utils";
import { Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";
export default function RHFRepeater({
  name,
  child,
}: {
  name: string;
  child: any;
}) {
  const [currentTab, setCurrentTab] = useState("item0");

  const handleChangeTab = useCallback((event: any, newValue: any) => {
    setCurrentTab(newValue);
  }, []);
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

  return (
    <Box sx={{ p: 3 }}>
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
      <Tabs value={currentTab} onChange={handleChangeTab}>
        {fields.map((item, index) => (
          <Tab
            key={item.id}
            value={`item${index}`}
            label={`Item ${index + 1}`}
          />
        ))}
      </Tabs>

      {fields.map(
        (item, index) =>
          `item${index}` === currentTab && (
            <Stack key={index}>
              {Array.from(Object.keys(child)).map(
                (key: string, idx: number) => {
                  if (
                    Array.isArray(getValues(`${name}[${index}].${key}.value`))
                  ) {
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
                }
              )}
              <Divider sx={{ my: 3, borderStyle: "dashed" }} />
              <Button
                size="small"
                color="error"
                startIcon={<Iconify icon="solar:trash-bin-trash-bold" />}
                onClick={() => handleRemove(index)}
              >
                Remove
              </Button>
            </Stack>
          )
      )}
    </Box>
  );
}
