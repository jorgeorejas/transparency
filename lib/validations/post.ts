import * as z from "zod"

export const postPatchSchema = z.object({
  title: z.string().min(3).max(128).optional(),

  // TODO: Type this properly from editorjs block types?
  content: z.any().optional(),
  slug: z.string().min(3).max(128).optional(),
  published: z.boolean().optional(),
  description: z.string().min(3).max(256).optional(),
})
