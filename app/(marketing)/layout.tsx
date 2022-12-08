'use client';

import { Header } from '@components/marketing/Header';
import { useSession } from 'next-auth/react';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // on page load
    const session = useSession();
    return (
        <>
            <Header sticky={true} />
            <div className='max-w-[90vw] mx-auto'>{children}</div>
            <pre>{session && JSON.stringify(session, null, 2)}</pre>
        </>
    );
}
