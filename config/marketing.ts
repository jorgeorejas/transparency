export const navigation: navigationProps = {
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Owners",
      url: "/owner",
    },
  ],
}
export type navigationProps = {
  items: navigationItem[]
}

export type navigationItem = {
  name: string
  url: string
}
