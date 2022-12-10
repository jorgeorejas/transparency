export const MktNav: MktNavProps = {
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Owners",
      url: "/owner",
    },
    {
      name: "Dashboard",
      url: "/dashboard",
    },
  ],
}
export type MktNavProps = {
  items: MktNavItem[]
}

export type MktNavItem = {
  name: string
  url: string
}
