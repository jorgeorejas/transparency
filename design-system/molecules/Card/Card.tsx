import { Icon } from '@design-system/atoms/Icon';
import { Text } from '@design-system/atoms/Text';
import { Button } from '@design-system/molecules/Button';
import cn from 'classnames';
import Image from 'next/image';
export default function Card({
    Title,
    Description,
    imgSrc,
    ButtonText,
    ButtonLink,
    className,
}: {
    Title: string;
    Description: string;
    imgSrc: string;
    ButtonText: string;
    ButtonLink: string;
    className?: string;
}) {
    const style = cn('rounded-lg shadow max-w-1/2', className);
    return (
        <div className={style}>
            <div className='absolute max-w-full overflow-hidden rounded-t-lg aspect-video'>
                <Image
                    src={imgSrc}
                    alt={Title}
                    loading='lazy'
                    fill
                    className='object-contain'
                />
            </div>
            <div className='p-6'>
                <Text.Header>{Title}</Text.Header>
                <Text.Normal>{Description}</Text.Normal>
                <a href={ButtonLink}>{ButtonText}</a>
            </div>
        </div>
    );
}
