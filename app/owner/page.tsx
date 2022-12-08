import prisma from '@lib/prismadb';
import { getCurrentUser } from '@lib/session';
import { authOptions } from '@pages/api/auth/[...nextauth]';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';
import { cache } from 'react';
import * as DashboardUI from '@components/dashboard';
import { Skeleton } from '@design-system/atoms';
import { DashboardHeader } from '@components/dashboard/Layout';

const getPostsForUser = cache(async (userId: User['id']) => {
    return await prisma.post.findMany({
        where: {
            authorId: userId,
        },
        select: {
            id: true,
            title: true,
            published: true,
            content: true,
            createdAt: true,
        },
        orderBy: {
            updatedAt: 'desc',
        },
    });
});
export default async function DashboardPage() {
    const user = await getCurrentUser();
    if (!user) {
        redirect(authOptions.pages.signIn);
    }
    const posts = await getPostsForUser(user.id);
    return (
        <DashboardUI.Layout.DashboardShell>
            <DashboardUI.Layout.DashboardHeader
                heading='Posts'
                text='Create and manage posts.'
            >
                <DashboardUI.Button.PostCreateButton userId={user.id} />
            </DashboardUI.Layout.DashboardHeader>
            <div>
                {posts?.length ? (
                    <div className='border divide-y rounded-md divide-neutral-200 border-slate-200'>
                        {posts.map((post) => (
                            <DashboardUI.Card.PostCard
                                key={post.id}
                                post={post}
                            />
                        ))}
                    </div>
                ) : (
                    <Skeleton className='w-full h-64' />
                )}
            </div>
        </DashboardUI.Layout.DashboardShell>
    );
}
