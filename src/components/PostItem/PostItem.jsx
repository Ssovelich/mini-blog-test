import Link from 'next/link';
import styles from '@/styles/components/PostItem.module.css';
import { TiArrowForward } from "react-icons/ti";

export default function PostItem({ post }) {
  return (
    <li className={styles.postItem}>
      <h3>{post.title}</h3>
      <Link className={styles.link} href={`/posts/${post.id}`}>Read more&nbsp;<TiArrowForward /></Link>
    </li>
  );
}
