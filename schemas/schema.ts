// Import object types
import seo from "./shared/seo";
import rich_text, { wysiwyg } from "./shared/richText";
import image from "./shared/image";

// Import document types
import home from "./singletons/home";
import connect from "./singletons/connect";
import resume from "./singletons/resume";
import { postModuleSchemas } from "./modules";

// Then we give our schema to the builder and provide the result to Sanity
export default [
  // We name our schema
  seo,
  rich_text,
  image,
  wysiwyg,
  home,
  connect,
  resume,
  ...postModuleSchemas,
];
