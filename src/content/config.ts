import {defineCollection, z} from "astro:content";
const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    posted: z.date(),
    author: z.string(),
  }),
});

export const collections = { posts };
