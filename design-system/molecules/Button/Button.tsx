import { createElement, ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import cn from 'classnames';

export type BasicProps = {
    children?: string | ReactNode;
    className?: string;
    onClick?: () => void;
};

const Button = ({ children, className, ...props }: BasicProps) => {
    return (
        <button
            className={cn(
                'border-blue-500',
                'hover:bg-blue-500',
                'hover:text-white',
                'text-blue-500',
                className
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export type ButtonLink = BasicProps & {
    routeLink: string;
};

export default Button;
