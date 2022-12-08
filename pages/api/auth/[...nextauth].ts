import { signIn } from 'next-auth/react';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import prisma from '@lib/prismadb';
import { logger } from '@lib/logger';
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
};

export default NextAuth(authOptions);
