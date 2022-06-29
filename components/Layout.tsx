import React, { FC, ReactNode } from "react";
import Header from "./Header";

interface Iprops {
  children: ReactNode;
}

const Layout: FC<Iprops> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;
