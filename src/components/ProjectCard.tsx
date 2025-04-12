import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { GithubIcon } from "lucide-react";

// Define TypeScript interfaces for props
interface MediaProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}

interface HeadlineProps {
  children: React.ReactNode;
  className?: string;
}

interface DescriptionProps {
  children: React.ReactNode;
  className?: string;
}

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
}
interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  className?: string;
  iconClassName?: string;
  buttonVariant?: "default" | "secondary" | "ghost" | "link";
}

const SocialLink = ({
  href,
  icon: Icon,
  label,
  className = "",
  iconClassName = "size-4",
  buttonVariant = "secondary",
}: SocialLinkProps) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center gap-2 ${className}`}
    aria-label={`Visit ${label}`}
  >
    <Button variant={buttonVariant} size="sm">
      <Icon className={iconClassName} />
      {label}
    </Button>
  </Link>
);

const Media = ({
  src,
  alt,
  className = "",
  imageClassName = "",
}: MediaProps) => (
  <div className={` relative w-10 h-10 mb-2 ${className}`}>
    <Image
      fill
      src={src}
      alt={alt}
      className={`rounded-full object-contain ${imageClassName}`}
      sizes="(max-width: 768px) 100vw, 33vw"
    />
  </div>
);

// Headline subcomponent
const Headline = ({ children, className = "" }: HeadlineProps) => (
  <h2 className={` scroll-m-20 text-lg mb-1 font-semibold ${className}`}>
    {children}
  </h2>
);

// Description subcomponent
const Description = ({ children, className = "" }: DescriptionProps) => (
  <p
    className={`text-sm/relaxed text-muted-foreground tracking-wide line-clamp-2 ${className}`}
  >
    {children}
  </p>
);

// Layout wrapper
const Layout = ({ children, className = "" }: LayoutProps) => (
  <Card className={`shadow-none ${className}`}>
    <CardContent>{children}</CardContent>
  </Card>
);

// Main ProjectCard component with compound components
const ProjectCard = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

// Attach subcomponents
ProjectCard.Media = Media;
ProjectCard.Headline = Headline;
ProjectCard.Description = Description;
ProjectCard.SocialLink = SocialLink;
ProjectCard.Layout = Layout;

export default ProjectCard;
