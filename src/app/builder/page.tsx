import dynamic from "next/dynamic";

const IndexBuilder = dynamic(() => import("@/sections/builder/IndexBuilder"), {
  ssr: false,
});

const Page = () => {
  return <IndexBuilder />;
};

export default Page;
