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

const posts = defineCollection({
  loader: glob({ base: "./src/content/posts", pattern: "**/*.md" }),
  schema: z.object({
    title: z.string(),
    kind: z.enum(["Evenement", "Lezing", "Overig"]),
    created_at: z.date(),
    cover_image: zod_image_path,
    galary: z.optional(z.array(zod_image_path)),
  }),
});

export const ConfigSchema = z.object({
  site_title: z.string(),
  site_url: z.url(),
  maillist_url: z.url(),
  socials: z.array(
    z.object({
      title: z.optional(z.string()),
      url: z.url(),
      icon: zod_icon,
      foreground: z.optional(z.string()),
      background: z.string(),
    }),
  ),
});

export const HomePageSchema = z.object({
  cover_image: zod_image_path,
});

export const FaqPageSchema = z.object({
  items: z.array(
    z.object({
      question: z.string(),
      answer: z.string(),
    }),
  ),
});

export const UpcommingEventPageSchema = z.object({
  cover_image: z.optional(zod_image_path),
  signup_url: z.optional(z.url()),
});

export const collections = { posts };
