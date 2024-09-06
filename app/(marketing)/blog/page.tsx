import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blog'
};

export default async function BlogPage() {
  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4 text-center">
          <h1 className="inline-block text-gray-900 text-3xl font-semibold tracking-tight lg:text-4xl">
            Blog
          </h1>
          <p className="text-lg text-gray-600">
            A blog built using Contentlayer. Posts are written in MDX.
          </p>
        </div>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 mt-14">
        <article className="group relative flex flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Title"
            width={804}
            height={452}
            className="rounded-md border bg-muted transition-colors"
          />

          <h2 className="text-2xl font-extrabold text-gray-900">Nature: 101</h2>
          <p className="text-gray-600">Post description goes here.</p>
          <p className="text-sm text-gray-600">April 6, 2023</p>
          <a href="post-slug" className="absolute inset-0">
            <span className="sr-only">View Article</span>
          </a>
        </article>
        <article className="group relative flex flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Title"
            width={804}
            height={452}
            className="rounded-md border bg-muted transition-colors"
          />

          <h2 className="text-2xl font-extrabold text-gray-900">Nature: 101</h2>
          <p className="text-gray-600">Post description goes here.</p>
          <p className="text-sm text-gray-600">April 6, 2023</p>
          <a href="post-slug" className="absolute inset-0">
            <span className="sr-only">View Article</span>
          </a>
        </article>
        <article className="group relative flex flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Title"
            width={804}
            height={452}
            className="rounded-md border bg-muted transition-colors"
          />

          <h2 className="text-2xl font-extrabold text-gray-900">Nature: 101</h2>
          <p className="text-gray-600">Post description goes here.</p>
          <p className="text-sm text-gray-600">April 6, 2023</p>
          <a href="post-slug" className="absolute inset-0">
            <span className="sr-only">View Article</span>
          </a>
        </article>
        <article className="group relative flex flex-col space-y-2">
          <Image
            src="https://images.unsplash.com/photo-1471879832106-c7ab9e0cee23?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Post Title"
            width={804}
            height={452}
            className="rounded-md border bg-muted transition-colors"
          />

          <h2 className="text-2xl font-extrabold text-gray-900">Nature: 101</h2>
          <p className="text-gray-600">Post description goes here.</p>
          <p className="text-sm text-gray-600">April 6, 2023</p>
          <a href="post-slug" className="absolute inset-0">
            <span className="sr-only">View Article</span>
          </a>
        </article>
      </div>
    </div>
  );
}
