import React from "react";

export const Main = ({ children }) => {
  return (
    <>
      <main className="container mx-auto p-4">{children}</main>
    </>
  );
};
