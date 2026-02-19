PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_event` (
	`slug` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`img_url` text,
	`start_date` integer NOT NULL,
	`end_date` integer NOT NULL,
	`location` text NOT NULL,
	`recap` text
);
--> statement-breakpoint
INSERT INTO `__new_event`("slug", "title", "description", "img_url", "start_date", "end_date", "location", "recap") SELECT "slug", "title", "description", "img_url", "start_date", "end_date", "location", "recap" FROM `event`;--> statement-breakpoint
DROP TABLE `event`;--> statement-breakpoint
ALTER TABLE `__new_event` RENAME TO `event`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_post` (
	`slug` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`excerpt` text NOT NULL,
	`content` text NOT NULL,
	`kind` text NOT NULL,
	`img_url` text,
	`created_at` integer DEFAULT (CURRENT_TIMESTAMP) NOT NULL,
	`updated_at` integer,
	`author` text NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_post`("slug", "title", "excerpt", "content", "kind", "img_url", "created_at", "updated_at", "author") SELECT "slug", "title", "excerpt", "content", "kind", "img_url", "created_at", "updated_at", "author" FROM `post`;--> statement-breakpoint
DROP TABLE `post`;--> statement-breakpoint
ALTER TABLE `__new_post` RENAME TO `post`;