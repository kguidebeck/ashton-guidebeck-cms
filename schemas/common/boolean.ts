import { titleCase } from "../../lib/titleCase";
import { FieldOptions } from "../../types";

/**
 * @typedef {Object} BooleanField
 * @property {string} name - the Name of the field.
 * @property {string} title - The Title of the field.
 * @property {string} type - The type of the field, which will always be 'boolean'.
 */
export interface BooleanField extends FieldOptions {
  name: string;
  title: string;
  type: "boolean";
}

/**
 * @desc A helper function for creating a boolean field that by default handles title casing the title.
 *     Allows for an optional title parameter for when the title should differ from a title-cased
 *     version of the name.
 * @param {string} name - Populates the Name property of the boolean field.
 * @param {string} [title] - Populates the Title property of the boolean field when it needs to
 *     be something other than the capitalized name.
 * @returns {BooleanField} BooleanField - A boolean type field with the provided name and title as properties.
 */
export const boolean = (
  name: string,
  title?: string,
  options?: FieldOptions,
): BooleanField => {
  const field = {
    name,
    title: title ? title : titleCase(name),
    type: "boolean" as "boolean",
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
      ];

      if (validOptions.includes(key)) {
        field[key] = options[key];
      }
    });
  }

  return field as BooleanField;
};
