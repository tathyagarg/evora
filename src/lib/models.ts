export interface PostPreviewData {
  kind: string;

  slug: string;
  title: string;
  excerpt: string;

  img: string | null;

  created_at: Date,
  updated_at: Date | null;

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
}

export enum PostKind {
  BlogPost = "blog",
  OpinionatedPiece = "opinionated",
}
