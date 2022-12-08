import { getCurrentUser } from '@lib/session';
import { redirect } from 'next/navigation';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const user = getCurrentUser();
    // Only allow authenticated users to access this page
    if (!user) {
        redirect('/');
    }
    return (
        <html>
            <head />

            <body>{children}</body>
        </html>
    );
}
