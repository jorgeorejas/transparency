import * as Outline from "@heroicons/react/24/outline"

export const pageInfo: PageInfoProps = {
  title: "Transparency",
  description:
    "Transparency is a web app framework who saves that 80% of time you spend not coding features.",
  icon: "CubeTransparentIcon",
}

export type PageInfoProps = {
  title: string
  description: string
  icon: IconsNames
}
export type IconsNames = keyof typeof Outline
