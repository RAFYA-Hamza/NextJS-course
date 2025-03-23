import { getSortedPostsData } from "@/lib/posts";
import { notFound } from "next/navigation";

type Params = {
  params: {
    postId: string;
  };
};

export default async function page({ params: { postId } }: Params) {
  const posts = getSortedPostsData();

  if (!posts.find((post) => post.id === postId)) {
    notFound();
  }

  return <div>page</div>;
}
