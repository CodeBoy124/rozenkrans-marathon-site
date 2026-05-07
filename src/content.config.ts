import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const ICON_RGX = /^([A-Za-z0-9$_-]+):([A-Za-z0-9$_-]+)$/;
const IMG_PATH_RGX =
  /^\/?(([A-Za-z0-9$_\-\.]+)\/)*([A-Za-z0-9$_\-\.]+(\.png|\.jpg|\.webp|\.svg))$/;

const zod_icon = z.custom<`${string}:${string}`>((val) => {
  return typeof val === "string" ? ICON_RGX.test(val) : false;
});

const zod_image_path = z.custom<`${string}`>((val) => {
  return typeof val === "string" ? IMG_PATH_RGX.test(val) : false;
});

const zod_image = z.object({ image: zod_image_path, alt: z.string() });
const zod_seo = z.object({
  description: z.string(),
  keywords: z.optional(z.string()),
});

export type SeoObject = z.infer<typeof zod_seo>;

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["Evenement", "Lezing", "Overig"]),
    created_at: z.date(),
    image: zod_image_path,
    galary: z.optional(z.array(zod_image)),
    seo: zod_seo,
  }),
});

export const ConfigSchema = z.object({
  maillist_url: z.url(),
  socials: z.array(
    z.object({
      title: z.string(),
      url: z.url(),
      icon: zod_icon,
      foreground: z.optional(z.string()),
      background: z.string(),
    }),
  ),
});

export const HomePageSchema = z.object({
  image: zod_image_path,
  seo: zod_seo,
});

export const FaqPageSchema = z.object({
  items: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    }),
  ),
  seo: zod_seo,
});

export const UpcommingEventPageSchema = z.object({
  image: z.optional(zod_image_path),
  signup_url: z.optional(z.url()),
  seo: zod_seo,
});

export const PostListPageSchema = z.object({
  seo: zod_seo,
});

export const collections = { posts };
