import { string } from "../common/string";

export default {
  name: "page_resume",
  type: "document",
  title: "Resume",
  fields: [
    string("title"),
    {
      name: "seo",
      type: "seo",
      title: "SEO",
    },
    string("page_heading"),
    {
      title: "Copy",
      name: "copy",
      type: "rich_text",
    },
    {
      title: "Resume File",
      name: "resume_file",
      type: "file",
    },
    {
      title: "Resume Builder",
      name: "resume_builder",
      type: "array",
      options: {
        sortable: true,
      },
      of: [
        {
          title: "Section",
          name: "section",
          type: "object",
          fields: [
            string("heading", "Heading"),
            {
              title: "Section Items",
              name: "items",
              type: "array",
              options: {
                sortable: true,
              },
              of: [
                {
                  title: "Sub-Section",
                  type: "object",
                  fields: [
                    string("item_heading"),
                    {
                      title: "Width",
                      name: "subsection_width",
                      type: "string",
                      initialValue: "12",
                      options: {
                        list: [
                          { title: "1/4", value: "3" },
                          { title: "1/3", value: "4" },
                          { title: "1/2", value: "6" },
                          { title: "Full", value: "12" },
                        ],
                      },
                    },
                    {
                      title: "Date Range",
                      name: "date_range",
                      description:
                        "If a singular start/stop date, you only need to enter one date.",
                      type: "object",
                      fields: [
                        {
                          title: "Start Date",
                          name: "start_date",
                          type: "date",
                          options: {
                            dateFormat: "MMM YYYY",
                          },
                        },
                        {
                          title: "I am currently involved with this item",
                          name: "present_item",
                          type: "boolean",
                          initialValue: false,
                          options: {
                            layout: "checkbox",
                          },
                        },
                        {
                          title: "End Date",
                          name: "end_date",
                          type: "date",
                          options: {
                            dateFormat: "MMM YYYY",
                          },
                          hidden: ({ parent }) => parent?.present_item,
                        },
                      ],
                    },
                    string("subheading", "Subheading", {
                      description:
                        "Optional copy that will output under heading and date as italicized text.",
                    }),
                    {
                      title: "Copy",
                      name: "copy",
                      type: "rich_text",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
