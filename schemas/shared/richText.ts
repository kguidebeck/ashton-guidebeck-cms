export const customMarks = {
  annotations: [
    {
      title: "URL",
      name: "link",
      type: "object",
      fields: [
        {
          title: "URL",
          name: "href",
          type: "url",
          validation: (Rule) =>
            Rule.uri({
              allowRelative: true,
              scheme: ["http", "https", "mailto", "tel"],
            }),
        },
        {
          title: "Open in new tab",
          name: "blank",
          type: "boolean",
        },
      ],
    },
  ],
};

export const wysiwyg = {
  name: "wysiwyg",
  title: "Rich Text",
  type: "array",
  of: [
    {
      type: "block",
      marks: customMarks,
    },
    { type: "image" },
  ],
};

export default {
  name: "rich_text",
  title: "Rich Text",
  type: "array",
  of: [
    {
      type: "block",
      marks: customMarks,
    },
  ],
};
