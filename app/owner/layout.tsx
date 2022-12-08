import { notFound } from 'next/navigation';

import { getCurrentUser } from '@lib/session';

interface DashboardLayoutProps {
    children?: React.ReactNode;
}

export default async function DashboardLayout({
    children,
}: DashboardLayoutProps) {
    const user = await getCurrentUser();

    if (user?.userType !== 'OWNER' || !user) {
        return notFound();
    }

    return (
        <div className='flex flex-col mx-auto space-y-6'>
            <header className='container sticky top-0 z-40 bg-white'>
                <div className='flex items-center justify-between h-16 py-4 border-b border-b-slate-200'></div>
            </header>
            <div className='container grid gap-12 md:grid-cols-[200px_1fr]'>
                <aside className='hidden w-[200px] flex-col md:flex'></aside>
                <main className='flex flex-col flex-1 w-full overflow-hidden'>
                    {children}
                </main>
            </div>
        </div>
    );
}
