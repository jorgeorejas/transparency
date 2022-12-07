import * as Solid from '@heroicons/react/24/solid';
import * as Outline from '@heroicons/react/24/outline';

export type IconProps = {
    name: string;
    isOutline?: boolean;
};

// a funciton that returns the correct icon in a constructor
export const Icon = ({ name, isOutline = false, ...props }: IconProps) => {
    const Icon = isOutline
        ? Outline[name as keyof typeof Outline]
        : Solid[name as keyof typeof Solid];
    return <Icon {...props} />;
};

export default Icon;
