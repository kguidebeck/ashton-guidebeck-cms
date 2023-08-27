import { FieldOptions } from "types";
import { titleCase } from "../../lib/titleCase";
import { string, StringField } from "./string";

/**
 * @typedef {Object} Cta
 * @property {string} name - The provided name, or 'cta' if name is omitted.
 * @property {string} title - The provided title, or 'CTA' if title is omitted.
 * @property {'object'} type - The type of the field, which will always be 'object'.
 * @property {string[]} fields - The fields array, containing a text field for the Cta Text and the Cta URL.
 */
export interface Cta extends FieldOptions {
  name: string;
  title: string;
  type: "string";
  fields: StringField[];
}

/**
 * @desc A helper function for generating a CTA schema, containing a 'text' string field and a 'url' string field.
 *     By default, the returned object field will have a name and title of `cta` and `CTA`, respectively. If
 *     provided, the returned object field will have a name and title of `name` and `title` parameters,
 *     respectively.
 * @param {string} [name=cta] - An optional name for the Cta if the name should differ from 'cta'.
 * @param {string} [title] - An optional title for the Cta if the title should differ from 'CTA'.
 * @returns {Cta} Cta - An object with string fields of the provided name and title, if present.
 */
export const cta = (
  name: string = "cta",
  title?: string,
  options?: FieldOptions
) => {
  const field = {
    name,
    title: title || titleCase(name).replace(/cta/i, "CTA"),
    type: "object",
    fields: [string("text"), string("url", "URL")],
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

  return field as Cta;
};
