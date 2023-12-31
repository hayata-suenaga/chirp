import { UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";

import { api } from "~/utils/api";

export default function Home() {
  const { data: posts } = api.posts.getAll.useQuery();
  const user = useUser();

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-screen flex-col items-center">
        <div className="p-4">
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="w-full max-w-2xl">
          {posts?.map((post) => (
            <div key={post.id} className="rounded-2xl bg-neutral-100 p-4">
              {post.content}
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
