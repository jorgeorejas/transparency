import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import Header from "./Header"
import { User } from "@prisma/client"

const user: User = {
  name: "John Doe",
  email: "",
  image: "",
  userType: "OWNER",
  id: "",
  password: "",
  emailVerified: undefined,
}

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Components/Marketing/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    sticky: {
      control: {
        type: "boolean",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Header>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />

export const Primary = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  sticky: false,
  user: user,
}
