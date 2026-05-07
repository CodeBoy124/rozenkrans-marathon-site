import { getCollection } from "astro:content";

export async function getPosts() {
  const posts = await getCollection("posts");
  return posts.map((post) => {
    const [lang, ...slug] = post.id.split("/");
    return {
      params: { lang, slug: slug.join("/") ?? undefined },
      props: { post },
    };
  });
}
