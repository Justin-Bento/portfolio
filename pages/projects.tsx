import { client, urlFor } from '../sanityClient';
import { AllPosts } from '../typings';
import { GetStaticProps } from "next";

import React from 'react'

export default function Projects() {
  return (
    <div>projects</div>
  )
}

export const getStaticProps: GetStaticProps<AllPosts> = async () => {
  const data = await client.fetch(`
    *[_type == "post"]{
      _id, 
      title, 
      description, 
      slug,   
      mainImage
    }
  `);
  return {
    props: { posts: data },
    revalidate: 60 // Update data every 60s
  }
};