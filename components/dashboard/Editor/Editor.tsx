"use client"

import { Icon, Text, ToastMessage } from "@design-system/atoms"
import { Button } from "@design-system/molecules"
import EditorJS from "@editorjs/editorjs"
import { zodResolver } from "@hookform/resolvers/zod"
import { postPatchSchema } from "@lib/validations/post"
import { posts } from "@prisma/client"
import Link from "next/link"
import { useRouter } from "next/navigation"
import * as React from "react"
import { useForm } from "react-hook-form"
import TextareaAutosize from "react-textarea-autosize"
import * as z from "zod"
import { PostPublishButton } from "../Button/Post"

interface EditorProps {
  post: Pick<
    posts,
    "id" | "title" | "content" | "published" | "description" | "slug"
  >
}

type FormData = z.infer<typeof postPatchSchema>

export function Editor({ post }: EditorProps) {
  const { register, handleSubmit } = useForm<FormData>({
    resolver: zodResolver(postPatchSchema),
  })
  const ref = React.useRef<EditorJS>()
  const router = useRouter()
  const [isSaving, setIsSaving] = React.useState<boolean>(false)
  const [isMounted, setIsMounted] = React.useState<boolean>(false)
  const [hasChanges, setHasChanges] = React.useState<boolean>(false)

  async function initializeEditor() {
    const EditorJS = (await import("@editorjs/editorjs")).default
    const Header = (await import("@editorjs/header")).default
    const Embed = (await import("@editorjs/embed")).default
    const Table = (await import("@editorjs/table")).default
    const List = (await import("@editorjs/list")).default
    const Code = (await import("@editorjs/code")).default
    const LinkTool = (await import("@editorjs/link")).default
    const InlineCode = (await import("@editorjs/inline-code")).default

    const body = postPatchSchema.parse(post)

    if (!ref.current) {
      const editor = new EditorJS({
        holder: "editor",
        onReady() {
          ref.current = editor
        },
        onChange() {
          setHasChanges(true)
        },
        placeholder: "Type here to write your post...",
        inlineToolbar: true,
        data: body.content,
        tools: {
          header: {
            class: Header,
            config: {
              placeholder: "Header",
              levels: [1, 2, 3],
              defaultLevel: 2,
            },
          },
          linkTool: LinkTool,
          list: List,
          code: Code,
          inlineCode: InlineCode,
          table: Table,
          embed: Embed,
        },
      })
    }
  }

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMounted(true)
    }
  }, [])

  React.useEffect(() => {
    if (isMounted) {
      initializeEditor()

      return () => {
        ref.current?.destroy()
        ref.current = null
      }
    }
  }, [isMounted])

  async function onSubmit(data: FormData) {
    setIsSaving(true)

    const blocks = await ref.current.save()

    const response = await fetch(`/api/posts/${post.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: data.title,
        content: blocks,
        description: data.description,
        slug: data.slug,
      }),
    })

    setIsSaving(false)

    if (!response?.ok) {
      return ToastMessage({
        title: "Something went wrong.",
        message: "Your post was not saved. Please try again.",
        type: "error",
      })
    }

    setHasChanges(false)
    router.refresh()

    return ToastMessage({
      message: "Your post has been saved.",
      type: "success",
    })
  }

  if (!isMounted) {
    return null
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid w-full gap-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-10">
            <Link
              href="/owner/posts"
              className="inline-flex items-center py-2 pl-3 pr-5 text-sm font-medium bg-transparent border border-transparent rounded-lg text-slate-900 hover:border-slate-200 hover:bg-slate-100 focus:z-10 focus:outline-none focus:ring-4 focus:ring-slate-200 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-white dark:focus:ring-slate-700"
            >
              <>
                <Icon name="ChevronLeftIcon" className="w-4 h-4 mr-2" />
                Back
              </>
            </Link>
            <p className="text-sm text-slate-600">
              {post.published ? "Published" : "Draft"}
            </p>
          </div>
          <div className="flex gap-4">
            <PostPublishButton
              postId={post.id}
              isPublic={post.published}
              disabled={hasChanges}
              className="h-9"
            />
            <Button type="submit">
              {isSaving && (
                <Icon
                  name="ArrowDownTrayIcon"
                  className="w-4 h-4 mr-2 animate-bounce"
                />
              )}
              <span>Save</span>
            </Button>
          </div>
        </div>
        <div className="prose prose-stone mx-auto w-[800px]">
          <TextareaAutosize
            autoFocus
            name="title"
            id="title"
            defaultValue={post.title}
            placeholder="Post title"
            className="w-full overflow-hidden text-5xl font-bold appearance-none resize-none focus:outline-none"
            {...register("title")}
            onChange={() => setHasChanges(true)}
          />
          <TextareaAutosize
            name="description"
            id="description"
            defaultValue={post.description}
            placeholder="Post description"
            className="w-full overflow-hidden text-lg font-medium appearance-none resize-none focus:outline-none"
            {...register("description")}
            onChange={() => setHasChanges(true)}
          />

          <Text className="flex gap-4">
            Slug:{" "}
            <TextareaAutosize
              name="slug"
              id="slug"
              defaultValue={post.slug}
              placeholder="Post slug"
              className="w-full overflow-hidden text-lg font-medium appearance-none resize-none focus:outline-none"
              {...register("slug")}
              onChange={() => setHasChanges(true)}
            />
          </Text>

          <div id="editor" className="min-h-[500px]" />
          <p className="text-sm text-gray-500">
            Use{" "}
            <kbd className="px-1 text-xs uppercase border rounded-md bg-slate-50">
              Tab
            </kbd>{" "}
            to open the command menu.
          </p>
        </div>
      </div>
    </form>
  )
}
