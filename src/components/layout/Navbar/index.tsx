"use client";

import Link from "next/link";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { useSession } from "next-auth/react";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { data } = useSession();

  const NavProfileSection = () => {
    return (
      <>
        {data?.user ? (
          <Sidebar
            avatarFallback={data.user.name?.charAt(0)!}
            avatarImage={data.user?.image!}
            name={data.user.name!}
            email={data.user.email!}
          />
        ) : (
          <section className="flex items-center gap-3">
            <Link href="/sign-in">
              <Button variant="secondary" size="sm">
                Sign in
              </Button>
            </Link>
            <Separator
              orientation="vertical"
              className="h-8 text-secondary rotate-[15deg]"
            />
            <Link href="/sign-up">
              <Button variant="outline" size="sm">
                Sign up
              </Button>
            </Link>
          </section>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 z-10 w-full bg-background border-b">
      <nav className="w-full relative flex items-center justify-between px-8 py-3 backdrop-blur">
        <p>icon</p>
        <NavProfileSection />
      </nav>
    </header>
  );
};

export default Navbar;
