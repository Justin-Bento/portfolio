import { sanityFetch } from "@/sanity/lib/live";
import { POSTS_QUERY } from "@/sanity/lib/queries";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Button } from "@/components/ui/button";
import { RiComputerLine, RiGithubLine } from "react-icons/ri";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

export default async function Page() {
  const { data: posts } = await sanityFetch({ query: POSTS_QUERY });
  return (
    <>
      <section className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <Card className="col-span-12 flex min-h-[65dvh] justify-center rounded-lg border-transparent bg-[#aba388]/30 p-8 xl:min-h-[36rem]">
          <div className="space-y-2">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/"
                    className="font-medium text-black/50 dark:text-white"
                  >
                    Home
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href="/Projects"
                    className="font-medium text-black underline dark:text-white"
                  >
                    Projects
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-4xl font-bold lg:text-5xl dark:text-white">
              Building Ideas, One Project at a Time.
            </h1>
            <p className="mt-4 max-w-5xl text-balance leading-7 lg:text-lg dark:text-white">
              Welcome to my portfolio—a showcase of projects that highlight my
              growth as a developer. Each piece reflects a blend of
              problem-solving, technical expertise, and a passion for delivering
              effective solutions.
            </p>
          </div>
        </Card>
      </section>
      <ul className="grid list-none grid-cols-12 gap-6 pt-8">
        {posts.map((post) => (
          <li key={post._id} className="col-span-12 lg:col-span-6">
            <Card className="">
              <CardContent className="space-y-4">
                <CardHeader className="relative mb-4 size-12">
                  {post.mainImage ? (
                    <Image
                      fill
                      src={urlFor(post.mainImage).url()}
                      alt={`Image of ${post.title}`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="rounded-full"
                    />
                  ) : null}
                </CardHeader>
                <CardTitle>{post?.title}</CardTitle>
                <CardDescription>{post?.description}</CardDescription>
                <CardFooter className="pl-0 flex flex-col lg:flex-row items-start gap-2">
                  <Link href={`${post.projectCode}`}>
                    <Button variant="secondary" size="sm" className="w-full">
                      <RiGithubLine />
                      View Code on GitHub
                    </Button>
                  </Link>
                  <Link href={`${post.liveDemo}`}>
                    <Button variant="secondary" size="sm" className="w-full">
                      <RiComputerLine />
                      Interact With Project
                    </Button>
                  </Link>
                </CardFooter>
              </CardContent>
            </Card>
          </li>
        ))}
      </ul>
    </>
  );
}
