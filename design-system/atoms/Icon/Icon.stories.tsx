import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from './Icon';

export default {
    title: 'Design System/Atoms/Icon',
    component: Icon,
    parameters: {
        // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
        name: 'AcademicCapIcon',
        layout: 'centered',
    },
    decorators: [
        (Story) => (
            <div className='p-2 rounded-lg shadow max-w-1/2'>
                <Story />
            </div>
        ),
    ],
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => (
    <div className='w-64 h-64'>
        <Icon {...args} />
    </div>
);

export const DefaultIcon = Template.bind({});

DefaultIcon.args = {
    name: 'AcademicCapIcon',
};
