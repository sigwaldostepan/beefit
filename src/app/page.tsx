"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data } = useSession();

  return <>{data?.user && <p>Hello, {data.user.name}</p>}</>;
};

export default Home;
