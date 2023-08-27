import { string } from "../common/string";

export const textBlockMeta = {
  type: "text_block",
  title: "Text Block",
};

const { type: name, title } = textBlockMeta;

export default {
  name,
  title,
  type: "document",
  fields: [
    string("title"),
    {
      name: "content",
      title: "Content",
      type: "rich_text",
    },
  ],
};
