"use client";

import Link from "next/link";
import { useSession } from "next-auth/react";

import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import Sidebar from "./Sidebar";
import { FiSearch } from "react-icons/fi";
import Wrapper from "@/components/ui/Wrapper";
import BottomNavbar from "./BottomNavbar";

const Navbar = () => {
  const { data } = useSession();

  const NavItems = () => {
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
          <Wrapper className="gap-3">
            <Link href="/sign-up" className="hover:underline">
              Sign up
            </Link>
            <Separator orientation="vertical" className="h-6 rotate-[15deg]" />
            <Link href="/sign-in" className="hover:underline">
              Sign in
            </Link>
          </Wrapper>
        )}
      </>
    );
  };

  return (
    <header className="fixed top-0 z-10 w-full bg-background border-b">
      <nav className="w-full relative flex items-center justify-between px-8 py-3 backdrop-blur">
        <p>icon</p>

        <NavItems />
      </nav>

      {/* Bottom navigaion bar for mobile */}
      <BottomNavbar />
    </header>
  );
};

export default Navbar;
