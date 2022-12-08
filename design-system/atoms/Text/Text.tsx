import cn from 'classnames';
import React, { createElement } from 'react';

export type HeaderAllowedTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type AllowedTags =
    | 'div'
    | 'span'
    | 'p'
    | 'pre'
    | 'blockquote'
    | HeaderAllowedTags;

type BaseProps = {
    children: any;
    className?: string;
};

export type TextProps = BaseProps & {
    htmlTag?: AllowedTags;
};

const Text = ({ children, className, htmlTag = 'p' }: TextProps) => {
    return createElement(
        htmlTag,
        {
            className: cn('font-sans', 'max-w-full', className),
        },
        children
    );
};

type TextHeaderProps = BaseProps & {
    htmlTag: HeaderAllowedTags;
};

Text.Header = function Header({
    children,
    className,
    htmlTag = 'h2',
}: TextHeaderProps) {
    return (
        <Text htmlTag={htmlTag} className={className}>
            {children}
        </Text>
    );
};

Text.Normal = function Normal({ children, className }: BaseProps) {
    return (
        <Text htmlTag='p' className={className}>
            {children}
        </Text>
    );
};

export default Text;
