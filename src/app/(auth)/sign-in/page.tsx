import CredentialsForm from "@/components/auth/CredentialsForm";
import OAuthSignIn from "@/components/auth/OAuthSignIn";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const SignIn = () => {
  return (
    <section className="w-full md:w-[480px]">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Enter your email and password</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <CredentialsForm formType="sign in" />
          <CardDescription>
            Don't have an account?{" "}
            <Link
              className="text-primary hover:text-primary/80"
              href="/sign-up"
            >
              Sign up
            </Link>
          </CardDescription>
        </div>
        <div className="flex items-center justify-center gap-2 my-4">
          <Separator className="flex-1" />
          <span className="text-muted-foreground">or</span>
          <Separator className="flex-1" />
        </div>
        <OAuthSignIn message="Sign in with" />
      </CardContent>
    </section>
  );
};

export default SignIn;
