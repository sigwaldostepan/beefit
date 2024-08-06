import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { getServerSession, NextAuthOptions } from "next-auth";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { db } from "./db";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: "/sign-in",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      if (token) {
        return {
          ...token,
        };
      }
      return token;
    },
    async session({ session, user, token }) {
      if (session) {
        return {
          ...session,
          user: {
            ...session.user,
          },
        };
      }
      return session;
    },
    redirect() {
      return "/";
    },
  },
};

export const getSession = async () => await getServerSession(authOptions);
