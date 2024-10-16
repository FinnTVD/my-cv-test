"use client";
import useStore from "@/app/(store)/store";
import Iconify from "@/components/builder/hook-form/iconify";
import { Box, Tab, Tabs } from "@mui/material";
import { useCallback, useState } from "react";
import { useFormContext } from "react-hook-form";
import ColorPicker from "react-pick-color";
const TABS = [
  {
    value: "one",
    icon: <Iconify icon="material-symbols:ink-pen-outline" width={24} />,
    label: "Content",
  },
  {
    value: "two",
    icon: <Iconify icon="eva:color-palette-fill" width={24} />,
    label: "Style",
  },
  {
    value: "three",
    icon: <Iconify icon="material-symbols:settings" width={24} />,
    label: "Setting",
  },
];
const ContainerEdit = () => {
  const { currentKey } = useStore((state) => state);
  const { getValues, setValue } = useFormContext();
  console.log("🚀 ~ ContainerEdit ~ getValues:", getValues(currentKey));
  console.log("🚀 ~ ContainerEdit ~ currentKey:", currentKey);

  const dataField = getValues(currentKey);

  const [currentTab, setCurrentTab] = useState("one");

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentTab(newValue);
    },
    []
  );
  return (
    <div>
      <Tabs value={currentTab} onChange={handleChangeTab}>
        {TABS.slice(0, 3).map((tab) => (
          <Tab
            key={tab.value}
            icon={tab.icon}
            label={tab.label}
            value={tab.value}
          />
        ))}
      </Tabs>
      {TABS.slice(0, 2).map(
        (tab) =>
          tab.value === currentTab &&
          currentTab === "two" && (
            <Box
              key={tab.value}
              sx={{
                p: 2,
                borderRadius: 1,
                bgcolor: "background.neutral",
              }}
            >
              <ColorPicker
                color={dataField?.color}
                onChange={(color) =>
                  setValue(`${currentKey}.color`, color.hex, {
                    shouldDirty: true,
                  })
                }
              />
            </Box>
          )
      )}
    </div>
  );
};

export default ContainerEdit;
