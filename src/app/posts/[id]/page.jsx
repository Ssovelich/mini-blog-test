import { getPost, getPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import styles from "@/styles/pages/PostPage.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);
  if (!post) notFound();

  return (
    <div className={`container ${styles.postPageContainer}`}>
      <Link className={styles.link} href="/">
        <FaArrowLeft />&nbsp;Go back
      </Link>
      <hr className={styles.divider} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}