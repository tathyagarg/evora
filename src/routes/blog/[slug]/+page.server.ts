import type { PageServerLoad } from "./$types";
import { db } from "$lib/server/db";
import { desc, eq, sql } from "drizzle-orm";
import { post, postTag, tag } from "$lib/server/db/schema";
import type { PostData } from "$lib/models";

export const load: PageServerLoad = async ({ params }) => {
  const { slug } = params;

  const postData = await db.select({
    kind: post.kind,
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,

    img: post.img_url,

    created_at: post.createdAt,
    updated_at: post.updatedAt,

    author: post.author,

    tags: sql`coalesce(json_group_array(json_object('name', ${tag.name}, 'color', ${tag.color})), '[]')`,
  })
    .from(post)
    .leftJoin(postTag, eq(postTag.postSlug, post.slug))
    .leftJoin(tag, eq(tag.name, postTag.tagName))
    .where(eq(post.slug, slug))
    .groupBy(post.slug)
    .orderBy(desc(post.createdAt))
    .get();

  if (postData) {
    postData.tags = JSON.parse(postData.tags as string);
  }

  console.log("Post data:", postData?.created_at);

  if (!postData) {
    return {
      status: 404,
      error: new Error("Post not found"),
    };
  }

  return {
    post: postData as PostData,
  };
}
