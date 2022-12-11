import { Banner, Section } from "@components/marketing"
import { Image, Text } from "@design-system/atoms"
import { ImageProps } from "@design-system/atoms/Image/Image"
import { Card } from "@design-system/molecules"
import prisma from "@lib/prismadb"
import { pageInfo } from "config/page"
import Link from "next/link"

export default async function BlogPage() {
  const bannerImg: ImageProps = {
    alt: "banner image",
    src: "https://picsum.photos/seed/hr/1920/1080",
    imgAspectRatio: "crt",
  }

  const posts = await prisma.posts.findMany({
    where: { published: true },
    select: {
      title: true,
      authorId: true,
      published: true,
      id: true,
      image: true,
      slug: true,
      updated_at: true,
      description: true,
    },
  })
  return (
    <>
      <Banner.BannerBlog
        img={bannerImg}
        title="Blog"
        description={pageInfo.description}
        hasCTA
      />
      <Section.Info
        header="Latest posts"
        type="grid-cols-3"
        className="min-h-60"
        id="latest"
      >
        {posts.map((post, i) => (
          <PostCard post={post} key={i} />
        ))}
      </Section.Info>
    </>
  )
}

function PostCard({ post }) {
  return (
    <Link href={`/blog/${post.slug}`}>
      <Card>
        {post.image && (
          <Image alt={post.title} src={post.image} imgAspectRatio="mac" />
        )}
        <div className="flex flex-col justify-center h-24">
          <Text.Header htmlTag="h4">{post.title}</Text.Header>
          <Text.Normal className="line-clamp-2">{post.description}</Text.Normal>
        </div>
      </Card>
    </Link>
  )
}
