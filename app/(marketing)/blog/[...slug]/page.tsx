import { notFound } from "next/navigation"
import { allAuthors, allPosts } from "contentlayer/generated"

import { Mdx } from "@components/documentation/MDX"
import "@styles/mdx.css"
import { formatDate } from "@lib/utils"
import Link from "next/link"

import Image from "next/image"
import { Icon } from "@design-system/atoms"

interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostPageProps) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    notFound()
  }

  const authors = post.authors.map((author) =>
    allAuthors.find(({ slug }) => slug === `/authors/${author}`)
  )

  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <Link
        href="/blog"
        className="absolute top-14 -left-[200px] hidden items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900 xl:inline-flex"
      >
        <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
        See all posts
      </Link>
      <div>
        {post.date && (
          <time dateTime={post.date} className="block text-sm text-slate-600">
            Published on {formatDate(post.date)}
          </time>
        )}
        <h1 className="inline-block mt-2 text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
          {post.title}
        </h1>
        {authors?.length ? (
          <div className="flex mt-4 space-x-4">
            {authors.map((author) => (
              <Link
                key={author._id}
                href={`https://twitter.com/${author.twitter}`}
                className="flex items-center space-x-2 text-sm"
              >
                <Image
                  src={author.avatar}
                  alt={author.title}
                  width={42}
                  height={42}
                  className="rounded-full"
                />
                <div className="flex-1 leading-tight text-left">
                  <p className="font-medium text-slate-900">{author.title}</p>
                  <p className="text-[12px] text-slate-600">
                    @{author.twitter}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      {post.image && (
        <Image
          src={post.image}
          alt={post.title}
          width={720}
          height={405}
          className="my-8 transition-colors border rounded-md border-slate-200 bg-slate-200 group-hover:border-slate-900"
          priority
        />
      )}
      <Mdx code={post.body.code} />
      <hr className="my-4 border-slate-200" />
      <div className="flex justify-center py-6 lg:py-10">
        <Link
          href="/blog"
          className="inline-flex items-center justify-center text-sm font-medium text-slate-600 hover:text-slate-900"
        >
          <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
          See all posts
        </Link>
      </div>
    </article>
  )
}
