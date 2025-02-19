import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const content = defineCollection({
    loader : glob({pattern : "**/*.{md,mdx}", base : "src/content"}),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        demo: z.string(),
        type: z.enum(["game", "blog", "website", "tool", "other"]),
        stack: z.array(z.object({
          name: z.string(),
          link: z.string(),
      }))
        // pubDate: z.coerce.date(),
      })
})

export const collections = { content };
