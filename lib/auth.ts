import { logger } from "@lib/logger"
import prisma from "@lib/prismadb"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import GithubProvider from "next-auth/providers/github"
import { NextAuthOptionsProps } from "../types/next-auth"
import { stripe } from "@lib/stripe"

export const authOptions: NextAuthOptionsProps = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  secret: process.env.SECRET,

  adapter: PrismaAdapter(prisma),
  logger: {
    error: (code: any, metadata: any) => {
      logger.error(code, metadata)
    },
    warn: (code: any) => {
      logger.warn(code)
    },
    debug: (code: any, metadata: any) => {
      logger.debug(code, metadata)
    },
  },

  events: {
    createUser: async ({ user }) => {
      await stripe.customers
        .create({
          email: user.email,
          name: user.name,
          metadata: {
            userId: user.id,
          },
        })
        .then(async (customer) => {
          await prisma.user.update({
            where: {
              id: user.id,
            },
            data: {
              stripeCustomerId: customer.id,
            },
          })
        })
    },
  },

  session: {
    strategy: "database",
  },
  callbacks: {
    async session({ session, token, user }: any) {
      session.user = user
      return session
    },
  },
  pages: {
    signIn: "/login",
    signUp: "/register",
    newUser: "/user/new",
  },
}
