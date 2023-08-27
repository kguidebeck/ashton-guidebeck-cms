import { string } from "../common/string";

export default {
  name: "page_connect",
  type: "document",
  title: "Connect",
  fields: [
    string("title"),
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
    string("heading"),
    {
      name: "copy",
      title: "Copy",
      type: "rich_text",
    },
    {
      name: "background_desktop",
      title: "Background Graphic (Desktop)",
      type: "assetImage",
    },
    {
      name: "background_mobile",
      title: "Background Graphic (Mobile)",
      type: "assetImage",
    },
    {
      name: "show_socials",
      title: "Show Social Links",
      type: "boolean",
      initialValue: false,
    },
  ],
};
