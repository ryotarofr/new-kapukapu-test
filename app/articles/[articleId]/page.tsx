import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug'
import remarkSlug from 'remark-slug'
import remarkMath from 'remark-math'
import remarkGFM from 'remark-gfm'

import rehypeLqip from '@/libs/rehype-lqip-plugin'
import rehypeTOC from '@/libs/rehype-toc-plugin'

import {
  buildMetadata,
  getArticleMetadata,
  getArticles,
} from '@/libs/article-path'

// import type { Metadata } from 'types/metadata'

// import { Article, AuthorCardLeft, ConvertKitForm } from '@/components'
// import {  } from '@/components/AuthorCard'
import { compileMDX } from 'next-mdx-remote/rsc'

import { Metadata as NextMetadata } from 'next'

// import metadata from '#/metadata.yaml'

import { lqip } from '@/libs/shrink'
import { join } from 'path'
import { copyFile, mkdir, readdir, readFile } from 'fs/promises'
import { components } from '@/components/MDXWrapper/components'
import Article from '@/components/Article'
import AuthorCardLeft from '@/components/AuthorCardLeft'
import ConvertKitForm from '@/components/ConvertKitForm'
import Sidebar from '@/components/Sidebar'
import getContentsByUserId from '@/actions/getContentsByUserId'
import PostContent from '@/components/PostContent'
import { subscribe } from 'diagnostics_channel'
import GoogleAdsense from '@/components/Adsence'

// const metadata = await buildMetadata()
export const dynamic = 'force-static'

export async function generateMetadata({
  params,
}: {
  params: { articleId: string }
}): Promise<NextMetadata> {
  const articleId = params.articleId
  const metadata = await buildMetadata()
  const articleMetadata = metadata.articles.find(
    (article) => article.articleDir === articleId
  )
  console.log(articleMetadata);

  if (!articleMetadata) throw Error('Article Metadata not found.')

  // const imageUrl = new URL(
  //   '/api/og',
  //   `https://${
  //     process.env.NEXT_PUBLIC_PROD_URL || process.env.NEXT_PUBLIC_VERCEL_URL
  //   }`
  // )
  // imageUrl.searchParams.set('title', articleMetadata.title)
  // imageUrl.searchParams.set('author', articleMetadata.author)
  // imageUrl.searchParams.set('imageUrl', articleMetadata.jumbotron.url)

  // )`https://${

  // }/api/og?title=${encodeURIComponent(
  //   articleMetadata.title
  // )}&author=${encodeURIComponent(
  //   articleMetadata.author
  // )}&imageUrl=${encodeURIComponent(articleMetadata.jumbotron.url)}`

  return {
    title: articleMetadata.title,
    // subscrive: articleMetadata.subscrive,
    description: articleMetadata.blurb,
    twitter: {
      card: 'summary_large_image',
      title: `${articleMetadata.title} | kapucode`,
      creator: '@kochie',
      creatorId: '90334112',
      description: articleMetadata.blurb,
    },
    keywords: [...articleMetadata.tags, ...articleMetadata.keywords],
    alternates: {
      canonical: `/articles/${articleMetadata.articleDir}`,
    },
    openGraph: {
      url: `/articles/${articleMetadata.articleDir}`,
      title: `${articleMetadata.title} | kapucode`,
      description: articleMetadata.blurb,
      type: 'article',
      publishedTime: articleMetadata.publishedDate,
      modifiedTime: articleMetadata?.editedDate || '',
      tags: [...articleMetadata.tags, ...articleMetadata.keywords],
      authors: [`/authors/${articleMetadata.author}`],
      // images: [
      //   {
      //     url: imageUrl,
      //     alt: articleMetadata.jumbotron.alt,
      //   },
      // ],
      siteName: 'kapucode',
    },
  }
}


const ArticlePage = async ({ params }: { params: { articleId: string } }) => {
  const articleId = params.articleId
  const articleMetadata = await getArticleMetadata(articleId)

  const files = await readdir(`articles/${articleMetadata.articleDir}`)
  await mkdir(`public/images/articles/${articleMetadata.articleDir}`, {
    recursive: true,
  })
  for (const file of files) {
    if (
      file.endsWith('.png') ||
      file.endsWith('.jpg') ||
      file.endsWith('.jpeg') ||
      file.endsWith('.gif') ||
      file.endsWith('.svg')
    ) {
      await copyFile(
        `articles/${articleMetadata.articleDir}/${file}`,
        `public/images/articles/${articleMetadata.articleDir}/${file}`
      )
    }
  }

  const metadata = await buildMetadata()
  // console.log(metadata)
  let author = metadata.authors?.[articleMetadata.author] || ''
  const lqipString = await lqip(
    join(process.env.PWD || '', '/public/images/authors', author.avatar.src)
  )
  author = { ...author, avatar: { src: author.avatar.src, lqip: lqipString } }

  const { content } = await compileMDX({
    source: await readFile(articleMetadata.path),
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        remarkPlugins: [remarkMath, remarkSlug, remarkGFM],
        rehypePlugins: [
          rehypeTOC,
          rehypeKatex,
          rehypeLqip(articleMetadata.articleDir),
          rehypeSlug,
        ],
      },
    },
    components,
  })

  // const imageUrl = new URL(
  //   `https://${
  //     process.env.NEXT_PUBLIC_PROD_URL || process.env.NEXT_PUBLIC_VERCEL_URL
  //   }/api/og`
  // )

  // imageUrl.searchParams.set(
  //   'author',
  //   encodeURIComponent(articleMetadata.author)
  // )
  // imageUrl.searchParams.set(
  //   'imageUrl',
  //   encodeURIComponent(articleMetadata.jumbotron.url)
  // )
  // imageUrl.searchParams.set('title', encodeURIComponent(articleMetadata.title))

  const userContents = await getContentsByUserId()


  return (
    <>
      {articleMetadata.subscrive && (
        <PostContent>
          <div className='lg:flex'>
            <div className=''>
              <Sidebar contents={userContents} />

            </div>
            <Article article={articleMetadata} author={author}>
              {content}
            </Article>
            <div>
              {process.env.NODE_ENV !== 'development' && (
                <GoogleAdsense
                  client="ca-pub-5112185578414045" //
                  slot="XXXXXXXXXX"
                  style={{ display: 'block' }}
                />
              )}
            </div>
          </div>
          {/* <AuthorCardLeft author={author} /> */}
          {/* <ConvertKitForm formId="4897384" /> */}
        </PostContent>
      )}
      {!articleMetadata.subscrive && (
        <>
          <div className='lg:flex'>
            <div className=''>
              <Sidebar contents={userContents} />
            </div>
            <Article article={articleMetadata} author={author}>
              {content}
            </Article>
          </div>
          {/* <AuthorCardLeft author={author} /> */}
          {/* <ConvertKitForm formId="4897384" /> */}
        </>
      )}
    </>
  )
}

export default ArticlePage

export const generateStaticParams = async () => {
  const articles = await getArticles()
  return articles.map((article) => ({
    articleId: article,
  }))
}
