"use client";
import Image from "next/image";
import ProviderEdit from "./ProviderEdit";
import useStore from "@/app/(store)/store";

const ContainerContent = () => {
  const { valuesForm } = useStore((state) => state);

  if (!valuesForm) return null;
  return (
    <div className="w-[50vw] flex-shrink-0 border border-solid border-green-200">
      <ProviderEdit name="nickName">
        <h1
          className="text-3xl"
          style={{
            color: valuesForm.nickName.color,
          }}
        >
          {valuesForm.nickName.value}
        </h1>
      </ProviderEdit>
      <ProviderEdit name="myProjects.description">
        <div
          className="text-3xl"
          style={{
            color: valuesForm.myProjects.description.color,
          }}
          dangerouslySetInnerHTML={{
            __html: valuesForm.myProjects.description.value,
          }}
        />
      </ProviderEdit>
      <ProviderEdit name="myProjects.projects">
        <div className="grid grid-cols-2 gap-[1.5rem]">
          {valuesForm.myProjects.projects.value.map(
            (project: any, index: number) => (
              <div key={index}>
                <Image
                  src={project.thumbnail.value}
                  alt={project.name.value}
                  width={600}
                  height={400}
                />
                <h2>{project.name.value}</h2>
                <div className="flex gap-[1rem]">
                  {project.technologies.value.map(
                    (item: any, index: number) => (
                      <div
                        key={index}
                        className="rounded-lg flex justify-center items-center h-[2.5rem] px-[1.5rem]"
                      >
                        {item.value}
                      </div>
                    )
                  )}
                </div>
              </div>
            )
          )}
        </div>
      </ProviderEdit>
    </div>
  );
};

export default ContainerContent;
