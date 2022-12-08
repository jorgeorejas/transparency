import { Header } from '@components/marketing/Header';
import { getCurrentUser } from '@lib/session';

export default async function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // on page load
    const user = await getCurrentUser();
    return (
        <>
            <Header user={user} sticky={true} />
            <div className='max-w-[90vw] mx-auto'>{children}</div>
            <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
    );
}
