import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import { GithubIcon, Laptop } from "lucide-react";
import { Metadata } from "next";
import FullWidthCard from "@/components/FullWidthCard";
import ProjectCard from "@/components/ProjectCard";
import { urlFor } from "@/sanity/lib/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "I’m Justin Bento. I live in Toronto, where I build projects to last.",
};

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <FullWidthCard>
          <FullWidthCard.Breadcrumbs>
            <FullWidthCard.BreadcrumbItem href="/">
              Home
            </FullWidthCard.BreadcrumbItem>
            <FullWidthCard.BreadcrumbItem href="/projects" isActive>
              Projects
            </FullWidthCard.BreadcrumbItem>
          </FullWidthCard.Breadcrumbs>
          <FullWidthCard.Heading>
            Building Ideas, One Project at a Time
          </FullWidthCard.Heading>
          <FullWidthCard.Overview>
            Welcome to my portfolio—a showcase of projects that highlight my
            growth as a developer. Each piece reflects a blend of
            problem-solving, technical expertise, and a passion for delivering
            effective solutions.
          </FullWidthCard.Overview>
        </FullWidthCard>
      </section>
      <ul className="grid list-none grid-cols-12 gap-6 pt-8">
        {posts.map((post) => (
          <li key={post._id} className="col-span-12 lg:col-span-6">
            <ProjectCard.Layout>
              {post.mainImage ? (
                <ProjectCard.Media
                  src={urlFor(post.mainImage).url()}
                  alt={`Image of ${post.title}`}
                />
              ) : null}
              <ProjectCard.Headline>{post.title}</ProjectCard.Headline>
              <ProjectCard.Description>
                {post.description}
              </ProjectCard.Description>
              <div className="flex items-center gap-4 mt-4">
                <ProjectCard.SocialLink
                  href={`${post.liveDemo}`}
                  icon={Laptop}
                  label="View Live Project"
                />
                <ProjectCard.SocialLink
                  href={`${post.projectCode}`}
                  icon={GithubIcon}
                  label="View Code"
                />
              </div>
            </ProjectCard.Layout>
          </li>
        ))}
      </ul>
    </>
  );
}
