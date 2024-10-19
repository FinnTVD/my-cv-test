"use client";
import "@/utils/highlight";
import ReactQuill from "react-quill";
// @mui
import { alpha } from "@mui/material/styles";
//
import { EditorProps } from "./types";
import { StyledEditor } from "./styles";
import Toolbar, { formats } from "./toolbar";
import { useEffect, useRef } from "react";
// import { FileService } from "src/services";
// import { FileChoosenDialog } from "src/sections/file-manager/components";
// import { useBoolean } from "src/hooks/use-boolean";
// import { IFile } from "src/types/file";

// ----------------------------------------------------------------------

export default function Editor({
  id = "minimal-quill",
  error,
  simple = false,
  helperText,
  sx,
  ...other
}: EditorProps) {
  const modules = {
    toolbar: {
      container: `#${id}`,
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  // const chooseFiles = useBoolean();

  const reactQuillRef = useRef<any>();

  // const { t } = useLocales();

  // const { uploadSingleFile, getFileByIds } = FileService;

  // useEffect(() => {
  //   let quill = reactQuillRef?.current?.getEditor();
  //   let toolbar = quill.getModule("toolbar");
  //   toolbar.addHandler("image", chooseFiles.onTrue);
  // }, []);

  // const imageHandler = () => {
  //   let fileInput = document.createElement("input") as any;
  //   fileInput.type = "file";
  //   fileInput.accept = "image/*";
  //   fileInput.click();

  //   // Listen for file input change
  //   fileInput.onchange = async () => {
  //     let file = fileInput.files[0];
  //     // process and upload image file...

  //     // Create form data
  //     let formData = new FormData();
  //     formData.append("file", file);

  //     // Post to server
  //     const { data } = await uploadSingleFile(formData);

  //     // Insert uploaded image
  //     let quill = reactQuillRef.current.getEditor();
  //     let range = quill.getSelection(true);
  //     quill.insertEmbed(range.index, "image", data.url);
  //   };
  // };

  // const handleImagesSave = async (selected: string[]) => {
  //   try {
  //     const { data } = await getFileByIds(selected);
  //     // Insert uploaded image
  //     let quill = reactQuillRef.current.getEditor();
  //     let range = quill.getSelection(true);
  //     data.forEach((item: IFile, index: number) => {
  //       quill.insertEmbed(range.index + index, "image", item.path);
  //     });
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     chooseFiles.onFalse();
  //   }
  // };

  return (
    <>
      <StyledEditor
        sx={{
          ...(error && {
            border: (theme) => `solid 1px ${theme.palette.error.main}`,
            "& .ql-editor": {
              bgcolor: (theme) => alpha(theme.palette.error.main, 0.08),
            },
          }),
          ...sx,
        }}
      >
        <Toolbar id={id} isSimple={simple} />

        <ReactQuill
          ref={reactQuillRef}
          modules={modules}
          formats={formats}
          placeholder={"Write something..."}
          {...other}
        />
      </StyledEditor>

      {helperText && helperText}

      {/* <FileChoosenDialog
        open={chooseFiles.value}
        onClose={chooseFiles.onFalse}
        onSave={handleImagesSave}
      /> */}
    </>
  );
}
