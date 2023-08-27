import { postModules } from "../modules";

export default {
  name: "page",
  type: "document",
  title: "Page",
  groups: [
    {
      name: "page_fields",
      title: "Page Fields",
    },
  ],
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
    },
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
    {
      name: "page_modules",
      type: "array",
      title: "Page Modules",
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
  preview: {
    select: {
      title: "title",
      slug: "slug.current",
    },
    prepare: ({ title, slug }) => {
      return {
        title: title,
        subtitle: slug,
      };
    },
  },
};
