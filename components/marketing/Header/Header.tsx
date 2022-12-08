'use client';
import { Logo } from '@design-system/atoms/Logo';
import { Button } from '@design-system/molecules/Button';
import cn from 'classnames';
import Link from 'next/link';
import { useSession, signIn, signOut } from 'next-auth/react';
import { Text } from '@design-system/atoms';

export type HeaderProps = {
    className?: string;
    sticky?: boolean;
};
const Header = ({ className, sticky = false }: HeaderProps) => {
    const { data } = useSession();
    const style = cn(
        'bg-white border-b max-w-[90vw] mx-auto',
        'top-0 z-50 py-2 px-2',
        'flex justify-between ',
        {
            sticky: sticky,
        },
        className
    );
    return (
        <div className={style}>
            <Link href={'/'}>
                <Logo.Isotype size='sm' flow='row' />
            </Link>
            <div className='flex items-center justify-center gap-4'>
                <Link href={'/'}>Menu 1</Link>
                <Link href={'/'}>Menu 2</Link>
                <Link href={'/'}>Menu 3</Link>
            </div>
            <div className='flex items-center justify-center gap-4 shrink-0'>
                {data?.user ? (
                    <>
                        <Text>{data.user.name}</Text>
                        <Button onClick={() => signOut()}>Sign out</Button>
                    </>
                ) : (
                    <Button onClick={() => signIn()}>Sign in</Button>
                )}
            </div>
        </div>
    );
};

export default Header;
