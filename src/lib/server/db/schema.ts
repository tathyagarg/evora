import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const post = sqliteTable('post', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  excerpt: text('excerpt').notNull(),
  content: text('content').notNull(),

  kind: text('kind').notNull(),

  img_url: text('img_url'),

  createdAt: text('created_at').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  updatedAt: text('updated_at'),

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

export const event = sqliteTable('event', {
  slug: text('slug').primaryKey(),
  title: text('title').notNull(),
  description: text('description').notNull(),

  img_url: text('img_url'),

  startDate: text('start_date').default(sql`(CURRENT_TIMESTAMP)`).notNull(),
  endDate: text('end_date').default(sql`(CURRENT_TIMESTAMP)`).notNull(),

  location: text('location').notNull(),

  recap: text('recap'),
});

export const event_posts = sqliteTable('event_posts', {
  eventSlug: text('event_slug').references(() => event.slug, { onDelete: 'cascade' }),
  postSlug: text('post_slug').references(() => post.slug, { onDelete: 'cascade' }),
});
