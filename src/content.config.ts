import { defineCollection, z } from "astro:content";

const contentCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    demo: z.string().optional(), // opsional jika tidak ada demo
    source: z.string().optional(), // opsional jika tidak ada source
    type: z.enum(["game", "blog", "website", "tool", "other"]),
    slug: z.string(),
    image: z.string().optional(), // opsional jika tidak ada image
    stack: z.array(
      z.object({
        name: z.string(),
        link: z.string().url(),
      })
    ).optional(), // opsional jika tidak ada stack
  }),
});

export const collections = {
  content: contentCollection,
};
