import { postModules } from "../modules";

export default {
  name: "post",
  type: "document",
  title: "Blog Posts",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
    {
      name: "post_modules",
      type: "array",
      title: "Post Modules",
      of: [
        {
          title: "References",
          type: "reference",
          to: postModules,
        },
      ],
      options: {
        sortable: true,
      },
    },
  ],
  // preview: {
  //   select: {
  //     title: "title",
  //     slug: "slug.current",
  //   },
  //   prepare: ({ title, slug }) => {
  //     return {
  //       title: title,
  //       subtitle: slug,
  //     };
  //   },
  // },
};
