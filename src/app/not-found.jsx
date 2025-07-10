"use client"

import styles from "@/styles/pages/NotFoundPage.module.css"
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/");
    }, 2500);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className={`container ${styles.notFoundContainer}`}>
      <h2>404 - Page not found</h2>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default NotFound;
