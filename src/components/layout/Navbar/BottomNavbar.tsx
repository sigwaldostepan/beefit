"use client";

import { PropsWithChildren, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { User2Icon } from "lucide-react";
import {
  FiBell,
  FiHome,
  FiImage,
  FiPlusSquare,
  FiSearch,
} from "react-icons/fi";
import { HiOutlineChatAlt2 } from "react-icons/hi";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface BottomNavbarItemsProps {
  destination?: string;
}

const CreateNewButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className="text-muted-foreground hover:text-foreground"
        asChild
      >
        <FiPlusSquare size={24} />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="mx-auto w-full flex items-center justify-center gap-6 mt-2">
          <div className="flex flex-col items-center gap-2">
            <Button size="icon" className="p-2" variant="secondary">
              <FiImage size={32} />
            </Button>
            New post
          </div>
          <div className="flex flex-col items-center gap-2">
            <Button size="icon" className="p-2" variant="secondary">
              <HiOutlineChatAlt2 size={32} />
            </Button>
            New discussion
          </div>
        </DrawerHeader>
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

const BottomNavbar = () => {
  const pathname = usePathname();

  const MobileNavItem = ({
    destination,
    children,
  }: PropsWithChildren<BottomNavbarItemsProps>) => {
    return (
      <Link
        href={destination || ""}
        className={`${destination === pathname ? "text-foreground" : null}`}
      >
        {children}
      </Link>
    );
  };

  return (
    <>
      {pathname !== "/sign-in" && pathname !== "/sign-up" ? (
        <section className="fixed bottom-0 w-full flex items-center justify-around px-3 py-1 text-muted-foreground border-t md:hidden">
          <MobileNavItem destination="/">
            <FiHome size={24} />
          </MobileNavItem>
          <MobileNavItem destination="/explore">
            <FiSearch size={24} />
          </MobileNavItem>
          <MobileNavItem>
            <Button variant="secondary" size="icon">
              <CreateNewButton />
            </Button>
          </MobileNavItem>
          <MobileNavItem destination="/notificaion">
            <FiBell size={24} />
          </MobileNavItem>
          <MobileNavItem destination="/profile">
            <User2Icon size={24} />
          </MobileNavItem>
        </section>
      ) : null}
    </>
  );
};

export default BottomNavbar;
