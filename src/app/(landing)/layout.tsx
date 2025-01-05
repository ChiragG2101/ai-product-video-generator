import Component from "@/components/landing/navbar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Component />
      {children}
    </div>
  );
};

export default layout;
