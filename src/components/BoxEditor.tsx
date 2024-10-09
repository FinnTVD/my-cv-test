/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/role-supports-aria-props */
"use client";

import { useRef } from "react";

const BoxEditor = ({
  id,
  spellCheck,
  className,
  content,
}: {
  id: string;
  spellCheck?: boolean;
  className?: string;
  content: string;
}) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const handleCommand = (command: any) => {
    document.execCommand(command, false, undefined);
    if (editorRef.current) {
      editorRef.current.focus();
    }
  };
  return (
    <section id={id} className="relative">
      <div
        className="relative"
        ref={editorRef}
        onInput={(e) => {
          console.log(e.currentTarget.innerHTML);
        }}
        contentEditable="true"
        aria-multiline="true"
        spellCheck={spellCheck}
      >
        <div className={`${className} [&_ol]:list-disc [&_ol]:ml-[1rem]`}>
          {content}
        </div>
      </div>
      <div
        className="space-x-[0.5rem] absolute top-[-0.2rem] -translate-y-full left-0"
        style={{
          background: "#f0f0f0",
          padding: "5px",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <button className="size-[1rem]" onClick={() => handleCommand("bold")}>
          <b>B</b>
        </button>
        <button className="size-[1rem]" onClick={() => handleCommand("italic")}>
          <i>I</i>
        </button>
        <button
          className="size-[1rem]"
          onClick={() => handleCommand("underline")}
        >
          <u>U</u>
        </button>
        <button onClick={() => handleCommand("insertOrderedList")}>OL</button>
      </div>
    </section>
  );
};

export default BoxEditor;
