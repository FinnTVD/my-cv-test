import dynamic from "next/dynamic";

const IndexDemo = dynamic(() => import("@/sections/demo/IndexDemo"), {
  ssr: false,
});

const Page = () => {
  return <IndexDemo />;
};

export default Page;
