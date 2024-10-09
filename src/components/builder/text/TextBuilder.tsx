/* eslint-disable @typescript-eslint/no-explicit-any */
const TextBuilder = ({
  className,
  data,
  name,
  setCurrentType,
  setCurrentKey,
  setCurrentData,
}: {
  className?: string;
  data: any;
  name: string;
  setCurrentType: (value: "text" | "editor" | "image" | "") => void;
  setCurrentKey: (value: string) => void;
  setCurrentData: (value: any) => void;
}) => {
  const handleClick = () => {
    setCurrentType("text");
    setCurrentKey(name);
    setCurrentData(data);
  };

  return (
    <div onClick={handleClick} className={className}>
      {data}
    </div>
  );
};

export default TextBuilder;
