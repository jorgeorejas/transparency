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
    // checks if user is OWNER and redirects to / if not
    if (data?.user?.userType !== 'OWNER' || !data) {
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
