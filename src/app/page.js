import { getPosts } from '@/lib/api';
import PostItem from '@/components/PostItem/PostItem';
import styles from '@/styles/pages/HomePage.module.css';

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      <h1>All Posts</h1>
      <ul className={styles.postList}>
        {posts.map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}
