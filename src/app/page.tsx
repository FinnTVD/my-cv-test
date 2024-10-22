import IndexHome from "@/sections/home/IndexHome";

export default function Home() {
  const data = {
    nickName: {
      value: "FINNIT",
      type: "text",
      hidden: ["desktop"],
      color: "#000",
    },
    banner: {
      title: {
        value: "Trịnh Văn Đức",
        type: "text",
        hidden: [],
        color: "#000",
      },
      position: {
        value: "Front - end Developer",
        type: "text",
        hidden: [],
        color: "#000",
      },
    },
    myProjects: {
      description: {
        value:
          "<p>I strive for excellence and pay attention to the <strong>smallest</strong> details.</p>",
        type: "editor",
        hidden: [],
        color: "#000",
      },
      projects: {
        value: [
          {
            name: {
              value: "Project 1",
              type: "text",
              hidden: [],
              color: "#000",
            },
            technologies: {
              value: [
                {
                  value: "HTML",
                  type: "text",
                  hidden: [],
                  color: "#000",
                },
                {
                  value: "CSS",
                  type: "text",
                  hidden: [],
                  color: "#000",
                },
              ],
              type: "array",
              hidden: [],
              color: "#000",
            },
            thumbnail: {
              value: "https://placehold.co/800x900",
              type: "image",
              hidden: [],
            },
            slug: {
              value: "/",
              type: "text",
              hidden: [],
              color: "#000",
            },
          },
        ],
        type: "array",
        hidden: [],
      },
    },
    platform: {
      value: [
        {
          title: {
            value: "Website DEVELOPMENT",
            type: "text",
            color: "#000",
            hidden: [],
          },
          libs: {
            value: [
              {
                value: "Framework",
                type: "text",
                hidden: [],
                color: "#000",
              },
              {
                value: "Libraries",
                type: "text",
                hidden: [],
                color: "#000",
              },
            ],
            type: "array",
            hidden: [],
          },
        },
      ],
      type: "array",
      hidden: [],
    },
    albumImages: {
      value: [
        {
          value: "https://placehold.co/800x900",
          type: "image",
          hidden: [],
        },
        {
          value: "https://placehold.co/800x900",
          type: "image",
          hidden: [],
        },
        {
          value: "https://placehold.co/800x900",
          type: "image",
          hidden: [],
        },
      ],
      type: "gallery",
      hidden: [],
    },
  };
  return <IndexHome data={data} />;
}
