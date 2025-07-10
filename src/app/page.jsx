import { getPosts } from "@/lib/api";
import PostItem from "@/components/PostItem/PostItem";
import styles from "@/styles/pages/HomePage.module.css";

export const metadata = {
  title: "Mini Blog |Your daily dose of inspiration",
  description:
    "ЧRead the most interesting articles on Mini Blog. Stories, tips, experiences and inspiration every day.",
  keywords: [
    "blog",
    "articles",
    "inspiration",
    "news",
    "posts",
    "life",
    "trends",
  ],
  openGraph: {
    title: "Mini Blog | Your daily dose of inspiration",
    description:
      "The most interesting stories, thoughts, and discoveries – all in one blog.",
    url: "https://mini-blog-test.vercel.app/",
    siteName: "Mini Blog",
    type: "website",
    images: [
      {
        url: "https://mini-blog-test.vercel.app/preview-home.png",
        width: 1200,
        height: 630,
        alt: "Mini Blog preview",
      },
    ],
  },
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className={`container ${styles.homeContainer}`}>
      <h1>All my blog posts</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
