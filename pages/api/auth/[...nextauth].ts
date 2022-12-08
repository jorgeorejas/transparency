import { logger } from '@lib/logger';
import prisma from '@lib/prismadb';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
export const authOptions = {
    // Configure one or more authentication providers
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        }),
    ],

    adapter: PrismaAdapter(prisma),
    logger: {
        error: (code: any, metadata: any) => {
            logger.error(code, metadata);
        },
        warn: (code: any) => {
            logger.warn(code);
        },
        debug: (code: any, metadata: any) => {
            logger.debug(code, metadata);
        },
    },
    session: {
        strategy: 'database',
        maxAge: 30 * 24 * 60 * 60, // 30 days
        updateAge: 24 * 60 * 60, // 24 hours
    },
    callbacks: {
        async session({ session, token, user }: any) {
            session.user = user;
            return session;
        },
    },
};

export default NextAuth(authOptions);
