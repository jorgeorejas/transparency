import * as Outline from "@heroicons/react/24/outline"

export const pageInfo: PageInfoProps = {
  title: "Transparency",
  description:
    "Transparency is a web app framework who saves that 80% of time you spend not coding features.",
  icon: "CubeTransparentIcon",
  defaultImage: "https://picsum.photos/seed/hr/1920/1080",
}

export type PageInfoProps = {
  title: string
  description: string
  icon: IconsNames
  defaultImage: string
}
export type IconsNames = keyof typeof Outline

export const pageConfig: PageConfigProps = {
  iconPreference: "outline",
}

export type PageConfigProps = {
  iconPreference: "outline" | "solid"
}
