'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import cn from 'classnames';
import { Icon, ToastMessage } from '@design-system/atoms';
import prisma from '@lib/prismadb';
interface PostDeleteButtonProps {
    className?: string;
    post: {
        id: string;
        title: string;
    };
}

export function PostDeleteButton({ className, post }: PostDeleteButtonProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState<boolean>(false);

    async function onClick() {
        // sends an api request to delete the post
        setIsLoading(true);

        const response = await fetch('/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: 'Untitled Post',
            }),
        });

        if (response.ok) {
            router.push(`/`);
        }
    }

    return (
        <button
            onClick={onClick}
            className={cn(
                'relative inline-flex items-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md h-9 bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2',
                {
                    'cursor-not-allowed opacity-60': isLoading,
                },
                className
            )}
            disabled={isLoading}
        >
            {isLoading ? (
                <Icon
                    name='ArrowPathIcon'
                    className='w-4 h-4 mr-2 animate-spin'
                />
            ) : (
                <Icon name='TrashIcon' className='w-4 h-4 mr-2' />
            )}
            New post
        </button>
    );
}
