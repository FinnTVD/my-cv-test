/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import Image from "next/image";

const ImageBuilder = ({
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
    setCurrentType("image");
    setCurrentKey(name);
    setCurrentData(data);
  };
  return (
    <div onClick={handleClick} className={className}>
      <Image
        className=""
        src={data?.src || "https://placehold.co/600x400"}
        alt={data?.alt || "image"}
        width={600}
        height={400}
        quality={90}
      />
    </div>
  );
};

export default ImageBuilder;
