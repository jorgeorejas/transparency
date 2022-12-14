import NextAuth, { NextAuthOptions } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: {
      id: string
      name: string
      email: string
      image: string
      userType: string
      stripeCustomerId: string
    }
  }
}

export type NextAuthOptionsProps = NextAuthOptions & {
  session: {
    strategy: string
  }
  pages: {
    signUp: string
  }
}
