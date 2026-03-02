import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    featured: z.boolean().optional(),
  }),
});

export const collections = {
  posts,
};
