/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const EditorBuilder = ({
  className,
  data,
  name,
  setCurrentType,
  setCurrentKey,
  setCurrentData,
}: {
  className?: string;
  data: any;
  name: string;
  setCurrentType: (value: "text" | "editor" | "image" | "") => void;
  setCurrentKey: (value: string) => void;
  setCurrentData: (value: any) => void;
}) => {
  const handleClick = () => {
    setCurrentType("editor");
    setCurrentKey(name);
    setCurrentData(data);
  };
  return (
    <div
      onClick={handleClick}
      className={className}
      dangerouslySetInnerHTML={{ __html: data }}
    ></div>
  );
};

export default EditorBuilder;
