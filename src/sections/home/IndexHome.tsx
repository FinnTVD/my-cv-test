/* eslint-disable react-hooks/exhaustive-deps */

// import FormHandle from "./components/FormHandle";
import ContainerContent from "./components/ContainerContent";
import dynamic from "next/dynamic";
const FormHandle = dynamic(() => import("./components/FormHandle"), {
  ssr: false,
});

const IndexHome = ({ data }: any) => {
  return (
    <main className="w-full flex relative">
      <FormHandle data={data} />
      <ContainerContent />
    </main>
  );
};

export default IndexHome;
