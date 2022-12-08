'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';

import { Icon, ToastMessage } from '@design-system/atoms';
import cn from 'classnames';

interface PostCreateButtonProps {
    className?: string;
    userId: string;
}

export function PostCreateButton({
    className,
    userId,
    ...props
}: PostCreateButtonProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onClick() {
        setIsLoading(true);

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'New post',
            }),
        });

        setIsLoading(false);
        if (!response?.ok) {
            if (response.status === 402) {
                return ToastMessage({
                    title: 'Limit of 3 posts reached.',
                    message: 'Please upgrade to the PRO plan.',
                    type: 'error',
                });
            }

            return ToastMessage({
                title: 'Something went wrong.',
                message: 'Your post was not created. Please try again.',
                type: 'error',
            });
        }

        const data = await response.json();

        // This forces a cache invalidation.
        router.refresh();

        router.push(`/owner/editor/${data.id}`);
    }

    return (
        <button
            onClick={onClick}
            className={cn(
                'relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md h-9 bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
                className
            )}
            {...props}
        >
            <Icon name='PlusIcon' className='w-4 h-4 mr-2' />
            New post
        </button>
    );
}
