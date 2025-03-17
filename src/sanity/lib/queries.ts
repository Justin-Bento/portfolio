import { defineQuery } from "next-sanity";

export const POSTS_QUERY =
  defineQuery(`*[_type == "post" && defined(slug.current)]{
  _id, title, description, mainImage, liveDemo, projectCode
}`);
