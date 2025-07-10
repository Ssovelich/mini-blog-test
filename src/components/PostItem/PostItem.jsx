import Link from 'next/link';
import styles from './PostItem.module.css';

export default function PostItem({ post }) {
  return (
    <li className={styles.postItem}>
      <h3>{post.title}</h3>
      <Link href={`/posts/${post.id}`}>Read more</Link>
    </li>
  );
}
