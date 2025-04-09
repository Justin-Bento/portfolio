import React from "react";
import { Card } from "./ui/card";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb";

interface FullWidthCardProps extends React.HTMLAttributes<HTMLDivElement> {
  minHeight?: string;
  cardClassName?: string;
}

interface BannerComposition {
  Breadcrumbs: React.FC<{ children: React.ReactNode }>;
  BreadcrumbItem: React.FC<{
    href: string;
    isActive?: boolean;
    children: React.ReactNode;
  }>;
  Heading: React.FC<{ children: React.ReactNode }>;
  Overview: React.FC<{ children: React.ReactNode }>;
}

const FullWidthCard: React.FC<FullWidthCardProps> & BannerComposition = ({
  children,
  className = "col-span-12 bg-primary/10 h-[65svh] w-full",
  cardClassName = "flex flex-col h-full justify-center",
  minHeight,
  ...props
}) => {
  return (
    <Card className={className} {...props}>
      <div
        className={cardClassName}
        style={minHeight ? { minHeight } : undefined}
      >
        <div className="w-11/12 max-w-4xl mx-auto space-y-3">{children}</div>
      </div>
    </Card>
  );
};

// Breadcrumbs now accepts children
const Breadcrumbs: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Breadcrumb>
      <BreadcrumbList>{children}</BreadcrumbList>
    </Breadcrumb>
  );
};

// Individual BreadcrumbItem component
const BreadcrumbItemComponent: React.FC<{
  href: string;
  isActive?: boolean;
  children: React.ReactNode;
}> = ({ href, isActive, children }) => {
  return (
    <>
      <BreadcrumbItem>
        <BreadcrumbLink
          href={href}
          className={`font-medium ${
            isActive ? "underline text-foreground" : "text-foreground/80"
          }`}
        >
          {children}
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbSeparator />
    </>
  );
};

const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <h2 className="text-3xl font-extrabold capitalize lg:text-5xl text-foreground">
      {children}.
    </h2>
  );
};

const Overview: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <p className="line-clamp-4 text-balance text-muted-foreground">
      {children}
    </p>
  );
};

// Attach sub-components
FullWidthCard.Breadcrumbs = Breadcrumbs;
FullWidthCard.BreadcrumbItem = BreadcrumbItemComponent;
FullWidthCard.Heading = Heading;
FullWidthCard.Overview = Overview;

export default FullWidthCard;
