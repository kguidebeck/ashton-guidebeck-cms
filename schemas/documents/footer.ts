import { string } from "../common/string";

export default {
  name: "footer",
  title: "Footer",
  type: "document",
  fields: [
    string("title"),
    {
      name: "menus",
      title: "Menus",
      type: "array",
      validation: (Rule) => Rule.max(3),
      of: [
        {
          name: "menu",
          title: "Menu",
          type: "object",
          fields: [
            string("heading"),
            {
              name: "link_list",
              title: "Link List",
              type: "reference",
              to: { type: "link_list" },
            },
          ],
        },
      ],
    },
    {
      name: "social_list",
      title: "Social List",
      type: "reference",
      to: { type: "link_list" },
    },
  ],
};
