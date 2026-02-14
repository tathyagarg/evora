// temp file until i link this to a database

import { PostKind } from "$lib/models";
import type { PostData } from "$lib/models";

export const posts: PostData[] = [
  {
    kind: PostKind.BlogPost,
    title: "My First Post",
    content: "This is the content of my first post. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    slug: "my-first-post",
    excerpt: "This is the content of my first post.",
    img: "https://via.placeholder.com/150",
    created_at: new Date("2024-01-01"),
    updated_at: new Date("2024-01-01"),
    author: "John Doe",
    tags: ["introduction", "welcome"]
  },
  {
    kind: PostKind.BlogPost,
    slug: "legal-aid-for-all",
    title: "Legal Aid for All: Empowering the Marginalized",
    excerpt:
      "Discover how our legal aid initiatives are transforming lives and empowering marginalized communities. From providing free legal services to advocating for justice, we are committed to making a difference. Join us in our mission to create a more equitable society.",
    content: "At Tattu, we believe that everyone deserves access to justice, regardless of their background or circumstances. Our legal aid programs are designed to break down barriers and provide support to those who need it most. Through our dedicated team of legal professionals and volunteers, we offer free legal services, education, and advocacy to empower individuals and communities. Whether it's helping someone navigate the complexities of the legal system or advocating for policy changes, we are committed to making a positive impact. Join us in our mission to create a more just and equitable society for all.",
    img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWwlMjBhZGl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    created_at: new Date("2024-06-01"),
    updated_at: null,
    author: "Tattu",
    tags: ["legal aid", "empowerment", "marginalized communities"],
  },
  {
    kind: PostKind.BlogPost,
    slug: "women-in-law-breaking-barriers",
    title: "Women in Law",
    excerpt: "Breaking Barriers and Shaping the Future",
    content: "Explore the inspiring stories of women in law who are breaking barriers and shaping the future of the legal profession. From trailblazing pioneers to contemporary leaders, discover how these women are making a significant impact in the legal field. Join us in celebrating their achievements and advocating for gender equality in the legal profession.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ltZW4lMjBpbiUyMGxhd3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    created_at: new Date("2024-05-15"),
    updated_at: null,
    author: "Tattu",
    tags: ["women", "law", "breaking barriers"],
  },
  {
    kind: PostKind.OpinionatedPiece,
    slug: "legal-education-for-all",
    title: "Legal Education for All",
    excerpt:
      "Unlocking Opportunities and Empowering Communities through Legal Education. Our commitment to providing accessible legal education is transforming lives and fostering a more informed society. Join us in our mission to empower individuals with knowledge and create a brighter future for all.",
    content: "At Tattu, we believe that legal education is a powerful tool for empowerment and social change. Our initiatives are focused on making legal education accessible to everyone, regardless of their background or circumstances. Through workshops, online courses, and community outreach programs, we aim to equip individuals with the knowledge and skills they need to navigate the legal system and advocate for their rights. By fostering a more informed society, we are working towards a future where everyone has the opportunity to access justice and create positive change in their communities. Join us in our mission to unlock opportunities and empower communities through legal education.",
    img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGVnYWwlMjBlZHVjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
    created_at: new Date("2026-04-30"),
    updated_at: null,
    author: "Tattu",
    tags: ["legal education", "empowerment", "accessible education"],
  },
];
