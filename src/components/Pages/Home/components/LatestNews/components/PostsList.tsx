import PostCard from "./PostCard";

const PostsList = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  );
};

export default PostsList;
