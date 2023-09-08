import React from "react";

export default function SectionHeading({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h2 className="capitalize mb-8 font-medium text-3xl text-center">
      {children}
    </h2>
  );
}
