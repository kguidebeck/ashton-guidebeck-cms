export default {
  name: "seo",
  type: "object",
  title: "SEO",
  validation: (Rule) => Rule.required(),
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => {
        return Rule.required();
      },
    },
    {
      name: "secret",
      type: "text",
      title: "Secret",
      description: "Optional hidden paragraph exclusively for search engines",
      rows: 2,
    },
    {
      name: "description",
      type: "text",
      title: "Description",
      rows: 3,
    },
    {
      name: "keywords",
      type: "string",
      title: "Keywords",
    },
    {
      name: "image",
      type: "image",
      title: "Image",
    },
    {
      name: "no_index",
      title: "Block Search Indexing",
      type: "boolean",
      description:
        'When active the page will receive a "noindex" meta tag that prevents crawlers from indexing.',
      initialValue: false,
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
