export default async function PostPage() {
  return (
    <article className="container relative max-w-3xl py-6 lg:py-10">
      <a
        href="/blog"
        className="absolute left-[-200px] top-14 hidden xl:inline-flex"
      >
        <svg className="mr-2 h-4 w-4"></svg>
        See all posts
      </a>
      <div>
        <time className="block text-sm text-muted-foreground">
          Published on April 23, 2024
        </time>
        <h1 className="mt-2 inline-block font-heading text-4xl leading-tight lg:text-5xl"></h1>
        <div className="mt-4 flex space-x-4">
          <a
            href="https://twitter.com/<!-- author twitter handle -->"
            className="flex items-center space-x-2 text-sm"
          >
            <img
              src="<!-- author avatar -->"
              alt="<!-- author title -->"
              width="42"
              height="42"
              className="rounded-full bg-white"
            />
            <div className="flex-1 text-left leading-tight">
              <p className="font-medium"></p>
              <p className="text-[12px] text-muted-foreground">@mikejames</p>
            </div>
          </a>
        </div>
      </div>
      <img
        src="<!-- post image URL -->"
        alt="<!-- post title -->"
        width="720"
        height="405"
        className="my-8 rounded-md border bg-muted transition-colors"
      />
      <div></div>
      <hr className="mt-12" />
      <div className="flex justify-center py-6 lg:py-10">
        <a href="/blog" className="inline-flex">
          <svg className="mr-2 h-4 w-4"></svg>
          See all posts
        </a>
      </div>
    </article>
  );
}
