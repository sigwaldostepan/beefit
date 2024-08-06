"use client";

import { Button } from "@/components/ui/button";
import { signOut, useSession } from "next-auth/react";

const Home = () => {
  const { data } = useSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {data?.user && <Button onClick={() => signOut()}>Sign out</Button>}
    </main>
  );
};

export default Home;
