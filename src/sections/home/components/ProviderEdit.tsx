"use client";

import useStore from "@/app/(store)/store";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

const ProviderEdit = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const { getValues } = useFormContext();
  const type = getValues(name)?.hidden || "";

  const { setCurrentKey } = useStore((state) => state);

  const isMobile = type.some((item: string) => item === "mobile");
  const isTablet = type.some((item: string) => item === "tablet");
  const isDesktop = type.some((item: string) => item === "desktop");

  return (
    <div
      onClick={() => setCurrentKey(name)}
      className={cn(
        "relative size-fit group cursor-pointer",
        isMobile && "max-md:bg-gray-500 max-md:opacity-50",
        isTablet &&
          "max-lg:bg-gray-500 max-lg:opacity-50 max-md:bg-current max-md:opacity-100",
        isDesktop && "lg:bg-gray-500 lg:opacity-50"
      )}
    >
      <div className="absolute inset-0 border border-solid border-pink-400 z-50 group-hover:opacity-100 opacity-0 transition-all duration-200 pointer-events-none"></div>
      {children}
    </div>
  );
};

export default ProviderEdit;
