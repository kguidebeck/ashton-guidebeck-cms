import TextBlock, { textBlockMeta } from "./TextBlock";

// Post Modules
// Meta barrel - for use in post documents
export const postModules = [textBlockMeta];

// Schema barrel - for createSchema()
export const postModuleSchemas = [TextBlock].map((schema) => ({
  ...schema,
}));

// For managing desk structure.
export const postModuleTypes = postModules.map((meta) => meta.type);
