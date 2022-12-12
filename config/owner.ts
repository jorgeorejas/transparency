import * as Outline from "@heroicons/react/24/outline"
export type IconsNames = keyof typeof Outline

export const navigation: navigationProps = {
  items: [
    {
      type: "link",
      name: "Home",
      url: "/owner",
      disabled: false,
      icon: "HomeIcon",
    },
    {
      type: "divider",
      divider: "blank",
    },
    {
      type: "link",
      name: "Posts",
      url: "/owner/posts",
      disabled: false,
      icon: "DocumentIcon",
    },
    {
      type: "link",
      name: "Analytics",
      url: "/owner/analytics",
      disabled: true,
      icon: "ChartBarIcon",
    },
    {
      type: "link",
      name: "Mailing",
      url: "/owner/mailing",
      disabled: true,
      icon: "EnvelopeIcon",
    },
    {
      type: "divider",
      divider: "blank",
    },
    {
      type: "link",
      name: "Users",
      url: "/owner/users",
      disabled: true,
      icon: "UserGroupIcon",
    },
    {
      type: "link",
      name: "Billing",
      url: "/owner/billing",
      disabled: false,
      icon: "CreditCardIcon",
    },
    {
      type: "link",
      name: "Features",
      url: "/owner/features",
      disabled: true,
      icon: "LightBulbIcon",
    },
    {
      type: "divider",
      divider: "hr",
    },
    {
      type: "link",
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

export type navigationItem = navigationLink | divider

export type navigationLink = {
  type: "link"
  name: string
  url: string
  disabled: boolean
  icon: IconsNames
}

export type divider = {
  type: "divider"
  divider: "hr" | "blank"
}
// exports the urls of the navigation items that are links
export const navUrls = [
  "/owner",
  "/owner/posts",
  "/owner/billing",
  "/owner/settings",
  "/owner/analytics",
  "/owner/mailing",
  "/owner/users",
]
