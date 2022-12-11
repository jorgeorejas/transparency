import * as Outline from "@heroicons/react/24/outline"
export type IconsNames = keyof typeof Outline

export const navigation: navigationProps = {
  items: [
    {
      name: "Dashboard",
      url: "/owner",
      disabled: false,
      icon: "ChartPieIcon",
    },
    {
      name: "Posts",
      url: "/owner/posts",
      disabled: false,
      icon: "DocumentIcon",
    },
    {
      name: "Settings",
      url: "/owner/settings",
      disabled: true,
      icon: "AdjustmentsHorizontalIcon",
    },
  ],
}
export type navigationProps = {
  items: navigationItem[]
}

export type navigationItem = {
  name: string
  url: string
  disabled: boolean
  icon: IconsNames
}
