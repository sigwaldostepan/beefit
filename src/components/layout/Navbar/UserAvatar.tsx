import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface UserAvatarProps {
  fallback: string;
  image?: string;
}

const UserAvatar = ({ fallback, image }: UserAvatarProps) => {
  return (
    <Avatar>
      <AvatarFallback>{fallback}</AvatarFallback>
      <AvatarImage src={image || ""} />
    </Avatar>
  );
};

export default UserAvatar;
