import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";

import getPostMetadata from "@/utils/getPostMetadata";
import PostContent from "@/components/PostContent";
import Sidebar from "@/components/Sidebar";
import getContentsByUserId from "@/actions/getContentsByUserId";

export const revalidate = 60

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

// generateStaticParamsがあるとエラー出るからコメントアウトしてる
export const generateStaticParams = async () => {
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const PostPage = async (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  const userContents = await getContentsByUserId()

  return (
    <div>
      {post.data.subrcrive && (
        <PostContent>
          <div className='lg:flex'>
            <Sidebar contents={userContents} />
            <div className="mx-2">
              <div className="my-12 text-center">
                <h1 className="pt-6 text-2xl text-slate-700 dark:text-slate-300 ">{post.data.title}</h1>
                <p className="text-slate-600 dark:text-slate-400 mt-2">{post.data.date}</p>
              </div>

              <article
                className="mx-auto max-w-4xl prose prose-rose dark:prose-cyan prose-h2:text-indigo-800 prose-h1:text-indigo-950 dark:prose-h2:text-red-400 dark:prose-h3:text-indigo-100 prose-h3:text-indigo-800 prose-p:text-slate-900 dark:prose-p:text-indigo-50 text-slate-900 dark:text-white"
              >
                <Markdown>{post.content}</Markdown>
              </article>
            </div>
          </div>
        </PostContent>

      )}
      {!post.data.subrcrive && (
        <div className='lg:flex'>
          <Sidebar contents={userContents} />
          <div className="mx-2">
            <div className="my-12 text-center">
              <h1 className="pt-6 text-2xl text-slate-700 dark:text-slate-300 ">{post.data.title}</h1>
              <p className="text-slate-600 dark:text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <article
              className="mx-auto max-w-4xl prose prose-rose dark:prose-cyan prose-h1:text-indigo-950 dark:prose-h1:text-sky-500 prose-h2:text-indigo-800 dark:prose-h2:text-sky-300 dark:prose-h3:text-sky-300 prose-h3:text-indigo-800 dark:prose-h4:text-sky-200 prose-h4:text-indigo-800 prose-p:text-slate-900 dark:prose-p:text-indigo-50 dark:prose-strong:font-bold dark:prose-strong:text-orange-300 text-slate-900 dark:text-white"
            >
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostPage;
