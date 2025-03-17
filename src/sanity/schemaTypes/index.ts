import { type SchemaTypeDefinition } from "sanity";
import { postTypes } from "./postsTypes";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    postTypes,
    // ...
  ],
};
