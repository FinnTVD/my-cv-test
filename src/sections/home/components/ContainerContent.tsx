"use client";
import ProviderEdit from "./ProviderEdit";
import useStore from "@/app/(store)/store";

const ContainerContent = () => {
  const { valuesForm } = useStore((state) => state);

  if (!valuesForm) return null;
  return (
    <div className="w-[50vw] flex-shrink-0 border border-solid border-green-200">
      <ProviderEdit name="nickName">
        <header>
          <h1
            className="text-3xl"
            style={{
              color: valuesForm.nickName.color,
            }}
          >
            {valuesForm.nickName.value}
          </h1>
        </header>
      </ProviderEdit>
    </div>
  );
};

export default ContainerContent;
