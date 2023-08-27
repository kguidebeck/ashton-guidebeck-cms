import { titleCase } from "../../lib/titleCase";
import { FieldOptions } from "../../types";

/**
 * @typedef {Object} AssetField
 * @property {string} name - the Name of the field.
 * @property {string} title - The Title of the field.
 * @property {string} type - The type of the field, which will always be 'media_asset'.
 */
export interface AssetField extends FieldOptions {
  name: string;
  title: string;
  type: "media_asset";
}

/**
 * @desc A helper function for creating a media asset field that by default handles transforming the title to the
 *     title-case of the name. Allows for an optional title parameter for when the title should differ from a
 *     title-case version of the name.
 * @param {string} name - Populates the Name property of the string field.
 * @param {string} [title] - Populates the Title property of the string field when it needs to
 *     be something other than the sentence case of the name.
 * @returns {AssetField} AssetField - A string type field with the provided name and title as properties.
 */
export const mediaAsset = (
  name: string,
  title?: string,
  options?: FieldOptions,
): AssetField => {
  const field = {
    name,
    title: title ? title : titleCase(name),
    type: "media_asset",
  };

  if (options) {
    Object.keys(options).forEach((key) => {
      const validOptions = [
        "description",
        "hidden",
        "readOnly",
        "group",
        "fieldset",
        "initialValue",
        "validation",
      ];

      if (validOptions.includes(key)) {
        field[key] = options[key];
      }
    });
  }

  return field as AssetField;
};
