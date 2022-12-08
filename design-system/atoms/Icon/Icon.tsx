import * as Solid from '@heroicons/react/24/solid';
import * as Outline from '@heroicons/react/24/outline';

export type IconProps = {
    name: IconsNames;
    isOutline?: boolean;
    className?: string;
};

// a funciton that returns the correct icon in a constructor
export const Icon = ({
    name,
    isOutline = false,
    className,
    ...props
}: IconProps) => {
    const Icon = isOutline
        ? Outline[name as keyof typeof Outline]
        : Solid[name as keyof typeof Solid];
    return <Icon {...props} className={className} />;
};

export default Icon;

export type IconsNames = keyof typeof Solid | keyof typeof Outline;
