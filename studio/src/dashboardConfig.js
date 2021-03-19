export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "605479291a49b9008fea7b46",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-614j925c",
                  apiId: "7656b262-9c4b-4b74-b16b-f51f06e5419d",
                },
                {
                  buildHookId: "6054792af85acb0099cb2187",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-wpqcsci1",
                  apiId: "7071486a-adaa-4de1-a64d-89384b79ce4a",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Mattdjuk/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-wpqcsci1.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
