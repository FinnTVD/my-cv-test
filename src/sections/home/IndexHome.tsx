import dynamic from "next/dynamic";
const ContainerFormProvider = dynamic(() => import("./ContainerFormProvider"), {
  ssr: false,
});

const IndexHome = ({ data }: any) => {
  return <ContainerFormProvider data={data} />;
};

export default IndexHome;
