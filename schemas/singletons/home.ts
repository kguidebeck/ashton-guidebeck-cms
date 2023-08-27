import { string } from "../common/string";
import { cta } from "../common/cta";

export default {
  name: "page_home",
  type: "document",
  title: "Home",
  fields: [
    string("title"),
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
    {
      name: "hero",
      title: "Hero",
      type: "object",
      options: {
        collapsible: true,
      },
      fields: [
        string("heading"),
        { name: "copy", title: "Copy", type: "rich_text" },
        cta("cta", null, { description: "Optional" }),
        {
          name: "image",
          title: "Headshot",
          type: "assetImage",
        },
        {
          name: "graphic",
          title: "Plant Graphic",
          type: "assetImage",
        },
      ],
    },
  ],
};
