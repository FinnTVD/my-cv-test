import IndexHome from "@/sections/home/IndexHome";

export default function Home() {
  const data = {
    nickName: {
      value: "FINNIT",
      type: "text",
      hidden: false,
      color: "#000",
    },
    banner: {
      title: {
        value: "Trịnh Văn Đức",
        type: "text",
        hidden: false,
        color: "#000",
      },
      position: {
        value: "Front - end Developer",
        type: "text",
        hidden: false,
        color: "#000",
      },
    },
    myProjects: {
      description: {
        value:
          "I strive for excellence and pay attention to the smallest details.",
        type: "text",
        hidden: false,
        color: "#000",
      },
      projects: [
        {
          name: {
            value: "Project 1",
            type: "text",
            hidden: false,
            color: "#000",
          },
          technologies: {
            value: [
              {
                value: "HTML",
                type: "text",
                hidden: false,
                color: "#000",
              },
              {
                value: "CSS",
                type: "text",
                hidden: false,
                color: "#000",
              },
            ],
            type: "array",
            hidden: false,
            color: "#000",
          },
          thumbnail: {
            value: "https://placehold.co/800x900",
            type: "image",
            hidden: false,
          },
          slug: {
            value: "/",
            type: "text",
            hidden: false,
            color: "#000",
          },
        },
      ],
    },
  };
  return <IndexHome data={data} />;
}
