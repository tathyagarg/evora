import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { desc, eq, sql } from "drizzle-orm";
import { post, postTag, tag } from "$lib/server/db/schema";
import type { PostData } from "$lib/models";

export const load: PageServerLoad = async () => {
  const latest_posts = (await db.select({
    kind: post.kind,

    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    img: post.img_url,
    created_at: post.createdAt,
    updated_at: post.updatedAt,
    author: post.author,

    tags: sql`coalesce(json_group_array(json_object('name', ${tag.name}, 'color', ${tag.color})), '[]')`,
  })
    .from(post)
    .leftJoin(postTag, eq(post.slug, postTag.postSlug))
    .leftJoin(tag, eq(postTag.tagName, tag.name))
    .groupBy(post.slug)
    .orderBy(desc(post.createdAt))
    .limit(6))
    .map((post) => {
      console.log(post.tags);

      post.tags = JSON.parse(post.tags as string) as { name: string; color: string }[];
      return post as PostData;
    });

  return {
    posts: latest_posts,
  }
}
