/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { mergeDeep, stringToNestedObject } from "@/lib/builder";
import Quill from "quill";
import "quill/dist/quill.snow.css";

import { useEffect, useRef } from "react";

const EditorBuilderEdit = ({
  currentData,
  currentKey,
  setForm,
  form,
}: {
  currentData: string;
  currentKey: string;
  setForm: (value: any) => void;
  form: any;
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const quillRef = useRef<Quill | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    quillRef.current = new Quill(editorRef.current!, {
      theme: "snow",
      modules: {
        toolbar: true,
      },
    });
    // if (currentData && editorRef.current) {
    //   editorRef.current.innerHTML = currentData; // Bạn có thể dùng setContents nếu dữ liệu là Delta object
    // }
    // Đặt giá trị mặc định dưới dạng HTML
    if (currentData && quillRef.current) {
      quillRef.current.clipboard.dangerouslyPasteHTML(currentData); // Dán HTML trực tiếp vào editor
    }
    quillRef.current.on("text-change", () => {
      const html = quillRef.current!.getSemanticHTML();

      handleChange(html);
    });
    quillRef.current.on("selection-change", (range, oldRange, source) => {
      if (range) {
        if (range.length == 0) {
          console.log("User cursor is on", range.index);
        } else {
          const text = quillRef.current!.getText(range.index, range.length);
          console.log("User has highlighted", text);
        }
      } else {
        console.log("Cursor not in the editor");
      }
    });
    return () => {
      // Cleanup khi component bị hủy
      quillRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleChange = (value: string) => {
    const result = stringToNestedObject(currentKey, value);

    const originalObj = { ...form };
    // Cập nhật object ban đầu
    mergeDeep(form, result.form);
    return setForm(Object.assign({}, originalObj));
  };
  return <div id="editor" ref={editorRef}></div>;
};

export default EditorBuilderEdit;
