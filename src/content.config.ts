import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["Evenement", "Lezing", "Overig"]),
    created_at: z.date(),
    cover_image: z.string(),
    galary: z.optional(z.array(z.string())),
  }),
});

export const collections = { posts };
