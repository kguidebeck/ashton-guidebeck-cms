// Import object types
import seo from "./shared/seo";
import rich_text, { wysiwyg } from "./shared/richText";
// import media from "./shared/media";
import image from "./shared/image";

// Import document types
import post from "./documents/post";
// import footer from "./documents/footer";
// import navigation from "./documents/navigation";
import blog from "./singletons/blog";
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
  // media,
  post,
  blog,
  home,
  connect,
  resume,
  ...postModuleSchemas,
];
