import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header from './Header';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Components/Marketing/Header',
    component: Header,
    parameters: {
        layout: 'fullscreen',
    },
    argTypes: {
        sticky: {
            control: {
                type: 'boolean',
            },
        },
        className: {
            control: {
                type: 'text',
            },
        },
    },
} as ComponentMeta<typeof Header>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
    sticky: false,
};
