import { prisma } from '@/lib/prisma';
import { PostCard, AddPost } from '@/app/components';
async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: false },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Page() {
  const posts = await getPosts();

  console.log(posts);
  return (
    <main className="flex min-h-screen flex-col p-6">
      <h1>main</h1>

      {posts.map((post) => {
        return <PostCard key={post.id} post={post}></PostCard>;
      })}

      <hr />
      <AddPost />
    </main>
  );
}
