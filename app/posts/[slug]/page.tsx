import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import PostContent from "../components/PostContent";
import getPostMetadata from "@/utils/getPostMetadata";

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

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);

  return (
    <div>
      {post.data.subrcrive && (
        <PostContent>
          <div>
            <div className="my-12 text-center">
              <h1 className="text-2xl dark:text-slate-600 ">{post.data.title}</h1>
              <p className="dark:text-slate-400 mt-2">{post.data.date}</p>
            </div>

            <article
              className="mx-auto max-w-4xl prose prose-cyan prose-h2:text-indigo-100 prose-h3:text-indigo-100 prose-p:text-indigo-50 text-white"
            >
              <Markdown>{post.content}</Markdown>
            </article>
          </div>
        </PostContent>

      )}
      {!post.data.subrcrive && (
        <div>
          <div className="my-12 text-center">
            <h1 className="text-2xl text-slate-700 dark:text-slate-300 ">{post.data.title}</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">{post.data.date}</p>
          </div>

          <article
            className="mx-auto max-w-4xl prose prose-rose dark:prose-cyan prose-h2:text-indigo-800 prose-h1:text-indigo-950 dark:prose-h2:text-indigo-100 dark:prose-h3:text-indigo-100 prose-h3:text-indigo-800 prose-p:text-slate-900 dark:prose-p:text-indigo-50 text-slate-900 dark:text-white"
          >
            <Markdown>{post.content}</Markdown>
          </article>
        </div>
      )}
    </div>
  );
};

export default PostPage;
