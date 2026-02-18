import { timestamp } from 'drizzle-orm/gel-core';
import { sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const post = sqliteTable('post', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),

  kind: text('kind').notNull(),

  img_url: text('img_url'),

  createdAt: timestamp('created_at').notNull(),
  updatedAt: timestamp('updated_at'),

  author: text('author').notNull(),
});

export const tag = sqliteTable('tag', {
  name: text('name').primaryKey(),
  color: text('color'),
});

export const postTag = sqliteTable('post_tag', {
  postSlug: text('post_slug').references(() => post.slug, { onDelete: 'cascade' }),
  tagName: text('tag_name').references(() => tag.name, { onDelete: 'cascade' }),
});
