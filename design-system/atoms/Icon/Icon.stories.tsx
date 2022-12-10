import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Icon } from "./Icon"
import { Card } from "@design-system/molecules/Card"

export default {
  title: "Design System/Atoms/Icon",
  component: Icon,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    name: "AcademicCapIcon",
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
} as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />

export const DefaultIcon = Template.bind({})

DefaultIcon.args = {
  name: "CubeTransparentIcon",
  className: "w-64 h-64",
}
