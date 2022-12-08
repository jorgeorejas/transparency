'use client';
import { SessionProvider, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const { data } = useSession();
    // Only allow authenticated users to access this page
    if (!data) {
        router.push('/');
    }
    return (
        <html>
            <head />
            <SessionProvider>
                <body>{children}</body>
            </SessionProvider>
        </html>
    );
}
