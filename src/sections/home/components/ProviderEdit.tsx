"use client";

import useStore from "@/app/(store)/store";

const ProviderEdit = ({
  children,
  name,
}: {
  children: React.ReactNode;
  name: string;
}) => {
  const { setCurrentKey } = useStore((state) => state);

  return (
    <div
      onClick={() => setCurrentKey(name)}
      className="relative size-fit group cursor-pointer"
    >
      <div className="absolute inset-0 border border-solid border-pink-400 z-50 group-hover:opacity-100 opacity-0 transition-all duration-200 pointer-events-none"></div>
      {children}
    </div>
  );
};

export default ProviderEdit;
