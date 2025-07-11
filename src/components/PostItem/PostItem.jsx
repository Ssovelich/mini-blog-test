import Link from 'next/link';
import styles from '@/styles/components/PostItem.module.css';
import { TiArrowForward } from "react-icons/ti";

const PostItem = ({ post, dictionary, locale }) => {
  return (
    <li className={styles.postItem}>
      <h3>{post.title}</h3>
      <Link className={styles.link} href={`/${locale}/posts/${post.id}`}>{dictionary.read_more}&nbsp;<TiArrowForward /></Link>
    </li>
  );
}

export default PostItem