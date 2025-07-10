"use client";

const Error = ({ error }) => {
  return <p>Error loading post: {error.message}</p>;
};

export default Error;
