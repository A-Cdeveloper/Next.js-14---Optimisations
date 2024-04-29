import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export const generateMetadata = async () => {
  const postsNumber = (await getPosts()).length;
  return {
    title: `Browse all ${postsNumber} posts`,
    description: "Browse all ",
  };
};

export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
