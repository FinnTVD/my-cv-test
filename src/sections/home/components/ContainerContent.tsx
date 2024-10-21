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
      <ProviderEdit name="platform">
        <div className="space-y-[3rem]">
          {valuesForm.platform.value.map((item: any, index: number) => (
            <div key={index}>
              <h2>{item.value}</h2>
              <div className="flex flex-wrap gap-[1rem]">
                {item.libs.value.map((lib: any, index: number) => (
                  <div key={index}>{lib.value}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ProviderEdit>
      <div className="h-screen w-full flex justify-center items-end">
        <iframe
          src="http://localhost:3000/"
          frameBorder="0"
          width={320}
          height={780}
        ></iframe>
      </div>
    </div>
  );
};

export default ContainerContent;
