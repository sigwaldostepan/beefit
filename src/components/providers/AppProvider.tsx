"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

const AppProvider = (props: PropsWithChildren) => {
  return (
    <>
      <SessionProvider>{props.children}</SessionProvider>
    </>
  );
};

export default AppProvider;
