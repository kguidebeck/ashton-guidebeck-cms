import { mediaAsset } from "../common/mediaAsset";
import { cta } from "../common/cta";
import { string } from "../common/string";

export default {
  name: "navigation",
  type: "document",
  title: "Navigation",
  fields: [
    string("title"),
    mediaAsset("logo_asset"),
    {
      name: "links",
      title: "Link List",
      type: "reference",
      to: [{ type: "link_list" }],
    },
    {
      name: "social_list",
      title: "Social List",
      type: "reference",
      to: { type: "link_list" },
    },
  ],
};
