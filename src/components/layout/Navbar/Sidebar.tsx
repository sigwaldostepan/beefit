import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import UserAvatar from "./UserAvatar";
import { FiLogOut, FiUser } from "react-icons/fi";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineForum } from "react-icons/md";
import { PropsWithChildren } from "react";
import { signOut } from "next-auth/react";

interface SidebarProps {
  avatarFallback: string;
  avatarImage: string;
  name: string;
  email: string;
}

interface SidebarItemsProps {
  className?: string;
  onClick?: () => void;
}

const SidebarSection = ({ children }: PropsWithChildren) => {
  return <div className="py-1 border-b">{children}</div>;
};

const SidebarItems = ({
  className,
  onClick,
  children,
}: PropsWithChildren<SidebarItemsProps>) => {
  return (
    <Button
      size="sm"
      variant="ghost"
      className={`w-full flex items-center justify-normal gap-5 ${className}`}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

const Sidebar = ({
  avatarFallback,
  avatarImage,
  name,
  email,
}: SidebarProps) => {
  return (
    <Sheet>
      <SheetTrigger>
        <UserAvatar fallback={avatarFallback} image={avatarImage} />
      </SheetTrigger>
      <SheetContent className="font-normal">
        <SheetHeader className="pb-4 border-b">
          <div className="flex items-center text-start gap-3 ml-1">
            <UserAvatar fallback={avatarFallback} image={avatarImage} />
            <div className="flex flex-col items-start">
              <SheetTitle className="font-medium text-md">{name}</SheetTitle>
              <SheetDescription className="text-muted-foreground text-sm">
                {email}
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>
        <SidebarSection>
          <SidebarItems>
            <FiUser size={18} />
            Your profile
          </SidebarItems>
        </SidebarSection>
        <SidebarSection>
          <SidebarItems>
            <IoImagesOutline size={18} />
            Your post
          </SidebarItems>
          <SidebarItems>
            <MdOutlineForum size={18} />
            Your forum
          </SidebarItems>
        </SidebarSection>
        <SidebarSection>
          <SidebarItems
            onClick={() => signOut()}
            className="transition-colors hover:text-red-600"
          >
            <FiLogOut size={18} />
            Sign out
          </SidebarItems>
        </SidebarSection>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
