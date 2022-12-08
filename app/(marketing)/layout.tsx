import { Header } from '@components/marketing/Header';

export default function MarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    // on page load

    return (
        <>
            <Header sticky={true} />
            <div className='max-w-[90vw] mx-auto'>{children}</div>
        </>
    );
}
