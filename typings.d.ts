export interface CategoryItemComponentProps {
  Category: string | string[] | undefined
}

interface IndividualPostsProps {
  _id: string;
  title: string;
  description: string;
  mainImage: any;
  slug: any;
}

export interface AllPosts {
  posts: IndividualPostsProps[];
}