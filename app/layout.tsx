import { SessionProvider } from 'next-auth/react';
import '../styles/globals.css';

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <head />
            <body>{children}</body>
        </html>
    );
}
