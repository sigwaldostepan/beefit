"use client";

import { signIn } from "next-auth/react";
import { Button } from "../ui/button";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";

interface OAuthSignInProps {
  message: string,
}

const OAuthSignIn = ({ message }: OAuthSignInProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("google");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleGithubSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn("github");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <Button
        onClick={handleGoogleSignIn}
        variant="secondary"
        disabled={isLoading}
        className="min-w-full flex items-center justify-center gap-2 text-muted-foreground"
      >
        <FcGoogle size={18} /> {message} Google
      </Button>
      <Button
        onClick={handleGithubSignIn}
        variant="secondary"
        disabled={isLoading}
        className="min-w-full flex items-center justify-center gap-2 text-muted-foreground"
      >
        <FaGithub size={18} /> {message} Github
      </Button>
    </div>
  );
};

export default OAuthSignIn;
