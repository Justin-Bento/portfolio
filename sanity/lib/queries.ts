import { defineQuery } from "next-sanity";

export const POSTS_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] {
  _id,  title,  description,  projectCode, liveDemo, mainImage
}`);

export const POST_QUERY = defineQuery(`*[_type == "post" && defined(slug.current)] {
  _id,  title,  description,  projectCode, liveDemo, mainImage
}`);
