import { Post } from '@prisma/client';

import { Button } from '@components/dashboard';
import { Skeleton } from '@design-system/atoms';
import { formatDate } from '@lib/utils';

interface PostItemProps {
    post: Pick<Post, 'id' | 'title' | 'published' | 'createdAt'>;
}
export function PostCard({ post }: PostItemProps) {
    return (
        <div className='flex items-center justify-between p-4'>
            <div className='grid gap-1'>
                <a
                    href={`/editor/${post.id}`}
                    className='font-semibold hover:underline'
                >
                    {post.title}
                </a>
                <div>
                    <p className='text-sm text-slate-600'>
                        {formatDate(post.createdAt?.toDateString())}
                    </p>
                </div>
            </div>

            <Button.PostDeleteButton
                post={{ id: post.id, title: post.title }}
            />
        </div>
    );
}

PostCard.Skeleton = function PostItemSkeleton() {
    return (
        <div className='p-4'>
            <div className='space-y-3'>
                <Skeleton className='w-2/5 h-5' />
                <Skeleton className='w-4/5 h-4' />
            </div>
        </div>
    );
};
