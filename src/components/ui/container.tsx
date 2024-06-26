import { cn } from "@/lib/utils";
import React from "react";

export default function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(className, "w-full max-w-screen-xl mx-auto")}>
      {children}
    </div>
  );
}
