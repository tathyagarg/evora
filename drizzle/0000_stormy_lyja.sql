CREATE TABLE `post_tag` (
	`post_slug` text,
	`tag_name` text,
	FOREIGN KEY (`post_slug`) REFERENCES `post`(`slug`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`tag_name`) REFERENCES `tag`(`name`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `tag` (
	`name` text PRIMARY KEY NOT NULL,
	`color` text
);
--> statement-breakpoint
CREATE TABLE `post` (
	`slug` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text NOT NULL,
	`kind` text NOT NULL,
	`img_url` text,
	`created_at` integer NOT NULL,
	`updated_at` integer,
	`author` text NOT NULL
);
