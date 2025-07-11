import { getPost, getPosts } from "@/lib/api";
import { notFound } from "next/navigation";
import styles from "@/styles/pages/PostPage.module.css";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import { getDictionary } from "@/lib/i18n";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ id: post.id.toString() }));
}

export default async function PostPage({ params }) {
  const { id, locale } = params;
  const dictionary = await getDictionary(locale);

  let post;

  try {
    post = await getPost(id);
  } catch (err) {
    throw new Error("Failed to retrieve data from API");
  }

  if (!post) {
    notFound();
  }

  return (
    <div className={`container ${styles.postPageContainer}`}>
      <Link className={styles.link} href={`/${locale}/`}>
        <FaArrowLeft />
        &nbsp;{dictionary.go_back}
      </Link>
      <hr className={styles.divider} />
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
