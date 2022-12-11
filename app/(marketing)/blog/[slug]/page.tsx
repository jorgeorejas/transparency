import { Banner, DynamicPost, Section } from "@components/marketing"
import { ImageProps } from "@design-system/atoms/Image/Image"
import prisma from "@lib/prismadb"

export default async function BlogPage({ params }) {
  const post = await prisma.posts.findFirst({
    where: { slug: params.slug },
  })
  const bannerImg: ImageProps = {
    alt: post.title,
    src: "https://picsum.photos/seed/hr/1920/1080",
    imgAspectRatio: "crt",
  }
  return (
    <>
      <Banner.BannerBlog
        img={bannerImg}
        title={post.title}
        description={post.description}
      />
      <Section>
        <DynamicPost blocks={post.content} />
      </Section>
    </>
  )
}
