import { Text } from '@design-system/atoms';
import { Logo } from '@design-system/atoms/Logo';
import { getCurrentUser } from '@lib/session';
import { User } from '@prisma/client';
import cn from 'classnames';
import Link from 'next/link';
export type HeaderProps = {
    className?: string;
    sticky?: boolean;
    user: any;
};

// promise react element

const Header = ({ className, user, sticky = false }: HeaderProps) => {
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
                {user ? (
                    <>
                        <Text>{user.name}</Text>
                        <Link
                            href='/logout'
                            className='relative inline-flex items-center h-8 px-6 py-1 text-sm font-medium text-white border border-transparent rounded-md bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
                        >
                            Login
                        </Link>
                    </>
                ) : (
                    <Link
                        href='/login'
                        className='relative inline-flex items-center h-8 px-6 py-1 text-sm font-medium text-white border border-transparent rounded-md bg-brand-500 hover:bg-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2'
                    >
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};
export default Header;
