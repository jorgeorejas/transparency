import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Text from './Text';
import { Card } from '@design-system/molecules/Card';

export default {
    title: 'Design System/Atoms/Text',
    component: Text,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div className='p-2 rounded-lg shadow max-w-1/2'>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Text>;

const TextTemplate: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = TextTemplate.bind({});
Default.args = {
    children: 'Default Text',
    htmlTag: 'p',
};

const BasicTextTemplate: ComponentStory<typeof Text.Normal> = (args) => (
    <Text.Normal {...args} />
);

export const NormalText = BasicTextTemplate.bind({});
NormalText.args = {
    children: 'Default Text',
};

const HeaderTextTemplate: ComponentStory<typeof Text.Header> = (args) => (
    <Text.Header {...args} />
);

export const HeaderText = HeaderTextTemplate.bind({});
HeaderText.args = {
    children: 'Heading Text',
    htmlTag: 'h1',
};
