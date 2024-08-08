import { getSession } from "@/lib/auth";
import { redirect } from "next/navigation";

const AuthLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getSession();

  if (session) {
    return redirect("/");
  }

  return (
    <>
      <main className="container min-h-screen flex items-center justify-center">
        {children}
      </main>
    </>
  );
};

export default AuthLayout;
