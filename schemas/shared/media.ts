export default {
  name: "media_asset",
  type: "document",
  title: "Media Asset",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "label",
      type: "string",
      title: "Label",
    },
    {
      name: "description",
      type: "string",
      title: "Description",
    },
    {
      name: "alt_text",
      type: "string",
      title: "Alternative text",
    },
    {
      name: "cloudinary",
      type: "cloudinary.asset",
      title: "Cloudinary",
    },
  ],
  options: {
    collapsible: true,
    collapsed: true,
  },
};
