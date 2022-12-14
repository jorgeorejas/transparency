import { BannerCTAProps } from "./../components/marketing/Banner/BannerCTA/BannerCTA"
import { HeaderProps } from "@components/marketing/Header/Header"
export const navigation: navigationProps = {
  items: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Dashboard",
      url: "/owner",
    },
    {
      name: "Pricing",
      url: "/pricing",
    },
  ],
}

export const landingHero: BannerCTAProps = {
  title: "Transparency",
  description: [
    "Transparency helps you build your next SaaS product faster than ever before.",
    "Whether you need analytics, mailing, user management, billing, a built-in blog or even more, our boilerplate has you covered.",
    "Simply select the features you want, and our boilerplate will do the rest, allowing you to focus on building the features that matter most to your business.",
  ],
  img: {
    alt: "banner image",
    src: "https://picsum.photos/seed/hr/1920/1080",
    imgAspectRatio: "mac",
  },
  cta: "Show me more",
  ctaDestination: "/",
}

export type navigationProps = {
  items: navigationItem[]
}

export type navigationItem = {
  name: string
  url: string
}
