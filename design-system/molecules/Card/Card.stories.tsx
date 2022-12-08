import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Card from './Card';

export default {
    title: 'Design System/Molecules/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
} as ComponentMeta<typeof Card>;

const CardTemplate: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Default = CardTemplate.bind({});

Default.args = {
    children: 'This is a Card',
};
