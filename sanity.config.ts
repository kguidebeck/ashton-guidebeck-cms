// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { dashboardTool } from "@sanity/dashboard";
import { netlifyWidget } from "sanity-plugin-dashboard-widget-netlify";
import {
  BsFillPlayCircleFill,
  BsFillWrenchAdjustableCircleFill,
} from "react-icons/bs";
import schemas from "./schemas/schema";
import deskStructure from "./part/deskStructure";

// Define the actions that should be available for singleton documents
const singletonActions = new Set(["publish", "discardChanges", "restore"]);

// Define the singleton document types
const singletonTypes = new Set(["page_home", "page_connect", "page_resume"]);

const tools = (prev, context) => {
  const isAdmin = context.currentUser.roles.find(
    ({ name }) => name === "administrator"
  );
  if (isAdmin) {
    return prev;
  }
  return prev.filter((tool) => tool.name !== "vision");
};

const schema = {
  types: schemas,
  // Filter out singleton types from the global “New document” menu options
  templates: (templates) =>
    templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
};

const document = {
  newDocumentOptions: (prev, { creationContext }) => {
    if (creationContext.type === "global") {
      return prev.filter(
        (templateItem) => templateItem.templateId != "settings"
      );
    }
    return prev;
  },
  actions: (prev, { schemaType }) => {
    if (schemaType === "settings") {
      return prev.filter(
        ({ action }) => !["unpublish", "delete", "duplicate"].includes(action)
      );
    }

    // For singleton types, filter out actions that are not explicitly included
    // in the `singletonActions` list defined above
    return singletonTypes.has(schemaType)
      ? prev.filter(({ action }) => action && singletonActions.has(action))
      : prev;
  },
};

export default defineConfig([
  {
    name: "production-dataset",
    basePath: "/production",
    title: "Production",
    projectId: "myxqdp6o",
    dataset: "production",
    icon: BsFillPlayCircleFill,
    plugins: [
      dashboardTool({
        widgets: [
          netlifyWidget({
            title: "Deploy Site",
            sites: [
              {
                title: "Ashton Guidebeck",
                apiId: "fa974d14-d2f1-4b50-88b2-b6b724e5ef3b",
                buildHookId: "64ebc29dee3f7a218fb6fffd",
                name: "ashtonguidebeck-app",
              },
            ],
          }),
        ],
      }),
      deskTool({
        structure: deskStructure,
      }),
      media(),
    ],
    tools,
    schema,
    document,
  },
  {
    name: "development-dataset",
    basePath: "/development",
    title: "Development",
    projectId: "myxqdp6o",
    dataset: "development",
    icon: BsFillWrenchAdjustableCircleFill,
    plugins: [
      deskTool({
        structure: deskStructure,
      }),
      visionTool(),
      media(),
    ],
    tools,
    schema,
    document,
  },
]);

// export default defineConfig([
//   {
//     name: 'my-staging-space',
//     title: 'My staging workspace',
//   	subtitle: 'The world is a stage',
//   	icon: RobotIcon,
//     projectId: '<project-id>',
//     dataset: 'staging',
//     plugins: [deskTool(), visionTool({ defaultApiVersion: '2022-10-21' })],
//     schema: {
//       types: schemaTypes,
//   },
// ]);
