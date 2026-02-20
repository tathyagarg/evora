export interface PostPreviewData {
  kind: string;

  slug: string;
  title: string;
  excerpt: string;

  img: string | null;

  created_at: string,
  updated_at: string | null;

  author: string;

  tags: {
    name: string;
    color: string;
  }[];
};

export interface PostData extends PostPreviewData {
  content: string;
}

export interface PostFilter {
  kind?: PostKind;
  tag?: { name: string; color: string | null };
}

export enum PostKind {
  BlogPost = "blog",
  OpinionatedPiece = "opinionated",
}

export interface EventPreviewData {
  slug: string;
  title: string;
  description: string;

  start_date: string;
  end_date: string | null;

  location: string | null;

  img_url: string | null;

  has_recap: boolean;
}
