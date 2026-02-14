export enum PostKind {
  BlogPost = 'blog',
  OpinionatedPiece = 'opinion',
}

export interface PostPreviewData {
  kind: PostKind;

  slug: string;
  title: string;
  excerpt: string;

  img: string | null;

  created_at: Date,
  updated_at: Date | null;

  author: string;

  tags: string[];
};

export interface PostData extends PostPreviewData {
  content: string;
}
