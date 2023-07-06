import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: 'v1',
  useCdn: true,
});

const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}