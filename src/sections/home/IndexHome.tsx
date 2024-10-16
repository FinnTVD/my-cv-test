"use client";
/* eslint-disable react-hooks/exhaustive-deps */

import useStore from "@/app/(store)/store";
import ProviderEdit from "./components/ProviderEdit";
import FormHandle from "./components/FormHandle";
import ContainerContent from "./components/ContainerContent";

const IndexHome = ({ data }: any) => {
  return (
    <main className="w-full flex relative">
      <FormHandle data={data} />
      <ContainerContent />
    </main>
  );
};

export default IndexHome;
