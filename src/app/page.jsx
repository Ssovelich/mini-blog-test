import { getPosts } from "@/lib/api";
import PostItem from "@/components/PostItem/PostItem";
import styles from "@/styles/pages/HomePage.module.css";

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