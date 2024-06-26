import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-screen-2xl mx-auto">{children}</div>;
}
