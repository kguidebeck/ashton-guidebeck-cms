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
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "keywords",
      type: "string",
      title: "Keywords",
    },
    {
      name: "canonical_url",
      type: "string",
      title: "Canonical URL",
      description:
        "When empty, the canonical tag will default to a self-referential URL.",
    },
    {
      name: "og_site_name",
      type: "string",
      title: "OG Site Name",
    },
    {
      name: "og_title",
      type: "string",
      title: "OG Title",
    },
    {
      name: "og_description",
      type: "string",
      title: "OG Description",
    },
    // {
    //   name: "og_image",
    //   type: "media_asset",
    //   title: "OG Image",
    // },
    {
      name: "itemprop_title",
      type: "string",
      title: "Itemprop Title",
    },
    {
      name: "itemprop_desc",
      type: "string",
      title: "Itemprop Desc",
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
