import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Logo from "./Logo"
import { Card } from "@design-system/molecules/Card"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Design System/Atoms/Logo",
  component: Logo,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <Card>
        <Story />
      </Card>
    ),
  ],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["sm", "md", "lg"],
      },
    },
    flow: {
      control: {
        type: "select",
        options: ["row", "column"],
      },
    },
  },
} as ComponentMeta<typeof Logo.Isotype>

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />

export const Default = Template.bind({})

Default.args = {
  size: "md",
}

const IsotypeTemplate: ComponentStory<typeof Logo.Isotype> = (args) => (
  <Logo.Isotype {...args} />
)

export const Isotype = IsotypeTemplate.bind({})

Isotype.args = {
  size: "md",
  flow: "row",
}
