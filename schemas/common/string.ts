import { titleCase } from "../../lib/titleCase";
import { FieldOptions } from "../../types";

/**
 * @typedef {Object} StringField
 * @property {string} name - the Name of the field.
 * @property {string} title - The Title of the field.
 * @property {string} type - The type of the field, which will always be 'string'.
 */
export interface StringField extends FieldOptions {
  name: string;
  title: string;
  type: "string";
}

/**
 * @desc A helper function for creating a string field that by default handles title casing the title.
 *     Allows for an optional title parameter for when the title should differ from a title-cased
 *     version of the name.
 * @param {string} name - Populates the Name property of the string field.
 * @param {string} [title] - Populates the Title property of the string field when it needs to
 *     be something other than the capitalized name.
 * @returns {StringField} StringField - A string type field with the provided name and title as properties.
 */
export const string = (
  name: string,
  title?: string,
  options?: FieldOptions,
): StringField => {
  const field = {
    name,
    title: title ? title : titleCase(name),
    type: "string",
  };

  if (options) {
    Object.keys(options).forEach((key) => {
      const validOptions = [
        "options",
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

  return field as StringField;
};
