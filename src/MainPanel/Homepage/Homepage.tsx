import React from "react";
import { example } from "./example";

export const Homepage: React.FC = () => {
  return (
    <div
      style={{ height: "500px", width: "50%", overflow: "auto" }}
      dangerouslySetInnerHTML={{ __html: example }}
    />
  );
};
