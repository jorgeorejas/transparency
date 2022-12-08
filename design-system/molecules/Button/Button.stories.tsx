import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
    title: 'Design System/Molecules/Button',
    component: Button,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
} as ComponentMeta<typeof Button>;

const ButtonTemplate: ComponentStory<typeof Button> = (args) => (
    <Button {...args} />
);
export const Default = ButtonTemplate.bind({});
Default.args = {
    children: 'Default Button',
};
