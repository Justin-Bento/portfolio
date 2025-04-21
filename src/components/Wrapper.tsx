import React from "react";

type ExampleProps = {
  children?: React.ReactNode;
  className?: string; // Optional className
};

export default function Wrapper({ children, className = "" }: ExampleProps) {
  return (
    <div className={`w-screen xl:container mx-auto p-4 md:p-6 ${className}`}>
      {children}
    </div>
  );
}
